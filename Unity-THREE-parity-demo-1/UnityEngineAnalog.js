/* Usage:
<script src="UnityEngineAnalog.js"></script>
<script>!function () {
const { GameObject, Vector3, PrimitiveType } = window.UnityEngineAnalog
new GameObject({ wrap: document.getElementById('demo') })
const el = GameObject.CreatePrimitive(PrimitiveType.Cube)
el.transform.position = new Vector3(1, 2, 3)
}()</script>
*/

window.UnityEngineAnalog = {

    GameObject: class GameObject {

        constructor (config={}) {

            if (window.gameObjectSingleton) throw Error('There can be only one!')
            window.gameObjectSingleton = this

            this.components = []

            this.deltaTime    = 0
            this.time = 0

            this.width  = window.innerWidth
            this.height = window.innerHeight


            //// CAMERA, SCENE, RENDERER, AMBIENT LIGHT

            //// Create the camera.
            this.camera = new THREE.PerspectiveCamera(
                25
              , this.width / this.height
              , 1
              , 1000
            );
            this.camera.position.set( 0, 1, 20 )

            //// Create the scene and the renderer.
            this.scene = new THREE.Scene()
            this.renderer = new THREE.WebGLRenderer({ antialias: true })
            this.renderer.setSize(this.width, this.height)
            this.renderer.shadowMap.enabled = true
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
            config.wrap.appendChild(this.renderer.domElement)

            //// Add lights.
            this.ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5)
            this.scene.add(this.ambientLight)
            this.directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5)
            this.scene.add(this.directionalLight)



            //// Begin animation.
            this.animate( window.performance.now()/1000 )

        }//constructor


        animate (time) { // in seconds

            //// You should use `Time.deltaTime` in your `Update()` methods.
            this.deltaTime = time - this.time
            this.time = time

            //// Run each Component’s `Update()` method.
            this.components.forEach( component => component.Update() )

            //// Render the scene (note that we suppress console warnings).
            const warn = console.warn
            console.warn = () => {}
            this.renderer.render(this.scene, this.camera)
            console.warn = warn

            requestAnimationFrame( time => this.animate(time/1000) )
        }


        AddComponent (Component) {
            const component = new Component()
            this.components.push(component)
            component.Start()
        }


        static CreatePrimitive (Type) {
            if (! window.gameObjectSingleton) throw Error('There must be one!')
            const primitive = new Type()
            window.gameObjectSingleton.scene.add(primitive.mesh)
            return primitive
        }



    }

  , Time: {
        get deltaTime () {
            if (! window.gameObjectSingleton) return 0 //@TODO throw an error?
            return window.gameObjectSingleton.deltaTime
        }
      , get time () {
            if (! window.gameObjectSingleton) return 0 //@TODO throw an error?
            return window.gameObjectSingleton.time
        }
    }

  , Vector3: class Vector3 {
        constructor (x, y, z) {
            this.x = x
            this.y = y
            this.z = z
        }
    }

  , PrimitiveType: {

        Cube: class Cube {
            constructor (config={}) {
            	const mesh = this.mesh = new THREE.Mesh(
                    new THREE.CubeGeometry(1, 1, 1)
                  , new THREE.MeshLambertMaterial({ color: 0x808080 })
                )
                this.transform = {
                    set position (v3) {
                        mesh.position.set(v3.x, v3.y, v3.z)
                    }
                  , get position () {
                        return new window.UnityEngineAnalog.Vector3(
                            mesh.position.x
                          , mesh.position.y
                          , mesh.position.z
                        )
                    }
                }
            }
        }

    } // end PrimitiveType

}

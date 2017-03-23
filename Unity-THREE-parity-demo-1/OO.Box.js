!function () { "use strict"

const { GameObject, Vector3, PrimitiveType } = window.UnityEngineAnalog

window.OO = window.OO || {} // the Oopish namespace
window.OO.Box = class {
    constructor (absX, absY, absZ) {
        this.el = null;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = absX;
        this.y = absY;
        this.z = absZ;
        this.el = GameObject.CreatePrimitive(PrimitiveType.Cube);
        this.el.transform.position = new Vector3(this.x, this.y, this.z);
    }
    MoveAbsX (absX) {
        this.x = absX;
        this.el.transform.position = new Vector3(this.x, this.y, this.z);
    }
}

}()

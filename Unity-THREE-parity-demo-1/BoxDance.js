!function () { "use strict"

const { Time } = window.UnityEngineAnalog
const { Box } = window.OO

window.OO = window.OO || {} // the Oopish namespace
window.OO.BoxDance = class {
    constructor () {
        this.box0 = null;
        this.box1 = null;
        this.box2 = null;
    }
    Start () {
        this.box0 = new Box(1, 4, 3);
        this.box1 = new Box(3, 2, 1);
        this.box2 = new Box(0, 0, 0);
    }
    Update () {
        const
            t = Time.time // `Time.deltaTime` is also available
          , T1 = ~~t
          , T2 = ~~(T1/2)
          , T4 = ~~(T2/2)
        this.box0.MoveAbsX(  T1%2 ? 1-t%1 : t%1 );
        this.box1.MoveAbsX( (T2%2 ? 2-t%2 : t%2) / 2 );
        this.box2.MoveAbsX( (T4%2 ? 4-t%4 : t%4) / 4 );
    }
}

}()

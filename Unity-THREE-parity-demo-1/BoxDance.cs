using System.Collections;
using UnityEngine;
using OO;
public class BoxDance : MonoBehaviour {
    public Box box0;
    public Box box1;
    public Box box2;
    public BoxDance () {
    }
    void Start () {
        box0 = new Box(1, 2, 3);
        box1 = new Box(3, 2, 1);
        box2 = new Box(0, 0, 0);
    }
    void Update () {
        float t = Time.time; // `Time.deltaTime` is also available
        int T1 = (int) t;
        int T2 = T1/2;
        int T4 = T2/2;
        box0.MoveAbsX(  1 == T1%2 ? 1-t%1 : t%1      );
        box1.MoveAbsX( (1 == T2%2 ? 2-t%2 : t%2) / 2 );
        box2.MoveAbsX( (1 == T4%2 ? 4-t%4 : t%4) / 4 );
    }
}

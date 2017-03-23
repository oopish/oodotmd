//// Install Mono (mono-project.com), and then compile:
/*
mcs \
-r:/Applications/Unity/Unity.app/Contents/Managed/UnityEngine.dll \
-r:/Applications/Unity/Unity.app/Contents/Managed/UnityEditor.dll \
-sdk:2 `# Unity needs 3.5 or less (mcs only accepts 2 or 4)`\
-target:library \
OO.Box.cs
*/

//// Then make a soft-link to the DLL:
/*
cd /path/to/your/Unity/project/Assets
ln -s /path/to/your/oodotmd/Unity-THREE-parity-demo-1/OO.Box.dll
*/

//// ...now every time the DLL is recompiled, Unity will refresh itself.

using System.Collections;
using UnityEngine;
namespace OO {
    public class Box {
        public GameObject el;
        public float x = 0;
        public float y = 0;
        public float z = 0;
        public Box (float absX, float absY, float absZ) {
            x = absX;
            y = absY;
            z = absZ;
            el = GameObject.CreatePrimitive(PrimitiveType.Cube);
            el.transform.position = new Vector3(x, y, z);
        }
        public void MoveAbsX (float absX) {
            x = absX;
            el.transform.position = new Vector3(x, y, z);
        }
    }
}

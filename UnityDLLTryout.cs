//// Install Mono (mono-project.com), and then compile:
/*
mcs \
-r:/Applications/Unity/Unity.app/Contents/Managed/UnityEngine.dll \
-r:/Applications/Unity/Unity.app/Contents/Managed/UnityEditor.dll \
-sdk:2 `# Unity needs 3.5 or less (mcs only accepts 2 or 4)`\
-target:library \
UnityDLLTryout.cs
*/

//// from https://docs.unity3d.com/Manual/UsingDLL.html
using System;
using UnityEngine;
namespace DLLTest {

    public class MyUtilities {

        public int c;

        public void AddValues(int a, int b) {
            c = a + b;
        }

        public static int GenerateRandom(int min, int max) {
            System.Random rand = new System.Random();
            return rand.Next(min, max);
        }
    }

}

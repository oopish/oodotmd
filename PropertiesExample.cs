//// Install Mono (mono-project.com), and then compile and run:
//// $ mcs -out:PropertiesExample.exe PropertiesExample.cs
//// $ mono PropertiesExample.exe
//// $ echo $?
//// > Jo Doe is 33
//// > 0

using System;
namespace OONS {
    class PropertiesExample {
        public string FullName = "Jo Doe";
        private bool _IsHappy = true;
        public readonly string EYES = "hazel";
        private readonly int _AGE = 33;
        static public string City = "Paris";
        static public readonly float RATE = 12;
        public PropertiesExample (object config) {
            Console.WriteLine(FullName + " is " + _AGE);
        }
        static int Main (string[] args) {
            var propsExample = new OONS.PropertiesExample(args);
            return 0;
        }
    }
}

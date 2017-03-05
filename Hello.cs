//// Install Mono (mono-project.com), and then compile and run:
//// $ mcs -out:Hello.exe Hello.cs; mono Hello.exe 'OoDotMd!'; echo $?
//// > Hello OoDotMd!
//// > 14

using System;
namespace OONS {                             // use the global Oopish namespace
    class Hello {
        public string Greeting;
        public Hello (string name) {
            Greeting = "Hello " + name;
            Console.WriteLine(Greeting);
        }
        static int Main(string[] args) {
            var hello = new OONS.Hello(args[0]);
            return hello.Greeting.Length;
        }
    }
}

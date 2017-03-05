Hello OoDotMd
=============

This is the _world’s first_ .oo.md file!

```js
this.OONS = this.OONS || {}                  // use the global Oopish namespace
OONS.Hello = class {                         // classes are always 'strict mode'
    constructor (name) {
        this.Greeting = 'Hello ' + name
        console.log(this.Greeting)
    }
    static Main (args) {                     // `Main()` is a convention from c#
        var hello = new OONS.Hello(args[0])
        return hello.Greeting.length         // in c# `Main()` can return an int
    }
}
```

```cs
using System;
namespace OONS {                             // use the Oopish namespace
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
```

Hello OoDotMd
=============

Here, we demonstrate _iterative nesting._ Oopish will construct valid source
code from the pieces defined below.


First, declare `OONS` (the Oopish namespace) and the `Hello` class.

```js
this.OONS = this.OONS || {}
OONS.Hello = class { // ES6 classes are always in 'strict mode'
}
```

```cs
using System;
namespace OONS {
    class Hello {
    }
}
```


Next, define the constructor.

```js
constructor (name) {
    this.Greeting = 'Hello ' + name
    console.log(this.Greeting)
}
```

```cs
public string Greeting;
public Hello (string name) {
    Greeting = "Hello " + name;
    Console.WriteLine(Greeting);
}
```


Finally, define the `Main()` method. This is a convention from C# which we carry
over into JavaScript. `Main()` can return a ‘status’ integer.

```js
static Main (args) {
    var hello = new OONS.Hello(args[0])
    return hello.Greeting.length
}
```

```cs
static int Main(string[] args) {
    var hello = new OONS.Hello(args[0]);
    return hello.Greeting.Length;
}
```

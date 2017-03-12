Defining Properties in OoDotMd
==============================

In this demonstration, properties are defined in three ways:
- __Oopish:__ which will be converted and output to the .js _and_ .cs files
- __For JavaScript only:__ which will only be output to the .js file
- __For C# only:__ which will only be output to the .cs file


As with all oo.md files, we must first declare `OONS` (the Oopish namespace) and
this file’s class.

```js
this.OONS = this.OONS || {} // the Oopish namespace
this.OONS.PropertiesExample = class {
}
```

```cs
using System;
namespace OONS {
    class PropertiesExample {
    }
}
```


Naming conventions are taken seriously in OoDotMd! They differ slightly from
[C# coding practice](http://www.dofactory.com/reference/csharp-coding-standards)


```yaml

fullName: 'Jo Doe' # camel-case, lowercase-first (becomes `FullName` in C#)
_isHappy: true     # underscore, so this is private (stays `_isHappy` in C#)

EYES:     'hazel'  # all uppercase, so this is a constant
_AGE:     33       # underscore, a private constant

::city:   'Paris'  # double-colon for a static property
::RATE:   12.0     # a static constant

```



JavaScript properties don’t need to be defined in the same block as the
`constructor()` method.

```js
constructor (config) {
    console.log(this.fullName + ' is ' + this._AGE)
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
    var propsExample = new OONS.PropertiesExample(args[0])
    return 0
}
```

```cs
static int Main (string[] args) {
    var hello = new OONS.Hello(args[0]);
    return hello.Greeting.Length;
}
```

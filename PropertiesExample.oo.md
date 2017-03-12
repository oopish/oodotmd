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
[C# coding style](http://www.dofactory.com/reference/csharp-coding-standards).


```yaml

fullName: !!str   "Jo Doe" # camel-case (becomes `FullName` in C#)
_isHappy: !!bool  true     # underscore means private (stays `_isHappy` in C#)

EYES:     !!str   "hazel"  # all uppercase, so this is a constant
_AGE:     !!int   33       # underscore, a private constant

::city:   !!str   "Paris"  # double-colon for a static property
::RATE:   !!float 12       # a static constant

defeatYamlHighlighterBugInAtom: 1
```



JavaScript properties don’t need to be defined in the same block as the
`constructor()` method.

```js
constructor (config) {
    console.log(this.fullName + ' is ' + this._AGE)
}
```

```cs
public PropertiesExample (object config) {
    Console.WriteLine(FullName + " is " + _AGE);
}
```


Finally, define the `Main()` method. This is a convention from C# which we carry
over into JavaScript. `Main()` can return a ‘status’ integer.

```js
static main (args) {
    var propsExample = new OONS.PropertiesExample(args[0])
    return 0
}
```

```cs
static int Main (string[] args) {
    var propsExample = new OONS.PropertiesExample(args);
    return 0;
}
```

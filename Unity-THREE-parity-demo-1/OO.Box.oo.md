A Simple Box Example
====================

__This is an example of ‘middleware’, sitting between the underlying 3D library
(Unity or THREE.js) and the application code (‘BoxDance’, in this case).__


The first code-blocks do three things:

1. Import dependencies
2. Declare `OO` (the Oopish namespace)
3. Begin this file’s class (every `oo.md` file defines one class)

```js
const { GameObject, Vector3, PrimitiveType } = window.UnityEngineAnalog

window.OO = window.OO || {} // the Oopish namespace
window.OO.Box = class Box {
}
```

```cs
using System.Collections;
using UnityEngine;
namespace OO {
    public class Box {
    }
}
```


The second code blocks define the class-constructor.

```js
constructor (absX, absY, absZ) {
    this.x = absX;
    this.y = absY;
    this.z = absZ;
    this.el = GameObject.CreatePrimitive(PrimitiveType.Cube);
    this.el.transform.position = new Vector3(this.x, this.y, this.z);
}
```

```cs
public Box (float absX, float absY, float absZ) {
    x = absX;
    y = absY;
    z = absZ;
    el = GameObject.CreatePrimitive(PrimitiveType.Cube);
    el.transform.position = new Vector3(x, y, z);
}
```


The `MoveAbsX()` method lets you change the Box’s absolute x-position.

```js
MoveAbsX (absX) {
    this.x = absX;
    this.el.transform.position = new Vector3(this.x, this.y, this.z);
}
```

```cs
public void MoveAbsX (float absX) {
    x = absX;
    el.transform.position = new Vector3(x, y, z);
}
```


The final code-block defines the class’s public and private properties. Naming
conventions are taken seriously in `oo.md` files! They differ slightly from
[C# coding style](http://www.dofactory.com/reference/csharp-coding-standards).
Note that properties are always inserted at the start of the compiled classes.

```yaml

el: !!GameObject     # reference to the Primitive (unity) or mesh (THREE)
x:  !!float       0  # the Box’s x-position
y:  !!float       0  # the Box’s y-position
z:  !!float       0  # the Box’s z-position

```

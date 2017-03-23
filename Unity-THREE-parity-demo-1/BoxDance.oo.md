Example Usage of OO.Box
=======================

__This is an example of application code, which uses our ‘middleware’ (‘OO.Box’,
in this case) to create and animate three boxes.__


The first code-blocks do three things:

1. Import dependencies
2. Declare `OO` (the Oopish namespace)
3. Begin this file’s class (every `oo.md` file defines one class)

```js
const { Time } = window.UnityEngineAnalog
const { Box } = window.OO

window.OO = window.OO || {} // the Oopish namespace
window.OO.BoxDance = class BoxDance {
}
```

```cs
using System.Collections;
using UnityEngine;
using OO;
public class BoxDance : MonoBehaviour {
}
```


The second code blocks define the class-constructor.

```js
constructor () {
}
```

```cs
public BoxDance () {
}
```


`Start()` is a standard Unity method, called once when the behaviour begins.

```js
Start () {
    this.box0 = new Box(1, 2, 3);
    this.box1 = new Box(3, 2, 1);
    this.box2 = new Box(0, 0, 0);
}
```

```cs
void Start () {
    box0 = new Box(1, 2, 3);
    box1 = new Box(3, 2, 1);
    box2 = new Box(0, 0, 0);
}
```


`Update()` is a standard Unity method, called once every frame.

```js
Update () {
    const
        t = Time.time // `Time.deltaTime` is also available
      , T1 = ~~t
      , T2 = ~~(T1/2)
      , T4 = ~~(T2/2)
    this.box0.MoveAbsX(  T1%2 ? 1-t%1 : t%1 );
    this.box1.MoveAbsX( (T2%2 ? 2-t%2 : t%2) / 2 );
    this.box2.MoveAbsX( (T4%2 ? 4-t%4 : t%4) / 4 );
}
```

```cs
void Update () {
    float t = Time.time; // `Time.deltaTime` is also available
    int T1 = (int) t;
    int T2 = T1/2;
    int T4 = T2/2;
    box0.MoveAbsX(  1 == T1%2 ? 1-t%1 : t%1      );
    box1.MoveAbsX( (1 == T2%2 ? 2-t%2 : t%2) / 2 );
    box2.MoveAbsX( (1 == T4%2 ? 4-t%4 : t%4) / 4 );
}
```


The final code-block defines the class’s public and private properties. Naming
conventions are taken seriously in `oo.md` files! They differ slightly from
[C# coding style](http://www.dofactory.com/reference/csharp-coding-standards).
Note that properties are always inserted at the start of the compiled classes.

```yaml

box0: !!Box  # first of the three OO.Box instances
box1: !!Box  # second of the three OO.Box instances
box2: !!Box  # third of the three OO.Box instances

```

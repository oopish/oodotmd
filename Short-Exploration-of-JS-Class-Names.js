//// A Short Exploration of JavaScript Class Names
//// =============================================


//// A JavaScript class has a static read-only `name` property. Any instance of
//// that class can use the name as an identifier to reference the class which
//// instantiated it.

const Foo = class HidName {
    sayMyName () {
        return this.name + ' ' + HidName.name
    }
    changeMyName1 () {
        HidName.name = 'ChangedName'
    }
    changeMyName2 () {
        Foo.name = 'ChangedName'
    }
}
const instOk = new Foo()
// const instNope = new HidName() // ReferenceError: HidName is not defined
console.log( instOk.sayMyName() ) // undefined HidName
console.log(Foo.name)             // HidName
// instOk.changeMyName_1() // TypeError: Cannot assign to read only property ...
// instOk.changeMyName_2() // TypeError: Cannot assign to read only property ...




//// In the next example you might expect the `name` property to be 'undefined'.
//// But in fact JavaScript helpfully (?) names it 'Bar'.

const Bar = class {
    sayMyName () {
        return this.name + ' ' + Bar.name
    }
    changeMyName () {
        Bar.name = 'ChangedName'
    }
}
const bar = new Bar()
console.log( bar.sayMyName() ) // undefined Bar
console.log(Bar.name)          // Bar
// bar.changeMyName()      // TypeError: Cannot assign to read only property ...




//// The next example has exactly the same results.

class Baz {
    sayMyName () {
        return this.name + ' ' + Baz.name
    }
    changeMyName () {
        Baz.name = 'ChangedName'
    }
}
const baz = new Baz()
console.log( baz.sayMyName() ) // undefined Baz
console.log(Baz.name)          // Baz
// baz.changeMyName()      // TypeError: Cannot assign to read only property ...




//// Nonexistant static properties on a class stringify to 'undefined'. So we
//// can see in the next example that an anonymous class’s `name` property is
//// actually an empty string.

console.log( '>' + (class {}).name + '<' );




//// But when we instantiate an anonymous class, we have no way of referencing
//// the class definition, so that empty `name` string is inaccessible.

const anon = new class {
    sayMyName () {
        return this.name + ' ...no way of referencing the class!'
    }
}()
console.log( anon.sayMyName() ) // undefined ...no way of referencing the class!




//// In Conclusion
//// -------------

//// For parity between JS and C#, OoDotMd adds a `name` property to C# classes.
//// @TODO add a `name` property to C# classes
//// @TODO look at other JS standard members to carry over to C#
//// @TODO look at C# members properties to carry over to JS

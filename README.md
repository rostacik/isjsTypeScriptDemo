# is.js TypeScript Demo #

Small demo how to require is.js module under NodeJS in TypeScript to have IntelliSense (project with files for Visual Studio Code).

**The problem :**

While using is.js library in a Visual Studio Code in a NodeJS & TypeScript project I ran into small issue with different folder name of is.js npm package and is object as such.

The problem occures when you will "require" npm is.js package.

Obviously everyone will be using
```javascript
import is = require("is");
``` 
which will compile and TypeScript IntelliSense will be happy because in \typings\is_js\is_js.d.ts TypeScript sees this :
```javascript
declare module 'is' {
    export = is;
}
``` 
but NodeJS will not be that happy, since it will try to search for node package "is" in folder "is". That is not there.

**The solution :**
Partial solution to this would be :
```javascript
import is = require("is_js");
```
that would work, but we can do better, since this will run at runtime, but the is object will be of type any so we don't get any IntelliSense in out editor.

So the best solution I currently see is : 

```javascript
var is: Is = require("is_js");
```

use require to load node module from is_js subfolder but cast it to type Is which will give you IntelliSense and you are good to go :)

Enjoy,
Dusan 
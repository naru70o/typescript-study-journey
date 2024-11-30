var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var course = "typescript";
courseName(course);
function courseName(name) {
    console.log("course name is: " + name);
}
//// decorator
// Enable experimental decorators in tsconfig.json
// { "compilerOptions": { "experimentalDecorators": true } }
function Logger(target) {
    console.log("Class ".concat(target.name, " was defined."));
}
// Apply the @Logger decorator to a class
var Person = function () {
    var _classDecorators = [Logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Person = _classThis = /** @class */ (function () {
        function Person_1(name, age) {
            this.name = name;
            this.age = age;
            console.log("this is ".concat(name, ", ").concat(age, " from somaliland"));
        }
        return Person_1;
    }());
    __setFunctionName(_classThis, "Person");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
}();
var Person2 = function () {
    var _classDecorators = [Logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Person2 = _classThis = /** @class */ (function () {
        function Person2_1(name, age) {
            this.name = name;
            this.age = age;
            console.log("this is ".concat(name, ", ").concat(age, " from somaliland"));
        }
        return Person2_1;
    }());
    __setFunctionName(_classThis, "Person2");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person2 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person2 = _classThis;
}();
var person = new Person("Naruto", 20);
/////// class decorator
function Sealer(target) {
    Object.seal(target); // Seal the constructor itself
    Object.seal(target.prototype); // Seal the prototype to prevent adding/removing methods
    console.log("Class ".concat(target.name, " has been sealed."));
}
// Apply the @Sealer decorator to a class
var User = function () {
    var _classDecorators = [Sealer];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var User = _classThis = /** @class */ (function () {
        function User_1(name, age) {
            this.name = name;
            this.age = age;
        }
        User_1.prototype.greet = function () {
            console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
        };
        User_1.prototype.newMethod = function () {
            console.log("This won't work because the class is sealed.");
        };
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
var user = new User("Naruto", 20);
user.greet();
// Attempt to modify the class (will fail silently or throw an error in strict mode)
User.prototype.newMethod = function () {
    console.log("This won't work because the class is sealed.");
};
user["newProperty"] = "Test"; // Also won't work
console.log(user);

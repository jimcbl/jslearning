var sym = Symbol("some optional description");

typeof sym; // "symbol"

Symbol("foo") === Symbol("foo"); // false

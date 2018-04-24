// what is logged out to the console when this code is run?

var myCar = {
    color: "Blue",
    logColor: function() {
        // note this self trick is common practice in js
        var self = this;
        // referencing the myCar object so myCar.color
        console.log("In logColor - this.color: " + this.color);
        // referencing self, which references myCar object
        console.log("In logColor - self.color: " + self.color);
        (function() {
            // inside of the iife function, 'this' loses reference to the
            // myCar object because it is inside the function scope and we didn't
            // this.function (so 'this' references the global object)
            console.log("In IIFE - this.color: " + this.color);
            // again, simply referencing the variable self which references the object
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};

myCar.logColor();

// my attempt:
// line 7 runs first, "In logColor = this.color: blue";
// line 8 runs second, error: self.color is not defined;
// line 10 runs third, "In IIFE = this.color: blue";
// line 11 runs fourth, error: self.color is not defined;

// actual:
// In logColor - this.color: Blue
// In logColor - self.color: Blue
// In IIFE - this.color: undefined
// In IIFE - self.color: Blue

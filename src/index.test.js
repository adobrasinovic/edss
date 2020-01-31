
var expect = require('chai').expect;
var edss = require('./index');

describe("calculateEDSS", function(){

    it("should throw an error if there is a wrong number of arguments", function(){
        expect(() => edss.calculateEDSS()).to.throw('Wrong number of arguments.'); 
        expect(() => edss.calculateEDSS(1,1,1)).to.throw('Wrong number of arguments.'); 
        expect(() => edss.calculateEDSS(1,1,1,1,1,1,1,1,1,1,1)).to.throw('Wrong number of arguments.');
    });

    it("should throw an error if there is an argument that is not a positive integer (checking for null,undefined and if argument is an integer)", function(){
        expect(() => edss.calculateEDSS(1,1,1,1,'test',1,1,1)).to.throw(TypeError, 'Argument is not a positive integer.'); 
        expect(() => edss.calculateEDSS(1,1,1.23,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a positive integer.'); 
        expect(() => edss.calculateEDSS(-1,1,1,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a positive integer.'); 
        expect(() => edss.calculateEDSS(null,1,1,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a positive integer.'); 
        expect(() => edss.calculateEDSS(undefined,1,1,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a positive integer.'); 
    });

    // visualFunctionsScore 0 - 6
    // brainstemFunctionScore 0 - 5
    // pyramidalFunctionsScore 0 - 6 
    // cerebellarFunctionsScore 0 - 5
    // sensoryFunctionsScore 0 - 6
    // bowelAndBladderFunctionsScore 0 - 6
    // cerebralFunctionsScore 0 - 5
    // ambulationScore 0 - 15

    it("should throw an error if an argument is out of bounds", function(){
        expect(() => edss.calculateEDSS(7,1,1,1,1,1,1,1)).to.throw('Argument is out of bounds. visualFunctionsScore'); 
        expect(() => edss.calculateEDSS(1,6,1,1,1,1,1,1)).to.throw('Argument is out of bounds. brainstemFunctionScore'); 
        expect(() => edss.calculateEDSS(1,1,7,1,1,1,1,1)).to.throw('Argument is out of bounds. pyramidalFunctionsScore'); 
        expect(() => edss.calculateEDSS(1,1,1,6,1,1,1,1)).to.throw('Argument is out of bounds. cerebellarFunctionsScore'); 
        expect(() => edss.calculateEDSS(1,1,1,1,7,1,1,1)).to.throw('Argument is out of bounds. sensoryFunctionsScore');
        expect(() => edss.calculateEDSS(1,1,1,1,1,7,1,1)).to.throw('Argument is out of bounds. bowelAndBladderFunctionsScore'); 
        expect(() => edss.calculateEDSS(1,1,1,1,1,1,6,1)).to.throw('Argument is out of bounds. cerebralFunctionsScore'); 
        expect(() => edss.calculateEDSS(1,1,1,1,1,1,1,16)).to.throw('Argument is out of bounds. ambulationScore'); 
    });

});

var expect = require('chai').expect;
var edss = require('./index');

describe("calculateEDSS", function(){

    it("should throw an error if there is a wrong number of parameters", function(){
        expect(() => edss.calculateEDSS()).to.throw('Wrong number of parameters.'); 
        expect(() => edss.calculateEDSS(1,1,1)).to.throw('Wrong number of parameters.'); 
        expect(() => edss.calculateEDSS(1,1,1,1,1,1,1,1,1,1,1)).to.throw('Wrong number of parameters.');
    });

    it("should throw an error if there is a parameter that is not a number (checking for null,undefined and isNaN)", function(){
        expect(() => edss.calculateEDSS(1,1,1,1,'test',1,1,1)).to.throw(TypeError, 'Argument is not a number.'); 
        expect(() => edss.calculateEDSS(null,1,1,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a number.'); 
        expect(() => edss.calculateEDSS(undefined,1,1,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a number.'); 
    });

});
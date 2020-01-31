
var expect = require('chai').expect;
var edss = require('./index');

describe("calculateEDSS", function(){

    it("if there is a wrong number of arguments it should throw an error", function(){
        expect(() => edss.calculateEDSS()).to.throw(); 
        expect(() => edss.calculateEDSS(1,1,1)).to.throw(); 
        expect(() => edss.calculateEDSS(1,1,1,1,1,1,1,1,1,1,1,1)).to.throw(); 
    });

});
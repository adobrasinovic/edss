
var expect = require('chai').expect;
var edss = require('./index');

function randomZeroToMax(maxRange) {
   return Math.floor(Math.random() * (maxRange+1));
}

describe("calculateEDSS", function(){

    it("should throw an error if there is a wrong number of arguments", function(){
        expect(() => edss.calculateEDSS()).to.throw('Wrong number of arguments.'); 
        expect(() => edss.calculateEDSS(1,1,1)).to.throw('Wrong number of arguments.'); 
        expect(() => edss.calculateEDSS(1,1,1,1,1,1,1,1,1,1,1)).to.throw('Wrong number of arguments.');
    });

    it("should throw an error if there is an argument that is not a non-negative integer (checking for null,undefined and if argument is a non-negative integer)", function(){
        expect(() => edss.calculateEDSS(1,1,1,1,'test',1,1,1)).to.throw(TypeError, 'Argument is not a non-negative integer.'); 
        expect(() => edss.calculateEDSS(1,1,1.23,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a non-negative integer.'); 
        expect(() => edss.calculateEDSS(-1,1,1,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a non-negative integer.'); 
        expect(() => edss.calculateEDSS(null,1,1,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a non-negative integer.'); 
        expect(() => edss.calculateEDSS(undefined,1,1,1,1,1,1,1)).to.throw(TypeError, 'Argument is not a non-negative integer.'); 
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
        expect(() => edss.calculateEDSS(1,1,1,1,1,1,1,17)).to.throw('Argument is out of bounds. ambulationScore'); 
    });

    it("should return correct EDSS values, when the score is determined solely by ambulationScore", function(){
        // using random numbers in valid range, because in these cases after checking the ambulationScore the rest of arguments should have no importance
        // this might help find some obscure bugs later on when the logic for calculating the EDSS score from first 7 arguments is added
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),16)).to.equal(10);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),15)).to.equal(9.5);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),14)).to.equal(9);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),13)).to.equal(8.5);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),12)).to.equal(8);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),11)).to.equal(7.5);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),10)).to.equal(7);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),9)).to.equal(6.5);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),8)).to.equal(6.5);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),7)).to.equal(6);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),6)).to.equal(6);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),5)).to.equal(6);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),4)).to.equal(5.5);
        expect(edss.calculateEDSS(randomZeroToMax(6),randomZeroToMax(5),
        randomZeroToMax(6),randomZeroToMax(5),randomZeroToMax(6),randomZeroToMax(6),randomZeroToMax(5),3)).to.equal(5);   
    });

    it("should return 5.0 EDSS when the score in one of seven functional systems is greater or equal to 5", function(){
        // randomZeroToMax is set to be lower than 5
        // ambulation score is set to be 2, which shouldnt affect the score
        expect(edss.calculateEDSS(6,randomZeroToMax(4),
        randomZeroToMax(4),randomZeroToMax(4),randomZeroToMax(4),randomZeroToMax(4),randomZeroToMax(4),2)).to.equal(5);
        expect(edss.calculateEDSS(5,randomZeroToMax(4),
        randomZeroToMax(4),randomZeroToMax(4),5,randomZeroToMax(4),randomZeroToMax(4),2)).to.equal(5);
        expect(edss.calculateEDSS(randomZeroToMax(4),randomZeroToMax(4),
        randomZeroToMax(4),randomZeroToMax(4),5,randomZeroToMax(4),randomZeroToMax(4),2)).to.equal(5);
    });

    it("should return 5.0 EDSS when the max score in two or more functional systems is equal to 4", function(){
        // ambulation score is set to be 2, which shouldnt affect the score
        expect(edss.calculateEDSS(4,4,
        randomZeroToMax(3),randomZeroToMax(3),randomZeroToMax(3),randomZeroToMax(3),randomZeroToMax(3),2)).to.equal(5);
        expect(edss.calculateEDSS(4,4,
            randomZeroToMax(4),randomZeroToMax(4),randomZeroToMax(4),randomZeroToMax(4),randomZeroToMax(4),2)).to.equal(5);
    });

    it("should return 5.0 EDSS when the max score in six or seven functional systems is equal to 3", function(){
        // randomZeroToMax is set to be lower than 5
        // ambulation score is set to be 2, which shouldnt affect the score
        expect(edss.calculateEDSS(3,3,3,3,3,3,2,2)).to.equal(5);
        expect(edss.calculateEDSS(3,3,3,3,3,3,3,2)).to.equal(5);
    });

});
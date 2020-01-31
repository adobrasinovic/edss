function calculateEDSS(visualFunctionsScore, brainstemFunctionScore, pyramidalFunctionsScore, cerebellarFunctionsScore,
                       sensoryFunctionsScore, bowelAndBladderFunctionsScore, cerebralFunctionsScore, ambulationScore) {

    if (arguments.length !== 8) {
       throw new Error(`Wrong number of arguments. arguments.length = ${arguments.length}`); 
    }

    const argumentsArray = Array.from(arguments);

    for (let argument of argumentsArray) {
        if (argument == null  || !Number.isInteger(+argument) || +argument < 0) {
            throw new TypeError(`Argument is not a positive integer. argument = ${argument}`);
        }
    }

    visualFunctionsScore = +visualFunctionsScore;

    if (visualFunctionsScore > 6) {
        throw new Error(`Argument is out of bounds. visualFunctionsScore`); 
    }

    brainstemFunctionScore = +brainstemFunctionScore;

    if (brainstemFunctionScore > 5) {
        throw new Error(`Argument is out of bounds. brainstemFunctionScore`); 
    }

    pyramidalFunctionsScore = +pyramidalFunctionsScore;

    if (pyramidalFunctionsScore > 6) {
        throw new Error(`Argument is out of bounds. pyramidalFunctionsScore`); 
    }

    cerebellarFunctionsScore = +cerebellarFunctionsScore;

    if (cerebellarFunctionsScore > 5) {
        throw new Error(`Argument is out of bounds. cerebellarFunctionsScore`); 
    }

    sensoryFunctionsScore = +sensoryFunctionsScore;

    if (sensoryFunctionsScore > 6) {
        throw new Error(`Argument is out of bounds. sensoryFunctionsScore`); 
    }

    bowelAndBladderFunctionsScore = +bowelAndBladderFunctionsScore;

    if (bowelAndBladderFunctionsScore > 6) {
        throw new Error(`Argument is out of bounds. bowelAndBladderFunctionsScore`); 
    }

    cerebralFunctionsScore = +cerebralFunctionsScore;

    if (cerebralFunctionsScore > 5) {
        throw new Error(`Argument is out of bounds. cerebralFunctionsScore`); 
    }

    ambulationScore = +ambulationScore;

    if (ambulationScore > 15) {
        throw new Error(`Argument is out of bounds. ambulationScore`); 
    }

    return 0;
}

module.exports = {
    calculateEDSS: calculateEDSS
};
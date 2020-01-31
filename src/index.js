// VISUAL (OPTIC) FUNCTIONAL SYSTEM SCORE
// 0 - normal.
// 1 - disc pallor and / or small scotoma and / or visual acuity (corrected) of worse eye less than 20 / 20 (1.0) but better than 20 / 30 (0.67).
// 2 - worse eye with maximal visual acuity (corrected) of 20 / 30 to 20 / 59 (0.67-0.34).
// 3 - worse eye with large scotoma and/or moderate decrease in fields and/or maximal visual acuity (corrected) of 20 / 60 to 20 / 99 (0.33-0.21).
// 4 - worse eye with marked decrease of fields and/or maximal visual acuity (corrected) of 20 / 100 to 20 / 200 (0.2-0.1); grade 3 plus maximal acuity of better eye of 20 / 60 (0.33) or less.
// 5 - worse eye with maximal visual acuity (corrected) less than 20 / 200 (0.1); grade 4 plus maximal acuity of better eye of 20 / 60 (0.33) or less.
// 6 - grade 5 plus maximal visual acuity of better eye of 20 / 60 (0.33) or less.

function calculateEDSS(visualFunctionsScore, brainstemFunctionScore, pyramidalFunctionsScore, cerebellarFunctionsScore,
                       sensoryFunctionsScore, bowelAndBladderFunctionsScore, cerebralFunctionsScore, ambulationScore) {

    if (arguments.length !== 8) {
       throw new Error(`Wrong number of parameters. arguments.length = ${arguments.length}`); 
    }

    const argumentsArray = Array.from(arguments);

    for (let argument of argumentsArray) {
        if (argument == null  || isNaN(argument)) {
            throw new TypeError(`Argument is not a number. argument = ${argument}`);
        }
    }

    return (+visualFunctionsScore) + (+brainstemFunctionScore + (+pyramidalFunctionsScore) + (+cerebellarFunctionsScore) + (+sensoryFunctionsScore) + 
        (+bowelAndBladderFunctionsScore) + (+cerebralFunctionsScore) + (+ambulationScore));
}

module.exports = {
    calculateEDSS: calculateEDSS
};
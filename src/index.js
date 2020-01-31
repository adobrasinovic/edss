// arguments are functional scores in eight different functional systems
function calculateEDSS(visualFunctionsScore, brainstemFunctionScore, pyramidalFunctionsScore, cerebellarFunctionsScore,
    sensoryFunctionsScore, bowelAndBladderFunctionsScore, cerebralFunctionsScore, ambulationScore) {

    // checking if number of arguments is correct
    if (arguments.length !== 8) {
        throw new Error(`Wrong number of arguments. arguments.length = ${arguments.length}`);
    }

    // check for argument types
    // creating an array from arguments, to itereate
    const argumentsArray = Array.from(arguments);

    for (let argument of argumentsArray) {
        if (argument == null || !Number.isInteger(+argument) || +argument < 0) {
            throw new TypeError(`Argument is not a non-negative integer. argument = ${argument}`);
        }
    }

    // checking bounds
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

    if (ambulationScore > 16) {
        throw new Error(`Argument is out of bounds. ambulationScore`);
    }



    // calculation of the EDSS begins here

    if (ambulationScore === 16) {
        // death due to ms
        return 10;
    }

    if (ambulationScore === 15) {
        // totally helpless bed patient; unable to communicate effectively or eat/swallow
        return 9.5;
    }

    if (ambulationScore === 14) {
        // helpless bed patient; can communicate and eat
        return 9;
    }

    if (ambulationScore === 13) {
        // essentially restricted to bed much of the day; has some effective use of arm(s); retains some self-care functions
        return 8.5;
    }

    if (ambulationScore === 12) {
        // essentially restricted to bed or chair or perambulated in wheelchair, but out of bed most of day; retains many self-care functions; generally has effective use of arms
        return 8;
    }

    if (ambulationScore === 11) {
        // uses wheelchair with help; unable to take more than a few steps; restricted to wheelchair; may need some help in transferring and in wheeling self
        return 7.5;
    }

    if (ambulationScore === 10) {
        // uses wheelchair without help; unable to walk 5 meters even with aid, essentially restricted to wheelchair; wheels self and transfers alone; up and about in wheelchair some 12 hours a day
        return 7;
    }

    if (ambulationScore === 9) {
        // bilateral assistance, ≥ 5 meters, but < 120 meters
        return 6.5;
    }

    if (ambulationScore === 8) {
        // unilateral assistance, < 50 meters
        return 6.5;
    }

    if (ambulationScore === 7) {
        // bilateral assistance, ≥ 120 meters
        return 6;
    }

    if (ambulationScore === 6) {
        //  unilateral assistance, ≥ 50 meters
        return 6;
    }

    if (ambulationScore === 5) {
        //  walking range < 100 meters without assistance
        return 6;
    }

    if (ambulationScore === 4) {
        //  ≥ 100 meters, but < 200 meters, without help or assistance
        return 5.5;
    }

    if (ambulationScore === 3) {
        //  ≥ 200 meters, but < 300 meters, without help or assistance 
        return 5;
    }

    

    return 0;
}

module.exports = {
    calculateEDSS: calculateEDSS
};
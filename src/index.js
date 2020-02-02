// non-exported function, that finds max value in array, and number of time it appears
function findMaxValueInArrayAndNumberOfRepetitions(array) {
    const max = Math.max(...array);

    const numberOfRepetitions = array.filter(value => value >= max).length;

    return [max,numberOfRepetitions];
}

// non-exported function, that finds second largest value in array, and number of time it appears
function findSecondLargestValueInArrayAndNumberOfRepetitions(array,max) {   
    const arrayWithoutMax = array.filter(value => value < max);

    const secondLargest = Math.max(...arrayWithoutMax);

    const numberOfRepetitions = arrayWithoutMax.filter(value => value >= secondLargest).length;

    return [secondLargest,numberOfRepetitions];
}

// non-exported function, converts visual score
function convertVisualScore(visualScore) {
    if (visualScore === 6) {
        return 4;
    }

    if (visualScore === 5 || visualScore === 4) {
        return 3;
    }

    if (visualScore === 3 || visualScore === 2) {
        return 2;
    }

    return 1;
}

// non-exported function, converts visual score
function convertBowelAndBladderScore(bowelAndBladderScore) {
    if (bowelAndBladderScore === 6) {
        return 5;
    }

    if (bowelAndBladderScore === 5) {
        return 4;
    }

    if (bowelAndBladderScore === 4 || bowelAndBladderScore === 3) {
        return 3;
    }

    return bowelAndBladderScore;
}




// arguments are functional scores in eight different functional systems
function calculateEDSS(visualFunctionsScore, brainstemFunctionScore, pyramidalFunctionsScore, cerebellarFunctionsScore,
    sensoryFunctionsScore, bowelAndBladderFunctionsScore, cerebralFunctionsScore, ambulationScore) {

    // checking if number of arguments is correct
    if (arguments.length !== 8) {
        throw new Error(`Wrong number of arguments. arguments.length = ${arguments.length}`);
    }

    // check for argument types
    for (let argument of arguments) {
        if (argument == null || !Number.isInteger(+argument) || +argument < 0) {
            throw new TypeError(`Argument is not a non-negative integer. argument = ${argument}`);
        }
    }

    // checking bounds
    visualFunctionsScore = +visualFunctionsScore;

    if (visualFunctionsScore > 6) {
        throw new Error(`Argument is out of bounds. visualFunctionsScore`);
    }

    // converting visual score
    visualFunctionsScore = convertVisualScore(visualFunctionsScore);

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

    // converting bowel and bladder score 
    bowelAndBladderFunctionsScore = convertBowelAndBladderScore(bowelAndBladderFunctionsScore);

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

    if (ambulationScore === 9 || ambulationScore === 8) {
        // bilateral assistance, ≥ 5 meters, but < 120 meters
        // unilateral assistance, < 50 meters
        return 6.5;
    }

    if (ambulationScore === 7 || ambulationScore === 6 || ambulationScore === 5) {
        // bilateral assistance, ≥ 120 meters
        //  unilateral assistance, ≥ 50 meters
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

    // values of functional systems
    let firstSevenArguments = Array.from(arguments);
    firstSevenArguments.pop();

    const maxValueAndNumberOfRepetitions = findMaxValueInArrayAndNumberOfRepetitions(firstSevenArguments);

    const maxValue = maxValueAndNumberOfRepetitions[0];

    const numberOfRepetitions = maxValueAndNumberOfRepetitions[1];

    if (maxValue >= 5 ) {
        return 5;
    }

    if (maxValue === 4 && numberOfRepetitions >= 2) {
        return 5;
    }

    if (maxValue === 4 && numberOfRepetitions === 1) {
        const secondLargestValueAndNumberOfRepetitions = findSecondLargestValueInArrayAndNumberOfRepetitions(firstSevenArguments,maxValue);
        const secondLargest = secondLargestValueAndNumberOfRepetitions[0];
        const numberOfRepetitionsSecondLargest = secondLargestValueAndNumberOfRepetitions[1];

        if (secondLargest === 3 && numberOfRepetitionsSecondLargest > 2) {
            return 5;
        }

        if (secondLargest === 3 || secondLargest === 2) {
            return 4.5;
        }

    }

    if (maxValue === 3 && numberOfRepetitions >= 6) {
        return 5;
    }

    if (ambulationScore === 2) {
        return 4.5;
    }

    if (maxValue === 3 && numberOfRepetitions === 5) {
        return 4.5;
    }



    return 0;
}

module.exports = {
    calculateEDSS: calculateEDSS
};
// non-exported function, that finds max value in array, and number of time it appears
function findMaxValueInArrayAndNumberOfRepetitions(array) {
    const max = Math.max(...array);

    const numberOfRepetitions = array.filter(value => value >= max).length;

    return [max, numberOfRepetitions];
}

// non-exported function, that finds second largest value in array, and number of time it appears
function findSecondLargestValueInArrayAndNumberOfRepetitions(array, max) {
    const arrayWithoutMax = array.filter(value => value < max);

    const secondLargest = Math.max(...arrayWithoutMax);

    const numberOfRepetitions = arrayWithoutMax.filter(value => value >= secondLargest).length;

    return [secondLargest, numberOfRepetitions];
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

    return visualScore;
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
function calculateEDSS(visualFunctionsScore, brainstemFunctionsScore, pyramidalFunctionsScore, cerebellarFunctionsScore,
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

    brainstemFunctionsScore = +brainstemFunctionsScore;

    if (brainstemFunctionsScore > 5) {
        throw new Error(`Argument is out of bounds. brainstemFunctionsScore`);
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
    let firstSevenArguments = [visualFunctionsScore, brainstemFunctionsScore, pyramidalFunctionsScore, cerebellarFunctionsScore, sensoryFunctionsScore, bowelAndBladderFunctionsScore, cerebralFunctionsScore];

    const maxValueAndNumberOfRepetitions = findMaxValueInArrayAndNumberOfRepetitions(firstSevenArguments);

    const maxValue = maxValueAndNumberOfRepetitions[0];

    const numberOfRepetitions = maxValueAndNumberOfRepetitions[1];

    if (maxValue >= 5) {
        return 5;
    }

    if (maxValue === 4 && numberOfRepetitions >= 2) {
        return 5;
    }

    if (maxValue === 4 && numberOfRepetitions === 1) {
        const secondLargestValueAndNumberOfRepetitions = findSecondLargestValueInArrayAndNumberOfRepetitions(firstSevenArguments, maxValue);
        const secondLargest = secondLargestValueAndNumberOfRepetitions[0];
        const numberOfRepetitionsSecondLargest = secondLargestValueAndNumberOfRepetitions[1];

        if (secondLargest === 3 && numberOfRepetitionsSecondLargest > 2) {
            return 5;
        }

        if (secondLargest === 3 || secondLargest === 2) {
            return 4.5;
        }

        if (ambulationScore < 2 && secondLargest < 2) {
            return 4;
        }

    }

    // we check here because of ambulation score, this is the only case where it could go to 5
    if (maxValue === 3 && numberOfRepetitions >= 6) {
        return 5;
    }

    if (ambulationScore === 2) {
        return 4.5;
    }

    if (maxValue === 3) {
        if (numberOfRepetitions === 5) {
            return 4.5;
        }

        // we know its now <= 4
        if (numberOfRepetitions >= 2) {

            if (numberOfRepetitions === 2) {
                const secondLargestValueAndNumberOfRepetitions = findSecondLargestValueInArrayAndNumberOfRepetitions(firstSevenArguments, maxValue);
                const secondLargest = secondLargestValueAndNumberOfRepetitions[0];

                if (secondLargest <= 1) {
                    return 3.5;
                }
            }

            return 4;
        }

        // number of repetitions is now 1
        const secondLargestValueAndNumberOfRepetitions = findSecondLargestValueInArrayAndNumberOfRepetitions(firstSevenArguments, maxValue);
        const secondLargest = secondLargestValueAndNumberOfRepetitions[0];
        const numberOfRepetitionsSecondLargest = secondLargestValueAndNumberOfRepetitions[1];

        if (secondLargest === 2) {
            if (numberOfRepetitionsSecondLargest >= 3) {
                return 4;
            }

            // second largest is 2, and is 1-2 times
            return 3.5;
        }


        // second largest is now 0 or 1
        return 3;
    }



    if (maxValue === 2) {
        if (numberOfRepetitions >= 6) {
            return 4;
        }

        if (numberOfRepetitions === 5) {
            return 3.5;
        }

        if (numberOfRepetitions === 3 || numberOfRepetitions === 4) {
            return 3;
        }

        if (numberOfRepetitions === 2) {
            return 2.5;
        }

        return 2;
    }

    if (ambulationScore === 1) {
        return 2;
    }

    if (maxValue === 1) {
        if (numberOfRepetitions >= 2) {
            return 1.5;
        }

        return 1;
    }



    return 0;
}

// value - label pairs for functional system scores and ambulationScores

const visualFunctionsScores = [
    {
        value: 0,
        label: 'normal.'
    },
    {
        value: 1,
        label: 'disc pallor and / or small scotoma and / or visual acuity (corrected) of worse eye less than 20 / 20 (1.0) but better than 20 / 30 (0.67).'
    },
    {
        value: 2,
        label: 'worse eye with maximal visual acuity (corrected) of 20 / 30 to 20 / 59 (0.67-0.34).'
    },
    {
        value: 3,
        label: 'worse eye with large scotoma and/or moderate decrease in fields and/or maximal visual acuity (corrected) of 20 / 60 to 20 / 99 (0.33-0.21).'
    },
    {
        value: 4,
        label: 'worse eye with marked decrease of fields and/or maximal visual acuity (corrected) of 20 / 100 to 20 / 200 (0.2-0.1); grade 3 plus maximal acuity of better eye of 20 / 60 (0.33) or less.'
    },
    {
        value: 5,
        label: 'worse eye with maximal visual acuity (corrected) less than 20 / 200 (0.1); grade 4 plus maximal acuity of better eye of 20 / 60 (0.33) or less.'
    },
    {
        value: 6,
        label: 'grade 5 plus maximal visual acuity of better eye of 20 / 60 (0.33) or less.'
    }
];

const brainstemFunctionsScores = [
    {
        value: 0,
        label: 'normal.'
    },
    {
        value: 1,
        label: 'signs only.'
    },
    {
        value: 2,
        label: 'moderate nystagmus and / or moderate EOM impairment and / or other mild disability.'
    },
    {
        value: 3,
        label: 'severe nystagmus and / or marked EOM impairment and / or moderate disability of other cranial nerves.'
    },
    {
        value: 4,
        label: 'marked dysarthria and / or other marked disability.'
    },
    {
        value: 5,
        label: 'inability to swallow or speak.'
    }
];

const pyramidalFunctionsScores = [
    {
        value: 0,
        label: 'normal.'
    },
    {
        value: 1,
        label: 'abnormal signs without disability.'
    },
    {
        value: 2,
        label: 'minimal disability: patient complains of motor-fatigability or reduced performance in strenuous motor tasks (motor performance grade 1) and/or BMRC grade 4 in one or two muscle groups.'
    },
    {
        value: 3,
        label: 'mild to moderate paraparesis or hemiparesis: usually BMRC grade 4 in more than two muscle groups; and/or BMRC grade 3 in one or two muscle groups (movements against gravity are possible); and/or severe monoparesis: BMRC grade 2 or less in one muscle group.'
    },
    {
        value: 4,
        label: 'marked paraparesis or hemiparesis: usually BMRC grade 2 in two limbs or monoplegia with BMRC grade 0 or 1 in one limb; and/or moderate tetraparesis: BMRC grade 3 in three or more limbs.'
    },
    {
        value: 5,
        label: 'paraplegia: BMRC grade 0 or 1 in all muscle groups of the lower limbs; and/or marked tetraparesis: BMRC grade 2 or less in three or more limbs; and / or hemiplegia.'
    },
    {
        value: 6,
        label: 'tetraplegia: BMRC grade 0 or 1 in all muscle groups of the upper and lower limbs.'
    }
];

const cerebellarFunctionsScores = [
    {
        value: 0,
        label: 'normal.'
    },
    {
        value: 1,
        label: 'abnormal signs without disability.'
    },
    {
        value: 2,
        label: 'mild ataxia and/or moderate station ataxia (Romberg) and / or tandem walking not possible.'
    },
    {
        value: 3,
        label: 'moderate limb ataxia and / or moderate or severe gait/truncal ataxia.'
    },
    {
        value: 4,
        label: 'severe gait/truncal ataxia and severe ataxia in three or four limbs.'
    },
    {
        value: 5,
        label: 'unable to perform coordinated movements due to ataxia.'
    }
];

const sensoryFunctionsScores = [
    {
        value: 0,
        label: 'normal.'
    },
    {
        value: 1,
        label: 'mild vibration or figure-writing or temperature decrease only in one or two limbs.'
    },
    {
        value: 2,
        label: 'mild decrease in touch or pain or position sense or moderate decrease in vibration in one or two limbs; and/or mild vibration or figure-writing or temperature decrease alone in more than two limbs.'
    },
    {
        value: 3,
        label: 'moderate decrease in touch or pain or position sense or marked reduction of vibration in one or two limbs; and/or mild decrease in touch or pain or moderate decrease in all proprioceptive tests in more than two limbs.'
    },
    {
        value: 4,
        label: 'marked decrease in touch or pain in one or two limbs; and/or moderate decrease in touch or pain and/or marked reduction of proprioception in more than two limbs.'
    },
    {
        value: 5,
        label: 'loss (essentially) of sensation in one or two limbs; and/or moderate decrease in touch or pain and / or marked reduction of proprioception for most of the body below the head.'
    },
    {
        value: 6,
        label: 'sensation essentially lost below the head.'
    }
];

const bowelAndBladderFunctionsScores = [
    {
        value: 0,
        label: 'normal.'
    },
    {
        value: 1,
        label: 'mild urinary hesitancy, urgency and / or constipation.'
    },
    {
        value: 2,
        label: 'moderate urinary hesitancy/retention and / or moderate urinary urgency/incontinence and /or moderate bowel disfunction.'
    },
    {
        value: 3,
        label: 'frequent urinary incontinence or intermittent self-catheterisation; needs enemata or manual measures to evacuate bowels.'
    },
    {
        value: 4,
        label: 'in need of almost constant catheterisation.'
    },
    {
        value: 5,
        label: 'loss of bladder or bowel function; external or indwelling catheter.'
    },
    {
        value: 6,
        label: 'loss of bowel and bladder function.'
    }
];

const cerebralFunctionsScores = [
    {
        value: 0,
        label: 'normal.'
    },
    {
        value: 1,
        label: 'signs only in decrease in mentation; mild fatigue.'
    },
    {
        value: 2,
        label: 'mild decrease in mentation; moderate or severe fatigue.'
    },
    {
        value: 3,
        label: 'moderate decrease in mentation.'
    },
    {
        value: 4,
        label: 'marked decrease in mentation.'
    },
    {
        value: 5,
        label: 'dementia.'
    }
];

const ambulationScores = [
    {
        value: 0,
        label: 'unrestricted.'
    },
    {
        value: 1,
        label: 'fully ambulatory.'
    },
    {
        value: 2,
        label: '≥ 300 meters, but < 500 meters, without help or assistance (EDSS 4.5 or 5.0).'
    },
    {
        value: 3,
        label: '≥ 200 meters, but < 300 meters, without help or assistance (EDSS 5.0).'
    },
    {
        value: 4,
        label: '≥ 100 meters, but < 200 meters, without help or assistance (EDSS 5.5).'
    },
    {
        value: 5,
        label: 'walking range < 100 meters without assistance (EDSS 6.0).'
    },
    {
        value: 6,
        label: 'unilateral assistance, ≥ 50 meters (EDSS 6.0).'
    },
    {
        value: 7,
        label: 'bilateral assistance, ≥ 120 meters (EDSS 6.0).'
    },
    {
        value: 8,
        label: 'unilateral assistance, < 50 meters (EDSS 6.5).'
    },
    {
        value: 9,
        label: 'bilateral assistance, ≥ 5 meters, but < 120 meters (EDSS 6.5).'
    },
    {
        value: 10,
        label: 'uses wheelchair without help; unable to walk 5 meters even with aid, essentially restricted to wheelchair; wheels self and transfers alone; up and about in wheelchair some 12 hours a day (EDSS 7.0).'
    },
    {
        value: 11,
        label: 'uses wheelchair with help; unable to take more than a few steps; restricted to wheelchair; may need some help in transferring and in wheeling self (EDSS 7.5).'
    },
    {
        value: 12,
        label: 'essentially restricted to bed or chair or perambulated in wheelchair, but out of bed most of day; retains many self-care functions; generally has effective use of arms (EDSS 8.0).'
    },
    {
        value: 13,
        label: 'essentially restricted to bed much of the day; has some effective use of arm(s); retains some self-care functions (EDSS 8.5).'
    },
    {
        value: 14,
        label: 'helpless bed patient; can communicate and eat (EDSS 9.0).'
    },
    {
        value: 15,
        label: 'totally helpless bed patient; unable to communicate effectively or eat/swallow (EDSS 9.5).'
    },
    {
        value: 16,
        label: 'death due to MS (EDSS 10.0).'
    }
];

module.exports = {
    calculateEDSS: calculateEDSS,
    visualFunctionsScores: visualFunctionsScores,
    brainstemFunctionsScores: brainstemFunctionsScores,
    pyramidalFunctionsScores: pyramidalFunctionsScores,
    cerebellarFunctionsScores: cerebellarFunctionsScores,
    sensoryFunctionsScores: sensoryFunctionsScores,
    bowelAndBladderFunctionsScores: bowelAndBladderFunctionsScores,
    cerebralFunctionsScores: cerebralFunctionsScores,
    ambulationScores: ambulationScores
};
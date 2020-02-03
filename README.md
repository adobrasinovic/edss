
# EDSS Calculator

  

**The Expanded Disability Status Scale (EDSS)** is the most common clinical scoring system used to evaluate the condition of Multiple Sclerosis (MS) patients. The overall disability score ranges from 0 (normal) to 10 (death due to MS) in half-point increments


The scale has been developed by **John F. Kurtzke.** The EDSS quantifies disability in eight Functional Systems (FS) and allows neurologists to assign a Functional System Score (FSS) in each of these.

  
  

## Install

  

Install with [npm](https://www.npmjs.com/):

  
  

```sh

$ npm install --save edss

```

  

## Usage example

```js

const edss = require('edss');

// calculateEDSS(visualFunctionsScore, brainstemFunctionsScore, pyramidalFunctionsScore, cerebellarFunctionsScore,
// sensoryFunctionsScore, bowelAndBladderFunctionsScore, cerebralFunctionsScore, ambulationScore)

const edssResult = edss.calculateEDSS(1,2,1,3,1,4,2,1);
// edssResult = 4
```

  

## About the project

  
This project is an open source implementation of the EDSS Calculator in Javascript. While developing a registry for patients suffering from Multiple Sclerosis, in Montenegro, a need arose for implementing an EDSS Calculator as an additional assessment when entering data related to patient visit to the registry.

As there was no open source implementation of the algorithm available I decided to make my own, and help other people who might make a web or mobile application for patients or physicians who deal with Multiple Sclerosis or EDSS calculations.

### Arguments
This module exports **calculateEDSS** function, which takes eight arguments. 

Arguments in order are:


|argument|type| range |
|--|--|--|
| visualFunctionsScore | number | 0 - 6 |
| brainstemFunctionsScore | number | 0 - 5 |
| pyramidalFunctionsScore | number | 0 - 6 |
| cerebellarFunctionsScore | number | 0 - 5 |
| sensoryFunctionsScore | number | 0 - 6 |
| bowelAndBladderFunctionsScore | number | 0 - 6 |
| cerebralFunctionsScore | number | 0 - 5 |
| ambulationScore | number | 0 - 16 |

### Calculation

EDSS range is 0 to 10, in half point increments. Values above 5 are calculated solely based on ambulation score. Values from 0 to 5 are more complex, I relied on **"Scoring table for a standardised, quantified neurological examination and assessment of Kurtzke‘s Functional Systems and Expanded Disability Status Scale in Multiple Sclerosis"** by **Ludwig Kappos, MD** from **University Hospital Basel, Switzerland.**

![Table used to calculate scores determined by functional systems](https://i.imgur.com/FjM5HTf.png)

## Functional systems and ambulation score

In this section I will provide tables of values and labels ( explanations ) for each individual functional system score and ambulation score.

The module also exports array with objects ( value, label properties ) for each functional system and ambulation score. It makes it easier to implement consistent scoring systems. The name of arrays are next to system names in brackets

### VISUAL (OPTIC) FUNCTIONAL SYSTEM SCORE	[ visualFunctionsScores ]

**Note:**  Visual Functional System Score is converted for calculations

| value | label |
|--|--|
| 0 | normal. |
| 1 | disc pallor and / or small scotoma and / or visual acuity (corrected) of worse eye less than 20 / 20 (1.0) but better than 20 / 30 (0.67).  |
| 2 | worse eye with maximal visual acuity (corrected) of 20 / 30 to 20 / 59 (0.67-0.34).   |
| 3 | worse eye with large scotoma and/or moderate decrease in fields and/or maximal visual acuity (corrected) of 20 / 60 to 20 / 99 (0.33-0.21). |
| 4 | worse eye with marked decrease of fields and/or maximal visual acuity (corrected) of 20 / 100 to 20 / 200 (0.2-0.1); grade 3 plus maximal acuity of better eye of 20 / 60 (0.33) or less.  |
| 5 |worse eye with maximal visual acuity (corrected) less than 20 / 200 (0.1); grade 4 plus maximal acuity of better eye of 20 / 60 (0.33) or less.   |
| 6 |grade 5 plus maximal visual acuity of better eye of 20 / 60 (0.33) or less.   |

### BRAINSTEM FUNCTIONAL SYSTEM SCORE [ brainstemFunctionsScores ]

| value | label |
|--|--|
| 0 | normal. |
| 1 | signs only.    |
| 2 |moderate nystagmus and / or moderate EOM impairment and / or other mild disability.  |
| 3 | severe nystagmus and / or marked EOM impairment and / or moderate disability of other cranial nerves.  |
| 4 | marked dysarthria and / or other marked disability.  |
| 5 |inability to swallow or speak. | 

### PYRAMIDAL FUNCTIONAL SYSTEM SCORE [ pyramidalFunctionsScores ]

| value | label |
|--|--|
| 0 | normal. |
| 1 | abnormal signs without disability.     |
| 2 |minimal disability: patient complains of motor-fatigability or reduced performance in strenuous motor tasks (motor performance grade 1) and/or BMRC grade 4 in one or two muscle groups. |
| 3 |mild to moderate paraparesis or hemiparesis: usually BMRC grade 4 in more than two muscle groups; and/or BMRC grade 3 in one or two muscle groups (movements against gravity are possible); and/or severe monoparesis: BMRC grade 2 or less in one muscle group.  |
| 4 |marked paraparesis or hemiparesis: usually BMRC grade 2 in two limbs or monoplegia with BMRC grade 0 or 1 in one limb; and/or moderate tetraparesis: BMRC grade 3 in three or more limbs.  |
| 5 |paraplegia: BMRC grade 0 or 1 in all muscle groups of the lower limbs; and/or marked tetraparesis: BMRC grade 2 or less in three or more limbs; and / or hemiplegia. | 
| 6 |tetraplegia: BMRC grade 0 or 1 in all muscle groups of the upper and lower limbs.| 

### CEREBELLAR FUNCTIONAL SYSTEM SCORE [ cerebellarFunctionsScores ]
| value | label |
|--|--|
| 0 | normal. |
| 1 | abnormal signs without disability.     |
| 2 | mild ataxia and/or moderate station ataxia (Romberg) and / or tandem walking not possible.  |
| 3 |moderate limb ataxia and / or moderate or severe gait/truncal ataxia.  |
| 4 |severe gait/truncal ataxia and severe ataxia in three or four limbs.|
| 5 |unable to perform coordinated movements due to ataxia.|

### SENSORY FUNCTIONAL SYSTEM SCORE [ sensoryFunctionsScores ]
| value | label |
|--|--|
| 0 | normal. |
| 1 | mild vibration or figure-writing or temperature decrease only in one or two limbs. |
| 2 |mild decrease in touch or pain or position sense or moderate decrease in vibration in one or two limbs; and/or mild vibration or figure-writing or temperature decrease alone in more than two limbs.  |
| 3 |moderate decrease in touch or pain or position sense or marked reduction of vibration in one or two limbs; and/or mild decrease in touch or pain or moderate decrease in all proprioceptive tests in more than two limbs.  |
| 4 |marked decrease in touch or pain in one or two limbs; and/or moderate decrease in touch or pain and/or marked reduction of proprioception in more than two limbs. |
| 5 | loss (essentially) of sensation in one or two limbs; and/or moderate decrease in touch or pain and / or marked reduction of proprioception for most of the body below the head.  | 
| 6 |sensation essentially lost below the head.| 

### BOWEL AND BLADDER FUNCTIONAL SYSTEM SCORE [ bowelAndBladderFunctionScores ]

**Note:**  Bowel and Bladder Functional System Score is converted for calculations
| value | label |
|--|--|
| 0 | normal. |
| 1 |mild urinary hesitancy, urgency and / or constipation.  |
| 2 |moderate urinary hesitancy/retention and / or moderate urinary urgency/incontinence and /or moderate bowel disfunction.  |
| 3 |frequent urinary incontinence or intermittent self-catheterisation; needs enemata or manual measures to evacuate bowels.  |
| 4 |in need of almost constant catheterisation.  |
| 5 |loss of bladder or bowel function; external or indwelling catheter.  | 
| 6 | loss of bowel and bladder function.| 

### CEREBRAL FUNCTIONAL SYSTEM SCORE [ cerebralFunctionsScores ]
| value | label |
|--|--|
| 0 | normal. |
| 1 |signs only in decrease in mentation; mild fatigue.  |
| 2 |mild decrease in mentation; moderate or severe fatigue.|
| 3 |moderate decrease in mentation.  |
| 4 | marked decrease in mentation.  |
| 5 |dementia.| 

### AMBULATION SCORE [ambulationScores ]

| value | label |
|--|--|
| 0 | normal. |
| 1 | fully ambulatory.|
| 2 |≥ 300 meters, but < 500 meters, without help or assistance (EDSS 4.5 or 5.0).|
| 3 |≥ 200 meters, but < 300 meters, without help or assistance (EDSS 5.0).  |
| 4 |≥ 100 meters, but < 200 meters, without help or assistance (EDSS 5.5).  |
| 5 | walking range < 100 meters without assistance (EDSS 6.0).  | 
| 6 |unilateral assistance, ≥ 50 meters (EDSS 6.0).  |
| 7 |bilateral assistance, ≥ 120 meters (EDSS 6.0).  |
| 8 |unilateral assistance, < 50 meters (EDSS 6.5).  |
| 9 |bilateral assistance, ≥ 5 meters, but < 120 meters (EDSS 6.5).  |
| 10 |uses wheelchair without help; unable to walk 5 meters even with aid, essentially restricted to wheelchair; wheels self and transfers alone; up and about in wheelchair some 12 hours a day (EDSS 7.0).  |
| 11 |uses wheelchair with help; unable to take more than a few steps; restricted to wheelchair; may need some help in transferring and in wheeling self (EDSS 7.5).  | 
| 12 | essentially restricted to bed or chair or perambulated in wheelchair, but out of bed most of day; retains many self-care functions; generally has effective use of arms (EDSS 8.0).  |
| 13 |essentially restricted to bed much of the day; has some effective use of arm(s); retains some self-care functions (EDSS 8.5). |
| 14 |helpless bed patient; can communicate and eat (EDSS 9.0). |
| 15 |totally helpless bed patient; unable to communicate effectively or eat/swallow (EDSS 9.5).|
| 16 | Death due to MS (EDSS 10.0).  |

## Author 

Aleksandar Dobrašinovic, Podgorica, 2020

## Licence

This project is licensed under the MIT License - see the [LICENSE.md](https://gist.github.com/PurpleBooth/LICENSE.md) file for details
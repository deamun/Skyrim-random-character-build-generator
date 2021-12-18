const randomNumberGenerator = listLength => {
    const randomNumber = Math.floor(Math.random() * listLength);
    return randomNumber;
};

const skillListGenerator = (skillList, numSkills, primarySkills = []) => {
    let chosenSkills = [];
    
    for (let i = 0; i < numSkills; i++) {
        let skill = skillList[randomNumberGenerator(skillList.length)];

        let duplicate = true; // Guilty until proven innocent
        
        while (duplicate === true) {
            for (let primarySkill of primarySkills) {
                if (skill === primarySkill) {
                    skill = skillList[randomNumberGenerator(skillList.length)];
                    duplicate = true;
                } else {
                    duplicate = false;
                };
            };
            
            for (let chosenSkill of chosenSkills) {
                if (skill === chosenSkill) {
                    skill = skillList[randomNumberGenerator(skillList.length)];
                    duplicate = true;
                } else {
                    duplicate = false;
                };
            };

            // If both primarySkills and chosenSkills are empty arrays (the first time the function is called), the loop will be infinite without the below.
            if (primarySkills.length === 0 && chosenSkills.length === 0) {
                duplicate = false;
            };
        };
        
        chosenSkills.push(skill);
    };

    return chosenSkills;
};

const formatOutput = character => {
    console.log(`Your character is a ${character.morality} ${character.gender} ${character.race}. Their primary skills are ${character.primarySkills[0]} and ${character.primarySkills[1]}, with ${character.secondarySkills[0]}, ${character.secondarySkills[1]} and ${character.secondarySkills[2]} to complement their adventure. Have fun!`);
};

const moralityList = ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'neutral', 'chaotic neutral', 'lawful evil', 'neutral evil', 'chaotic evil'];
const genderList = ['Female', 'Male'];
const raceList = ['Altmer (High Elf)', 'Argonian', 'Bosmer (Wood Elf)', 'Breton', 'Dunmer (Dark Elf)', 'Imperial', 'Khajiit', 'Nord', 'Orsimer(Orc)', 'Redguard'];
const skillList = ['Alchemy', 'Alteration', 'Archery', 'Block', 'Conjuration', 'Destruction', 'Enchanting', 'Heavy Armor', 'Illusion', 'Light Armor', 'Lockpicking', 'One-Handed', 'Pickpocket', 'Restoration', 'Smithing', 'Sneak', 'Speech', 'Two-Handed'];
const weaponClassList = ['Axe', 'Hammer', 'Sword', 'Dagger'];
const magicElementList = ['Fire', 'Lightning', 'Frost'];

let primarySkills = skillListGenerator(skillList, 2);
let secondarySkills = skillListGenerator(skillList, 3, primarySkills);

for (let i = 0; i < primarySkills.length; i++) {
    if (primarySkills[i] === 'Two-Handed') {
        primarySkills[i] = primarySkills[i] + ': ' + weaponClassList[randomNumberGenerator(weaponClassList.length - 1)];        
    } else if (primarySkills[i] === 'One-Handed') {
        primarySkills[i] = primarySkills[i] + ': ' + weaponClassList[randomNumberGenerator(weaponClassList.length)];
    } else if (primarySkills[i] === 'Destruction') {
        primarySkills[i] = primarySkills[i] + ': ' + magicElementList[randomNumberGenerator(magicElementList.length)];
    };
};

for (i = 0; i < secondarySkills.length; i++) {
    if (secondarySkills[i] === 'Two-Handed') {
        secondarySkills[i] = secondarySkills[i] + ': ' + weaponClassList[randomNumberGenerator(weaponClassList.length - 1)];        
    } else if (secondarySkills[i] === 'One-Handed') {
        secondarySkills[i] = secondarySkills[i] + ': ' + weaponClassList[randomNumberGenerator(weaponClassList.length)];
    } else if (secondarySkills[i] === 'Destruction') {
        secondarySkills[i] = secondarySkills[i] + ': ' + magicElementList[randomNumberGenerator(magicElementList.length)];
    }; 
};

const character = {
    morality: moralityList[randomNumberGenerator(moralityList.length)],
    gender: genderList[randomNumberGenerator(genderList.length)],
    race: raceList[randomNumberGenerator(raceList.length)],
    primarySkills: primarySkills,
    secondarySkills: secondarySkills,
};

formatOutput(character);
import {useCallback, useEffect, useState} from "react";
import "./App.css";

import {
  find,
  forEach,
  get, 
  keys,
  map,
  maxBy,
  merge,
  slice,
  toLower
} from "lodash";

import {
  MAX_CHARACTER_LEVEL, 
  MIN_CHARACTER_LEVEL,
  BaseCharacterClassNames as CharacterClassNames, 
  BaseCharacterNames as CharacterNames,
  CharacterGreenSkillTrees
} from "./string-constants/characters";

function App() {
  const initialKey = "OPERATIVE";
  const [selectedClassKey, setSelectedClassKey] = useState(initialKey);
  const [availableCharacters, setAvailableCharacters] = useState(generateAllCharacters());

  function generateAllCharacters() {
    let returnState = {};
    forEach(keys(CharacterClassNames), (classKey) => {
      returnState = merge({}, returnState, {[classKey]: generateCharacter(CharacterNames[classKey], CharacterClassNames[classKey])});
    });

    return returnState;
  }

  /**
   * 
   * @param {*} nameString 
   * @param {*} classString 
   */
  function generateCharacter(nameString, classString) {
    const base = {
      name: nameString,
      className: classString,
      level: 1,
      skillPointsSpent: 0,
      greenTreeSkills: []
    }
  
    let extendedAttributes = {
      formattedName: `${nameString} the ${classString}`
    };
  
    // TODO :: extend
    switch (classString) {
      case CharacterClassNames.OPERATIVE:
        extendedAttributes = merge({}, extendedAttributes, {
          
        });
        break;
      case CharacterClassNames.SIREN:
        extendedAttributes = merge({}, extendedAttributes, {
          
        });
        break;
      case CharacterClassNames.BEASTMASTER:
        extendedAttributes = merge({}, extendedAttributes, {
          
        });
        break;
      case CharacterClassNames.GUNNER:
        extendedAttributes = merge({}, extendedAttributes, {
          
        });
        break;
      default:
        extendedAttributes = {};
        break;
    }
  
    return merge({}, base, extendedAttributes);
  }

  function levelCharacterUp(forceLevel = false) {
    setAvailableCharacters(prevState => (
        merge({}, availableCharacters, {
          [selectedClassKey]: {
            level: forceLevel ? forceLevel : prevState[selectedClassKey].level + 1 <= MAX_CHARACTER_LEVEL ? prevState[selectedClassKey].level + 1 : MAX_CHARACTER_LEVEL
          }
        })
      )
    );
  }

  function levelCharacterDown(forceLevel = false) {
    setAvailableCharacters(prevState => (
        merge({}, availableCharacters, {
          [selectedClassKey]: {
            level: forceLevel ? forceLevel : prevState[selectedClassKey].level > 1 ? prevState[selectedClassKey].level - 1 : MIN_CHARACTER_LEVEL,
            skillPointsSpent: prevState[selectedClassKey].skillPointsSpent > 1 ? prevState[selectedClassKey].skillPointsSpent - 1 : 0
          }
        })
      )
    );
  }

  const selectCharacterArray = map(keys(CharacterClassNames), (key) => {
    let onClick = null;
    if (selectedClassKey !== key) {
      onClick = () => {
        setSelectedClassKey(key);
      }
    }

    const arrayItem = (
      <button
        className="Character-select"
        key={`${toLower(CharacterNames[key])}`}
        onClick={onClick}
      >
        {CharacterNames[key]}
      </button>
    );

    return arrayItem;
  });

  const selectedCharacter = get(availableCharacters, selectedClassKey);
  console.log(selectedCharacter);
  
  let characterPanel = null;
  let skillPanel = null;
  if (selectedCharacter) {
    let availableSkillPoints = selectedCharacter.level - 2 - selectedCharacter.skillPointsSpent;
    if (availableSkillPoints < 0) {
      availableSkillPoints = 0;
    }

    characterPanel = (
      <div>
        <h3>{selectedCharacter.formattedName}</h3>
        <p>Name: {selectedCharacter.name}</p>
        <p>Class: {selectedCharacter.className}</p>
        <p>Level: {selectedCharacter.level}</p>
        <button
          onClick={() => levelCharacterUp(MAX_CHARACTER_LEVEL)}
        >Max</button>
        <button
          onClick={() => levelCharacterUp()}
        >+</button>
        <button
          onClick={() => levelCharacterDown()}
        >-</button>
        <button
          onClick={() => levelCharacterDown(MIN_CHARACTER_LEVEL)}
        >Min</button>
        <p>Available Skill Points: {availableSkillPoints}</p>
      </div>
    );

    const basicSkill = find(CharacterGreenSkillTrees[selectedClassKey], {id: 1});
    console.warn(basicSkill);

    const restOfGreenTree = slice(CharacterGreenSkillTrees[selectedClassKey], 1);
    console.log(restOfGreenTree);

    const rowCount = get(maxBy(restOfGreenTree, "row"), "row");
    console.warn("rows", rowCount);
  }

  return (
    <div className="App">
      <div>
        {selectCharacterArray}
        {characterPanel}
      </div>
    </div>
  );
}

export default App;

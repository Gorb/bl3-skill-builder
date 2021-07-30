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
} from "./data/characters";

import CharacterPanel from "./components/character-panel";
import SkillTreePanel from "./components/skill-tree-panel";

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
    setAvailableCharacters(prevState => {
        let newCharacterLevel = MAX_CHARACTER_LEVEL;
        if (forceLevel) {
          newCharacterLevel = forceLevel;
        }
        else if (prevState[selectedClassKey].level + 1 <= MAX_CHARACTER_LEVEL) {
          newCharacterLevel = prevState[selectedClassKey].level + 1;
        }

        return merge({}, availableCharacters, {
          [selectedClassKey]: {
            level: newCharacterLevel
          }
        });
      }
    );
  }

  function levelCharacterDown(forceLevel = false) {
    setAvailableCharacters(prevState => {
        let newCharacterLevel = MIN_CHARACTER_LEVEL;
        if (forceLevel) {
          newCharacterLevel = forceLevel;
        }
        else if (prevState[selectedClassKey].level > 1) {
          newCharacterLevel = prevState[selectedClassKey].level - 1
        }

        let newSkillPointsSpent = 0;
        if (prevState[selectedClassKey].skillPointsSpent > 1) {
          newSkillPointsSpent = prevState[selectedClassKey].skillPointsSpent - 1;
        }
      
        return merge({}, availableCharacters, {
          [selectedClassKey]: {
            level: newCharacterLevel,
            skillPointsSpent: newSkillPointsSpent
          }
        });
      }
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
        className="character-select"
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
  let skillTreePanel = null;
  if (selectedCharacter) {
    characterPanel = (
      <CharacterPanel 
        levelCharacterUp={levelCharacterUp}
        levelCharacterDown={levelCharacterDown}
        selectedCharacter={selectedCharacter}
      />
    );

    const basicSkill = find(CharacterGreenSkillTrees[selectedClassKey], {id: 1});
    console.warn(basicSkill);

    const restOfGreenTree = slice(CharacterGreenSkillTrees[selectedClassKey], 1);
    console.log(restOfGreenTree);

    const rowCount = get(maxBy(restOfGreenTree, "row"), "row");
    console.warn("rows", rowCount);

    skillTreePanel = (
      <SkillTreePanel />
    );
  }

  return (
    <div className="app">
      <div>
        {selectCharacterArray}
        {characterPanel}
        {skillTreePanel}
      </div>
    </div>
  );
}

export default App;

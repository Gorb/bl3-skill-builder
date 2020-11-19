import {useCallback, useEffect, useState} from "react";
import "./App.css";

import {
  get, 
  has,
  keys,
  map,
  merge,
  toLower
} from "lodash";

import {
  BaseCharacterClassNames as CharacterClassNames, 
  BaseCharacterNames as CharacterNames,
  CharacterGreenSkillTrees
} from "./string-constants/characters";

function App() {
  const initialKey = "OPERATIVE";
  const [selectedClassKey, setSelectedClassKey] = useState(initialKey);
  const [selectedCharacter, setSelectedCharacter] = useState(generateCharacter(CharacterClassNames[selectedClassKey], selectedClassKey));
  const [localChanges, setLocalChanges] = useState({
    OPERATIVE: {},
    SIREN: {},
    BEASTMASTER: {},
    GUNNER: {}
  });

  console.warn(selectedClassKey);

  function generateCharacter(nameString, classString) {
    const base = {
      name: nameString,
      className: classString,
      level: 1,
      skillPointsAvailable: 0
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

  const generateCharacterCallback = useCallback((characterClass, characterClassKey) => {
    return generateCharacter(CharacterNames[characterClassKey], characterClass);
  }, []);

  useEffect(() => {
    setSelectedCharacter(generateCharacterCallback(CharacterClassNames[selectedClassKey], selectedClassKey));
  }, [
    generateCharacterCallback, 
    selectedClassKey
  ]);

  const selectedLocalChanges = localChanges[selectedClassKey];
  const characterPanel = selectedCharacter !== null ? (
    <div>
      <h3>{selectedCharacter.formattedName}</h3>
      <p>Name: {selectedCharacter.name}</p>
      <p>Class: {selectedCharacter.className}</p>
      <p>Level: {selectedLocalChanges.level ? selectedLocalChanges.level : selectedCharacter.level}</p>
      <button
        onClick={() => setLocalChanges(prevState => (
          merge({}, localChanges, {
            [selectedClassKey]: {
              level: prevState[selectedClassKey].level ? prevState[selectedClassKey].level + 1 : 2
            }
          })
        )
          
        )}
      >+</button>
      <button
        onClick={() => setLocalChanges(prevState => (
          merge({}, localChanges, {
            [selectedClassKey]: {
              level: prevState[selectedClassKey].level && prevState[selectedClassKey].level > 1 ? prevState[selectedClassKey].level - 1 : 1
            }
          })
        )
          
        )}
      >-</button>
      <p>Available Skill Points: {selectedCharacter.skillPointsAvailable}</p>
    </div>
  ) : null;

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

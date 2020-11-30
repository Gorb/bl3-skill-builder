import PropTypes from 'prop-types';

import {
  MAX_CHARACTER_LEVEL, 
  MIN_CHARACTER_LEVEL
} from "../string-constants/characters";

export default function CharacterPanel(props) {
  const {
    levelCharacterUp,
    levelCharacterDown,
    selectedCharacter
  } = props;

  let availableSkillPoints = selectedCharacter.level - 2 - selectedCharacter.skillPointsSpent;
  if (availableSkillPoints < 0) {
    availableSkillPoints = 0;
  }

  return (    
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
  )
}

CharacterPanel.propTypes = {
  levelCharacterUp: PropTypes.func,
  levelCharacterDown: PropTypes.func,
  selectedCharacter: PropTypes.object
};

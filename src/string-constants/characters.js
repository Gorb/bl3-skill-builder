export const MAX_CHARACTER_LEVEL = 65;
export const MIN_CHARACTER_LEVEL = 1;

export const BaseCharacterClassNames = Object.freeze({
  OPERATIVE: "Operative",
  SIREN: "Siren",
  BEASTMASTER: "Beastmaster",
  GUNNER: "Gunner"
});

export const BaseCharacterNames = Object.freeze({
  OPERATIVE: "Zane",
  SIREN: "Amara",
  BEASTMASTER: "FL4K",
  GUNNER: "Moze"
});

export const CharacterGreenSkillTrees = Object.freeze({
  OPERATIVE: [
    {
      id: 1,
      name: "Barrier",
      row: 0,
      ranksAvailable: 0,
      equippable: true,
      type: "action_skill",
      assetReference: "DeployBarrier"
    },
    {
      id: 2,
      name: "Adrenaline",
      row: 1,
      ranksAvailable: 5,
      equippable: false,
      type: "passive_ability",
      assetReference: "ExtraParts"
    },
    {
      id: 3,
      name: "Hearty Stock",
      row: 1,
      ranksAvailable: 3,
      equippable: false,
      type: "passive_ability",
      assetReference: "HeartyStock"
    },
    {
      id: 4,
      name: "Ready For Action",
      row: 1,
      ranksAvailable: 5,
      equippable: false,
      type: "passive_ability",
      assetReference: "ShortBlueLine"
    }
  ],
  SIREN: [],
  BEASTMASTER: [],
  GUNNER: []
});

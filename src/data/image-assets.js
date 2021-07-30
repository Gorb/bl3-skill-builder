const SKILL_TREE_ICON_BASE = "/icons";
export const AssetStates = Object.freeze({
  GREEN: "green",
  PINK: "pink",
  BLUE: "blue",
  ORANGE: "orange",
  ACTIVE: "active"
});

export const BaseCharacterAssetPaths = Object.freeze({
  OPERATIVE: "IconOperative",
  SIREN: "IconOperative",
  BEASTMASTER: "IconOperative",
  GUNNER: "IconOperative"
});

export function generateSkillIconAssetPath(characterAssetPath, assetReference, state = "") {
  let finalState = state;
  if (finalState.length > 0) {
    finalState = `-${finalState}`;
  }

  // https://borderlands.com/skill-thumbnails/skillIconOperative_DeployBarrier.png
  // https://borderlands.com/skill-thumbnails/skillIconOperative_DeployBarrier-green.png
  return `${SKILL_TREE_ICON_BASE}/skill${characterAssetPath}_${assetReference}${finalState}.png`;
}

const SKILL_TREE_BACKGROUND_BASE = "https://borderlands.com/images/ability-tree";

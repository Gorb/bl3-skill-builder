const SKILL_TREE_ICON_BASE = "https://borderlands.com/skill-thumbnails";
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

  return `${SKILL_TREE_ICON_BASE}/skill${characterAssetPath}+${assetReference}${finalState}.png`;
}

const SKILL_TREE_BACKGROUND_BASE = "https://borderlands.com/images/ability-tree";

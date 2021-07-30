import PropTypes from "prop-types";

import Icon from "./icon";

import {
  AssetStates,
  BaseCharacterAssetPaths,
  generateSkillIconAssetPath
} from "../data/image-assets";

export default function SkillIcon({
  tree,
  characterClass,
  skillImageReference,
  skillState,
  ...otherProps
}) {
  if (tree && tree.length > 0) {
    console.warn(tree);
  }

  // TODO 
  const alt = null;
  const href = null;

  return (
    <Icon
      alt={alt} 
      href={href} 
    />
  );
}

SkillIcon.propTypes = {
  tree: PropTypes.string
};
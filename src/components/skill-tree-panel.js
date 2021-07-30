import PropTypes from "prop-types";

import SkillIcon from "./skill-icon";

export default function SkillTreePanel({
  treeName = "green"
}) {
  // TODO 
  
  return (    
    <div>
      <SkillIcon
        tree={treeName}
      />
    </div>
  )
}

SkillTreePanel.propTypes = {
  treeName: PropTypes.string
};

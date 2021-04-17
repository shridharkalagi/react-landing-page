import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import RightContentBlockSignup from "./RightContentBlockSignup";

const ContentBlock = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "rightSignup") return <RightContentBlockSignup {...props} />;
  return null;
};

export default ContentBlock;

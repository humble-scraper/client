import { useState } from "react";
import { BundleProps, bundleTest } from "./BundleContentProps";
import Collapsed from "./Collapsed";
import Expanded from "./Expanded";

function Bundle(props: BundleProps): JSX.Element {
  const [showExpanded, setExpanded] = useState(true);

  const open = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      {showExpanded ? (
        <Collapsed {...props} open={open} />
      ) : (
        <div>
          <Collapsed {...props} open={open} />
          <Expanded {...props} open={open} />
        </div>
      )}
    </>
  );
}

export default Bundle;

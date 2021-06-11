import { useState } from "react";
import Collapsed from "./Collapsed";
import Expanded from "./Expanded";

function Bundle(): JSX.Element {
  const [showExpanded, setExpanded] = useState(true);

  const open = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      {showExpanded ? (
        <Collapsed
          open={open}
        />
      ) : (
        <Expanded
          open={open}
        />
      )}
    </>
  );
}

export default Bundle;

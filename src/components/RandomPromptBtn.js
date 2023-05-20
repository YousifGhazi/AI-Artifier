import React from "react";
import { getRandomPrompt } from "@/util/randomPrompt";

const RandomPromptBtn = ({ promptInputRef }) => {
  function handleClick() {
    promptInputRef.current.value = getRandomPrompt();
  }
  return (
    <button className="btn" onClick={handleClick}>
      Random prompt
    </button>
  );
};

export default RandomPromptBtn;

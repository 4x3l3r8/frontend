import React, { useState } from "react"; // eslint-disable-line

/**
 * @param function  callback function
 * @use custom hook to mimic class component constructor behavior
 */
export const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};

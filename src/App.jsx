/* eslint react-hooks/exhaustive-deps: off  */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShoowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShoowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShoowFlag(true);
      } else {
        faceShowFlag && setFaceShoowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！！</h1>

      <ColorfulMessage color="pink"> 元気です </ColorfulMessage>
      <ColorfulMessage color="blue"> 元気ですか？</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />

      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

export default App;

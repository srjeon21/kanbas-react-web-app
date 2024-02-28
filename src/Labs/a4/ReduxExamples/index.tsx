import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./HelloRedux/CounterRedux";
import AddRedux from "./AddRedux";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
    </div>
  );
};

export default ReduxExamples;
import React, { useEffect, useState } from "react";

const CheckList = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <div className="main-container">
      <h1>Are you an Indian? : {answer ? "Yes" : "No"}</h1>
      Are you an Indian?
      <input
        type="checkbox"
        value={answer}
        name="answer"
        onChange={(e) => {
          setAnswer(e.target.checked);
        }}
      />
    </div>
  );
};

export default CheckList;

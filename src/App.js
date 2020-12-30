import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import CV from "./CV";

const App = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    changeLoading();
  }, []);

  const changeLoading = () => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };

  if (!isLoading) {
    return (
      <Loading
        spinOutside={{
          color: "#09f",
          animationTime: 2,
        }}
        spinMiddle={{
          color: "#3cf",
          animationTime: 2,
        }}
        spinInside={{
          color: "#6ff",
          animationTime: 2,
        }}
      />
    );
  }

  return (
    <>
      <CV />  
    </>
  );
};

export default App;

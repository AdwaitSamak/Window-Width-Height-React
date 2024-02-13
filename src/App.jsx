import "./styles.css";
import React from "react";

function useWindowDimensions() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const dimensionsTracker = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", dimensionsTracker);

    return () => {
      window.removeEventListener("resize", dimensionsTracker);
    };
  }, []);

  return {
    width,
    height,
  };
}

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="App">
      <h2>width: {width}</h2>
      <h2>height: {height}</h2>
      <p>Resize the window.</p>
    </div>
  );
}

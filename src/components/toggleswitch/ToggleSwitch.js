import { useState } from "react";

const ToggleSwitch = (props) => {
  const [isOn, setIsOn] = useState(props.defaultChecked || false);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    props?.onToggleChange?.(newValue);
  };

  const styles = {
    switch: {
      position: "relative",
      display: "inline-block",
      width: "40px",
      height: "20px",
      borderRadius: "10px",
      backgroundColor: isOn ? "#2ecc71" : "#ff0000",
    },
    slider: {
      position: "absolute",
      top: "2px",
      left: isOn ? "22px" : "2px",
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      transition: "left 0.2s ease-in-out",
    },
    checkbox: {
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
    },
    titles: {
      position: "absolute",
      top: "2px",
      marginLeft: "50px",
      color: isOn ? "#2ecc71" : "#ff0000",
      fontWeight: "bold",
    },
  };

  return (
    <>
      <label style={styles.switch} className="toggle-switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          disabled={props?.disabled}
          style={styles.checkbox}
        />
        <span style={styles.slider}></span>
        <span style={styles.titles}>
          {isOn ? props?.OnTitle || "On" : props?.OffTitle || "Off"}
        </span>
      </label>
      <br />
    </>
  );
};

export default ToggleSwitch;

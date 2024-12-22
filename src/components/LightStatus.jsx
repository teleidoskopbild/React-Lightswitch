function LightStatus({ isOn, handleLight }) {
  // takes two props here
  return (
    <div className={`light-status ${isOn ? "light-on" : "light-off"}`}>
      {" "}
      {/* sets class of div based on light-Status*/}
      <h2>The light is {isOn ? "ON" : "OFF"}</h2> {/*displays current light*/}
      <button onClick={handleLight}>{isOn ? "Turn OFF" : "Turn ON"}</button>
    </div>
  );
}

export default LightStatus;

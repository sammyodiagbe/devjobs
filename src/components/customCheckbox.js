const CustomCheckbox = ({ htmlForName, text }) => {
  return (
    <label className="custom-label-wrapper" htmlFor={htmlForName}>
      <input type={"checkbox"} className="default-checkbox" id={htmlForName} />
      <span className="custom-checkmark" />
      {text}
    </label>
  );
};

export default CustomCheckbox;

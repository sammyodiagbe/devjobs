const CustomCheckbox = ({ htmlForName }) => {
  return (
    <label className="custom-label wrapper" htmlFor={htmlForName}>
      <input type={"checkbox"} className="default-checkbox" id={htmlForName} />
      <span className="custom-checkmark" />
      Full Time only
    </label>
  );
};

export default CustomCheckbox;

const InputWithIcon = ({ icon, title }) => {
  return (
    <div className="custom-input-wrapper">
      <img src={icon} alt="icon" />
      <input type="text" placeholder={title} className="input" />
    </div>
  );
};

export default InputWithIcon;

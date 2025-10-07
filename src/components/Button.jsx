const Button = ({ text, onClick = () => {} }) => {
  return (
    <button
      className="rounded-lg font-medium text-white bg-tertiary py-3 px-10 text-center text-lg hover:bg-opacity-80 transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
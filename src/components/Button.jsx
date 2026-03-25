const Button = (props) => {
  const { varient, children, className, onClick, href, title } = props;
  if (varient === "link") {
    return (
      <a href={href} target="_blank" title={title}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default Button;

type Props = {
  type: "Primary" | "Secondary" | "Danger";
  title: string;
};
const Button = (props: Props) => {
  const primaryClass = "bg-blue-500";
  const secondaryClass = "bg-gray-500";
  const dangerClass = "bg-red-500";
  const buttonClass =
    props.type === "Primary"
      ? primaryClass
      : props.type === "Secondary"
      ? secondaryClass
      : dangerClass;
  const textClass = `${buttonClass} text-white px-8 py-4 rounded w-full shadow hover:opacity-80 transition-opacity text-center`;
  return <button className={textClass}>{props.title}</button>;
};

export default Button;

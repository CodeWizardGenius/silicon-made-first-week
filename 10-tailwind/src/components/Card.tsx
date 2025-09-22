type Props = {
  gorsel: string;
  name: string;
  aciklama: string;
};

const Card = (props: Props) => {
  return (
    <div className="m-4 bg-white p-4 shadow rounded flex flex-col">
      <span className="text-4xl font-bold">{props.gorsel}</span>
      <span className="text-base">{props.name}</span>
      <span className="text-gray-500">{props.aciklama}</span>
    </div>
  );
};

export default Card;

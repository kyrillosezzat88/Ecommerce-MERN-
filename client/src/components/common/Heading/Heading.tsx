type THeading = {
  title: string;
};
const Heading = ({ title }: THeading) => {
  return <h1 className="font-bold text-2xl mb-10">{title}</h1>;
};

export default Heading;

import { useGlobalContext } from "../context";

const Meals = () => {
  const man = useGlobalContext();

  return <div>Hey {man.name}!</div>;
};

export default Meals;

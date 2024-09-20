import Divider from "../../components/Divider";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Introduction from "./Introduction";
import Nutritions from "./Nutritions";
import PreparationTime from "./PreparationTime";

const Recipe = () => {
  return (
    <div className="bg-cc-white md:rounded-3xl max-w-[736px] h-full mx-auto overflow-hidden">
      <div className="relative md:overflow-hidden md:pt-10 md:px-10">
        <img
          src="/assets/images/image-omelette.jpeg"
          alt="omelette"
          className="w-full h-full md:rounded-xl"
        />
      </div>
      <div className="py-10 px-8 bg-cc-white">
        <Introduction />
        <PreparationTime />
        <Ingredients />
        <Divider />
        <Instructions />
        <Divider />
        <Nutritions />
      </div>
    </div>
  );
};

export default Recipe;

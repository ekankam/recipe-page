import PropTypes from "prop-types";
import { INGREDIENT_LISTS } from "../../utils/contants";
import ListMarker from "./ListMarker";

const IngredientItem = ({ ingredient, index }) => (
  <li className="flex items-center gap-4" key={index}>
    <ListMarker />
    <p className="text-stone-600 font-outfit font-normal text-base">
      {ingredient}
    </p>
  </li>
);

IngredientItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
const Ingredients = () => {
  return (
    <div className="mt-8">
      <h2 className="text-brown-800 font-serif text-[28px] leading-7 mb-6">
        Ingredients
      </h2>
      <ul className="flex flex-col gap-2 mb-8">
        {INGREDIENT_LISTS.map((ingredient, index) => (
          <IngredientItem key={index} ingredient={ingredient} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;

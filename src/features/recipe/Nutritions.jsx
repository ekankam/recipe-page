import PropTypes from "prop-types";
import { NUTRITION_LISTS } from "../../utils/contants";

const NutritionItem = ({ id, label, value, isLast }) => (
  <div
    key={id}
    className={`flex items-center border-b border-stone-150 gap-4 py-3 pl-4 pr-3 ${
      isLast ? "border-b-0" : ""
    }`}
  >
    <div className="text-stone-600 font-outfit text-base leading-6 flex-1">
      {label}
    </div>
    <div className="text-brown-800 font-outfit font-bold leading-6 text-base flex-1">
      {value}
    </div>
  </div>
);

NutritionItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
};

const Nutritions = () => {
  const lastItemIndex = NUTRITION_LISTS.length - 1;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-brown-800 font-serif text-[28px] leading-7">
        Nutrition
      </h2>
      <p className="font-outfit text-base leading-6 text-stone-600">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div>
        {NUTRITION_LISTS.map(({ id, label, value }, index) => (
          <NutritionItem
            key={id}
            id={id}
            label={label}
            value={value}
            isLast={index === lastItemIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Nutritions;

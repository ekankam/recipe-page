import PropTypes from "prop-types";
import { INSTRUCTION_LISTS } from "../../utils/contants";

const InstructionItem = ({ id, label, description, index }) => (
  <li key={id}>
    <div className="flex items-start gap-2">
      <span className="text-brown-800 font-outfit font-bold leading-6 text-base">
        {index + 1}.
      </span>
      <p className="text-stone-600 font-outfit font-normal">
        <span className="font-bold leading-6 text-base">{label} </span>
        {description}
      </p>
    </div>
  </li>
);

InstructionItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
const Instructions = () => {
  return (
    <div>
      <h2 className="text-brown-800 font-serif text-[28px] leading-7 my-6">
        Instructions
      </h2>
      <ul className="flex flex-col gap-4">
        {INSTRUCTION_LISTS.map(({ id, label, description }, index) => (
          <InstructionItem
            key={id}
            id={id}
            label={label}
            description={description}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Instructions;

import PropTypes from "prop-types";
import { PREPARATION_TIME_LISTS } from "../../utils/contants";
import ListMarker from "./ListMarker";

const PreparationTimeItem = ({ id, label, time }) => (
  <li key={id}>
    <div className="flex items-center gap-[22px]">
      <ListMarker />
      <p className="text-stone-600 font-outfit font-normal">
        <span className="font-bold leading-6 text-base">{label} </span>
        {time}
      </p>
    </div>
  </li>
);

PreparationTimeItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

const PreparationTime = () => {
  return (
    <div className="rounded-xl bg-rose-50 p-6 flex flex-col gap-4">
      <p className="text-rose-800 font-outfit font-semibold leading-5 text-xl">
        Preparation time
      </p>
      <ul className="flex flex-col gap-2 mb-8">
        {PREPARATION_TIME_LISTS.map(({ id, label, time }) => (
          <PreparationTimeItem key={id} id={id} label={label} time={time} />
        ))}
      </ul>
    </div>
  );
};

export default PreparationTime;

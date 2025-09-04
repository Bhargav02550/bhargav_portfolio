import PropTypes from 'prop-types';

const TechChip = ({ tech }) => {
  return (
    <>
      <div className="tech-chip gap-2 w-max py-2 px-3 flex justify-center items-center">
        <img
          className="h-4 w-4 object-cover rounded-full"
          src={tech.image}
          alt={tech.name}
        />
        <p className=" text-xs">{tech.name}</p>
      </div>
    </>
  );
};

TechChip.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default TechChip;

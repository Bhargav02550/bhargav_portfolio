import PropTypes from 'prop-types';

const MakeCenter = (props) => {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl min-h-screen flex flex-col justify-center items-center">
        {props.children}
      </div>
    </div>
  );
};

MakeCenter.propTypes = {
  children: PropTypes.node.isRequired
};

export default MakeCenter;

import { FallingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = loading => {
  return (
    <>
      <FallingLines
        visible={loading}
        color="#4fa94d"
        width="100"
        ariaLabel="falling-lines-loading"
        wrapperStyle={{
          display: 'flex',
          margin: '50 auto',
        }}
      />
    </>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

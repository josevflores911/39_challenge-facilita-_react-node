
import React from 'react';

const HomeContainer = ({ children }) => {
  return <div className='flex flex-row h-100px'>{children}</div>;
};

export default HomeContainer;

// import React from 'react';

// const WrapperComponent = ({ WrappedComponent, ...restProps }) => {
//   return <div style={{ border: '1px solid #ccc', padding: '10px' }}><WrappedComponent {...restProps} /></div>;
// };

// export default WrapperComponent;
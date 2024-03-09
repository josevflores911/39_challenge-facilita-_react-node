import React from 'react';

const WrapperComponent = ({ WrappedComponent, ...restProps }) => {
  // You can do additional logic or styling here before rendering the wrapped component
  return <div style={{ border: '1px solid #ccc', padding: '10px' }}><WrappedComponent {...restProps} /></div>;
};

export default WrapperComponent;
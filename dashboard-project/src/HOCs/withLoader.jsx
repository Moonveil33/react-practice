import React from "react";

const withLoader = (WrappedComponent, LoaderComponent = null) => {
  const EnhancedComponent = (props) => {
    const { loading, ...rest } = props;

    const Loader = LoaderComponent || (() => <div>Loading ...</div>);

    if (loading) {
      return <Loader />;
    }

    return <WrappedComponent {...rest} />;
  };
  //   EnhancedComponent.displayName = `WithLoader(${WrappedComponent.name})`;
  return EnhancedComponent;
};

export default withLoader;

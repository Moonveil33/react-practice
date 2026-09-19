// import { forwardRef } from "react";

// const Controlled = (props, ref) => {
//   // Deprecated forwardRef
//   console.log(props);
//   console.log(ref);

//   return (
//     <>
//       <input type="email" ref={ref} />
//     </>
//   );
// };

// export default forwardRef(Controlled);

const Controlled = (props) => {
  console.log(props);

  return (
    <>
      <input type="email" ref={props.ref} />
    </>
  );
};

export default Controlled;

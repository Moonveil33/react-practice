import { useRef } from "react";
import Controlled from "./component/Controlled";
import Textarea from "./component/Textarea";
import UnControlled from "./component/UnControlled";

const App = () => {
  const inputRef = useRef();

  const login = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <Controlled ref={inputRef} />
      <button onClick={login}>Login</button>
      <hr />
      <UnControlled />
      <hr />
      <Textarea />
    </>
  );
};

export default App;

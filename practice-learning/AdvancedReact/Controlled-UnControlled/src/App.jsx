import Controlled from "./component/Controlled";
import Textarea from "./component/Textarea";
import UnControlled from "./component/UnControlled";

const App = () => {
  return (
    <>
      <Controlled />
      <hr />
      <UnControlled />
      <hr />
      <Textarea />
    </>
  );
};

export default App;

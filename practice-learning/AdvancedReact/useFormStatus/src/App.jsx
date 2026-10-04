import SubmitButton from "./components/SubmitButton";

const action = async (formData) => {
  const title = formData.get("title");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(title);
  return title;
};

function App() {
  return (
    <>
      <form action={action}>
        <input type="text" name="title" />
        <SubmitButton />
      </form>
    </>
  );
}

export default App;

import { useState } from "react";
import { useTransition } from "react";

const BigList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

function App({ allItems }) {
  const [filtered, setFiltered] = useState(allItems);
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handler = (e) => {
    const val = e.target.value;
    setValue(val);

    startTransition(() => {
      const filteredItems = allItems.filter((item) =>
        item.name.toLowerCase().includes(val.toLowercase()),
      );

      setFiltered(filteredItems);
    });
  };

  return (
    <>
      <input type="text" value={value} onChange={handler} />

      {isPending ? <div>درحال بارگذاری اطلاعات</div> : null}

      <BigList items={filtered} />
    </>
  );
}

export default App;

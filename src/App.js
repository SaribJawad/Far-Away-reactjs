import Form from "./components/form";
import PackingList from "./components/packingList";
import Stats from "./components/stats";
import Logo from "./components/logo";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm("Are you sure?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        handleClear={handleClearItems}
        onToggle={handleToggleItems}
        onDelete={handleDeleteItems}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

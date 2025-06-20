import { createContext, useState, useContext, useEffect } from "react";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // fetching items from backend
  async function fetchItems() {
    try {
<<<<<<< HEAD
      const res = await fetch("https://products-assignment-backend.onrender.com/api/items");
=======
      const res = await fetch(
        "https://products-assignment-backend.onrender.com/api/items"
      );
>>>>>>> 42de424 (Allow CORS for deployed frontend)
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Failed to load items:", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <ItemContext.Provider value={{ items, setItems, addItem, fetchItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => useContext(ItemContext);

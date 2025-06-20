import { useEffect } from "react";
import ItemCard from "../src/components/itemCard";
import { useItems } from "../src/context/ItemContext";

function ViewItems() {

  const { items } = useItems()

  return items.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 px-32 px-6 md:px-32">
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-600 py-12">Loading...</div>
  );
}
export default ViewItems;

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useItems } from "../src/context/ItemContext";

function AddItems() {
  const [selectedFiles, SetSelectedFiles] = useState();
  const { fetchItems } = useItems();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("📦 Sending:", data);

    try {
<<<<<<< HEAD
      const res = await fetch("https://products-assignment-backend.onrender.com/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
=======
      const res = await fetch(
        "https://products-assignment-backend.onrender.com/api/items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
>>>>>>> 42de424 (Allow CORS for deployed frontend)

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error("failed to add item");
      }
      const result = await res.json();
      console.log(result);
      fetchItems();
      toast.success("Item successfully added");
    } catch (error) {
      console.log(error);
      toast.error("failed to add item");
    }
  }

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="md:border md:border-gray-500 md:mx-[20vw] lg:mx-[30vw] md:my-20 md:rounded-2xl ">
        <div className="flex shadow font-medium justify-center pt-5 pb-3 text-lg">
          List Your Item Here
        </div>
        <div className="px-8 py-5">
          <p className="text-2xl font-medium mb-3">Welcome to E-Store</p>
          <form onSubmit={handleSubmit} className=" mt-5  " action="#!">
            <div className=" border border-gray-500 rounded-lg">
              <input
                className="w-full border-b border-gray-500 py-2.5 px-5"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Product name"
              />
              <textarea
                className="w-full py-2.5 px-5 border-b border-gray-500"
                type="text"
                name="description"
                id="description"
                placeholder="Enter product details"
                rows={2}
              />
              <input
                className="w-full py-2.5 px-5 border-b"
                type="text"
                name="price"
                id="price"
                placeholder="Enter price"
              />
              <select
                id="type"
                name="type"
                required
                className="w-full py-2.5 px-5 border-b"
              >
                <option value="" disabled selected>
                  -- Select type --
                </option>
                <option value="Shirt">Shirt</option>
                <option value="Pant">Pant</option>
                <option value="Shoes">Shoes</option>
                <option value="Sports Gear">Sports Gear</option>
                <option value="Accessory">Accessory</option>
              </select>
              <input
                className="w-full py-2.5 px-5 border-b"
                type="text"
                name="coverImg"
                id="coverImg"
                placeholder="Enter URL of coverImg"
              />
              <input
                className="w-full py-2.5 px-5 border-b"
                type="text"
                name="addImg"
                id="addImg"
                placeholder="Enter URLs of addition images"
              />
            </div>
            <p className="mt-2 text-sm text-gray-700">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply. Privacy Policy
            </p>
            <button className="w-full bg-[#DC0D64] text-white capitalize text-lg my-5 py-2 font-bold rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddItems;

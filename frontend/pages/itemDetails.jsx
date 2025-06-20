import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useItems } from "../src/context/ItemContext";
import { toast, ToastContainer } from "react-toastify";

export default function SingleItem() {
  const { id } = useParams();
  const { items } = useItems();
  const item = items.find((i) => i._id === id);
  const [selectedImage, setSelectedImage] = useState(item?.coverImg || "");
  const [userEmail, setUserEmail] = useState("");


  useEffect(() => {
    if (item) {
      setSelectedImage(item.coverImg || item.addImg?.[0]);
    }
  }, [item]);
const handleEnquire = async () => {
  try {
    const res = await fetch("https://products-assignment-backend.onrender.com/api/enquire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...item, userEmail }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Backend error:", data.error || data.message);
      toast.error("Failed to send enquiry email.");
      return;
    }

    toast.success("Enquiry sent successfully!");
  } catch (err) {
    console.error("Request error:", err.message);
    toast.error("Something went wrong while sending the enquiry.");
  }
};


  if (!item)
    return <div className="text-center text-xl p-8">Item not found</div>;

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="bg-gray-100 px-4 md:px-32 py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Left: Image Gallery */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="flex flex-col items-center gap-4">
                {/* Main Image */}
                <div className="w-full max-w-md h-72 bg-white flex items-center justify-center rounded-xl overflow-hidden shadow">
                  <img
                    src={selectedImage}
                    alt={item.name}
                    className="object-contain h-full w-full"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                  {[item.coverImg, ...(item.addImg || [])].map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => setSelectedImage(img)}
                      className={`size-16 sm:size-20 object-cover rounded-md cursor-pointer transition duration-300 ${
                        selectedImage === img
                          ? "opacity-100 ring-2 ring-indigo-500"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Item Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">Type: {item.type}</p>

              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  ₹{item.price} /-{" "}
                </span>
              </div>

              {/* Static rating display (for now) */}
              <div className="flex items-center mb-4 text-yellow-500 text-lg">
                ★★★★☆
                <span className="ml-2 text-gray-600 text-sm">(45 reviews)</span>
              </div>

              <p className="text-gray-700 mb-6">{item.description}</p>

              <div className="flex space-x-4 mb-6">
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter email"
                  className="px-3 border-2 rounded-md border-indigo-600 outline-none"
                />
                <button
                  onClick={handleEnquire}
                  className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
                >
                  Enquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";

function ItemCard({item}) {

  return (
    <div
      className="flex bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200 overflow-hidden max-w-2xl w-full mx-auto"
    >
      {/* Left: Image */}
      <div className="w-48 h-48 bg-gray-50 flex items-center justify-center p-4">
        <img
          src={item.coverImg}
          alt={item.name}
          className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right: Details */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-1">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {item.description}
          </p>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            Rs {item.price} /-
          </p>
          <div className="inline-block text-sm px-2 py-1 bg-indigo-100 text-indigo-600 font-medium rounded-full">
            {item.type}
          </div>
        </div>

        <Link to={`/item/${item._id}`} className="mt-4 text-right">
          <button className="text-sm text-indigo-600 hover:underline font-medium">
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
}
export default ItemCard;
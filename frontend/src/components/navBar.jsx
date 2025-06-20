import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="flex justify-between px-32 bg-gray-400 text-white py-5 items-center">
      <div className="text-3xl font-bold cursor-pointer">E-Store</div>
      <div className="flex gap-5 text-lg font-bold">
        <Link to={'/'}>View Items</Link>
        <Link to={'/addItems'}>Add Items</Link>
      </div>
    </div>
  );
}
export default NavBar;

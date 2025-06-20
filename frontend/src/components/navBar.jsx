import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="flex justify-between px-5 md:px-32 bg-gray-400 text-white py-5 items-center">
      <div className="md:text-3xl text-xl font-bold cursor-pointer">E-Store</div>
      <div className="flex gap-5 text-md md:text-lg font-bold">
        <Link to={'/'}>View Items</Link>
        <Link to={'/addItems'}>Add Items</Link>
      </div>
    </div>
  );
}
export default NavBar;

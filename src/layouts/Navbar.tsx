import { Link } from "react-router";
import logo from "../assets/reshot-icon-hops-hand-Q3B5XHGVRL.svg"
const Navbar = () => {
    return (
      <div className="mt-2 flex items-center space-x-2">
        <div>
          <img className="w-10 h-10" src={logo} alt="" />
        </div>

        <div className="flex justify-between space-x-2">
          <Link to="/tasks">Tasks</Link>
          <Link to="/users">users</Link>
        </div>
        
      </div>
    );
};

export default Navbar;
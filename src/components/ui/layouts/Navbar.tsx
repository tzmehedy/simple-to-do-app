import { Link } from "react-router";
import logo from "../../../assets/reshot-icon-hops-hand-Q3B5XHGVRL.svg"
import { ModeToggle } from "@/components/ui/mode-toggle";
const Navbar = () => {
    return (
      <div className="mt-2 flex justify-between items-center space-x-2">
        <Link to="/" className="flex  items-center space-x-2">
          <img className="w-10 h-10" src={logo} alt="" />
          <h1>Task Manager</h1>
        </Link>

        <div className="flex justify-between space-x-2">
          <Link to="/tasks">Tasks</Link>
          <Link to="/users">users</Link>
        </div>

        <div>
            <ModeToggle></ModeToggle>
        </div>

      </div>
    );
};

export default Navbar;
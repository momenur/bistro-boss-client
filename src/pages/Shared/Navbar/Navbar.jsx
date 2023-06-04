import { Link } from "react-router-dom";

const Navbar = () => {
    const navOptions = <>
        <li><a><Link to='/'>Home</Link></a></li>
        <li><a><Link to='/menu'>Our Menu</Link></a></li>
        <li><a><Link to='/order'>Order</Link></a></li>
    </>
    return (
        <div>
            <div className="fixed z-20 max-w-screen-xl text-white bg-black bg-opacity-50 navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
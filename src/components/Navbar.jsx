// import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import avatarImg from "../assets/placeholder.jpg";
import logo from "../assets/logo.png";
import Container from "./common/Container";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `tab hover:underline ${isActive ? "text-primary" : ""}`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/add-article"
                className={({ isActive }) =>
                    `tab hover:underline ${isActive ? "text-primary" : ""}`
                }
            >
                Add Articles
            </NavLink>
            <NavLink
                to="/all-articles"
                className={({ isActive }) =>
                    `tab hover:underline ${isActive ? "text-primary" : ""}`
                }
            >
                All Articles
            </NavLink>
            <NavLink
                to="/subscription"
                className={({ isActive }) =>
                    `tab hover:underline ${isActive ? "text-primary" : ""}`
                }
            >
                Subscription
            </NavLink>
            <NavLink
                to="/my-articles"
                className={({ isActive }) =>
                    `tab hover:underline ${isActive ? "text-primary" : ""}`
                }
            >
                My Articles
            </NavLink>
            <NavLink
                to="/premium-articles"
                className={({ isActive }) =>
                    `tab hover:underline ${isActive ? "text-primary" : ""}`
                }
            >
                Premium Articles
            </NavLink>
        </>
    );

    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
                        {/* Logo */}
                        <Link to="/">
                            <img className="w-10 h-10" src={logo} alt="logo" />{" "}
                            <span className="text-indigo-600">InsightArc</span>
                        </Link>

                        <div className="hidden md:flex flex-row gap-3">
                            {links}
                        </div>
                        {/* Dropdown Menu */}
                        <div className="relative">
                            <div className="flex flex-row items-center gap-3">
                                {/* Dropdown btn */}
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                                >
                                    <AiOutlineMenu />
                                    <div className="hidden md:block">
                                        {/* Avatar */}
                                        <img
                                            className="w-10 h-10 object-cover rounded-full"
                                            referrerPolicy="no-referrer"
                                            src={
                                                user && user.photoURL
                                                    ? user.photoURL
                                                    : avatarImg
                                            }
                                            alt="profile"
                                            height="30"
                                            width="30"
                                        />
                                    </div>
                                </div>
                            </div>
                            {isOpen && (
                                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                                    <div className="flex flex-col cursor-pointer">
                                        <div className="flex flex-col md:hidden gap-3">
                                            {links}
                                        </div>

                                        <Link
                                            to="/"
                                            className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                        >
                                            Home
                                        </Link>

                                        {user ? (
                                            <>
                                                <Link
                                                    to="/dashboard"
                                                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                                >
                                                    Dashboard
                                                </Link>
                                                <div
                                                    onClick={logOut}
                                                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                                                >
                                                    Logout
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <Link
                                                    to="/login"
                                                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                                >
                                                    Login
                                                </Link>
                                                <Link
                                                    to="/signup"
                                                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                                >
                                                    Sign Up
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;

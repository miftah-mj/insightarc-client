import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BsGraphUp } from "react-icons/bs";

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsGraphUp}
                label="Statistics"
                address="/dashboard"
            />
            <MenuItem
                icon={FaUserCog}
                label="All Users"
                address="all-users"
            />
            <MenuItem
                icon={FaUserCog}
                label="All Articles"
                address="all-articles"
            />
        </>
    );
};

export default AdminMenu;

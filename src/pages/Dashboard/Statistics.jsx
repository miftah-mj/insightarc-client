import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import AdminStatistics from "../../components/AdminStatistics";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import useRole from "../../hooks/useRole";

const Statistics = () => {
    const [role, isLoading] = useRole();

    if (role == "customer") return <Navigate to="/dashboard/my-orders" />;
    if (role == "seller") return <Navigate to="/dashboard/my-inventory" />;
    if (isLoading) return <LoadingSpinner />;

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            {role === "admin" && <AdminStatistics />}
        </div>
    );
};

export default Statistics;

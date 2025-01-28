import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../common/LoadingSpinner";
import Container from "../common/Container";

const UserStatistics = () => {
    // const axiosSecure = useAxiosSecure();
    const [userCounts, setUserCounts] = useState({
        allUsers: 0,
        normalUsers: 0,
        premiumUsers: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserCounts = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/all-users`
                );
                const users = response.data;

                const allUsers = users.length;
                // const normalUsers = users.filter(
                //     (user) => !user.userHasSubscription
                // ).length;
                // const premiumUsers = users.filter(
                //     (user) => user.userHasSubscription
                // ).length;

                // setUserCounts({ allUsers, normalUsers, premiumUsers });
                setUserCounts({ allUsers });
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching user statistics:", error);
                setIsLoading(false);
            }
        };

        fetchUserCounts();
    }, []);

    if (isLoading) return <LoadingSpinner />;

    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl font-bold">Users</h2>
                    <CountUp
                        end={userCounts.allUsers}
                        duration={2.5}
                        className="text-3xl font-bold text-indigo-500"
                    />
                </div>
                {/* <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold">Normal Users</h2>
                    <CountUp
                        end={userCounts.normalUsers}
                        duration={2.5}
                        className="text-3xl font-bold"
                    />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold">Premium Users</h2>
                    <CountUp
                        end={userCounts.premiumUsers}
                        duration={2.5}
                        className="text-3xl font-bold"
                    />
                </div> */}
            </div>
        </Container>
    );
};

export default UserStatistics;

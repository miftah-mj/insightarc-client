import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../common/LoadingSpinner";
import Container from "../common/Container";

const AllPublishers = () => {
    const { data: publishers, isLoading } = useQuery({
        queryKey: ["publishers"],
        queryFn: async () => {
            const response = await axios(
                `${import.meta.env.VITE_API_URL}/publishers`
            );
            return response.data;
        },
    });
    console.log("publishers", publishers);

    if (isLoading) return <LoadingSpinner />;

    return (
        <>
            <Container>
                <h1 className="text-4xl font-bold text-center mb-8">
                    All Publishers
                </h1>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {publishers.map((publisher) => (
                        <div
                            key={publisher._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                className="w-full h-56 object-cover object-center"
                                src={publisher.logo}
                                alt={publisher.publisherName}
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold">
                                    {publisher.publisherName}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default AllPublishers;

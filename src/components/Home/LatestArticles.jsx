import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../common/LoadingSpinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../common/Container";
import Card from "../Card";

const LatestArticles = () => {
    const axiosSecure = useAxiosSecure();

    const { data: articles, isLoading } = useQuery({
        queryKey: ["articles"],
        queryFn: async () => {
            const response = await axiosSecure(
                `${import.meta.env.VITE_API_URL}/latest-articles`
            );
            return response.data;
        },
    });
    if (isLoading) return <LoadingSpinner />;

    return (
        <Container>
            <h2 className="text-3xl font-bold text-gray-800 text-center">
                Latest Articles
            </h2>

            {articles && articles.length > 0 ? (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {articles.map((article) => (
                        <Card key={article._id} article={article} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-lg text-gray-500 mt-12">
                    No articles found
                </div>
            )}
        </Container>
    );
};

export default LatestArticles;

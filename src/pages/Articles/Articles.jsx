import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "../../components/Card";
import Container from "../../components/common/Container";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const Articles = () => {
    const { data: articles, isLoading } = useQuery({
        queryKey: ["articles"],
        queryFn: async () => {
            const response = await axios(
                `${import.meta.env.VITE_API_URL}/articles`
            );
            return response.data;
        },
    });
    console.log(articles);

    if (isLoading) return <LoadingSpinner />;

    return (
        <Container>
            {articles && articles.length > 0 ? (
                <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
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

export default Articles;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Card from "../../components/Card";
import Container from "../../components/common/Container";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const Articles = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const { data: articles, isLoading } = useQuery({
        queryKey: ["articles", searchTerm],
        queryFn: async () => {
            const response = await axios(
                `${import.meta.env.VITE_API_URL}/articles?search=${searchTerm}`
            );
            return response.data;
        },
    });
    if (isLoading) return <LoadingSpinner />;

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    return (
        <Container>
            <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-1/2 mb-4 p-2 px-4 border border-indigo-600 rounded"
            />
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

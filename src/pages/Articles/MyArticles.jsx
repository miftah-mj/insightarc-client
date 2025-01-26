import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
// import Modal from '../../components/common/Modal';

const MyArticles = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    // const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const {
        data: articles = {},
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["articles", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(
                `/user-articles`
            );
            return data;
        },
    });
    console.log(articles);

    if (isLoading) return <LoadingSpinner />;

    // const handleDelete = async (id) => {
    //     try {
    //         await axiosSecure.delete(`/articles/${id}`);
    //         setArticles(articles.filter(article => article._id !== id));
    //     } catch (error) {
    //         console.error('Error deleting article:', error);
    //     }
    // };

    const handleUpdate = (id) => {
        navigate(`/update-article/${id}`);
    };

    const handleDetails = (id) => {
        navigate(`/article/${id}`);
    };

    const handleViewReason = (article) => {
        setSelectedArticle(article);
    };

    return (
        <>
            <Helmet>
                <title>My Articles | InsightArc</title>
            </Helmet>
            

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">My Articles</h1>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2"></th>
                            <th className="py-2">Title</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Premium</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article, index) => (
                            <tr key={article._id}>
                                <td className="py-2">{index + 1}</td>
                                <td className="py-2">{article.title}</td>
                                <td className="py-2">
                                    {article.status === "approved" &&
                                        "Approved"}
                                    {article.status === "declined" && (
                                        <>
                                            Declined
                                            <button
                                                className="ml-2 text-blue-500"
                                                onClick={() =>
                                                    handleViewReason(article)
                                                }
                                            >
                                                View Reason
                                            </button>
                                        </>
                                    )}
                                    {article.status === "pending" && "Pending"}
                                </td>
                                <td className="py-2">
                                    {article.isPremium ? "Yes" : "No"}
                                </td>
                                <td className="py-2">
                                    <button
                                        className="text-blue-500 mr-2"
                                        onClick={() =>
                                            handleDetails(article._id)
                                        }
                                    >
                                        Details
                                    </button>
                                    <button
                                        className="text-green-500 mr-2"
                                        onClick={() =>
                                            handleUpdate(article._id)
                                        }
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="text-red-500"
                                        onClick={() =>
                                            handleDelete(article._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* {selectedArticle && (
                <Modal onClose={() => setSelectedArticle(null)}>
                    <h2 className="text-xl font-bold mb-4">Decline Reason</h2>
                    <p>{selectedArticle.declineReason}</p>
                </Modal>
            )} */}
            </div>
        </>
    );
};

export default MyArticles;

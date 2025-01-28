import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import UpdateArticleModal from "./modal/UpdateArticleModal";
import DeleteModal from "./modal/DeleteModal";

const MyArticlesDataRow = ({ articles, article, refetch }) => {
    const { title, status, publisher, isPremium, _id } = article || {};
    console.log(article);

    const axiosSecure = useAxiosSecure();

    // delete modal
    let [isOpen, setIsOpen] = useState(false);
    //update modal
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    // Delete a article
    const handleDelete = async () => {
        try {
            console.log("Deleted: ", _id);
            await axiosSecure.delete(`/articles/${_id}`);
            // Call refetch to update the UI
            refetch();
            toast.success("article deleted successfully!");
        } catch (err) {
            console.log(err);
            toast.error(err.response.data);
        } finally {
            closeModal();
        }
    };

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {/* serial no */}
                    {articles.indexOf(article) + 1}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{title}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <Link
                    to={`/articles/${_id}`}
                    className="btn text-indigo-600 hover:text-indigo-900"
                >
                    Details
                </Link>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p
                    className={`whitespace-no-wrap ${
                        status === "approved"
                            ? "text-green-600"
                            : "text-orange-600"
                    }`}
                >
                    {status}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {publisher.publisherName}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {isPremium ? "Yes" : "No"}
                </p>
            </td>

            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-indigo-900 leading-tight"
                >
                    <span className="absolute cursor-pointer inset-0 bg-blue-200 opacity-50 rounded-full"></span>
                    <span className="relative cursor-pointer">Update</span>
                </button>
                {/* Update Modal */}
                <UpdateArticleModal
                    isOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                />
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button
                    onClick={openModal}
                    className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-indigo-900 leading-tight"
                >
                    <span className="absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full"></span>
                    <span className="relative cursor-pointer">Delete</span>
                </button>

                <DeleteModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    handleDelete={handleDelete}
                />
            </td>
        </tr>
    );
};

MyArticlesDataRow.propTypes = {
    articles: PropTypes.array.isRequired,
    article: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
};
export default MyArticlesDataRow;

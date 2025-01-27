import { Helmet } from "react-helmet-async";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AddArticleForm from "../../components/forms/AddArticleForm";
import { uploadImage } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddArticle = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    // const [publisher, setPublisher] = useState(null);
    const [tags, setTags] = useState([]);
    const [imageUpload, setImageUpload] = useState({ name: "Choose File" });
    const [uploading, setUploading] = useState(false);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        const form = e.target;
        const title = form.title.value;
        const publisher = form.publisher.value;
        // const tags = form.tags.value;
        const description = form.description.value;
        const image = form.image.files[0];
        // Upload image
        const imageUrl = await uploadImage(image);

        // author Info
        const author = {
            name: user.displayName,
            image: user.photoURL,
            email: user.email,
        };

        // Create article object
        const article = {
            title,
            publisher,
            tags: tags.map((tag) => tag.value),
            description,
            isPremium: false,
            image: imageUrl,
            author,
            viewCount: 0, // initially 0
            status: "pending",
        };
        console.table(article);

        // Save article data to the database
        try {
            await axiosSecure.post("/articles", article);
            toast.success("article added successfully!");
            navigate("/articles");
        } catch (err) {
            console.log(err);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Add Article | InsightArc</title>
            </Helmet>

            {/* Form */}
            <AddArticleForm
                handleSubmit={handleSubmit}
                imageUpload={imageUpload}
                setImageUpload={setImageUpload}
                uploading={uploading}
                tags={tags}
                setTags={setTags}
            />
        </div>
    );
};

export default AddArticle;

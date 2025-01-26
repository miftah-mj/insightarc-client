import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";

const Card = ({ article }) => {
    const {
        _id,
        title,
        image,
        publisher,
        tags,
        description,
        isPremium,
        userHasSubscription,
    } = article;
    const navigate = useNavigate();

    return (
        <div
            className={`col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl ${
                isPremium ? "bg-yellow-100" : "bg-white"
            }`}
        >
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <img
                        className="object-cover h-full w-full group-hover:scale-110 transition"
                        src={image}
                        alt={title}
                    />
                    <div className="absolute top-3 right-3"></div>
                </div>
                <div className="font-semibold text-lg">{title}</div>
                <div className="font-semibold text-lg">
                    Publisher: {publisher}
                </div>
                <div className="text-gray-700">
                    {`${description.slice(0, 50)}...`}
                </div>
                <div className="font-medium text-md">
                    {tags.map((tag, index) => (
                        <span key={index} className="mr-2">
                            #{tag}
                        </span>
                    ))}
                </div>
                {/* <button
                        className={`mt-2 p-2 rounded ${
                            isPremium && !userHasSubscription
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-blue-500 text-white"
                        }`}
                        disabled={isPremium && !userHasSubscription}
                    >
                        {isPremium && !userHasSubscription
                            ? "Subscribe to view"
                            : "View Details"}
                    </button> */}

                <Button
                    label={"Details"}
                    disabled={isPremium && !userHasSubscription}
                    onClick={() => navigate(`/article/${_id}`)}
                />
            </div>
        </div>
    );
};

Card.propTypes = {
    article: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        // isPremium: PropTypes.bool.isRequired,
        // userHasSubscription: PropTypes.bool.isRequired,
    }).isRequired,
};

export default Card;

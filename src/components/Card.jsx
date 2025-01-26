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
    // console.log(article);
    const navigate = useNavigate();

    return (
        <div className="col-span-1 group shadow-xl p-3 rounded-xl flex flex-col justify-between gap-2 w-full">
            <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                <img
                    className="object-cover h-full w-full group-hover:scale-110 transition"
                    src={image}
                    alt={title}
                />
                <div className="absolute top-3 right-3 text-white">
                    {isPremium && !userHasSubscription && (
                        <span className="bg-orange-500 p-1 rounded">
                            Premium
                        </span>
                    )}
                </div>
            </div>

            <div className="flex-grow">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="font-semibold text-md">Publisher: {publisher}</p>
                <p className="text-gray-700 break-words">
                    {`${description.slice(0, 50)}...`}
                </p>
                <h5 className="font-medium text-md">
                    {tags.map((tag, index) => (
                        <span key={index} className="mr-2">
                            #{tag}
                        </span>
                    ))}
                </h5>
            </div>

            <div>
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
        isPremium: PropTypes.bool,
        // userHasSubscription: PropTypes.bool,
    }).isRequired,
};

export default Card;

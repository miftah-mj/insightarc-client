import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ article }) => {
    const { _id, title, image, publisher, tags } = article || {};

    return (
        <Link
            to={`/article/${_id}`}
            className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
        >
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <img
                        className="object-cover h-full w-full group-hover:scale-110 transition"
                        src={image}
                        alt="Plant Image"
                    />
                    <div className="absolutetop-3right-3"></div>
                </div>
                <div className="font-semibold text-lg">{title}</div>
                <div className="font-semibold text-lg">
                    Publisher: {publisher}
                </div>
                <div className="font-semibold text-lg">
                    {tags.map((tag, index) => (
                        <span key={index} className="mr-2">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    article: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default Card;

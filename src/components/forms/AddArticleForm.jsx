import PropTypes from "prop-types";
import { TbFidgetSpinner } from "react-icons/tb";
import Select from "react-select";

const publishers = [
    { value: "publisher1", label: "Publisher 1" },
    { value: "publisher2", label: "Publisher 2" },
    { value: "publisher3", label: "Publisher 3" },
    { value: "publisher4", label: "Publisher 4" },
];

const tagOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'science', label: 'Science' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
];

const AddArticleForm = ({
    handleSubmit,
    imageUpload,
    setImageUpload,
    uploading,
    publisher,
    setPublisher,
    tags,
    setTags,
}) => {
    return (
        <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 p-4 lg:p-0">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl space-y-6"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        {/* Title */}
                        <div className="space-y-1 text-sm">
                            <label
                                htmlFor="title"
                                className="block text-gray-600"
                            >
                                Title
                            </label>
                            <input
                                className="w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white"
                                name="title"
                                id="title"
                                type="text"
                                placeholder="Article Title"
                                required
                            />
                        </div>
                        {/* Publisher */}
                        <div className="space-y-1 text-sm">
                            <label
                                htmlFor="publisher"
                                className="block text-gray-600 "
                            >
                                Publisher
                            </label>

                            <Select
                                options={publishers}
                                value={publisher}
                                onChange={setPublisher}
                                className="w-full border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="space-y-1 text-sm">
                            <label
                                htmlFor="description"
                                className="block text-gray-600"
                            >
                                Description
                            </label>

                            <textarea
                                id="description"
                                placeholder="Write article description here..."
                                className="block rounded-md focus:indigo-300 w-full h-32 px-4 py-3 text-gray-800  border border-indigo-300 bg-white focus:outline-indigo-500 "
                                name="description"
                            ></textarea>
                        </div>
                    </div>

                    <div className="space-y-6 flex flex-col">
                        <div className="form-control space-y-1 text-sm">
                            <label
                                htmlFor="quantity"
                                className="block text-gray-600"
                            >
                                Tags
                            </label>
                            <Select
                                options={tagOptions}
                                isMulti
                                value={tags}
                                onChange={setTags}
                                className="w-full text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white"
                                required
                            />
                        </div>

                        {/* Image */}
                        <div className="w-full m-auto rounded-lg flex-grow pt-4">
                            <div className="file_upload px-5 py-3 relative border-4 border-dashed border-gray-300 rounded-lg">
                                <div className="flex flex-col w-max mx-auto text-center">
                                    <label>
                                        <input
                                            className="text-sm cursor-pointer w-36 hidden"
                                            type="file"
                                            name="image"
                                            id="image"
                                            accept="image/*"
                                            hidden
                                            onChange={(e) => {
                                                setImageUpload({
                                                    image: e.target.files[0],
                                                    url: URL.createObjectURL(
                                                        e.target.files[0]
                                                    ),
                                                });
                                            }}
                                        />
                                        <div className="bg-indigo-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                                            {imageUpload?.image?.name ||
                                                "Choose File"}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {imageUpload && imageUpload?.image?.size && (
                            <div className="flex gap-6 items-center justify-center">
                                <img
                                    className="w-20"
                                    src={imageUpload?.url}
                                    alt=""
                                />
                                <p className="text-sm text-gray-500 text-center">
                                    Image size:{" "}
                                    {(imageUpload.image.size / 1024).toFixed(2)}{" "}
                                    KB
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-indigo-500 "
                >
                    {uploading ? (
                        <TbFidgetSpinner className="animate-spin m-auto" />
                    ) : (
                        "Save & Continue"
                    )}
                </button>
            </form>
        </div>
    );
};

AddArticleForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    imageUpload: PropTypes.object,
    setImageUpload: PropTypes.func.isRequired,
    uploading: PropTypes.bool.isRequired,
    // publisher: PropTypes.object.isRequired,
    setPublisher: PropTypes.func.isRequired,
    // tags: PropTypes.array.isRequired,
    setTags: PropTypes.func.isRequired,
};
export default AddArticleForm;

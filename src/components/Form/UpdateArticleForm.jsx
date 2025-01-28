const UpdateArticleForm = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
            <form>
                <div className="grid grid-cols-1 gap-10">
                    <div className="space-y-6">
                        {/* Title */}
                        <div className="space-y-1 text-sm">
                            <label
                                htmlFor="name"
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
                        {/* Publisher */}
                        <div className="flex justify-between gap-2">
                            {/* Price */}
                            <div className="space-y-1 text-sm">
                                <label
                                    htmlFor="publisher"
                                    className="block text-gray-600 "
                                >
                                    Publisher
                                </label>
                                <input
                                    className="w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white"
                                    name="publisher"
                                    id="publisher"
                                    type="number"
                                    placeholder="Publisher"
                                    required
                                />
                            </div>

                            {/* Tags */}
                            <div className="space-y-1 text-sm">
                                <label
                                    htmlFor="tags"
                                    className="block text-gray-600"
                                >
                                    tags
                                </label>
                                <input
                                    className="w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white"
                                    name="tags"
                                    id="tags"
                                    type="number"
                                    placeholder="Tags"
                                    required
                                />
                            </div>
                        </div>
                        {/* Image */}
                        <div className=" p-4  w-full  m-auto rounded-lg flex-grow">
                            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                                <div className="flex flex-col w-max mx-auto text-center">
                                    <label>
                                        <input
                                            className="text-sm cursor-pointer w-36 hidden"
                                            type="file"
                                            name="image"
                                            id="image"
                                            accept="image/*"
                                            hidden
                                        />
                                        <div className="bg-indigo-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                                            Upload Image
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-indigo-500 "
                        >
                            Update Article
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateArticleForm;

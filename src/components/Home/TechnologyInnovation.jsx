
const TechnologyInnovation = () => {
    const techTopics = [
        {
            id: 1,
            title: "The Rise of AI in Everyday Life",
            description: "Exploring how AI is transforming various industries.",
            link: "https://example.com/article1",
        },
        {
            id: 2,
            title: "Startups to Watch in 2025",
            description: "A look at the most promising startups this year.",
            link: "https://example.com/article2",
        },
        {
            id: 3,
            title: "Understanding Large Language Models (LLMs)",
            description: "An in-depth guide to LLMs and their applications.",
            link: "https://example.com/article3",
        },
        {
            id: 4,
            title: "The Future of IoT",
            description: "How IoT is shaping the future of connected devices.",
            link: "https://example.com/article4",
        },
        {
            id: 5,
            title: "Cloud Computing Trends in 2025",
            description: "Emerging trends in cloud computing and their impact.",
            link: "https://example.com/article5",
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Technology & Innovation
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    AI, software, startups, and industry trends. Emerging tech
                    topics such as LLMs, IoT, and Cloud Computing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {techTopics.map((topic) => (
                        <div
                            key={topic.id}
                            className="bg-white p-6 rounded-lg shadow-md flex flex-col"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {topic.title}
                            </h3>
                            <p className="text-gray-600 mb-4 flex-grow">
                                {topic.description}
                            </p>
                            <a
                                href={topic.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnologyInnovation;

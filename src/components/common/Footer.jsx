const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-3xl text-black font-grenze font-bold">
                            InsightArc
                        </h1>
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} InsightArc. All
                            rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="/"
                            className="text-gray-500 hover:text-indigo-600"
                        >
                            Home
                        </a>
                        <a
                            href="/articles"
                            className="text-gray-500 hover:text-indigo-600"
                        >
                            All Articles
                        </a>
                        <a
                            href="/subscription"
                            className="text-gray-500 hover:text-indigo-600"
                        >
                            Subscription
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-600"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

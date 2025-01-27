// import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { useEffect } from "react";
import Container from "../../components/common/Container";
import Heading from "../../components/common/Heading";

const ArticleDetails = () => {
    const { id } = useParams();
    console.log(id);
    const queryClient = useQueryClient();

    const { data: article = {}, isLoading } = useQuery({
        queryKey: ["article", id],
        queryFn: async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/articles/${id}`
            );
            return data;
        },
    });
    console.log(article);

    useEffect(() => {
        const updateViewCount = async () => {
            try {
                await axios.patch(
                    `${import.meta.env.VITE_API_URL}/articles/${id}/view`
                );
                queryClient.invalidateQueries(["article", id]);
            } catch (err) {
                console.log("Failed to update view count", err);
            }
        };

        if (id) {
            updateViewCount();
        }
    }, [id, queryClient]);

    if (isLoading) return <LoadingSpinner />;

    const {
        _id,
        title,
        image,
        publisher,
        tags,
        description,
        viewCount,
        isPremium,
        userHasSubscription,
        author,
    } = article;
    // console.log(article);

    return (
        <>
            <Helmet>
                <title>{title} | InsightArc</title>
            </Helmet>

            <Container>
                <div className="w-full gap-12">
                    <div className="flex justify-between items-center">
                        <Heading
                            title={title}
                            subtitle={`Publisher: ${publisher}`}
                        />
                        <p>Views: {viewCount}</p>
                    </div>
                    {/* Image */}
                    <div className="w-full h-72 overflow-hidden rounded-md my-8">
                        <img
                            className="object-cover w-full h-full"
                            src={image}
                            alt={title}
                        />
                    </div>

                    <div className="md:gap-10 flex-1">
                        {/* article Info */}
                        <div className="text-lg font-light text-neutral-500">
                            {description}
                        </div>
                        <hr className="my-6" />

                        <div className="text-xl font-semibold flex flex-row items-center gap-2">
                            <h4>Article Writter: {author?.name}</h4>
                            <img
                                className="rounded-full"
                                height="30"
                                width="30"
                                alt="Avatar"
                                referrerPolicy="no-referrer"
                                src={author?.image}
                            />
                        </div>
                        <hr className="my-6" />
                        <div>
                            <p className="gap-4 font-light text-neutral-500">
                                Publisher: {publisher}
                            </p>
                        </div>
                        <div>
                            <p className="gap-4 font-light text-neutral-500">
                                <div className="font-semibold text-lg">
                                    {tags.map((tag, index) => (
                                        <span key={index} className="mr-2">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ArticleDetails;

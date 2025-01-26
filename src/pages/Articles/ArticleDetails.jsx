// import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { useEffect } from "react";
import Container from "../../components/common/Container";

const ArticleDetails = () => {
    const { id } = useParams();
    console.log(id);
    const queryClient = useQueryClient();

    const {
        data: article = {},
        isLoading,
        refetch,
    } = useQuery({
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
            } catch (error) {
                console.error("Failed to update view count", error);
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
        isPremium,
        userHasSubscription,
        articleUser,
    } = article;

    return (
        <Container>
            <Helmet>
                <title>{title} | InsightArc</title>
            </Helmet>

            <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12">
                {/* Header */}
                <div className="flex flex-col gap-6 flex-1">
                    <div>
                        <div className="w-full overflow-hidden rounded-xl">
                            <img
                                className="object-cover w-full"
                                src={image}
                                alt="header image"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:gap-10 flex-1">
                    {/* article Info */}
                    {/* <Heading title={name} subtitle={`Category: ${category}`} /> */}
                    <hr className="my-6" />
                    <div className="text-lg font-light text-neutral-500">
                        {description}
                    </div>
                    <hr className="my-6" />

                    <div className="text-xl font-semibold flex flex-row items-center gap-2">
                        <h4>Article Writter: {articleUser?.name}</h4>
                        <img
                            className="rounded-full"
                            height="30"
                            width="30"
                            alt="Avatar"
                            referrerPolicy="no-referrer"
                            src={articleUser?.image}
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
    );
};

export default ArticleDetails;

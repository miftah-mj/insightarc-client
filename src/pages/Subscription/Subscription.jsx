import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Container from "../../components/common/Container";

const Subscription = () => {
    const [subscriptionPeriod, setSubscriptionPeriod] = useState("");
    const navigate = useNavigate();

    const handleSubscription = () => {
        // Navigate to the payment page
        navigate("/payment", { state: { subscriptionPeriod } });
    };

    return (
        <>
            <Helmet>
                <title>Subscription | InsightArc</title>
            </Helmet>

            <Container>
                {/* Banner */}
                <div className="relative w-full h-64 bg-indigo-600 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">
                        Subscribe Now! ✨🚀
                    </h1>
                </div>

                <div className="mt-8 text-center">
                    <h2 className="text-4xl font-bold">Choose Your Plan</h2>
                    <p className="mt-4">
                        Select a subscription plan that suits you best.
                    </p>
                </div>

                <div className="subscription-form mt-8 max-w-md mx-auto">
                    <label
                        htmlFor="subscriptionPeriod"
                        className="block text-lg font-medium"
                    >
                        Subscription Period
                    </label>
                    <select
                        id="subscriptionPeriod"
                        value={subscriptionPeriod}
                        onChange={(e) => setSubscriptionPeriod(e.target.value)}
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="" disabled>
                            Select a period
                        </option>
                        <option value="1 minute">1 minute - $1</option>
                        <option value="5 days">5 days - $10</option>
                        <option value="10 days">10 days - $18</option>
                    </select>

                    <button
                        onClick={handleSubscription}
                        className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Subscribe
                    </button>
                </div>
            </Container>
        </>
    );
};

export default Subscription;

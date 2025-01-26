import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
    const [subscriptionPeriod, setSubscriptionPeriod] = useState("");
    const navigate = useNavigate();

    const handleSubscription = () => {
        // Navigate to the payment page
        navigate("/payment", { state: { subscriptionPeriod } });
    };

    return (
        <div className="subscription-page">
            <div className="banner">
                <h1 className="text-4xl font-bold text-center">
                    Subscribe Now!
                </h1>
                <p className="text-center mt-4">
                    Choose a subscription plan that suits you best.
                </p>
            </div>
            <div className="subscription-form mt-8">
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
                    className="mt-2 p-2 border border-gray-300 rounded"
                >
                    <option value="">Select a period</option>
                    <option value="1 minute">1 minute</option>
                    <option value="5 days">5 days</option>
                    <option value="10 days">10 days</option>
                </select>
                <button
                    onClick={handleSubscription}
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                    Take Subscription
                </button>
            </div>
        </div>
    );
};

export default Subscription;

import { Helmet } from "react-helmet-async";
import TrendingSlider from "../../components/slider/TrendingSlider";
import AllPublishers from "../../components/Home/AllPublishers";
import UserStatistics from "../../components/Home/UserStatistics";
import Plans from "../../components/Home/Plans";

const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>InsightArc | Home</title>
            </Helmet>

            <TrendingSlider />
            <AllPublishers />
            <UserStatistics />
            <Plans />
        </div>
    );
};

export default Homepage;

import { Helmet } from "react-helmet-async";
import TrendingSlider from "../../components/slider/TrendingSlider";
import AllPublishers from "../../components/Home/AllPublishers";

const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>InsightArc | Home</title>
            </Helmet>

            <TrendingSlider />
            <AllPublishers />
        </div>
    );
};

export default Homepage;

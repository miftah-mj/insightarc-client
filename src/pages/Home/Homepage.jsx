import { Helmet } from "react-helmet-async";
import TrendingSlider from "../../components/slider/TrendingSlider";

const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>InsightArc | Home</title>
            </Helmet>

            <TrendingSlider />
        </div>
    );
};

export default Homepage;

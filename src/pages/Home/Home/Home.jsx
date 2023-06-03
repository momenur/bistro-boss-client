import { Helmet} from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import MenuItems from "../MenuItems/MenuItems";
import OrderOnline from "../OrderOnline/OrderOnline";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <MenuItems></MenuItems>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
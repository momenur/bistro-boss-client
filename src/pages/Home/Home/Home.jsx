import Banner from "../Banner/Banner";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import MenuItems from "../MenuItems/MenuItems";
import OrderOnline from "../OrderOnline/OrderOnline";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <MenuItems></MenuItems>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;
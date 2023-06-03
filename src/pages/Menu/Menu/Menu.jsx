import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const sopu = menu.filter(item => item.category === 'sopu')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* Main Cover*/}
            <Cover coverImg={menuImg} coverTitle="Our Menu"></Cover>

            {/* Offered Menu items*/}

            <SectionTitle subTitle="Don't Miss" title="today's offer"></SectionTitle>
            <MenuCategory itmes={offered }></MenuCategory>
            
            {/* Dessert Menu items */}
            <MenuCategory itmes={desserts} coverTitle="Dessert" coverImg={dessertImg}></MenuCategory>
        </div>
    );
};

export default Menu;
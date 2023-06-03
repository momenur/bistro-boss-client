import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import MenuItems from "../../Home/MenuItems/MenuItems";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} coverTitle="Our Menu"></Cover>
            <MenuItems></MenuItems>
            <div className="mt-24">
                <Cover img={menuImg} coverTitle="Our Menu"></Cover>
            </div>
            <MenuItems></MenuItems>
            <div className="mt-24">
                <Cover img={menuImg} coverTitle="Our Menu"></Cover>
            </div>
            <MenuItems></MenuItems>
        </div>
    );
};

export default Menu;
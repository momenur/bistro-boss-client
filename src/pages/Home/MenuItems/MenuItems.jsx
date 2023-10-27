
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Item from "../../Shared/Item/Item";
import useMenu from "../../../hooks/useMenu";

const MenuItems = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <div>
            <SectionTitle
                subTitle="Check it out" title="FROM OUR MENU"
            ></SectionTitle>

            <div className="grid-cols-2 gap-8 md:grid">
                {
                    popular.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

        </div>
    );
};

export default MenuItems;
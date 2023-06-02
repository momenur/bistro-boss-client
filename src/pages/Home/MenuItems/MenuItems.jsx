import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Item from "../../Shared/Item/Item";

const MenuItems = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item => item.category === 'popular')
            setMenu(popularMenu)
        })
    },[])
    
    return (
        <div>
            <SectionTitle
                subTitle="Check it out" title="FROM OUR MENU"
            ></SectionTitle>

            <div className="grid-cols-2 gap-8 md:grid">
                {
                    menu.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

        </div>
    );
};

export default MenuItems;
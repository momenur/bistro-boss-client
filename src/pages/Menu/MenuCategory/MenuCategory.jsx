import Cover from "../../Shared/Cover/Cover";
import Item from "../../Shared/Item/Item";

const MenuCategory = ({ itmes, coverTitle, coverImg }) => {
    return (
        <div>
            { coverTitle && <div className="my-20">
                <Cover coverImg={coverImg} coverTitle={coverTitle}></Cover>
            </div> }
            <div className="grid-cols-2 gap-8 md:grid">
                {
                    itmes.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;
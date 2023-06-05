import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import Item from "../../Shared/Item/Item";

const MenuCategory = ({ itmes, coverTitle, coverImg }) => {
    return (
        <div>
            {coverTitle && <div className="my-20">
                <Cover coverImg={coverImg} coverTitle={coverTitle}></Cover>
            </div>}
            <div className="grid-cols-2 gap-8 md:grid">
                {
                    itmes.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${coverTitle}`}> <button className="mt-6 border-0 border-b-4 btn bg-slate-700 btn-outline"><span className="text-white ">Order Now</span></button></Link>

            </div>
        </div>
    );
};

export default MenuCategory;

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="my-4 shadow-xl card w-96 bg-base-100">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute px-2 text-white rounded-md right-4 top-2 bg-slate-900">${price}</p>
            <div className="flex flex-col items-center card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="justify-end card-actions">
                    <button className="mt-6 border-0 border-b-4 border-orange-400 btn bg-slate-500 btn-outline"><span className="text-white ">Add to Cart</span></button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
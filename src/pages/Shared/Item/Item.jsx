
const Item = ({item}) => {
    const {name, image, recipe, price} = item
    return (
        <div className="flex space-x-4">
            <img src={image} alt="" style={{borderRadius:"0 200px 200px 200px"}} className="w-[100px]"/>
            <div>
                <p className="text-xl font-semibold uppercase">{name}-----------</p>
                <h4>{recipe}</h4>
            </div>
            <p className="text-yellow-600">{price}</p>
        </div>
    );
};

export default Item;
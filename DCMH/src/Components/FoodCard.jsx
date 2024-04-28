const FoodCard = ({ food }) => {
    return (
        <div className="foodCard">
            <h3>{food.name}</h3>
            <h2>{food.id}</h2>
            <div className="quantity">{food.quantity}</div>
        </div>
    )
}

export default FoodCard
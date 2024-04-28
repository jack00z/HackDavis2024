const FoodCard = ({ food }) => {
    return (
        <div className="foodCard">
            <h2>{food.name}</h2>
            <h3>ID Number: {food.id}</h3>
            <div className="quantity">Quantity: {food.quantity}</div>
        </div>
    )
}

export default FoodCard
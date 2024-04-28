const ItemCard = ({ item }) => {
    return (
        <div className="itemCard">
            <h3>{item.Item_By_Name}</h3>
            <p>{smoothie.Quantity}</p>
        </div>
    )
}

export default ItemCard
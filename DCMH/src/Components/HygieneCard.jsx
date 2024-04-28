const HygieneCard = ({ hygiene }) => {
    return (
        <div className="hygieneCard">
            <h2>{hygiene.name}</h2>
            <h3>ID Number: {hygiene.id}</h3>
            <div className="quantity">Quantity: {hygiene.quantity}</div>
        </div>
    )
}

export default HygieneCard
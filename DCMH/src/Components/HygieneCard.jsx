const HygieneCard = ({ hygiene }) => {
    return (
        <div className="hygieneCard">
            <h3>{hygiene.name}</h3>
            <div className="quantity">{hygiene.quantity}</div>
        </div>
    )
}

export default HygieneCardCard
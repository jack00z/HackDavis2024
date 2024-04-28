const CleaningCard = ({ cleaning }) => {
    return (
        <div className="cleaningCard">
            <h2>{cleaning.name}</h2>
            <h3>ID Number: {cleaning.id}</h3>
            <div className="quantity">Quantity: {cleaning.quantity}</div>
        </div>
    )
}

export default CleaningCard
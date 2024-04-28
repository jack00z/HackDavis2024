const CleaningCard = ({ cleaning }) => {
    return (
        <div className="cleaningCard">
            <h3>{cleaning.name}</h3>
            <h2>{cleaning.id}</h2>
            <div className="quantity">{cleaning.quantity}</div>
        </div>
    )
}

export default CleaningCard
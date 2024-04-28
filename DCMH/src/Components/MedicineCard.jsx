const MedicineCard = ({ medicine }) => {
    return (
        <div className="medicineCard">
            <h2>{medicine.name}</h2>
            <h3>ID Number: {medicine.id}</h3>
            <div className="quantity">Quantity: {medicine.quantity}</div>
        </div>
    )
}

export default MedicineCard
const MedicineCard = ({ medicine }) => {
    return (
        <div className="medicineCard">
            <h3>{medicine.name}</h3>
            <div className="quantity">{medicine.quantity}</div>
        </div>
    )
}

export default MedicineCard
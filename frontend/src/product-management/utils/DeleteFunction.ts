import api from "../../api";

const handleDeletion = async (ID) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product")

    try {
        if(confirmDelete == true) {
            await api.delete(`api/products/delete/${ID}/`)
            alert("Product deleted Successfully!")
        }
    } catch (error) {
        console.log("Error deleting Product", error)
        alert("Failed to delete product")
    }
}

export default handleDeletion
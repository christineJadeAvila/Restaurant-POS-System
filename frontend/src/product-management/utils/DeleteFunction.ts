import api from "../../api";

const handleDeletion = async (ID: number): Promise<void> => {
    try {
        await api.delete(`api/products/delete/${ID}/`)
        alert("Product deleted Successfully!")
    } catch (error) {
        console.error("Error deleting Product", error)
        alert("Failed to delete product")
    }
}

export default handleDeletion
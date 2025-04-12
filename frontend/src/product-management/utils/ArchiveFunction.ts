import api from "../../api"

const handleArchive = async (ID: number): Promise<void> => {
    try {
        await api.patch(`api/products/archive/${ID}/`)
        alert("Product archived successfully!")
    } catch (error) {
        console.error("Error archiving product: ", error)
        alert("Failed to archive product.")
    }   
}

export default handleArchive
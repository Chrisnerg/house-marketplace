
//GET ALL Properties - Api call function
export const fetchProperties = async () => {
    try {
        const res = await fetch("/api/properties");

        if(!res.ok) {
            console.error("Problem loading properties");
            throw new Error("Fetch failed");
        }

        const data = await res.json();
        return data;
    } catch(error) {
        console.error("fetch failed", error);
        throw error;
    }
}
export async function getWBQuotas(){
    const response = await fetch("/api/westernbid", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error("Failed to remove Discogs listing");
    }

    const data = await response.json();
    return data;
}
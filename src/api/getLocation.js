
export default async function getLocation({ place }) {
    const getLocationApi = `https://nominatim.openstreetmap.org/search?q=${place}&format=json&limit=1`;

    try {
        const res = await fetch(getLocationApi);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const dataLocation = await res.json();
        console.log('Location data:', dataLocation);
        return dataLocation;
    } catch (error) {
        console.error("Error fetching location data:", error);
        return error;
    }
}
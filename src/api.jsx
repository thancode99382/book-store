import axios from 'axios';

export default async function Api() {
    try {
        const response = await axios.get('https://api.itbook.store/1.0/search/', {
            params: {
                q: 'mongo' // Changed to 'q' for query parameter
            }
        });
        console.log(response.data.books);
        return response.data; // Returning the data from the API call
    } catch (error) {
        // Handle errors here if needed
        console.error('Error fetching data:', error);
        throw error; // Re-throwing the error for handling elsewhere if needed
    }
}

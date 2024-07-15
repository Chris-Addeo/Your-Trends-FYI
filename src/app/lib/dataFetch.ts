import axios from 'axios';

export async function fetchDataFromAPI(apiUrl: string, token: string) {
    const response = await axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}
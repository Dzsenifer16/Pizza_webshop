import axios from 'axios';

export const GetTermekek = async () => {
    const url = "https://localhost:44357/api/Termekek"
    try {
        const response = await axios.get(url);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
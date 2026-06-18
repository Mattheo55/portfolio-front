export const BASE_URL = "http://127.0.0.1:8000"

export const kernolio = {
    get: async (endpoint: string, option?: RequestInit) => {
        const reponse = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'GET',
            headers: {

            },
            ...option
        });

        if(!reponse.ok) {
            throw new Error(`API Error: ${reponse.status}`)
        }

        return reponse.json();
    }
}
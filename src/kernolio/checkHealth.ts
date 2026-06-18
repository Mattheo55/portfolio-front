// Exemple dans ton domaine d'API
import axios from 'axios';
import { BASE_URL } from './kernolio';

export async function checkHealth() {
  try {
    const response = await axios.get(`${BASE_URL}/api/health`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        throw new Error("Notre serveur est actuellement indisponible. Veuillez réessayer plus tard.");
      }
      throw new Error(`Erreur API: ${error.response.status}`);
    }
    throw error;
  }
}
import axios from 'axios';
import { CharacterEntityApi } from './character.api-model';

const useMock = import.meta.env.VITE_REACT_APP_USE_MOCK === 'true';

const baseURL = useMock 
  ? 'http://localhost:3000/api/character' 
  : 'https://rickandmortyapi.com/api/character';

export const getCharacterById = async (id: string): Promise<CharacterEntityApi> => {
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};

export const updateCharacterById = async (id: string, data: Partial<CharacterEntityApi>) => {
  if (!useMock) {
    throw new Error('Update only supported in mock server');
  }
  await axios.put(`${baseURL}/${id}`, data);
};

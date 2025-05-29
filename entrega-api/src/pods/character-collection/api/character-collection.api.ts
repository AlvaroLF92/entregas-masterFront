import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const useMock = import.meta.env.VITE_REACT_APP_USE_MOCK === 'true';

const baseURL = useMock
  ? 'http://localhost:3000/api/character'
  : 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await axios.get(baseURL);
  return useMock ? response.data.results : response.data.results;
};

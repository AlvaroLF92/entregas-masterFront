import { CharacterEntity } from "../model";

export const fetchCharactersData = async (
  characterName: string
): Promise<CharacterEntity[]> => {
  const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error al obtener personajes: ${response.statusText}`);
  }

  const data = await response.json();

  return data.results as CharacterEntity[];
};

export const fetchCharacterById = async (id: string) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (!response.ok) {
      throw new Error(`Error al obtener el personaje con ID ${id}`);
    }
    return await response.json();
  } catch (error) {
 
    throw new Error(error instanceof Error ? error.message : 'Error desconocido');
  }
};
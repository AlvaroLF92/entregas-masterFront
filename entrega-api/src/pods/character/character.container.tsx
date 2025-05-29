import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById, updateCharacterById } from './api/character.api'; // Importar update
import { mapFromApiToCharacter, mapFromCharacterToApi } from './character.mappers'; // Mapper update
import { Character } from './character.vm';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const useMock = import.meta.env.VITE_REACT_APP_USE_MOCK === 'true'; // Leer variable entorno

  useEffect(() => {
    if (id) {
      getCharacterById(id).then(apiCharacter =>
        setCharacter(mapFromApiToCharacter(apiCharacter))
      );
    }
  }, [id]);

  const handleSave = async (updatedCharacter: Character) => {
    try {
      if (useMock && character) {
        const apiCharacter = mapFromCharacterToApi(updatedCharacter);
        await updateCharacterById(character.id, apiCharacter);
        const refreshedApiCharacter = await getCharacterById(character.id);
        setCharacter(mapFromApiToCharacter(refreshedApiCharacter));
      } else {
        alert('Updating character is only enabled in mock mode.');
      }
    } catch (error) {
      console.error(error);
      alert('Error updating character');
    }
  };

  return character ? (
    <CharacterComponent character={character} onSave={handleSave} />
  ) : (
    <div>Loading...</div>
  );
};

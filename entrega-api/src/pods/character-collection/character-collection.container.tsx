import React, { useEffect, useState } from 'react';
import { getCharacterCollection } from './api/character-collection.api';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterEntityVm } from './character-collection.vm';
import { mapFromApiToVm } from './character-collection.mapper'; 
import { useNavigate } from 'react-router-dom';

export const CharacterCollectionContainer: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterEntityVm[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCharacterCollection().then((apiCharacterCollection) => {
      const vmCharacterCollection = apiCharacterCollection.map(mapFromApiToVm); 
      setCharacters(vmCharacterCollection); 
    });
  }, []);

  const handleEdit = (id: string) => {
    navigate(`/characters/${id}`);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characters}
      onEdit={handleEdit}
    />
  );
};

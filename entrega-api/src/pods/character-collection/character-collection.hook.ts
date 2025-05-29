import * as api from './api';
import { useEffect, useState } from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { mapFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = useState<CharacterEntityVm[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiCharacterCollection = await api.getCharacterCollection();
      const vmCharacterCollection = apiCharacterCollection.map(mapFromApiToVm);
      setCharacterCollection(vmCharacterCollection);
    };

    fetchData();
  }, []);

  return { characterCollection };
};

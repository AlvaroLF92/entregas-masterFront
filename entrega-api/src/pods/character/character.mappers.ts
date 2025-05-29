import { Character } from './character.vm';
import { CharacterEntityApi } from './api/character.api-model';

export const mapFromApiToCharacter = (
  apiCharacter: CharacterEntityApi
): Character => ({
  id: apiCharacter.id.toString(),
  name: apiCharacter.name,
  species: apiCharacter.species,
  status: apiCharacter.status,
  image: apiCharacter.image,
  gender: apiCharacter.gender,
  origin: apiCharacter.origin.name,
  location: apiCharacter.location.name,
  bestSentence: '',
});

export const mapFromCharacterToApi = (
  character: Character
): Partial<CharacterEntityApi> => ({
  name: character.name,
  species: character.species,
  status: character.status,
  gender: character.gender,
  origin: { name: character.origin },
  location: { name: character.location },
  bestSentence: character.bestSentence,
});

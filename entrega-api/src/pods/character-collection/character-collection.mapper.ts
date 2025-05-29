import { CharacterEntityApi } from './api/character-collection.api-model';
import { CharacterEntityVm } from './character-collection.vm';

export const mapFromApiToVm = (
  character: CharacterEntityApi
): CharacterEntityVm => ({
  id: character.id.toString(),
  name: character.name,
  image: character.image,
  status : character.status,
  gender: character.gender,
  origin: character.origin,
  species: character.species
});

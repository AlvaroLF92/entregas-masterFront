

import { Character } from '../character.vm';
import { Lookup } from '#common/models';

export const mockCharacterCollection: Character[] = [
  {
    id: '1',
    name: 'Rick Sanchez',
    created: new Date(1609459200000),
    modified: new Date(1612137600000),
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: 'Earth (C-137)',
    location: 'Earth (Replacement Dimension)',
    image: '/images/rick_sanchez.png',
    bestSentence: "Wubba Lubba Dub-Dub!",
  },
  {
    id: '2',
    name: 'Morty Smith',
    created: new Date(1609459200000),
    modified: new Date(1612137600000),
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: 'Earth (C-137)',
    location: 'Earth (Replacement Dimension)',
    image: '/images/morty_smith.png',
    bestSentence: "Aw geez, Rick...",
  },
];

export const mockLocations: Lookup[] = [
  { id: 'Earth (C-137)', name: 'Earth (C-137)' },
  { id: 'Earth (Replacement Dimension)', name: 'Earth (Replacement Dimension)' },
  { id: 'Citadel of Ricks', name: 'Citadel of Ricks' },
];

export interface CharacterEntityApi {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  bestSentence?: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

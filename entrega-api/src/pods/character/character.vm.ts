export interface Character {
  id: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
  origin: string;
  location: string;
  bestSentence?: string;
  created? : Date ;
  modified?: Date;
}

export const createEmptyCharacter = (): Character => ({
  id: "",
  name: '',
  species: '',
  status: '',
  image: '',
  gender: '',
  origin: '',
  location: '',
  bestSentence: '',
  created : new Date() ,
  modified: new Date() ,
});

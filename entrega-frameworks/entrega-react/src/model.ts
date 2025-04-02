export interface CharacterEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  image: string;
}

export interface CharacterCardProps {
  character: CharacterEntity;
}

export interface SearchBarProps {
  onSearch: (orgName: string) => void;
}

export interface MemberCardProps {
  member: {
    id: number;
    login: string;
    avatar_url: string;
  };
}

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

export interface FilterBarProps {
  onFilter: (term: string) => void;
  placeholder?: string;
}

export interface AuthContextType {
  user: string | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
}

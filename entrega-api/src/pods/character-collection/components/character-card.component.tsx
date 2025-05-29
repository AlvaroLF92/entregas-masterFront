import React from 'react';
import { CharacterEntityVm } from '../character-collection.vm';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FC<Props> = ({ character, onEdit }) => (
  <Card sx={{ marginBottom: 2 }}>
    <CardHeader title={character.name} />
    <CardMedia
      component="img"
      height="200"
      image={character.image}
      alt={character.name}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Status: {character.status}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Species: {character.species}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Gender: {character.gender}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Origin: {character.origin.name}
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton onClick={() => onEdit(character.id)}>
        <EditIcon />
      </IconButton>
    </CardActions>
  </Card>
);

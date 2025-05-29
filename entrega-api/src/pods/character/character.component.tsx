import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
} from '#common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FC<Props> = ({ character, onSave }) => {
  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="gender" label="Gender" />
          <SelectComponent name="origin" label="Origin" items={[{ id: character.origin, name: character.origin }]} />
          <SelectComponent name="location" label="Location" items={[{ id: character.location, name: character.location }]} />
          <TextFieldComponent
            name="bestSentence"
            label="Best Sentence"
            multiline={true}
            rows={3}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

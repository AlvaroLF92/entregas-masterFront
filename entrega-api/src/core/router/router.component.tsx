import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterScene } from '../../scenes/character.scene';
import { CharacterCollectionScene } from '#scenes/character-collection.scene';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.createCharacter} element={<CharacterScene />} />
        <Route path={switchRoutes.editCharacter} element={<CharacterScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};

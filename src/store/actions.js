import {
  createFilesElement,
  togglePlaying,
  stopPlaying,
  changeItemsCoordinates
} from '@/helpers.js';

export const TOGGLE_PLAYING = ({ commit }) => {
  commit('TOGGLE_PLAYING');
  togglePlaying();
};

export const STOP_PLAYING = ({ commit, getters }) => {
  if (getters.isPlaying === true) {
    commit('STOP_PLAYING');
    stopPlaying();
  }
};

export const ADD_FILES = ({ commit }, files) => {
  for (const index in files) {
    const file = files[index];
    const types = [
      'image/png',
      'image/jpeg',
      'video/mp4',
      'video/webm',
      'video/ogg',
      'audio/mpeg',
      'audio/ogg',
      'audio/wav',
      'audio/mp3'
    ];

    if (types.includes(file.type)) {
      const elementCreating = createFilesElement(file);

      elementCreating.then(el => {
        commit('ADD_ELEMENT', el);
      });
    }
  }
};

export const REMOVE_ITEM = ({ commit }, index) => {
  commit('REMOVE_ITEM', index);
  commit('STOP_PLAYING');
  stopPlaying();
  changeItemsCoordinates(index);
};

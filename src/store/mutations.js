import Vue from 'vue';

export const TOGGLE_PLAYING = state => {
  state.isPlaying = !state.isPlaying;
};

export const STOP_PLAYING = state => {
  state.isPlaying = false;
};

export const ADD_ELEMENT = (state, element) => {
  state.elements.push(element);
};

export const REMOVE_ITEM = (state, index) => {
  state.elements.splice(index, 1);
};

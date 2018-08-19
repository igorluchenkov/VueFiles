import store from '@/store';

export const getters = {
  isPlaying() {
    return store.state.isPlaying;
  },
  elements() {
    return store.state.elements;
  }
};

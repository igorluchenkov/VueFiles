import store from '@/store';

export default {
  name: 'FilesContainerControls',
  computed: {
    isPlaying() {
      return store.getters.isPlaying;
    },
    toggleBtnTitle() {
      if (this.isPlaying === true) {
        return 'Pause';
      } else {
        return 'Play';
      }
    }
  },
  methods: {
    togglePlaying() {
      store.dispatch('TOGGLE_PLAYING');
    }
  }
};

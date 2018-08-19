import store from '@/store';

export default {
  name: 'FilesContainerControls',
  props: {
    isVisible: Boolean
  },
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
  mounted() {
    this.input = document.querySelector('#FilesInput');
  },
  methods: {
    togglePlaying() {
      store.dispatch('TOGGLE_PLAYING');
    },
    uploadNewFiles() {
      const files = this.input.files;

      store.dispatch('ADD_FILES', files);

      this.input.value = '';
    }
  }
};

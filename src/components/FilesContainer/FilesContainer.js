import FilesContainerControls from '../FilesContainerControls/FilesContainerControls.vue';
import FilesInput from '../FilesInput/FilesInput.vue';
import FilesItem from '../FilesItem/FilesItem.vue';
import store from '@/store';

export default {
  name: 'FilesContainer',
  components: { FilesContainerControls, FilesInput, FilesItem },
  data: () => ({
    isFilesDragging: false
  }),
  mounted() {
    this.container = document.querySelector('.FilesContainer');

    const app = document.querySelector('#app');
    ['dragenter', 'dragover', 'drop'].forEach(eventName => {
      app.addEventListener(
        eventName,
        e => {
          e.preventDefault();
          e.stopPropagation();
        },
        false
      );
    });

    app.addEventListener('dragenter', this.showFilesLabel);
    app.addEventListener('dragleave', this.hideFilesLabel);
    app.addEventListener('drop', this.dropFiles);
  },
  methods: {
    showFilesLabel(e) {
      if (e.target.id !== 'app') return;
      this.isFilesDragging = true;
    },
    hideFilesLabel(e) {
      if (e.target.id === 'app') return;
      this.isFilesDragging = false;
    },
    dropFiles(e) {
      this.isFilesDragging = false;

      const input = document.querySelector('#FilesInput');
      input.files = e.dataTransfer.files;

      store.dispatch('STOP_PLAYING');
    },
    removeItem(index) {
      store.dispatch('REMOVE_ITEM', index);
    }
  },
  computed: {
    elements() {
      return store.getters.elements;
    }
  }
};

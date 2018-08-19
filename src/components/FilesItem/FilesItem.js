import { bindDrag } from '@/helpers.js';

export default {
  name: 'FilesItem',
  props: {
    name: String,
    element: String
  },
  mounted() {
    bindDrag();
  }
};

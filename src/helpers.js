import store from '@/store';

// Получаем нужные данные, чтобы просматривать файл в браузере
export const createFilesElement = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const type = file.type;
      const imgTypes = ['image/png', 'image/jpeg'];
      const videoTypes = ['video/mp4', 'video/webm', 'video/ogg'];
      const audioTypes = ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/mp3'];

      let tag = '';
      if (imgTypes.includes(type)) {
        tag = 'img';
      } else if (videoTypes.includes(type)) {
        tag = 'video';
      } else if (audioTypes.includes(type)) {
        tag = 'audio';
      }
      const newObject = `<${tag} src="${reader.result}"></${tag}>`;

      resolve({
        name: file.name,
        element: newObject
      });
    };
  });
};

export const togglePlaying = () => {
  const property = store.state.isPlaying === true ? 'play' : 'pause';

  const playingElements = [
    ...document.querySelectorAll(
      '.FilesItem img, .FilesItem video, .FilesItem audio'
    )
  ];

  playingElements.forEach(el => {
    if (el.tagName === 'VIDEO' || el.tagName === 'AUDIO') {
      if (property === 'pause') {
        el.play().then(() => {
          el.pause();
        });
      } else {
        el[property]();
      }
    }
  });
};

export const stopPlaying = () => {
  const playingElements = [
    ...document.querySelectorAll(
      '.FilesItem img, .FilesItem video, .FilesItem audio'
    )
  ];

  playingElements.forEach(el => {
    if (el.tagName === 'VIDEO' || el.tagName === 'AUDIO') {
      el.pause();
      el.currentTime = 0;
    }
  });
};

// Добавляем возможность перетаскивания элементам
export const bindDrag = () => {
  const items = document.querySelectorAll('.FilesItem');
  const element = items[items.length - 1];

  const dragElement = element => {
    let leftAddPos = 0,
      topAddPos = 0;

    const elementDrag = e => {
      e.preventDefault();
      const leftPos = leftAddPos - e.clientX;
      const topPos = topAddPos - e.clientY;
      leftAddPos = e.clientX;
      topAddPos = e.clientY;
      element.style.top = element.offsetTop - topPos + 'px';
      element.style.left = element.offsetLeft - leftPos + 'px';
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    const dragMouseDown = e => {
      e.preventDefault();
      leftAddPos = e.clientX;
      topAddPos = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    element.onmousedown = dragMouseDown;
  };

  dragElement(element);
};

// Меняем координаты в DOM при удалении элемента, чтобы элементы не прыгали
export const changeItemsCoordinates = index => {
  const items = document.querySelectorAll('.FilesItem');
  for (let i = index; i < items.length - 1; i++) {
    items[i].style.top = items[i + 1].style.top;
    items[i].style.left = items[i + 1].style.left;
  }
};

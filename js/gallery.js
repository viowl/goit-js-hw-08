const images = [
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
    },
  ];

  const markup = images.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join('')

console.log(markup)

  const gallery = document.querySelector('.gallery')


gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', (event) => {event.preventDefault()});

gallery.addEventListener('click', onClick);



let instance; // Объявляем переменную для хранения экземпляра модального окна

function onClick(e) {
  const { target } = e;
  if (!target.classList.contains('gallery__image')) {
    return;
  }

  const original = target.dataset.source;
  const description = target.alt;

  // ... ваш код для открытия модального окна ...

  // Сохраняем экземпляр модального окна в переменной
  instance = basicLightbox.create(`
    <img
      class="gallery__image"
      src="${original}"
      alt="${description}"
    />
  `);
  instance.show();

  // Добавляем слушатель события 'keydown' на объект window
  window.addEventListener('keydown', closeModalOnESC);
}

function closeModalOnESC(e) {
  if (e.code === "Escape") {
    instance.close();
    
    // Удаляем слушатель события 'keydown' после закрытия модального окна
    window.removeEventListener('keydown', closeModalOnESC);
  }
}
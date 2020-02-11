const Queue = require('../Queue');

let catList = new Queue();

catList.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Kitty 1',
  breed: 'homeless cat',
  age: '69',
  sex: 'F',
  description: 'this is one cool cat!',
  story: 'she\'s got a story!'
});
catList.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Kitty 2',
  breed: 'homeless cat',
  age: '71',
  sex: 'M',
  description: 'this is one cool cat!',
  story: 'she\'s got a story!'
});
catList.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Kitty 3',
  breed: 'homeless cat',
  age: '72',
  sex: 'F',
  description: 'this is one cool cat!',
  story: 'she\'s got a story!'
});
catList.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Kitty 4',
  breed: 'homeless cat',
  age: '73',
  sex: 'M',
  description: 'this is one cool cat!',
  story: 'she\'s got a story!'
});

module.exports = catList;

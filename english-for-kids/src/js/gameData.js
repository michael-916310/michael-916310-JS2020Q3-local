
 const categoryList = [
  {id: 1, itemName: 'Action (set A)', image: 'img/draw.jpg'},
  {id: 2, itemName: 'Action (set B)', image: 'img/play.jpg'},
  {id: 3, itemName: 'Animal (set A)', image: 'img/dog.jpg'},
  {id: 4, itemName: 'Animal (set B)', image: 'img/lion.jpg'},
  {id: 5, itemName: 'Clothes', image: 'img/coat.jpg'},
  {id: 6, itemName: 'Emotions', image: 'img/surprised.jpg'},
  {id: 7, itemName: 'Vehicle', image: 'img/car.jpg'},
  {id: 8, itemName: 'Vegetables', image: 'img/cabbage.jpg'}
]

const categoryData = new Map()

categoryData.set(1,
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'img/cry.jpg',
      audioSrc: 'audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'img/dance.jpg',
      audioSrc: 'audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'img/dive.jpg',
      audioSrc: 'audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'img/draw.jpg',
      audioSrc: 'audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'img/fish.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'img/fly.jpg',
      audioSrc: 'audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'img/hug.jpg',
      audioSrc: 'audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'img/jump.jpg',
      audioSrc: 'audio/jump.mp3'
    }
]);

categoryData.set(2,
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'img/open.jpg',
      audioSrc: 'audio/open.mp3'
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'img/play.jpg',
      audioSrc: 'audio/play.mp3'
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'img/point.jpg',
      audioSrc: 'audio/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'img/ride.jpg',
      audioSrc: 'audio/ride.mp3'
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'img/run.jpg',
      audioSrc: 'audio/run.mp3'
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'img/sing.jpg',
      audioSrc: 'audio/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'img/skip.jpg',
      audioSrc: 'audio/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'img/swim.jpg',
      audioSrc: 'audio/swim.mp3'
    }
]);

categoryData.set(3,
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'img/cat.jpg',
      audioSrc: 'audio/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'img/chick.jpg',
      audioSrc: 'audio/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'img/dog.jpg',
      audioSrc: 'audio/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'img/horse.jpg',
      audioSrc: 'audio/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'img/pig.jpg',
      audioSrc: 'audio/pig.mp3'
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3'
    }
  ]
);

categoryData.set(4,
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'img/bird.jpg',
      audioSrc: 'audio/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'img/fish1.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'img/frog.jpg',
      audioSrc: 'audio/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'img/lion.jpg',
      audioSrc: 'audio/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3'
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3'
    }
  ]
);

categoryData.set(5,
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'img/pants.jpg',
      audioSrc: 'audio/pants.mp3'
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3'
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'img/dress.jpg',
      audioSrc: 'audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'img/boot.jpg',
      audioSrc: 'audio/boot.mp3'
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'img/coat.jpg',
      audioSrc: 'audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3'
    }
  ]
);

categoryData.set(6,
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'img/sad.jpg',
      audioSrc: 'audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'img/angry.jpg',
      audioSrc: 'audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'img/happy.jpg',
      audioSrc: 'audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'img/tired.jpg',
      audioSrc: 'audio/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'img/scared.jpg',
      audioSrc: 'audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'img/smile.jpg',
      audioSrc: 'audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3'
    }
  ]
);

categoryData.set(7,
  [
    {
      word: 'car',
      translation: 'автомобиль',
      image: 'img/car.jpg',
      audioSrc: 'audio/car.mp3'
    },
    {
      word: 'train',
      translation: 'поезд',
      image: 'img/train.jpg',
      audioSrc: 'audio/train.mp3'
    },
    {
      word: 'aircraft',
      translation: 'самолет',
      image: 'img/aircraft.jpg',
      audioSrc: 'audio/aircraft.mp3'
    },
    {
      word: 'ship',
      translation: 'корабль',
      image: 'img/ship.jpg',
      audioSrc: 'audio/ship.mp3'
    },
    {
      word: 'bus',
      translation: 'автобус',
      image: 'img/bus.jpg',
      audioSrc: 'audio/bus.mp3'
    },
    {
      word: 'tram',
      translation: 'трамвай',
      image: 'img/tram.jpg',
      audioSrc: 'audio/tram.mp3'
    },
    {
      word: 'trolleybus',
      translation: 'троллейбус',
      image: 'img/trolleybus.jpg',
      audioSrc: 'audio/trolleybus.mp3'
    },
    {
      word: 'subway',
      translation: 'метро',
      image: 'img/subway.jpg',
      audioSrc: 'audio/subway.mp3'
    },

  ]
);

categoryData.set(8,
  [
    {
      word: 'potato',
      translation: 'картошка',
      image: 'img/potato.jpg',
      audioSrc: 'audio/potato.mp3'
    },
    {
      word: 'cabbage',
      translation: 'капуста',
      image: 'img/cabbage.jpg',
      audioSrc: 'audio/cabbage.mp3'
    },
    {
      word: 'carrot',
      translation: 'морковь',
      image: 'img/carrot.jpg',
      audioSrc: 'audio/carrot.mp3'
    },
    {
      word: 'onion',
      translation: 'лук',
      image: 'img/onion.jpg',
      audioSrc: 'audio/onion.mp3'
    },
    {
      word: 'beet',
      translation: 'beet',
      image: 'img/beet.jpg',
      audioSrc: 'audio/beet.mp3'
    },
    {
      word: 'tomato',
      translation: 'помидор',
      image: 'img/tomatoes.jpg',
      audioSrc: 'audio/tomato.mp3'
    },
    {
      word: 'cucumber',
      translation: 'огурец',
      image: 'img/cucumber.jpg',
      audioSrc: 'audio/cucumber.mp3'
    },
    {
      word: 'paprika',
      translation: 'перец',
      image: 'img/paprika.jpg',
      audioSrc: 'audio/paprika.mp3'
    },
  ]
);

export {categoryList, categoryData};
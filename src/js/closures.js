function findBy(value) {
  const newArr = value;
  return function () {
    for (let item in newArr){
      return newArr[item] == 'help';
    }
  }
}

const finder = findBy();

const results = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
].filter(findBy);

console.log(results);

import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  const calculateStatusChance = status => {
    if (status > 0.66) {
      return 'relationship';
    }
    if (status > 0.33) {
      return 'complicated';
    }
    return 'single';
  };

  return {
    category: namor.generate({ words: 1, numbers: 0 }),
    keyWord: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status: calculateStatusChance(statusChance),
  };
};

const makeData = (len = 5553) =>
  range(len).map(() => ({
    ...newPerson(),
    children: range(10).map(newPerson),
  }));

export default makeData;

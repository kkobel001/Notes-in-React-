export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};
export const addItem = (
  itemType,
  itemContent,
) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substar(2, 9)}`;
  return {
    type: 'ADD_ITEM',

    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

// const dummyArticle = {
//   id: 1,
//   title: 'Wake me up them Vue ends',
//   content:
//     'Lorem imsim dolor sit amet consectetyr . Delectus, tempora, quibusdam nautes modi ',
//   twitterName: 'hello_roman',
//   articleUrl: 'https//youtube.com/helloroman',
//   creted: ' 1 day',
// };

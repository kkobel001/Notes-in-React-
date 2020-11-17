const initialState = {
  twitters: [
    {
      id: 1,
      title: 'Hello Roman',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      twitterName: 'hello_roman',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Hello Roman',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      articleUrl:
        'https://youtube.com/helloroman',
    },
  ],
  notes: [
    {
      id: 1,
      title: 'Hello Roman',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
  ],
};

const rootReducer = (
  state = initialState,
  // eslint-disable-next-line no-unused-vars
  action,
) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,

        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,

        [action.payload.itemType]: [
          ...state[
            action.payload.itemType
          ].filter(
            (item) =>
              item.id !== action.payload.id,
          ),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;

/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const notes = [
  {
    id: 1,
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
    created: '1day',
  },
  {
    id: 2,
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',

    ccreated: '1day',
  },
  {
    id: 3,
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',

    created: '1day',
  },
  {
    id: 4,
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',

    created: '1day',
  },
];
const Notes = () => (
  <GridTemplate pageType="notes">
    {notes.map(
      ({ title, content, created, id }) => (
        <Card
          id={id}
          cardType="notes"
          title={title}
          content={content}
          created={created}
          key={id}
        />
      ),
    )}
  </GridTemplate>
);

export default Notes;

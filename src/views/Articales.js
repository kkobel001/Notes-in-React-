/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import UserPageTemplates from 'templates/UserPageTemplates';
import Card from 'components/molecules/Card/Card';

const articales = [
  {
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
    articleUrl: 'https://www.lipsum.com/',
    created: '1day',
  },
  {
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
    articleUrl: 'https://www.lipsum.com/',
    created: '1day',
  },
  {
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
    articleUrl: 'https://www.lipsum.com/',
    created: '1day',
  },
  {
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
    articleUrl: 'https://www.lipsum.com/',
    created: '1day',
  },
];
const Articales = () => (
  <UserPageTemplates pageType="articles">
    {articales.map((item) => (
      <Card
        cardType="articles"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        key={item.title}
      />
    ))}
  </UserPageTemplates>
);

export default Articales;

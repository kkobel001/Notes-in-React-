/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import UserPageTemplates from 'templates/UserPageTemplates';
import Card from 'components/molecules/Card/Card';

const articales = [
  {
    id: 1,
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
    articleUrl: 'https://www.lipsum.com/',
    created: '1day',
  },
  {
    id: 2,
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
    articleUrl: 'https://www.lipsum.com/',
    created: '1day',
  },
  {
    id: 3,
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
    articleUrl: 'https://www.lipsum.com/',
    created: '1day',
  },
  {
    id: 4,
    title: 'React on my mind',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
    articleUrl: 'https://www.lipsum.com/',
    created: '1day',
  },
];
const Articales = () => (
  <UserPageTemplates pageType="articles">
    {articales.map(
      ({
        title,
        content,
        articleUrl,
        created,
        id,
      }) => (
        <Card
          cardType="articles"
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
          key={id}
        />
      ),
    )}
  </UserPageTemplates>
);

export default Articales;

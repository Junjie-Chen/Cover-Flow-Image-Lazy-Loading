import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

const CoverFlow = () => {
  return (
    <StyleRoot>
      <Coverflow
        infiniteScroll
        displayQuantityOfSide={2}
        enableHeading={false}
        enableScroll={false}
        media={{
          '@media (min-width: 320px)': {
            width: '100vw',
            height: '300vh'
          }
        }}>
        <img src='https://i.scdn.co/image/a59ba61362a7301facba81a94c9cb1d9d4496b3a' alt='Dua Lipa' />
        <img src='https://i.scdn.co/image/d3df5509936cfdaa60b96abd2964bffcb25e80f2' alt='MANIA' />
        <img src='https://i.scdn.co/image/52e4a7e4406bba40ff644e0f006044c41448262f' alt='Origins' />
        <img src='https://i.scdn.co/image/170e1dee2677f32bdd400c4147eb527d84988d0e' alt='Expectations' />
        <img src='https://i.scdn.co/image/93de84650354b3a8436a893332b436cf3bb000d0' alt='Shawn Mendes' />
        <img src='https://i.scdn.co/image/38205ab1bdc4b37b68b3ace40989afb6c2c1faa9' alt='thank u, next' />
        <img src='https://i.scdn.co/image/df3b17e748de56e4ce78ac29b216d3f99afd0c5a' alt='Memories...Do Not Open' />
        <img src='https://i.scdn.co/image/0866257dec39ba72b84382fbab7c49d25faacb0d' alt='True Colors' />
        <img src='https://i.scdn.co/image/68c8cb90a5a3fc4ed0413ab6a7e4eac3953aa915' alt='KILL THIS LOVE' />
      </Coverflow>
    </StyleRoot>
  );
};

export default CoverFlow;

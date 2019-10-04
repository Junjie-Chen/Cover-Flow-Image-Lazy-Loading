import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import { useQuery } from "@apollo/react-hooks";
import query from '../query/images';
import Image from './Image';

const CoverFlow = () => {
  const { data: { images } } = useQuery(query);

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
        {
          images.map(image => <Image key={image.id} src={image.src} alt={image.alt} />)
        }
      </Coverflow>
    </StyleRoot>
  );
};

export default CoverFlow;

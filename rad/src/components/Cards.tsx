import React from 'react';
import { Card } from 'semantic-ui-react';

import { CardPipeline } from './Card';

export const CardExampleGroups: React.FC = () => {
  return (
    <Card.Group>
      <CardPipeline
        src='steve.jpg'
        header='Steve Sanders'
        meta='Friends of Elliot'
        description={
          <>
            Steve wants to add you to the group <strong>best friends</strong>
          </>
        }
      />
      <CardPipeline
        src='molly.png'
        header='Molly Thomas'
        meta='New User'
        description={
          <>
            Molly wants to add you to the group <strong>musicians</strong>
          </>
        }
      />
      <CardPipeline
        src='jenny.jpg'
        header='Jenny Lawrence'
        meta='New User'
        description={<>Jenny requested permission to view your contact details</>}
      />
    </Card.Group>
  );
};

export default CardExampleGroups;

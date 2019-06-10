import React from 'react';
import { Card } from 'semantic-ui-react';

import { CardPipeline } from './Card';
import { IPipelines } from './Test';

export const CardExampleGroups: React.FC<{ data: IPipelines }> = ({ data }) => {
  console.log({ data });
  return (
    <Card.Group>
      {data.pipelines.map((pipe, index) => {
        const statusColor = pipe.status === 'Failed' ? 'red' : 'green';
        return (
          <CardPipeline
            key={index}
            stripColor={statusColor}
            src='steve.jpg'
            header={pipe.name}
            meta={pipe.status}
            description={
              <ul>
                <li>start: {pipe.start}</li>
                <li>last updated: {pipe.lastUpdated}</li>
              </ul>
            }
          />
        );
      })}
    </Card.Group>
  );
};

export default CardExampleGroups;

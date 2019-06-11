import React from 'react';
import { Card } from 'semantic-ui-react';

import { CardPipeline } from './Card';
import { IPipelines } from './Test';

import { enGBDate, dateAgo } from '../utils/transforms';
import { avatars } from '../utils/avatars';

export const CardExampleGroups: React.FC<{ data: IPipelines }> = ({ data }) => {
  return (
    <Card.Group>
      {data.pipelines.map((pipe, index) => {
        const dateStart = new Date(pipe.start);
        const dateLastUpdated = new Date(pipe.lastUpdated);
        const statusColor = pipe.status === 'Failed' ? 'red' : 'green';
        return (
          <CardPipeline
            key={index}
            stripColor={statusColor}
            src={avatars()}
            header={pipe.name}
            meta={pipe.status}
            description={
              <ul>
                <li>
                  start: {enGBDate(dateStart)} - {dateAgo(dateStart)}
                </li>
                <li>
                  last updated: {enGBDate(dateLastUpdated)} - {dateAgo(dateLastUpdated)}
                </li>
              </ul>
            }
          />
        );
      })}
    </Card.Group>
  );
};

export default CardExampleGroups;

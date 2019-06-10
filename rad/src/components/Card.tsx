import React, { ReactNode } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

interface ICard {
  src: string;
  header: string;
  meta: string;
  description: ReactNode;
}

export const CardPipeline: React.FC<ICard> = ({ src, header, meta, description }) => {
  return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={src} />
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CardPipeline;

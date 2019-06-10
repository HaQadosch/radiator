import React, { ReactNode } from 'react';
import { Button, Card, Image, SemanticCOLORS } from 'semantic-ui-react';

interface ICard {
  src: string;
  header: string;
  meta: string;
  description: ReactNode;
  stripColor: SemanticCOLORS;
}

export const CardPipeline: React.FC<ICard> = ({ stripColor, src, header, meta, description }) => {
  return (
    <Card color={stripColor}>
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
            Compile
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CardPipeline;

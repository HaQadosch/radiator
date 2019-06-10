import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { CardExampleGroups } from './Cards';

const App: React.FC = () => {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible width='thin'>
        <Menu.Item as='a'>
          <Icon name='rebel' />
          ECS
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='erase' />
          Reset
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='filter' />
          Filter by status
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='filter' />
          Filter by timestamp
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='filter' />
          Filter by name
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as='h1'>Radiator</Header>
          <CardExampleGroups />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default App;

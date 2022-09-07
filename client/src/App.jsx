import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelListContainer from './components/ChannelListContainer';
import ChannelContainer from './components/ChannelContainer';

import { ChannelListContainer, ChannelContainer } from './components';

import './App.css';

const apiKey = 'j9sq8byp2p3p';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app_wrapper">
       <Chat client={client} theme="team light">
        <ChannelListContainer 
        
        />
        <ChannelContainer
       
       />
       </Chat>
    </div>
  );
}

export default App


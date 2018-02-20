import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';

import Post from './Post';

export default class Feed extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.state.posts.map(post =>
          <Post key={post.id} title={post.title} author={post.author} text={post.text} />)}
      </ScrollView>
    );
  }
}

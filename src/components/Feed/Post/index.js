import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Post = ({ title, author, text }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
    <Text style={styles.text}>{text}</Text>
  </View>
);

Post.defaultProps = {
  title: 'Some title',
  author: 'Some author',
  text: 'Some text',
};

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
};

export default Post;

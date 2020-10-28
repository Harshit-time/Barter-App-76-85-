import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const MyHeader = props => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: '#90A5A9',fontWeight:"bold", } }}
      backgroundColor = "#eaf8fe"
      containerStyle = {{
        width:500
      }}
    />
  );
};

export default MyHeader;

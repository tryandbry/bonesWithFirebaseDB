import React from 'react';

import firebase from '../../fire';
const db = firebase.database();

export default class Test extends React.Component {
  constructor(){
    super();
  }


  render(){
    db.ref('test').set('test string');

    return (
      <div>
        <h3>test</h3>
      </div>
    )
  }

}

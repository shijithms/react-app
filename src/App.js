import React, { Component } from 'react';
import Layout from './components/Layouts/Layout';
import RoomBuilder from './containers/RoomBuilder/RoomBuilder'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <RoomBuilder>
            </RoomBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;

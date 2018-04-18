import React, {Component} from 'react';

import Titles from './Components/Titles';
import Form from './Components/Form';

import Layout from './Components/Layout/Layout';

class App extends Component {
	state = {users: []}

  // componentDidMount() {

  //   fetch('/users')
  //     .then(
  //     	res => res.json())
  //     .then(users => this.setState({ users }))
  // }


    	 // {this.state.users.map(user =>
        //   <div key={user.id}>{user.username}</div>
        // )}
	render() 
	{
		return (
		<div>
      <Layout/>
		</div>
		);
	}
};

export default App;
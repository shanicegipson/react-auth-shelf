import React, {Component} from 'react';
import {connect} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({type:'SHELF'})
  }

  render() {
    console.log(this.props, 'This is your prop');
    let listArray = this.props.store.shelfReducer.map((item, index) => {
      return (
        <li key={index}>
          {item.user_id} {item.description} {item.image_url} 
        </li>
      )
    })
    return (
      <div>
      <ul>
        {listArray}
      </ul>
    </div>
    )
  }
};

// What this line does, is makes our reducers available to our component here, through this.props.store, 'Store' could be kittyCat
const mapStateToProps = store => ({
  store
});

export default connect(mapStateToProps)(InfoPage);

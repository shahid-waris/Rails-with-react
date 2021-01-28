import React from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';


function getThings() {
  console.log('getThings Action!')
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch('v1/things.json')
    .then(response => response.json())
    .then(json => dispatch(getThingsSuccess(json)))
    .catch(error => console.log(error));
  };
};

export function getThingsSuccess(json) {
  return{
    type: GET_THINGS_SUCCESS,
    json
  };
};

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingsBtn" onClick={() => this.props.getThings()}>getThings</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
})

const mapDispatchToProps = { getThings };
// HelloWorld.propTypes = {
//   greeting: PropTypes.string
// };
export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);

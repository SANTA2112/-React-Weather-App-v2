import SearchBar from './SearchBar';
import { compose, withState, withHandlers } from "recompose";
import { connect } from 'react-redux';
import { getWeather } from '../store/actions';

const handlers = withHandlers({
  doRequest: props => () => props.getWeather(props.input)
});

export default compose(
  withState('input', 'inputHandler', ''),
  connect(null, { getWeather }),
  handlers
)(SearchBar);

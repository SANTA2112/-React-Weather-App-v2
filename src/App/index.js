import App from './App.jsx';
import { hot } from 'react-hot-loader';
import { compose, withHandlers, withState, lifecycle, withProps } from 'recompose';
import { connect } from 'react-redux';
import { getUserCoords } from '../API'
import { getWeather } from '../store/actions';
import { weatherBG } from '../utils';

const props = withProps(props => ({
  bgimg: weatherBG[props.weather.fact && props.weather.fact.icon],
}))

const handlers = withHandlers({
  doRequest: props => () => props.getWeather(props.input)
});

const life = lifecycle({
  componentDidMount() {
    getUserCoords().then(({ latitude: lat, longitude: lng }) => this.props.getWeather({ lat, lng }))
  }
})

export default compose(
  hot(module),
  connect(store => ({ weather: store.weather, isLoading: store.loader }), { getWeather }),
  withState('input', 'inputHandler', ''),
  handlers,
  life,
  props,
)(App);

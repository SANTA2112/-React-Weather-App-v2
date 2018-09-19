import WeatherOnHours from './WeatherOnHours';
import { connect } from 'react-redux';
import { withProps, compose } from 'recompose';

const props = withProps(props => ({
  weather: props.weather && props.weather[props.activeDay]?.hours
}))

export default compose(
  connect(store => ({ activeDay: store.activeDay })),
  props,
)(WeatherOnHours)

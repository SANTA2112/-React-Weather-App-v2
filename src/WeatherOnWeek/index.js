import WeatherOnWeek from './WeatherOnWeek';
import { connect } from 'react-redux';
import { changeDay } from '../store/actions';

export default connect(
  null,
  { changeDay }
)(WeatherOnWeek)

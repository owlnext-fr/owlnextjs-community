
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styles from './styles.module.scss';

type Props = {
	options: any
}
  
const View: React.FC<Props> = ({
	options
}) => {
  
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default View;


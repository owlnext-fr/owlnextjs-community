
import View from './View';

type Props = {
  data: Array<any>
}

const ViewModel: React.FC<Props> = ({
  data
}) => {
  
  return (
    <View 
      data={data}
    />
  );
};

export default ViewModel;


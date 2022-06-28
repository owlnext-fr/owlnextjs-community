
import View from './View';

type Props = {
  cell: any
}

const ViewModel: React.FC<Props> = ({
  cell
}) => {
  
  return (
    <View 
      cell={cell}
    />
  );
};

export default ViewModel;


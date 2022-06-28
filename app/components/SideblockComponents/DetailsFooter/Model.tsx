
import View from './View';

type Props = {
  selectedDetailsSubTab: string,
  children: any
}

const ViewModel: React.FC<Props> = ({
  children
}) => {
  
  return (
    <View 
      elements={children}
    />
  );
};

export default ViewModel;


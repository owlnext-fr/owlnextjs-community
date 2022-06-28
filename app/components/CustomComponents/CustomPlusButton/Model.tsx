
import View from './View';

type Props = {
  onClick: () => void,
  variant?: 'classic' | 'outlined'
}

const ViewModel: React.FC<Props> = ({
  onClick,
  variant = 'classic'
}) => {
  
  return (
    <View 
      onClick={onClick}
      variant={variant}
    />
  );
};

export default ViewModel;


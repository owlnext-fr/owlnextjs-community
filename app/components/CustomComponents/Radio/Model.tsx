
  import View from './View';

  type Props = {
    checked?: boolean;
    onClick?: () => void;
    children: React.ReactNode
  }
  
  const ViewModel: React.FC<Props> = ({checked = false, onClick = () => {}, children}) => {
    
    return (
      <View
        checked={checked}
        onClick={onClick}
      >
        {children}
      </View>
    );
  };
  
  export default ViewModel;
  
  

import { ReactElement } from 'react';
import View from './View';

type Props = {
  content: string,
  image?: ReactElement
}

const ViewModel: React.FC<Props> = ({
  content,
  image
}) => {
  
  return (
    <View 
      content={content}
      image={image}
    />
  );
};

export default ViewModel;


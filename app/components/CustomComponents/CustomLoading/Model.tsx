import { useMemo } from 'react';
  import View from './View';

  type SizeEnum = 'small' | 'medium' | 'large'

  type Props = {
    size?: SizeEnum,
    customTop?: number
  }
  
  const ViewModel: React.FC<Props> = ({
    size,
    customTop = 0
  }) => {
    const width = useMemo(() => {
      switch (size) {
        case 'small':
          return 32
        case 'medium':
          return 64
        case 'large':
          return 128
        default:
          return 64
      }
    }, [size])

    const height = useMemo(() => width / 1.3, [width])

    return (
      <View
        width={width}
        height={height}
        customTop={customTop}
      />
    );
  };
  
  export default ViewModel;

  import View from './View';
  import {useMemo, useState} from 'react'

  type Props = {
    children: JSX.Element | string,
    type?:string,
    bold?: boolean,
    customTag?: string,
    className?: any,
    color?: string,
    noMargin?: boolean
  }
  
  const ViewModel: React.FC<Props> = ({
    children,
    type,
    bold,
    customTag,
    className,
    color = '#222f3a',
    noMargin = false
  }) => {
    const [Tag, setTag] = useState('p');

    const typeValue: string = useMemo(() => {
      if (type && ['p', 'h1', 'h2']) {
        if (customTag) {
          setTag(customTag)
        }
        else {
          setTag(type)
        }
        return type;
      }
      else {
        if (customTag) {
          setTag(customTag)
        }
        else {
          setTag('p')
        }
        return 'p'
      }
  }, [type, setTag, customTag])

  const boldStyle: {fontWeight?: string | undefined;} = useMemo(() => {
    return bold ? {fontWeight: 'bold'} : {}
  }, [bold])

    return (
      <View 
        className={className} 
        typeValue={typeValue} 
        boldStyle={boldStyle} 
        Tag={Tag}
        color={color}
      >
        {children}
      </View>
    );
  };
  
  export default ViewModel;
  
  
import { useState, useEffect } from 'react'
import View from './View';

type TypeEnum = 'validate' | 'cancel' | 'dottedCta' | 'nextStep' | 'tertiaryCancel' | 'tertiaryValidate' | 'next'

type Props = {
  type: TypeEnum,
  content: string,
  onClick?: (e?: any) => void,
  disabled?: boolean,
  className?: string,
  link?: string
}

const ViewModel: React.FC<Props> = ({
  type,
  content,
  onClick = () => {},
  disabled = false,
  className = '',
  link = ''
}) => {
  
  return (
    <View 
      type={type}
      content={content}
      onClick={onClick}
      disabled={disabled}
      className={className}
      link={link}
    />
  );
};

export default ViewModel;


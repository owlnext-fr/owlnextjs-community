
import View from './View';

type Props = {
  isOpen: boolean,
  title?: string,
  message?: string,
  content: any,
  cancelFunction: (e: any) => void,
  validateFunction: any,
  parentElement: any,
  children: React.ReactNode,
  className?: any,
  alignWindow?: boolean,
  isCheckBox?: boolean;
  checkboxText?: string;
  checkboxValue?: boolean;
  changeCheckboxValue?: (arg?: boolean) => void;
}

const ViewModel: React.FC<Props> = ({
  isOpen,
  cancelFunction,
  title = '',
  message = '',
  content,
  validateFunction,
  children,
  parentElement,
  className = '',
  alignWindow = false,
  isCheckBox = false,
  checkboxText = '',
  checkboxValue = false,
  changeCheckboxValue = () => {}
}) => {
  return (
    <View 
      isOpen={isOpen}
      cancelFunction={cancelFunction}
      title={title}
      message={message}
      content={content}
      validateFunction={validateFunction}
      parentElement={parentElement}
      className={className}
      alignWindow={alignWindow}
      isCheckBox={isCheckBox}
      checkboxText={checkboxText}
      checkboxValue={checkboxValue}
      changeCheckboxValue={changeCheckboxValue}
    >
      {children}
    </View>
  );
};

export default ViewModel;


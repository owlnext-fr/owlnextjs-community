import { useEffect, useState, useRef, useCallback } from 'react'
import { AutoCompleteOption } from 'app/types/global';
import useTranslation from 'hooks/useTranslation';
import View from './View';

type Props = {
  value: string | number,
  setter: (arg: any) => void,
  options: Array<AutoCompleteOption>,
  label?: string,
  className?: any,
  error?: boolean,
  disabled?: boolean,
  placeholder?: string,
  inputValue?: string,
  inputSetter?: (value: string) => void
}

const ViewModel: React.FC<Props> = ({
  value,
  setter,
  options,
  label = '',
  className,
  error = false,
  disabled = false,
  placeholder = '',
  inputValue = '',
  inputSetter = () => {}
}) => {
  const { t } = useTranslation()
  const [isDeployed, setIsDeployed] = useState(false)
  const [currentInputValue, setCurrentInputValue] = useState<any>(inputValue)
  const [finalOptions, setFinalOptions] = useState<Array<any>>([])
  const wrapperRef = useRef(null)

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsDeployed(false)
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef)

  const onChangeInputSetter = (inputValue: string | number) => {
    setCurrentInputValue(inputValue.toString())
    
    let temp = []
    for (let i = 0; i < options.length; i ++) {
      if (options[i].label.toLowerCase().includes(inputValue.toString().toLowerCase())) {
        temp.push(options[i])
      }
    }

    if (temp.length == 0) {
      temp.push({
        id: null,
        label: t('Autocomplete_NoOptions'),
        value: null
      })
    }

    setFinalOptions(temp)
  }

  const onClickOption = (option: any) => {
    setIsDeployed(false)
    setter(option.value)
    setCurrentInputValue(option.label)
    setFinalOptions(options)
  }

  useEffect(() => {
    if (value !== '' && inputValue == '') {
        for (let i = 0; i < options.length ; i ++) {
            if (options[i].id == value) {
                setCurrentInputValue(options[i].label)
            }
        }
    } else {
      // setCurrentInputValue('')
    }
  }, [value, options, inputValue])

  useEffect(() => {
    setFinalOptions(options)
  }, [options])

  const onClickArrow = useCallback(() => {
    setIsDeployed((prev) => !prev)
  }, [])

  return (
    <View 
      options={finalOptions}
      value={currentInputValue}
      setter={onChangeInputSetter}
      isDeployed={isDeployed}
      setIsDeployed={setIsDeployed}
      onClickOption={onClickOption}
      wrapperRef={wrapperRef}
      label={label}
      className={className}
      error={error}
      disabled={disabled}
      placeholder={placeholder}
      inputSetter={inputSetter}
      onClickArrow={onClickArrow}
    />
  );
};

export default ViewModel;


import React, { useState, useEffect, useCallback, useRef } from 'react'
import View from './View';

type Props = {
  value?: string;
  onChange?: (newValue: string) => void;
}

const ViewModel: React.FC<Props> = ({value = '', onChange = () => {}}) => {
  const [firstDigit, setFirstDigit] = useState<string>('')
  const [secondDigit, setSecondDigit] = useState<string>('')
  const [thirdDigit, setThirdDigit] = useState<string>('')
  const [forthDigit, setForthDigit] = useState<string>('')
  const [fifthDigit, setFifthDigit] = useState<string>('')
  const [sixthDigit, setSixthDigit] = useState<string>('')


  const digit1 = useRef<HTMLInputElement>(null)
  const digit2 = useRef<HTMLInputElement>(null)
  const digit3 = useRef<HTMLInputElement>(null)
  const digit4 = useRef<HTMLInputElement>(null)
  const digit5 = useRef<HTMLInputElement>(null)
  const digit6 = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setFirstDigit(value[0] || '')
    setSecondDigit(value[1] || '')
    setThirdDigit(value[2] || '')
    setForthDigit(value[3] || '')
    setFifthDigit(value[4] || '')
    setSixthDigit(value[5] || '')
  }, [value])

  const onChangeFirstDigit = useCallback((e) => {
    if ((e.target.value.match(/^[0-9]{1}$/) || e.target.value === '')) {
      const splitValue = value.split('')
      splitValue[0] = e.target.value
      onChange(splitValue.join(''))
      if (e.target.value === '') {
        digit1?.current?.blur()
      }
      else{
        digit2?.current?.focus()
      }
    }
  }, [value, onChange, digit2, digit1])

  const onChangeSecondDigit = useCallback((e) => {
    if ((e.target.value.match(/^[0-9]{1}$/) || e.target.value === '')) {
      const splitValue = value.split('')
      splitValue[1] = e.target.value
      onChange(splitValue.join(''))
      if (e.target.value === '') {
        digit1?.current?.focus()
      }
      else{
        digit3?.current?.focus()
      }
    }
  }, [value, onChange])

  const onChangeThirdDigit = useCallback((e) => {
    if ((e.target.value.match(/^[0-9]{1}$/) || e.target.value === '')) {
      const splitValue = value.split('')
      splitValue[2] = e.target.value
      onChange(splitValue.join(''))
      if (e.target.value === '') {
        digit2?.current?.focus()
      }
      else{
        digit4?.current?.focus()
      }
    }
  }, [value, onChange])

  const onChangeForthDigit = useCallback((e) => {
    if ((e.target.value.match(/^[0-9]{1}$/) || e.target.value === '')) {
      const splitValue = value.split('')
      splitValue[3] = e.target.value
      onChange(splitValue.join(''))
      if (e.target.value === '') {
        digit3?.current?.focus()
      }
      else{
        digit5?.current?.focus()
      }
    }
  }, [value, onChange])

  const onChangeFifthDigit = useCallback((e) => {
    if ((e.target.value.match(/^[0-9]{1}$/) || e.target.value === '')) {
      const splitValue = value.split('')
      splitValue[4] = e.target.value
      onChange(splitValue.join(''))
      if (e.target.value === '') {
        digit4?.current?.focus()
      }
      else{
        digit6?.current?.focus()
      }
    }
  }, [value, onChange])

  const onChangeSixthDigit = useCallback((e) => {
    if ((e.target.value.match(/^[0-9]{1}$/) || e.target.value === '')) {
      const splitValue = value.split('')
      splitValue[5] = e.target.value
      onChange(splitValue.join(''))
      if (e.target.value === '') {
        digit5?.current?.focus()
      }
      else{
        digit6?.current?.blur()
      }
    }
  }, [value, onChange])

  const handlePasteDigits = useCallback(async () => {
    if (navigator.clipboard) {
      const clipboard = await navigator.clipboard.readText()
      var reg = /\d[0-9]/g

      if (clipboard.length == 6 && reg.test(clipboard)) {
        let arrayClipboard = clipboard.split('')

        setFirstDigit(arrayClipboard[0] || '')
        setSecondDigit(arrayClipboard[1] || '')
        setThirdDigit(arrayClipboard[2] || '')
        setForthDigit(arrayClipboard[3] || '')
        setFifthDigit(arrayClipboard[4] || '')
        setSixthDigit(arrayClipboard[5] || '')

        onChange(clipboard)
      }
    }
  }, [onChange])

  return (
    <View
      firstDigit={firstDigit}
      secondDigit={secondDigit}
      thirdDigit={thirdDigit}
      forthDigit={forthDigit}
      fifthDigit={fifthDigit}
      sixthDigit={sixthDigit}
      digit1={digit1}
      digit2={digit2}
      digit3={digit3}
      digit4={digit4}
      digit5={digit5}
      digit6={digit6}
      onChangeFirstDigit={onChangeFirstDigit}
      onChangeSecondDigit={onChangeSecondDigit}
      onChangeThirdDigit={onChangeThirdDigit}
      onChangeForthDigit={onChangeForthDigit}
      onChangeFifthDigit={onChangeFifthDigit}
      onChangeSixthDigit={onChangeSixthDigit}
      handlePasteDigits={handlePasteDigits}
      
    />
  );
};

export default ViewModel;

  
import { TextfieldSetter } from 'app/types/global'
import React, { ReactElement } from 'react';
import styles from './styles.module.scss';

  type Props = {
    firstDigit: string;
    secondDigit: string;
    thirdDigit: string;
    forthDigit: string;
    fifthDigit: string;
    sixthDigit: string;
    digit1: React.Ref<HTMLInputElement>;
    digit2: React.Ref<HTMLInputElement>;
    digit3: React.Ref<HTMLInputElement>;
    digit4: React.Ref<HTMLInputElement>;
    digit5: React.Ref<HTMLInputElement>;
    digit6: React.Ref<HTMLInputElement>;
    onChangeFirstDigit: TextfieldSetter;
    onChangeSecondDigit: TextfieldSetter;
    onChangeThirdDigit: TextfieldSetter;
    onChangeForthDigit: TextfieldSetter;
    onChangeFifthDigit: TextfieldSetter;
    onChangeSixthDigit: TextfieldSetter;
    handlePasteDigits: (e: any) => void
  }

  const View: React.FC<Props> = ({
    firstDigit,
    secondDigit,
    thirdDigit,
    forthDigit,
    fifthDigit,
    sixthDigit,
    digit1,
    digit2,
    digit3,
    digit4,
    digit5,
    digit6,
    onChangeFirstDigit,
    onChangeSecondDigit,
    onChangeThirdDigit,
    onChangeForthDigit,
    onChangeFifthDigit,
    onChangeSixthDigit,
    handlePasteDigits
  }) => {
    
    return (
      <div className={styles.digits}>
        <input
          value={firstDigit}
          ref={digit1}
          onChange={onChangeFirstDigit}
          onPaste={handlePasteDigits}
        />
        <input
          value={secondDigit}
          ref={digit2}
          onChange={onChangeSecondDigit}
        />
        <input
          value={thirdDigit}
          ref={digit3}
          onChange={onChangeThirdDigit}
        />
        <input
          value={forthDigit}
          ref={digit4}
          onChange={onChangeForthDigit}
        />
        <input
          value={fifthDigit}
          ref={digit5}
          onChange={onChangeFifthDigit} 
        />
         <input
          value={sixthDigit}
          ref={digit6}
          onChange={onChangeSixthDigit} 
        />
      </div>
    );
  };
  
  export default View;
  
  
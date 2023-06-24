// react and eco.
import { useState } from 'react';
import { formOptions } from '../utilities';

// ** useHandleFormDisplay | custom hook ** //
//
const useHandleFormDisplay = () => {
  const [options, setOptions] = useState(formOptions);

  const handleClick = (buttonName: string): void => {
    const updatedOptions = options.map((option) => {
      option.isActive = false;

      if (option.buttonName === buttonName) {
        option.isActive = true;
      }

      return option;
    });

    setOptions(updatedOptions);
  };

  return {
    options,
    handleClick,
  };
};

export default useHandleFormDisplay;

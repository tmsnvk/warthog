// react and eco.
import { useState } from 'react';
import { formOptions } from '../utilities';
// component types.
import { FormOptionsT } from '../types/PagePSQL.types';

// ** useHandleFormDisplay | custom hook ** //
//
const useHandleFormDisplay = (): { options: FormOptionsT, handleClick(btnName: string): void } => {
  const [options, setOptions] = useState(formOptions);

  const handleClick = (btnName: string): void => {
    const updatedOptions = options.map((option) => {
      option.isActive = false;

      if (option.btnName === btnName) {
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

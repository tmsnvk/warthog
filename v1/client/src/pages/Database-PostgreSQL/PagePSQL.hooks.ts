// react and eco.
import { useState } from 'react';
import { formOptions } from './PagePSQL.utilities';
// component types.
import { FormOptionsT } from './PagePSQL.types';

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

// ** useFindActiveOptionIndex | custom hook ** //
//
const useFindActiveOptionIndex = (options: FormOptionsT): number => {
  const activeOptionIndex = options.findIndex((option) => {
    return option.isActive;
  });

  return activeOptionIndex;
};

export {
  useHandleFormDisplay,
  useFindActiveOptionIndex,
};

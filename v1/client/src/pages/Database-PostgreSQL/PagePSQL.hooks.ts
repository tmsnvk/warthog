// react and eco.
import { useState } from 'react';
import { formOptions } from './PagePSQL.utilities';

// ** useHandleFormDisplay | custom hook ** //
//
const useHandleFormDisplay = () => {
  const [options, setOptions] = useState(formOptions);

  const handleClick = (btnName: string) => {
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
    handleClick,
    options,
  };
};

export {
  useHandleFormDisplay,
};

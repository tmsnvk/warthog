// component types.
import { FormOptionsT } from '../types/PagePSQL.types';

// ** useFindActiveOptionIndex | custom hook ** //
//
const useFindActiveOptionIndex = (options: FormOptionsT): number => {
  const activeOptionIndex = options.findIndex((option) => {
    return option.isActive;
  });

  return activeOptionIndex;
};

export default useFindActiveOptionIndex;

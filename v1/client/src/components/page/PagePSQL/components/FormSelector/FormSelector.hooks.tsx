// component elements.
import { OptionButton } from './FormSelector.styles';
// component types.
import { FormSelectorT } from './FormSelector.types';

// ** generateOptionButtons | helper function ** //
//
const generateOptionButtons = ({ options, handleClick }: FormSelectorT, category: string) => {
  return options.filter((option) => option.btnCategory === category).map(({ btnName, isActive }) => {
    return (
      <OptionButton key={btnName} onClick={() => handleClick(btnName)} $isActive={isActive}>{btnName}</OptionButton>
    );
  });
};

// ** useGenerateFormBtns | custom hook ** //
// a custom hook to generate the button list that enables the choice of various queries.
const useGenerateFormButtons = ({ options, handleClick }: FormSelectorT) => {
  const generalOptions = generateOptionButtons({ options, handleClick }, 'general');
  const studentOptions = generateOptionButtons({ options, handleClick }, 'student');
  const mentorOptions = generateOptionButtons({ options, handleClick }, 'mentor');

  return {
    generalOptions,
    studentOptions,
    mentorOptions,
  };
};

export {
  useGenerateFormButtons,
};

// component types.
import { FormOptionsT } from '@pageComponents/PagePSQL/types/PagePSQL.types';

export type FormSelectorT = {
  options: FormOptionsT;
  handleClick: (buttonName: string) => void;
}

export type ButtonDescriptionT = {
  $isActive: boolean;
}

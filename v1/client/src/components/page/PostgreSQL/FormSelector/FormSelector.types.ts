import { FormOptionsT } from '@individualPages/Database-PostgreSQL/PagePSQL.types';

export type FormSelectorT = {
  options: FormOptionsT;
  handleClick: (btnName: string) => void;
}

export type ButtonDescriptionT = {
  $isActive: boolean;
}

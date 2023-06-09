// external packages.
import styled from 'styled-components';
// component elements.
import { GenericComponentContainer } from '@sharedComponents/wrappers';
// component types.
import { ButtonDescriptionT } from './FormSelector.types';

const SectionContainer = styled.section`
  grid-column: 2 / 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 5rem 0 5rem 0;
`;

const ButtonCategoryContainer = styled.article`
  margin: 1.5rem 0 1.5rem 0;
`;

const DescriptionContainer = styled(GenericComponentContainer)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 5rem 7.5rem 5rem 7.5rem;
`;

const OptionButton = styled.button<ButtonDescriptionT>`
  align-self: center;
  width: auto;
  height: 6rem;
  padding: 0 1rem 0 1rem;
  margin: 0 1.5rem 0 1.5rem;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colorBackground.secondary : theme.colorBackground.tertiary};
  color: ${({ theme, $isActive }) => $isActive ? theme.color.secondary : theme.color.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-align: center;
  border: 0.3rem ${({ theme }) => theme.colorBackground.tertiary} solid;
  border-radius: 1rem;
  box-shadow: ${({ theme, $isActive }) => $isActive ? `0 0 0.5rem ${theme.colorBackground.tertiary}` : ''};
  cursor: pointer;

  &:first-of-type {
    margin: 0 1.5rem 0 0;
  }

  &:last-of-type {
    margin: 0 0 0 1.5rem;
  }

  &:only-of-type {
    margin: 0 1.5rem 0 0;
  }

  &:hover {
  background-color: ${({ theme }) => theme.colorBackground.secondary};
  color: ${({ theme }) => theme.color.secondary};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colorBackground.tertiary};
}

  &:focus {
  outline: none;
}
`;

const ButtonDescription = styled.p<ButtonDescriptionT>`
  display: ${({ $isActive }) => $isActive ? 'block' : 'none'};
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export {
  SectionContainer,
  ButtonContainer,
  ButtonCategoryContainer,
  DescriptionContainer,
  OptionButton,
  ButtonDescription,
};

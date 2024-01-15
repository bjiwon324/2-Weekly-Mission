import styled from 'styled-components';

const InputStyled = styled.input`
  display: flex;
  margin: 0.75rem auto 0;
  padding: 1.125rem 15px;
  border-radius: 8px;
  width: 100%;
  border: 1px solid var(--linkbrary-gray-20);
  background: var(--linkbrary-white);
  color: var(--linkbrary-gray-100);
  margin-bottom: 1.5rem;

  &:focus {
    outline: 1px solid var(--linkbrary-primary-color);
    border: 1px solid var(--linkbrary-primary-color);
  }
`;

interface Props {
  id: string;
  type: string;
  placeholder: string;
}

//email | text | password

export default function Input({ id, type = 'email', placeholder }: Props) {
  return <InputStyled id={id} type={type} placeholder={placeholder} />;
}

import styled from 'styled-components';
import PrimeryButton from '@/Components/sharing/SPrimeryButton';

const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: var(--linkbrary-bg, #f0f6ff);
  text-align: center;
  z-index: 2;
`;

const FormBox = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;

  @media (max-width: 767px) {
    width: 100%;
    padding: 2rem;
  }
`;

const Form = styled.form`
  text-align: left;

  margin: 1rem 0;
`;

const P = styled.p`
  font-size: 0.875rem;
  > a {
    color: var(--linkbrary-primary-color);
  }
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
  margin-bottom: -1.5rem;
`;

const Button = styled(PrimeryButton)`
  width: 100%;
  display: flex;
  padding: 1rem 1.25rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  color: var(--Grey-Light, #f5f5f5);
  font-size: 1.125rem;
  font-weight: 600;
`;

export { Background, Form, P, Label, Button, FormBox };

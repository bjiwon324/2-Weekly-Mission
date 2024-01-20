import { Label } from '@/pages/Auth/signin/styled';
import Image from 'next/image';
import { useState } from 'react';
import { RegisterOptions } from 'react-hook-form';

import styled from 'styled-components';

const InputBox = styled.div`
  position: relative;
  margin: 2rem 0;
  .eye {
    position: absolute;
    left: 92%;
    top: 3rem;
  }
`;

const ErrorText = styled.p`
  position: absolute;
  bottom: 0.7rem;
  color: var(--Linkbrary-red);
  margin: 0 0 -2rem;
  font-size: 0.875rem;
`;

const InputStyled = styled.input`
  display: flex;
  margin: 0.5rem auto;
  padding: 1.125rem 15px;
  border-radius: 8px;
  width: 100%;
  border: 1px solid var(--linkbrary-gray-20);
  background: var(--linkbrary-white);
  color: var(--linkbrary-gray-100);

  &:focus {
    outline: 1px solid var(--linkbrary-primary-color);
    border: 1px solid var(--linkbrary-primary-color);
  }

  &.error {
    outline: 1px solid var(--Linkbrary-red);
    border: 1px solid var(--Linkbrary-red);
  }
`;

interface FormInput {
  email: string;
  password: string;
  confirmedpassword?: string;
}

interface Props {
  label: string;
  labelName: string;
  type: string;
  placeholder: string;
  register: any;
  RegisterOptions: RegisterOptions<FormInput>;
  error: any;
}

//email | text | password

export default function Input({ label, labelName, type, placeholder, register, RegisterOptions, error }: Props) {
  const [inputType, setInputType] = useState(type);

  const handlePasswordType = () => {
    setInputType(type === 'password' ? 'text' : 'password');
  };

  const eyeImg = inputType === 'password' ? '/eye-off.png' : '/eye-on.png';

  return (
    <InputBox>
      <Label htmlFor={labelName}>{label}</Label>
      <InputStyled
        type={inputType}
        id={labelName}
        placeholder={placeholder}
        {...register(labelName, { ...RegisterOptions })}
        className={error[labelName] && 'error'}
      />
      <ErrorText>{error && error[labelName]?.message}</ErrorText>

      {type === 'password' ? (
        <Image className="eye" width={16} height={16} src={eyeImg} alt="비밀번호 보기" onClick={handlePasswordType} />
      ) : null}
    </InputBox>
  );
}

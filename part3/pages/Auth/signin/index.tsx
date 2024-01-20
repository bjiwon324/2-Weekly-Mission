import Input from '@/Components/Input';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import SnsBox from '@/Components/SnsBox';
import { FocusEventHandler, useState } from 'react';

interface FormInput {
  email: string;
  password: string;
}

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <S.Background>
      <S.FormBox>
        <Link className="title" href="/">
          <Image src="logo.svg" width={210.6} height={38} alt="logo" />
        </Link>
        <S.P className="title">
          회원이 아니신가요? <Link href="/signup">회원 가입하기</Link>
        </S.P>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors}
            label="이메일"
            labelName="email"
            register={register}
            RegisterOptions={{
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '유효한 이메일 주소를 입력해 주세요.',
              },
            }}
            placeholder="이메일을 입력해 주세요"
            type="email"
          />

          <Input
            error={errors}
            label="비밀번호"
            labelName="password"
            register={register}
            RegisterOptions={{
              required: '비밀번호를 입력해 주세요.',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                message: '비밀 번호는 영문, 숫자 조합 8자 이상 입력해 주세요',
              },
            }}
            placeholder="비밀번호를 입력해 주세요"
            type="password"
          />

          <S.Button type="submit">로그인</S.Button>
        </S.Form>
        <SnsBox>소셜 로그인</SnsBox>
      </S.FormBox>
    </S.Background>
  );
}

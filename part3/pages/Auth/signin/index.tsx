import Input from '@/Components/Input';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import SnsBox from '@/Components/SnsBox';
import { FocusEventHandler, useState } from 'react';
import axios from '@/pages/api/axios';
import { useRouter } from 'next/router';

interface FormInput {
  email: string;
  password: string;
}

export default function Signin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInput>({
    mode: 'onBlur',
  });
  const router = useRouter();
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    localStorage.removeItem('accessToken');

    try {
      await axios
        .post('sign-in', data)
        .then((response) => localStorage.setItem('accessToken', response.data.data.accessToken))

        .then((as) => console.log(localStorage.getItem('accessToken')));
    } catch (error: any) {
      if (error.response.status === 400) {
        setError('email', { message: '이메일을 확인해 주세요' });
        setError('password', { message: '비밀번호를 확인해 주세요' });
      } else {
      }
    } finally {
      if (localStorage.getItem('accessToken')) {
        router.push(`/folder/:id`);
      }
    }
  };

  return (
    <S.Background>
      <S.FormBox>
        <Link className="title" href="/">
          <Image src="/logo.svg" width={210.6} height={38} alt="logo" />
        </Link>
        <S.P className="title">
          회원이 아니신가요? <Link href="/Auth/signup">회원 가입하기</Link>
        </S.P>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={touched.email && errors.email}
            label="이메일"
            labelName="email"
            register={register}
            RegisterOptions={{
              required: '이메일을 입력해 주세요.',
              onBlur: handleBlur,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '유효한 이메일 주소를 입력해 주세요.',
              },
            }}
            placeholder="이메일을 입력해 주세요"
            type="email"
          />

          <Input
            error={touched.password && errors.password}
            label="비밀번호"
            labelName="password"
            register={register}
            RegisterOptions={{
              required: '비밀번호를 입력해 주세요.',
              onBlur: handleBlur,
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

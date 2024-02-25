import { SubmitHandler, useForm } from 'react-hook-form';
import { Background, Button, Form, FormBox, P } from '../signin/styled';
import Link from 'next/link';
import Image from 'next/image';
import Input from '@/Components/Input';
import SnsBox from '@/Components/SnsBox';
import { FocusEventHandler, useState } from 'react';
import axios from '@/pages/api/axios';

interface FormInput {
  email: string;
  password: string;
  confirmedpassword: string;
}

export default function Signup() {
  const { register, handleSubmit, watch, setError, clearErrors, formState } = useForm<FormInput>();
  const { errors } = formState;

  const password = watch('password', '');
  const confirmedpassword = watch('confirmedpassword', '');

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const handleConfirmedpassword = () => {
    if (confirmedpassword !== password) {
      setError('confirmedpassword', {
        type: 'manual',
        message: '비밀번호가 일치하지 않습니다.',
      });
    } else if (confirmedpassword === password) {
      clearErrors('confirmedpassword');
    }
  };
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const { email, password } = data;
    try {
      await axios.post('sign-up', { email, password });
    } catch (error: any) {
      if (error.response.status === 400) {
        setError('email', { type: 'validate', message: '중복된 이메일입니다' });
      }
    }
  };

  return (
    <Background>
      <FormBox>
        <Link className="title" href="/">
          <Image src="/logo.svg" width={210.6} height={38} alt="logo" />
        </Link>
        <P className="title">
          이미 회원이신가요? <Link href="/Auth/signin">로그인 하기</Link>
        </P>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            error={errors.confirmedpassword}
            label="비밀번호 확인"
            labelName="confirmedpassword"
            register={register}
            RegisterOptions={{
              required: '비밀번호 확인을 입력해 주세요.',
              onBlur: handleConfirmedpassword,
            }}
            placeholder="비밀번호를 입력해 주세요"
            type="password"
          />

          <Button type="submit">회원가입</Button>
        </Form>
        <SnsBox>다른 방식으로 가입하기</SnsBox>
      </FormBox>
    </Background>
  );
}

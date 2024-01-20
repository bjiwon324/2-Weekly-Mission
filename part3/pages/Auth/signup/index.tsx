import { SubmitHandler, useForm } from 'react-hook-form';
import { Background, Button, Form, FormBox, P } from '../Auth/signin/styled';
import Link from 'next/link';
import Image from 'next/image';
import Input from '@/Components/Input';
import SnsBox from '@/Components/SnsBox';

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

  const handleConfirmedpassword = () => {
    if (confirmedpassword !== password) {
      setError('confirmedpassword', {
        type: 'manual',
        message: '비밀번호가 일치하지 않습니다.',
      });
    } else {
      clearErrors('confirmedpassword');
    }
  };

  console.log('error', errors);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('data', data);
  };
  return (
    <Background>
      <FormBox>
        <Link className="title" href="/">
          <Image src="logo.svg" width={210.6} height={38} alt="logo" />
        </Link>
        <P className="title">
          이미 회원이신 가요? <Link href="/signin">로그인 하기</Link>
        </P>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            error={errors}
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

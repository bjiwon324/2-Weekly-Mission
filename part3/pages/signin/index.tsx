import Input from '@/Components/Input';
import Image from 'next/image';
import Link from 'next/link';
import { Background, Form, P, Label, Button, FormBox } from './styled';
import { useForm } from 'react-hook-form';
import SnsBox from '@/Components/SnsBox';

export default function Sigin() {
  const { register, handleSubmit } = useForm();

  return (
    <Background>
      <FormBox>
        <Link className="title" href="/">
          <Image src="logo.svg" width={210.6} height={38} alt="logo" />
        </Link>
        <P className="title">
          회원이 아니신가요? <Link href="/">회원 가입하기</Link>
        </P>
        <Form>
          <Label htmlFor="email">이메일</Label>
          <Input
            {...register('email', { required: '이메일을 입력해주세요' })}
            id="email"
            placeholder="이메일을 입력해 주세요"
            type="email"
          />
          <Label htmlFor="password">비밀번호</Label>
          <Input
            {...register('password')}
            id="password"
            placeholder="비밀번호를 입력해 주세요"
            type={'password'}
          />
          <Button type="submit">로그인</Button>
        </Form>
        <SnsBox>소셜 로그인</SnsBox>
      </FormBox>
    </Background>
  );
}

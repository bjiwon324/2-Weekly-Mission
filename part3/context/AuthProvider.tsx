import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import axios from '@/pages/api/axios';
import { useRouter } from 'next/router';

interface AuthContextProps {
  user: {};
  isPending: boolean;
  login: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  // updateMe: (data: { name: string; email: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState({ user: {}, isPending: true });

  async function getMe() {
    setValues((prevValues) => ({
      ...prevValues,
      isPending: true,
    }));
    let nextUser = {};
    try {
      const res = await axios.get('users');
      nextUser = res.data;
    } finally {
      setValues((prevValues) => ({
        ...prevValues,
        user: nextUser,
        isPending: false,
      }));
    }
  }

  async function login(data: unknown) {
    await axios.post('sign-in', { data });
    await getMe();
  }

  async function logout() {
    // ...
  }

  // async function updateMe({  email }) {
  //   const res = await axios.post('/users/me', { name, email });
  //   const nextUser = res.data;
  //   setValues((prevValues) => ({ ...prevValues, user: nextUser }));
  // }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: values.user,
        isPending: values.isPending,
        login,
        logout,
        // updateMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(required: boolean) {
  const context = useContext(AuthContext);
  const router = useRouter();
  if (!context) {
    throw new Error('반드시 AuthProvider 안에서 사용해야 합니다.');
  }

  useEffect(() => {
    if (required && !context.user && !context.isPending) {
      router.push('/login');
    }
  }, [context.user, context.isPending, required, router]);

  return context;
}

import { motion } from 'framer-motion';
import AnimatedTabs from './AnimatedTabs.jsx';
import { redirect, json, useActionData } from 'react-router-dom';

export default function Authentication() {
  const error = useActionData();

  return (
    <div className="absolute top-0 left-0 grid w-full h-full place-content-center ">
      <motion.div
        layout="position"
        className="relative grid h-full gap-4 p-0 mx-1 my-3 transition-none rounded-lg shadow-none cursor-pointer w-fit min-w-fit "
      >
        <AnimatedTabs error={error || null} mode="animatedContainer" />
      </motion.div>
    </div>
  );
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'unsupported mode' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  if (mode === 'signup') {
    authData.name = data.get('username');
  }

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Something went wrong' }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;
  const email = resData.email;
  localStorage.setItem('authToken', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
  localStorage.setItem('email', email);

  return redirect('/');
}

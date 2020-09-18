import { useRef, useState } from 'react';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);

  const handleLogin = async () => {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passRef.current?.value,
      }),
    });

    const json = await res.json();
    setMessage(json);
  };

  return (
    <div>
      {JSON.stringify(message)}
      <h1>Login user</h1>
   

      <div>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Enter email" ref={emailRef} />
      </div>

      <div>
        <label htmlFor="password">Paasword</label>
        <input type="password" id="password" placeholder="Enter password" ref={passRef} />
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

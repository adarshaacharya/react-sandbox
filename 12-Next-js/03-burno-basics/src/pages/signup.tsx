import { useRef, useState } from 'react';

export default function Signup() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);

  const handleSignup = async () => {
    const res = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameRef.current?.value,
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
      <h1>Create new user</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name..."
          id="name"
          ref={nameRef}
        />
      </div>
      <input type="text" placeholder="Email..." ref={emailRef} />
      <input type="password" placeholder="Password..." ref={passRef} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

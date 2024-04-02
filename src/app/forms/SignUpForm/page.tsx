"use client";
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios, { Axios } from 'axios';
import { set } from 'mongoose';

export default function SignUpForm() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: ''
  })

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup', user);
      router.push('/login');
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col w-80 border justify-center items-center">
        <h1>{loading ? "processing" : "sign up"}</h1>
        <label>Username</label>
        <input id="username" type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
        <label>email</label>
        <input id="email" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <label>password</label>
        <input id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button onClick={onSignUp} className="border m-5 p-2">{buttonDisabled ? "no sign up" : "sign up"}</button>
      </div>
    </div>
  )
}

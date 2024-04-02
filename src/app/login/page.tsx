"use client";
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios, { Axios } from 'axios';
import { set } from 'mongoose';

export default function LogInPage() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      router.push('/profile');
      console.log(response);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col w-80 border justify-center items-center">
        <h1>{loading ? "processing" : "Login"}</h1>
        <label>email</label>
        <input id="email" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <label>password</label>
        <input id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button onClick={onLogin} className="border m-5 p-2">{buttonDisabled ? "no sign up" : "sign up"}</button>
      </div>
    </div>
  )
}


"use client";
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = React.useState("nothing");
  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      router.push('/login');
      
    } catch (error: any) {
      console.log(error.message);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    console.log(res.data);
    setUser(res.data.data._id);
  }


  return (
    <div>
    <div>Profile Page</div>
    <h2>{user === "nothing" ? "nothing" : <Link href={`/profile/${user}`}>{user}</Link>}</h2>
    <button onClick={logout}>Log Out</button>
    <button onClick={getUserDetails}>Get User Details</button>
    </div>
  )
}

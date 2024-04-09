"use client";
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import LogoutBtn from '@/app/myComponents/LogoutBtn';


export default function ProfilePage() {
  const [user, setUser] = React.useState("nothing");


  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    console.log(res.data);
    setUser(res.data.data._id);
  }


  return (
    <div>
    <div>Profile Page</div>
    <h2>{user === "nothing" ? "nothing" : <Link href={`/profile/${user}`}>{user}</Link>}</h2>
    <LogoutBtn />
    <button onClick={getUserDetails}>Get User Details</button>
    </div>
  )
}

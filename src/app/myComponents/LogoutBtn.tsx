"use client";
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function LogoutBtn() {
  const router = useRouter();

// export async function logout() {
//     try {
//       await axios.get('/api/users/logout');

//     } catch (error: any) {
//       console.log(error.message);
//     }
//   }
const logout = async () => {
  try {
    await axios.get('/api/users/logout');
    router.push('/login');
  } catch (error: any) {
    console.log(error.message);
  }
}

  return (
    <div >
      <button onClick={logout}>
          Logout
      </button>
    </div>
  )
}


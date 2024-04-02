import Link from 'next/link';
import React from 'react';



export default function Header() {
  return (
    <header className="fixed z-10 border-b border-gray-500 h-14 w-full text-2xl flex bg-white justify-between items-center px-5">
      <div>
        <img src="/assets/logo.png" alt="logo" className="h-14 border-b border-gray-500" />
      </div>
      <div>
        <Link href="/login">
          <p className="text-sm">Login</p>
        </Link>

        <Link href="/forms/SignUpForm">Sign Up
        </Link>
      </div>
    </header>

  );
}


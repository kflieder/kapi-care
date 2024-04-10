"use client";
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios, { Axios } from 'axios';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export default function LogInPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: user
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


  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setUser(values);
    onLogin();
  }

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='w-80'>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    </div>
  )
}
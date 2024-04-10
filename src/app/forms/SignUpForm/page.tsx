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


const signUpSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8)
})

export default function SignUpForm() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: ''
  })

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: user
  })

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup', user);
      console.log(response.data);
      router.push('/login');
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    setUser(values);
    onSignUp();
  }

  return (
    <div className="flex justify-center h-screen items-center">
    <div className="w-80">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" type="email" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" type="password" {...field} />
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

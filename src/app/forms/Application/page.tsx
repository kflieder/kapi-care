"use client";
import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import axios from 'axios';
import { Textarea } from '@/components/ui/textarea';

const applicationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().min(10),
  region: z.string(),
  experience: z.string(),
})


export default function Application() {
  const [employee, setEmployee] = React.useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    region: '',
    experience: '',
  })

  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: employee
  })

  const newEmployee = async () => {
    try {
      const response = await axios.post('/api/employees/application', employee);
      console.log(response.data)
    } catch (error: any) {
      console.log(error)
    }
  }

  function onSubmit(values: z.infer<typeof applicationSchema>) {
    console.log(values)
    setEmployee(values)
    newEmployee()
  }

  return (
    <div className="outline flex justify-center bg-gray-200">
    <div className="w-80 my-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input placeholder="First Name and Last Name" {...field} />
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
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
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
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number:</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region:</FormLabel>
                <FormControl>
                  <Input placeholder="Region" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience:</FormLabel>
                <FormControl>
                  <Textarea placeholder="Experience" {...field} />
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

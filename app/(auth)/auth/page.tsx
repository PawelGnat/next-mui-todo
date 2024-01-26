"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import signUp from "@/firebase/auth/signup";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Auth() {
  const [login, setLogin] = useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    setLogin((prev) => !prev);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/");
  };

  return (
    <Tabs
      defaultValue="account"
      className="w-[400px] min-h-screen flex flex-col items-center justify-center mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );

  //   return (
  //     <>
  //       <h1 className="mt-60 mb-30">Sign up</h1>
  //       <form onSubmit={handleForm} className="form">
  //         <label htmlFor="email">
  //           <p>Email</p>
  //           <input
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //             type="email"
  //             name="email"
  //             id="email"
  //             placeholder="example@mail.com"
  //           />
  //         </label>
  //         <label htmlFor="password">
  //           <p>Password</p>
  //           <input
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //             type="password"
  //             name="password"
  //             id="password"
  //             placeholder="password"
  //           />
  //         </label>
  //         <button type="submit">Sign up</button>
  //       </form>
  //     </>
  //   );
}

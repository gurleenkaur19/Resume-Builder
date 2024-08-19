"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter your Last name"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Email</Label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <Button type="submit">Register</Button>
    </div>
  );
};

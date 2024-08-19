"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="grid w-full items-center gap-4">
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
            id="email"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <Button variant="ghost" className="bg-blue-600">
        Sign In
      </Button>
    </div>
  );
};

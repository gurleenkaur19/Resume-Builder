import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Resume Builder</h1>
      <div className="flex space-x-4">
        <Link href="/login">
          <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
            Sign In
          </Button>
        </Link>
        <Link href="/register">
          <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
            Sign Up
          </Button>
        </Link>
      </div>
    </main>
  );
}

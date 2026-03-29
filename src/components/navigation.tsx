import Link from "next/link";
import {
  SignInButton,
  SignOutButton,
  // UserButton,
} from "@clerk/nextjs";

export default function Navigation() {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 ms:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
              Next.js App
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {/* {signin buttons get here} */}
            {/* meaning it will create a good modal overlay instead of redirecting */}

            <SignInButton mode="modal" />

            <Link href="/user-profile">Profile</Link>
            <SignOutButton />
            {/* <UserButton /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

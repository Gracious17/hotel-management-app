import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import Link from "next/link";
import { GithubSignIn } from "@/components/github-sign-in";
import { auth } from "@/lib/auth";

const page = async () => {
  // if session redirect home
  // here
  const session = await auth();
  if (session) redirect("/");
  return (
    <div className="w-full max-w-sm mx-auto space-y-6 ">
      <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

      {/* github sign in component */}
      <GithubSignIn />
      <div className="relative ">
        <div className="absolute inset-0 flex items-center ">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            or continue with email
          </span>
        </div>
      </div>

      {/* Email/Password Sign Up */}
      <form
        className="space-y-4"
        action={async (formData) => {
          "use server";
          const res = await signUp(formData);
          if (res.success) {
            redirect("/sign-in");
          }
        }}
      >
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="new-password"
        />
        <Button className="w-full " type="submit">
          Sign Up
        </Button>
      </form>
      <div className="text-center ">
        <Button asChild variant="link">
          <Link href="/sign-in">Already have an account? Sign in</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation"; // Use Next.js router for redirection
// import Link from "next/link";
// import { GithubSignIn } from "@/components/github-sign-in";
// import { auth } from "@/lib/auth"; // Import signUp function

// const Page = () => {
//   const router = useRouter(); // For redirecting
//   const [formData, setFormData] = useState({
//     email: "",
//     first_name: "",
//     last_name: "",
//     password: "",
//     is_publisher: false, // default to false
//   });

//   const [loading, setLoading] = useState(false); // To handle loading state
//   const [error, setError] = useState<string | null>(null); // To manage error states

//   // Effect to check session on component mount
//   useEffect(() => {
//     const checkSession = async () => {
//       const session = await auth();
//       if (session) {
//         router.push("/"); // Redirect to homepage if already logged in
//       }
//     };
//     checkSession();
//   }, [router]);

//   // Handle input changes for the form
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // Handle form submission asynchronously
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true); // Set loading before async request
//     setError(null); // Reset error state before submitting

//     try {
//       const res = await sign(formData);
//       if (res.success) {
//         router.push("/sign-in"); // Redirect to sign-in page on successful sign up
//       } else {
//         setError("Registration failed. Please try again.");
//       }
//     } catch (error) {
//       if (error instanceof Error)
//         setError("An error occurred during registration.");
//     } finally {
//       setLoading(false); // Reset loading state after async operation
//     }
//   };

//   return (
//     <div className="w-full max-w-sm mx-auto space-y-6">
//       <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

//       {/* GitHub sign-in component */}
//       <GithubSignIn />

//       <div className="relative">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t" />
//         </div>
//         <div className="relative flex justify-center text-sm">
//           <span className="bg-background px-2 text-muted-foreground">
//             or continue with email
//           </span>
//         </div>
//       </div>

//       {/* Email/Password Sign Up */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Input
//           name="email"
//           placeholder="Email"
//           type="email"
//           required
//           autoComplete="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <Input
//           name="first_name"
//           placeholder="First Name"
//           type="text"
//           required
//           value={formData.first_name}
//           onChange={handleChange}
//         />
//         <Input
//           name="last_name"
//           placeholder="Last Name"
//           type="text"
//           required
//           value={formData.last_name}
//           onChange={handleChange}
//         />
//         <Input
//           name="password"
//           placeholder="Password"
//           type="password"
//           required
//           autoComplete="new-password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         {/* Publisher checkbox */}
//         <label>
//           <input
//             type="checkbox"
//             name="is_publisher"
//             checked={formData.is_publisher}
//             onChange={handleChange}
//           />
//           I am a Publisher
//         </label>

//         <Button className="w-full" type="submit" disabled={loading}>
//           {loading ? "Signing up..." : "Sign Up"}
//         </Button>
//       </form>

//       {/* Display error message if there's any */}
//       {error && <p className="text-red-500">{error}</p>}

//       <div className="text-center">
//         <Button asChild variant="link">
//           <Link href="/sign-in">Already have an account? Sign in</Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Page;

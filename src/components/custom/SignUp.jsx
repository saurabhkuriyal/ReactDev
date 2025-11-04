"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SignUp({ onSuccess } = {}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    setError("");
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return false;
    }
    return true;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      // Default signup behaviour: create a user record using the public API route.
      // This project has an API at /api/user that accepts { username, email }.
      const username = email.split("@")[0];
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Signup failed");
      setLoading(false);
      setEmail("");
      setPassword("");
      setError("");
      if (onSuccess) onSuccess(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
  }

  function handleGoogle() {
    // Placeholder: integrate with your Google OAuth flow or next-auth
    // For now, redirect to a common OAuth entry point which you can implement on the server
    window.location.href = "/api/auth/google";
  }

  return (
    <div className="max-w-md w-full bg-neutral-950 border border-white/5 rounded-xl p-6 shadow-md">
      <h3 className="text-2xl font-semibold text-white mb-1">Create an account</h3>
      <p className="text-sm text-neutral-400 mb-6">Start building beautiful websites with your AI assistant.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm text-neutral-300">Email</span>
          <div className="mt-2 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-neutral-900 border border-white/5 rounded-md px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="you@example.com"
            />
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          </div>
        </label>

        <label className="block">
          <span className="text-sm text-neutral-300">Password</span>
          <div className="mt-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-neutral-900 border border-white/5 rounded-md px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Choose a secure password"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
            >
              {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </button>
          </div>
        </label>

        {error && <div className="text-sm text-red-400">{error}</div>}

        <div className="flex flex-col gap-3">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
          </Button>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-white/6 px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-900/90"
          >
            <img src="/icons/google.svg" alt="Google" className="h-4 w-4" />
            Continue with Google
          </button>
        </div>
      </form>

      <div className="mt-4 text-sm text-neutral-500">
        By continuing you agree to our <Link href="/terms" className="text-purple-400 underline">Terms</Link> and <Link href="/privacy" className="text-purple-400 underline">Privacy Policy</Link>.
      </div>
    </div>
  );
}

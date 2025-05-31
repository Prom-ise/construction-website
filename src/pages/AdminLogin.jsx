import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetMsg, setResetMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [sendCodeLoading, setSendCodeLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Normal login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("https://construct-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }
      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Send reset code
  const handleSendResetCode = async () => {
    setResetMsg("");
    setError("");
    setSendCodeLoading(true);
    try {
      const res = await fetch("https://construct-backend.onrender.com/api/auth/sendResetCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to send reset code");
        setSendCodeLoading(false);
        return;
      }
      setResetEmailSent(true);
      setResetMsg("Reset code sent to admin email.");
    } catch {
      setError("Failed to send reset code");
    } finally {
      setSendCodeLoading(false);
    }
  };

  // Reset password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setResetMsg("");
    setError("");
    setResetLoading(true);
    try {
      const res = await fetch("https://construct-backend.onrender.com/api/auth/resetPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: resetCode, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to reset password");
        setResetLoading(false);
        return;
      }
      setResetMsg("Password updated! You can now login.");
      setShowReset(false);
      setResetEmailSent(false);
      setResetCode("");
      setNewPassword("");
    } catch {
      setError("Failed to reset password");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white p-6 shadow-md rounded text-black">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      {!showReset ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            className="w-full bg-blue-600 text-white p-2 rounded flex items-center justify-center"
            type="submit"
            disabled={loading}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {loading ? "Logging in..." : "Login"}
          </button>
          <button
            type="button"
            className="w-full text-blue-600 underline mt-2"
            onClick={() => setShowReset(true)}
            disabled={loading}
          >
            Change password?
          </button>
          {error && <p className="text-red-600">{error}</p>}
          {resetMsg && <p className="text-green-600">{resetMsg}</p>}
        </form>
      ) : (
        <form onSubmit={handleResetPassword} className="space-y-4">
          {!resetEmailSent ? (
            <>
              <input
                type="email"
                name="email"
                placeholder="Admin Email"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="button"
                className="w-full bg-blue-600 text-white p-2 rounded flex items-center justify-center"
                onClick={handleSendResetCode}
                disabled={sendCodeLoading}
              >
                {sendCodeLoading && (
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                )}
                {sendCodeLoading ? "Sending..." : "Send Reset Code"}
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter Reset Code"
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <button
                className="w-full bg-green-600 text-white p-2 rounded flex items-center justify-center"
                type="submit"
                disabled={resetLoading}
              >
                {resetLoading && (
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                )}
                {resetLoading ? "Resetting..." : "Reset Password"}
              </button>
            </>
          )}
          <button
            type="button"
            className="w-full text-blue-600 underline mt-2"
            onClick={() => {
              setShowReset(false);
              setResetEmailSent(false);
              setResetMsg("");
              setError("");
            }}
            disabled={resetLoading || sendCodeLoading}
          >
            Back to Login
          </button>
          {error && <p className="text-red-600">{error}</p>}
          {resetMsg && <p className="text-green-600">{resetMsg}</p>}
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
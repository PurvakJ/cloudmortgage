import React, { useState, useEffect, useRef } from "react";
import "./Admin.css";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwyW6LY1LQToiWC6JKl3ucL3ALtM1no0758Ayv2ZoGYsZoo8-80LfBxwNm582m3aTOD/exec";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updateMsg, setUpdateMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);

  // Optimized Intersection Observer for scroll animations
  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('animate');
          });
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loggedIn]);

  /* LOGIN */
  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "login",
          email: email,
          password: password
        })
      });

      const result = await res.json();

      if (result.success) {
        setLoggedIn(true);
        setError("");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
    }
    setIsLoading(false);
  };

  /* LOAD CONTACT DATA */
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "getContacts"
        })
      });

      const rows = await res.json();
      setData(rows.slice(1));
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    setIsLoading(false);
  };

  /* UPDATE PASSWORD */
  const updatePassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      setUpdateMsg("Password must be at least 6 characters");
      setTimeout(() => setUpdateMsg(""), 3000);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "updatePassword",
          email: email,
          newPassword: newPassword
        })
      });

      const result = await res.json();

      if (result.success) {
        setUpdateMsg("Password Updated Successfully");
        setNewPassword("");
        setTimeout(() => setUpdateMsg(""), 3000);
      } else {
        setUpdateMsg("Error updating password");
        setTimeout(() => setUpdateMsg(""), 3000);
      }
    } catch (err) {
      setUpdateMsg("Connection error");
      setTimeout(() => setUpdateMsg(""), 3000);
    }
    setIsLoading(false);
  };

  if (!loggedIn) {
    return (
      <div className="admin-page">
        {/* Hero Section - Full width image for login */}
        <div className="admin-hero">
          <div className="admin-hero-overlay"></div>
          <div className="admin-hero-image" aria-label="Admin portal hero background"></div>
          <div className="admin-hero-container">
            <div className="admin-hero-content">
              <h1 className="fade-up">Oakmont Capital</h1>
              <p className="fade-up">Administrator Portal</p>
              <div className="hero-stats fade-up">
                <div className="hero-stat">
                  <span className="hero-stat-number">Secure</span>
                  <span className="hero-stat-label">Access Only</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">24/7</span>
                  <span className="hero-stat-label">Monitoring</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">Encrypted</span>
                  <span className="hero-stat-label">Connection</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-login-container">
          <div className="admin-login">
            <form className="login-card fade-up" onSubmit={login}>
              <div className="login-icon">🔐</div>
              <h2>Admin Login</h2>
              <p className="login-subtitle">Enter your credentials to access the dashboard</p>

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {error && <p className="error">{error}</p>}

              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      {/* Hero Section - Full width image for dashboard */}
      <div className="admin-hero dashboard-hero">
        <div className="admin-hero-overlay"></div>
        <div className="admin-hero-image dashboard-hero-image" aria-label="Dashboard hero background"></div>
        <div className="admin-hero-container">
          <div className="admin-hero-content">
            <h1 className="fade-up">Oakmont Capital Dashboard</h1>
            <p className="fade-up">Welcome back, Administrator</p>
            <div className="hero-stats fade-up">
              <div className="hero-stat">
                <span className="hero-stat-number">{data.length}</span>
                <span className="hero-stat-label">Total Submissions</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">Secure</span>
                <span className="hero-stat-label">Environment</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">Real-time</span>
                <span className="hero-stat-label">Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-dashboard-container">
        <div className="admin-dashboard">
          {/* CONTACT DATA SECTION */}
          <div className="section fade-up">
            <div className="section-header">
              <h2>📋 Contact Submissions</h2>
              <button className="load-btn" onClick={fetchData} disabled={isLoading}>
                {isLoading ? 'Loading...' : '🔄 Load Data'}
              </button>
            </div>

            {data.length === 0 ? (
              <div className="no-data">
                <p>No contact submissions yet. Click "Load Data" to fetch submissions.</p>
              </div>
            ) : (
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Subject</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((r, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{r[1]}</td>
                        <td>{r[2]}</td>
                        <td>{r[3] || '—'}</td>
                        <td>{r[4]}</td>
                        <td className="message-cell">{r[5]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* UPDATE PASSWORD SECTION */}
          <div className="section fade-up">
            <div className="section-header">
              <h2>🔒 Update Password</h2>
            </div>
            <div className="update-box">
              <input
                type="password"
                placeholder="Enter New Password (min. 6 characters)"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button onClick={updatePassword} disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Update Password →'}
              </button>
            </div>
            {updateMsg && <p className={updateMsg.includes('Successfully') ? 'success' : 'error'}>{updateMsg}</p>}
            <p className="security-note">
              ⚠️ Use a strong password with at least 8 characters, including numbers and special characters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
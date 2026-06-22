import { useState } from "react";
import { useAuthContext } from "../../auth/AuthContext";
import "./profile.css";

function Profile() {
  const { user, logout } = useAuthContext();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  return (
    <div className="page-shell profile-page">
      <div className="profile-hero glass-card">
        <div className="profile-avatar">{user?.name?.charAt(0).toUpperCase() || "U"}</div>
        <div className="profile-hero-copy">
          <p className="eyebrow">Profile</p>
          <h2>{editMode ? "Update your details" : "Welcome back"}</h2>
          <p>Manage your account information and stay in control of your expenses.</p>
        </div>
      </div>

      <section className="profile-details glass-card">
        <div className="profile-row">
          <span>Username</span>
          {editMode ? (
            <input value={name} onChange={(e) => setName(e.target.value)} />
          ) : (
            <strong>{name}</strong>
          )}
        </div>

        <div className="profile-row">
          <span>Email</span>
          {editMode ? (
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          ) : (
            <strong>{email}</strong>
          )}
        </div>

        <div className="profile-row">
          <span>Joined</span>
          <strong>{new Date(user?.joinedAt || Date.now()).toLocaleDateString()}</strong>
        </div>

        <div className="profile-actions">
          <button type="button" onClick={() => setEditMode((prev) => !prev)}>
            {editMode ? "Save profile" : "Edit profile"}
          </button>
          <button type="button" className="secondary" onClick={logout}>
            Logout
          </button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
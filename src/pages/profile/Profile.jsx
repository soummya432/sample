import { useState } from "react";
import "./profile.css";

function Profile() {

    const [edit,setEdit]=useState(false);

    const user=JSON.parse(localStorage.getItem("user"));
    const [name,setName]=useState(user?.name||"");
    const [email,setEmail]=useState(user?.email||"");

    return (
        <div id="profile">

            <div className="profile-card">

                <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="profile"
                />

                {
                    edit ?
                    (
                        <>
                            <input
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />

                            <input
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />

                        </>
                    )
                    :
                    (
                        <div className="profile-info">
                            <h2>{user?.name}</h2>

                            <p>{user?.email}</p>

                        </div>
                    )
                }

                <button
                    onClick={()=>setEdit(!edit)}
                >
                    {edit ? "Save Profile" : "Edit Profile"}
                </button>

            </div>

        </div>
    );
}

export default Profile;
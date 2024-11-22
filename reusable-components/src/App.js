import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import ProfileDetail from "./ProfileDetail";

const App = () => {
  const profiles = [
    {
      id: 1,
      name: "David John",
      image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
      description: "A software engineer passionate about open-source projects.",
      details: "John has worked on various open-source projects, contributing to the community.",
    },
    {
      id: 2,
      name: "James Smith",
      image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/d19f6568-b880-433a-99c2-bd4cbd3a988c/819dde35-e26f-4a77-b6a7-ed41cd951703.png",
      description: "An artist and illustrator with a love for digital media.",
      details: "Jane creates stunning illustrations and teaches art classes online.",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {profiles.map((profile) => (
                <Link key={profile.id} to={`/profile/${profile.id}`} style={{ textDecoration: "none" }}>
                  <ProfileCard
                    name={profile.name}
                    image={profile.image}
                    description={profile.description}
                  />
                </Link>
              ))}
            </div>
          }
        />
        <Route
          path="/profile/:id"
          element={<ProfileDetail profiles={profiles} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

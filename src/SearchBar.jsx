// src/SearchBar.js
import React, { useState } from "react";
import "./SearchBar.css";

const sampleData = [
  {
    type: "wallet",
    value: "0xA1B2C3D4E5F678901234567890abcdef12345678",
    profile: {
      name: "Wallet User 1",
      email: "wallet1@example.com",
      bio: "This wallet has been flagged for suspicious transactions.",
    },
  },
  {
    type: "wallet",
    value: "0xF1E2D3C4B5A6978877665544332211ffeeddccbbaa",
    profile: {
      name: "Wallet User 2",
      email: "wallet2@example.com",
      bio: "Involved in multiple transactions linked to scam activities.",
    },
  },
  {
    type: "phone",
    value: "+1-555-123-4567",
    profile: {
      name: "Phone User 1",
      email: "phone1@example.com",
      bio: "Reported for making fraudulent calls.",
    },
  },
  {
    type: "phone",
    value: "+44-20-1234-5678",
    profile: {
      name: "Phone User 2",
      email: "phone2@example.com",
      bio: "Suspected of being used in phishing schemes.",
    },
  },
  {
    type: "name",
    value: "Alice Johnson",
    profile: {
      name: "Alice Johnson",
      email: "alice@example.com",
      bio: "Linked to multiple scam reports.",
    },
  },
  {
    type: "name",
    value: "Bob Smith",
    profile: {
      name: "Bob Smith",
      email: "bob@example.com",
      bio: "Associated with suspicious online activities.",
    },
  },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Find an item that exactly matches the query (case-insensitive)
    const found = sampleData.find(
      (item) => item.value.toLowerCase() === query.toLowerCase()
    );

    if (found) {
      setSelectedProfile(found.profile);
      setError("");
    } else {
      setSelectedProfile(null);
      setError("No matching user profile found.");
    }
  };

  const handleReport = () => {
    // Handle report functionality. For now, we'll just display an alert.
    alert(`Report submitted for ${selectedProfile.name}`);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for crypto wallets, phone numbers or names..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {selectedProfile && (
        <div className="profile-container">
          <h2>{selectedProfile.name}</h2>
          <p>Email: {selectedProfile.email}</p>
          <p>{selectedProfile.bio}</p>
          <button onClick={handleReport} className="report-button">
            Report
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

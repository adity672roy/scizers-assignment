import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Pagination from "./components/Pagination";
import "./App.css";

const API_URL = "https://swapi.dev/api/people";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(`${API_URL}?page=${currentPage}`);
        setUsers(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="heading">Star Wars </h1>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search by name"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {loading && (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      )}
      {error && <p>{error}</p>}
      <div className="user-list">
        {filteredUsers.map((user) => (
          <UserCard key={user.name} user={user} />
        ))}
      </div>
      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default App;

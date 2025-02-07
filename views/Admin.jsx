import React, { useState } from "react";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Admin = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "User 1",
      description: "Flagged for inappropriate content",
      flagged: true,
    },
    {
      id: 2,
      name: "User 2",
      description: "Flagged for spamming",
      flagged: true,
    },
    {
      id: 3,
      name: "User 3",
      description: "Flagged for suspicious activity",
      flagged: false,
    },
  ]);

  const handleFlag = (id) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, flagged: true } : user))
    );
  };

  const handleUnflag = (id) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, flagged: false } : user))
    );
  };

  return (
    <Container sx={{ display: "flex", padding: 2 }}>
      <aside
        style={{
          width: "200px",
          height: "100vh",
          marginRight: "20px",
          backgroundColor: "#e6e8e7",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Menu
        </Typography>
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="User Management" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </aside>
      <div style={{ width: "100px" }}></div>
      <main style={{ flexGrow: 1 }}>
        <header>
          <Typography variant="h4" gutterBottom sx={{ color: "#6e6e6e" }}>
            Admin Page
          </Typography>
        </header>
        <Typography variant="h6" gutterBottom>
          User Management
        </Typography>
        <List>
          {users.map((user) => (
            <ListItem key={user.id} divider>
              <ListItemText primary={user.name} secondary={user.description} />
              <Button
                variant="contained"
                color="error"
                onClick={() => handleFlag(user.id)}
                disabled={user.flagged}
                sx={{ marginRight: 1 }}
              >
                Flag
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleUnflag(user.id)}
                disabled={!user.flagged}
              >
                Unflag
              </Button>
            </ListItem>
          ))}
        </List>
      </main>
    </Container>
  );
};

export default Admin;

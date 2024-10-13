import { createContext, useContext } from "react";

const NameContext = createContext();

const BUTTON_STYLE = {
  display: "inline-block",
  padding: "4px 10px",
  background: "transparent",
  border: "0",
};

const HEADER_STYLE = {
  display: "flex",
  justifyContent: "flex-end",
  borderBottom: "1px solid",
};

function Button({ children }) {
  return <button style={BUTTON_STYLE}>{children}</button>;
}

function UserButton() {
  const name = useContext(NameContext);
  return <Button>👤 {name}</Button>;
}

function Header() {
  return (
    <header style={HEADER_STYLE}>
      <Button>Home</Button>
      <Button>Groups</Button>
      <Button>Profile</Button>
      <UserButton />
    </header>
  );
}

function Welcome() {
    const name = useContext(NameContext);
  return (
    <section>
      <h1>Welcome, {name}!</h1>
    </section>
  );
}

function Main() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

function Dashboard({ name }) {
  return (
    <NameContext.Provider value={name}>
     
      <Header />
      <Main />
    </NameContext.Provider>
  );
}

export default Dashboard;

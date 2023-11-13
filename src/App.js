import "./styles/index.scss";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

import { Router } from "./routes/Router";

import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <Header />
          <main className="main-container">
            <Router />
          </main>
          <Footer />
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

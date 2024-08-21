import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;

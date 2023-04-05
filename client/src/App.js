import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Layout>
            {" "}
            <Router />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

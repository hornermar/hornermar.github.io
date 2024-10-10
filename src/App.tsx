import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { projects } from "./data/projects";
import { map } from "lodash";
import { Detail } from "./pages/Detail/Detail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-mne" element={<About />} />
        <Route path="/projekty" element={<Projects />} />

        {map(projects, (project) => (
          <Route
            key={project.code}
            path={`/projekty/${project.code}`}
            element={<Detail {...project} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

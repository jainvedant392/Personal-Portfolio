import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import ShelfPage from "./pages/ShelfPage";
import WorkPage from "./pages/WorkPage";
import projects from "./utils/projects.json";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })
  return (
    <>
      <Routes>
        <Route path="/" element={loading ? <Preloader /> : <LandingPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/shelf" element={<ShelfPage />} />
        {projects.map((project, index) => {
          return (
            <Route
              key={index}
              path={`/${project.project_route}`}
              element={<ProjectPage project_id={index} key={index} />}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;

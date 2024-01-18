import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

import { React, useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase.config";
import {
  getDocs,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

function Portfolio() {
  const [projects, setProjects] = useState([]); // Move the data state here

  useEffect(() => {
    const getProjectList = async () => {
      try {
        // Fetch data from the database with orderBy
        const projectsCollection = collection(db, "projects");
        const projectsQuery = query(projectsCollection, orderBy("order"));
        const projectsSnapshot = await getDocs(projectsQuery);

        const projectsData = projectsSnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .reverse();

        setProjects(projectsData);
      } catch (error) {
        console.error(error);
      }
    };

    getProjectList();
  }, []);

  return (
    <div>
      <Title>Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects?.map((project) => (
            <PortfolioItem
              key={project.id}
              imgURL={project.imgURL}
              imgALT={project.imgALT}
              title={project.title}
              slug={project.slug}
              stack={project.stack}
              demoURL={project.demoURL}
              gitURL={project.gitURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

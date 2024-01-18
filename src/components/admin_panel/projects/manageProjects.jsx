import React from "react";
import { useState, useEffect } from "react";
import { db, auth } from "../../../firebase.config";
import {
  doc,
  addDoc,
  setDoc,
  getDocs,
  collection,
  query,
  deleteDoc,
} from "firebase/firestore";

const ManageProject = () => {
  const [projectID, setProjectID] = useState("");
  const [order, setOrder] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [gitURL, setGitURL] = useState("");
  const [demoURL, setDemoURL] = useState("");
  const [stack, setStack] = useState([]);

  const [projects, setProjects] = useState([]);

  const getProjectList = async () => {
    try {
      // Fetch data from the database
      const projectsCollection = collection(db, "projects");
      const projectsQuery = query(projectsCollection);
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

  useEffect(() => {
    

    getProjectList();
  }, [projects]);

  const selectProject = (selectedProject) => {
    if (!selectedProject) {
      setProjectID("");
      setOrder("");
      setTitle("");
      setSlug("");
      setimgURL("");
      setGitURL("");
      setDemoURL("");
      setStack("");
    } else {
      setProjectID(selectedProject.id);
      setOrder(selectedProject.order);
      setTitle(selectedProject.title);
      setSlug(selectedProject.slug);
      setimgURL(selectedProject.imgURL);
      setGitURL(selectedProject.gitURL);
      setDemoURL(selectedProject.demoURL);
      setStack(selectedProject.stack.join(", "));
    }
  };

  const createOrUpdateEntry = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const collectionName = "projects";
    const entryRef = doc(db, collectionName, projectID);

    try {
      await setDoc(entryRef, {
        title: title,
        order: order,
        slug: slug,
        imgURL: imgURL,
        gitURL: gitURL,
        demoURL: demoURL,
        stack: stack.split(",").map((item) => item.trim()),
      });

      // Clear input fields after successful submission
      setProjectID("");
      setOrder("");
      setTitle("");
      setSlug("");
      setimgURL("");
      setGitURL("");
      setDemoURL("");
      setStack("");
      getProjectList();

      console.log("New entry added");
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  const clearForm = (e) => {
    e.preventDefault();
    setProjectID("");
    setOrder("");
    setTitle("");
    setSlug("");
    setimgURL("");
    setGitURL("");
    setDemoURL("");
    setStack("");
  };

  const deleteProject = async (e) => {
    e.preventDefault();
    const collectionName = "projects";
    const entryRef = doc(db, collectionName, projectID);

    try {
      await deleteDoc(entryRef);

      // Clear input fields after successful submission
      setProjectID("");
      setOrder("");
      setTitle("");
      setSlug("");
      setimgURL("");
      setGitURL("");
      setDemoURL("");
      setStack("");
      getProjectList();

      console.log("Project Deleted");
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  return (
    <div className="flex flex-col w-full sm:w-1/3 bg-white border-4 rounded-xl drop-shadow-lg">
      <h2 className="font-bold text-3xl"> Create or Update a Project Entry</h2>

      <div className="flex flex-row w-full gap-8 ml-4 py-4">
        <div className="flex flex-row">
          <select
            className="px-2 py-1 rounded-lg"
            value={projectID}
            onChange={(e) => {
              const selectedProject = projects.find(
                (project) => project.id === e.target.value,
              );
              selectProject(selectedProject);
            }}
          >
            <option value="">Select Project</option>
            {projects?.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row">
          <button
            className="bg-red-500 py-2 px-6 rounded-lg"
            onClick={deleteProject}
          >
            Delete Project
          </button>
        </div>
      </div>

      <form
        className="flex flex-col w-full gap-2 px-2 py-2"
        onSubmit={createOrUpdateEntry}
      >
        <div className="flex flex-row gap-2">
          <input
            placeholder="Project ID"
            name="projectID"
            className="rounded-xl border-2 border-black pl-6 py-1 px-2"
            value={projectID}
            onChange={(e) => setProjectID(e.target.value)}
          />
          <input
            placeholder="Project Order 1 = oldest"
            name="order"
            className="rounded-xl border-2 border-black pl-6 py-1 px-2"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>
        <input
          placeholder="Title"
          name="title"
          className="rounded-xl border-2 border-black pl-6 py-1 px-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Slug"
          name="slug"
          className="rounded-xl border-2 border-black pl-6 py-1 px-2"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <input
          placeholder="imgURL"
          name="imgURL"
          className="rounded-xl border-2 border-black pl-6 py-1 px-2"
          value={imgURL}
          onChange={(e) => setimgURL(e.target.value)}
        />
        <input
          placeholder="GitURL"
          name="gitURL"
          className="rounded-xl border-2 border-black pl-6 py-1 px-2"
          value={gitURL}
          onChange={(e) => setGitURL(e.target.value)}
        />
        <input
          placeholder="DemoURL"
          name="demoURL"
          className="rounded-xl border-2 border-black pl-6 py-1 px-2"
          value={demoURL}
          onChange={(e) => setDemoURL(e.target.value)}
        />
        <input
          placeholder="STACK (comma-separated)"
          name="stack"
          className="rounded-xl border-2 border-black pl-6 py-1 px-2"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
        />
        <div className="flex flex-row gap-4">
          <button
            className="bg-blue-500 py-2 px-6 rounded-lg w-1/4"
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-blue-500 py-2 px-6 rounded-lg w-1/4"
            onClick={clearForm}
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};
export default ManageProject;

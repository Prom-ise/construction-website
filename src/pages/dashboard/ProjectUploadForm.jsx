import useAdminAuth from "../hooks/UseAdminAuth";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const ProjectUploadForm = () => {
  useAdminAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("ongoing");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "https://construct-backend.onrender.com/api/projects"
      );
      setProjects(response.data);
    } catch (error) {
      setError("Error fetching projects.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("status", status);
    formData.append("image", image);

    try {
      await axios.post(
        "https://construct-backend.onrender.com/api/projects/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      setCategory("");
      setStatus("ongoing");
      setImage(null);
      setPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = null;
      setSuccess("Project uploaded successfully!");
      fetchProjects();
    } catch (error) {
      setError(
        error?.response?.data?.msg ||
          error?.response?.data?.error ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;
    try {
      await axios.delete(
        `https://construct-backend.onrender.com/api/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );
      fetchProjects();
    } catch (error) {
      setError("Error deleting project.");
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "completed" ? "ongoing" : "completed";
    try {
      await axios.patch(
        `https://construct-backend.onrender.com/api/projects/${id}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );
      fetchProjects();
    } catch (error) {
      setError("Error updating status.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 my-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Upload New Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700">Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Category</option>
              <option value="Building from scratch">
                Building from scratch
              </option>
              <option value="Plan and Layouts">Plan and Layouts</option>
              <option value="Completing">Completing</option>
              <option value="Evaluation">Evaluation</option>
              <option value="Drainage">Drainage</option>
              <option value="Road">Road</option>
              <option value="Shops, malls, mart, complexes">
                Shops, malls, mart, complexes
              </option>
              <option value="Bridges">Bridges</option>
              <option value="Warehouses">Warehouses</option>
              <option value="Pens and farmhouses">Pens and farmhouses</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label className="font-semibold text-gray-700">Description</label>
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700">Project Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              ref={fileInputRef}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 rounded shadow max-h-40 object-contain"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#fe5d14] hover:bg-[#d3632f] text-white font-bold py-3 rounded transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          ) : null}
          {loading ? "Uploading..." : "Upload Project"}
        </button>
        {error && <div className="text-red-500 text-center">{error}</div>}
        {success && <div className="text-green-600 text-center">{success}</div>}
      </form>

      <div className="text-center text-[black] font-bold text-2xl">
        Project Uploads
      </div>

      <div className="projects-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {projects.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg py-10">
            No project upload yet.
          </div>
        ) : (
          projects.map((project) => (
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
              key={project._id}
            >
               <div className="w-full h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col gap-2 text-center">
           <div className="category">{project.title}</div>
              <div className="heading">{project.category}</div>
              <p className="text-black text-center">{project.description}</p>
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    handleToggleStatus(project._id, project.status)
                  }
                  className={`px-3 py-1 rounded ${
                    project.status === "completed"
                      ? "bg-green-600"
                      : "bg-yellow-500"
                  } text-white`}
                >
                  Mark as{" "}
                  {project.status === "completed" ? "Ongoing" : "Completed"}
                </button>
              </div>
              <div className="mt-1 text-center">
                <span
                  className={
                    project.status === "completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }
                >
                  {project.status.charAt(0).toUpperCase() +
                    project.status.slice(1)}
                </span>
              </div>
        </div>
             
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProjectUploadForm;

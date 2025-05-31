import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectUploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('ongoing');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [projects, setProjects] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://construct-backend.onrender.com/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('status', status);
    formData.append('image', image);

    try {
      await axios.post('https://construct-backend.onrender.com/api/projects/add', formData, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
  },
});

      setTitle('');
      setDescription('');
      setCategory('');
      setStatus('ongoing');
      setImage(null);
      setPreview(null);
      fetchProjects();
    } catch (error) {
      console.error('Error uploading project:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await axios.delete(`https://construct-backend.onrender.com/api/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'completed' ? 'ongoing' : 'completed';
    try {
      await axios.patch(
        `https://construct-backend.onrender.com/api/projects/${id}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
          },
        }
      );
      fetchProjects();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <>
      <form
  onSubmit={handleSubmit}
  className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 my-8 space-y-6"
>
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Upload New Project</h2>
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
        <option value="Building from scratch">Building from scratch</option>
        <option value="Completing">Completing</option>
        <option value="Evaluation">Evaluation</option>
        <option value="Drainage">Drainage</option>
        <option value="Road">Road</option>
        <option value="Shops, malls, mart, complexes">Shops, malls, mart, complexes</option>
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
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition"
  >
    Upload Project
  </button>
</form>

      <div className='text-center text-[black] font-bold text-2xl'>Project Uploads</div>

      <div className="projects-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {projects.map((project) => (
          <div className="cards3 bg-white rounded shadow flex flex-col" key={project._id}>
            <div className="card3-image">
              <img src={`https://construct-backend.onrender.com${project.image}`} alt={project.title} className="w-full h-56 object-cover rounded-t" />
            </div>
            <div className="category">{project.title}</div>
            <div className="heading">{project.category}</div>
            <p className='text-black text-center'>{project.description}</p>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => handleDelete(project._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => handleToggleStatus(project._id, project.status)}
                className={`px-3 py-1 rounded ${project.status === 'completed' ? 'bg-green-600' : 'bg-yellow-500'} text-white`}
              >
                Mark as {project.status === 'completed' ? 'Ongoing' : 'Completed'}
              </button>
            </div>
            <div className="mt-1 text-center">
              <span className={project.status === 'completed' ? 'text-green-600' : 'text-yellow-600'}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectUploadForm;
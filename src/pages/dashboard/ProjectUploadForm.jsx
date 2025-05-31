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
      const response = await axios.get('http://localhost:5000/api/projects');
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
      await axios.post('http://localhost:5000/api/projects/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });
      // Optionally reset form here
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

  // DELETE PROJECT
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  // TOGGLE STATUS
  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'completed' ? 'ongoing' : 'completed';
    try {
      await axios.patch(
        `http://localhost:5000/api/projects/${id}/status`,
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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
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
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        {preview && <img src={preview} alt="Preview" width="200" />}
        <button type="submit">Upload Project</button>
      </form>

      <div className="projects-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {projects.map((project) => (
          <div className="cards3 bg-white rounded shadow flex flex-col" key={project._id}>
            <div className="card3-image">
              <img src={`http://localhost:5000${project.image}`} alt={project.title} className="w-full h-56 object-cover rounded-t" />
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
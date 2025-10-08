import axios from 'axios';

// Tạo instance axios với base URL
const API_BASE_URL = 'http://localhost/portfolio-backend/api/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor để thêm auth token nếu có
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor để xử lý lỗi
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('admin_token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error.response?.data || error);
  }
);

// API functions
export const apiService = {
  // Personal Info
  getPersonalInfo: () => api.get('personal_info.php'),
  updatePersonalInfo: (data) => api.put('personal_info.php', data),

  // Projects
  getProjects: (category = null) => {
    const params = category && category !== 'Tất Cả' ? { category } : {};
    return api.get('projects.php', { params });
  },
  createProject: (data) => api.post('projects.php', data),
  updateProject: (id, data) => api.put(`projects.php?id=${id}`, data),
  deleteProject: (id) => api.delete(`projects.php?id=${id}`),

  // Skills
  getSkills: () => api.get('skills.php'),
  createSkill: (data) => api.post('skills.php', data),
  createSkillCategory: (data) => api.post('skills.php', { ...data, category_name: data.name }),
  updateSkill: (id, data) => api.put(`skills.php?id=${id}&type=skill`, data),
  updateSkillCategory: (id, data) => api.put(`skills.php?id=${id}&type=category`, data),
  deleteSkill: (id) => api.delete(`skills.php?id=${id}&type=skill`),
  deleteSkillCategory: (id) => api.delete(`skills.php?id=${id}&type=category`),

  // Contact
  sendMessage: (data) => api.post('contact.php', data),
  getMessages: (status = null, page = 1) => {
    const params = { page };
    if (status) params.status = status;
    return api.get('contact.php', { params });
  },
  updateMessageStatus: (id, status) => api.put(`contact.php?id=${id}`, { status }),

  // Settings
  getSettings: () => api.get('settings.php'),
  updateSettings: (data) => api.put('settings.php', data),

  // Auth (cho admin)
  login: (credentials) => api.post('auth.php', { action: 'login', ...credentials }),
  logout: () => api.post('auth.php', { action: 'logout' }),
  checkAuth: () => api.get('auth.php?action=check'),

  // Upload
  uploadFile: (file, directory = 'general') => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('directory', directory);
    
    return axios.post(`${API_BASE_URL}upload.php`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default api;

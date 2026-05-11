import { 
  LoginCredentials, 
  RegisterData, 
  AuthResponse, 
  User,
  Project 
} from '@/types';

// Configuration de base
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Helper pour gérer les erreurs
class ApiError extends Error {
  constructor(public status: number, message: string, public details?: any) {
    super(message);
    this.name = 'ApiError';
  }
}

// Helper pour faire des requêtes
async function fetchAPI(
  endpoint: string,
  options: RequestInit = {}
): Promise<any> {
  const token = localStorage.getItem('authToken');
  
  const headers = new Headers(options.headers);

    headers.set('Content-Type', 'application/json');

if (token) {
  headers.set('Authorization', `Bearer ${token}`);
}

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(
      response.status,
      data.error || 'Une erreur est survenue',
      data.details
    );
  }

  return data;
}

// ============================================
// AUTH API
// ============================================

export const authAPI = {
  // Login
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const data = await fetchAPI('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    // Sauvegarder le token
    if (data.token) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return data;
  },

  // Register
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const data = await fetchAPI('/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    // Sauvegarder le token
    if (data.token) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return data;
  },

  // Logout
  logout: async (): Promise<void> => {
    try {
      await fetchAPI('/logout', {
        method: 'POST',
      });
    } finally {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  },

  // Get current user
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if logged in
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('authToken');
  },
};

// ============================================
// PROJECTS API
// ============================================

export const projectsAPI = {
  // Get all projects
  getAll: async (): Promise<Project[]> => {
    return await fetchAPI('/projects');
  },

  // Get single project
  getById: async (id: number): Promise<Project> => {
    return await fetchAPI(`/projects/${id}`);
  },

  // Create project
  create: async (projectData: Partial<Project>): Promise<Project> => {
    return await fetchAPI('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  },

  // Update project
  update: async (id: number, projectData: Partial<Project>): Promise<Project> => {
    return await fetchAPI(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  },

  // Delete project
  delete: async (id: number): Promise<void> => {
    return await fetchAPI(`/projects/${id}`, {
      method: 'DELETE',
    });
  },
};

// Export everything
export { ApiError };
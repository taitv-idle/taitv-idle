import { NextRequest } from 'next/server';
import { GET, PUT } from '../route';

// Mock Next.js Request
function createMockRequest(method: string, body?: any): NextRequest {
  const url = 'http://localhost:3000/api/users/123/settings';
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  if (body) {
    options.body = JSON.stringify(body);
  }
  
  return new NextRequest(url, options);
}

describe('API Route /api/users/[id]/settings', () => {
  describe('GET', () => {
    it('should return user settings with correct userId', async () => {
      const request = createMockRequest('GET');
      const params = Promise.resolve({ id: '123' });
      
      const response = await GET(request, { params });
      const data = await response.json();
      
      expect(data).toEqual({
        userId: '123',
        settings: {
          theme: 'dark',
          notifications: true
        }
      });
    });
  });

  describe('PUT', () => {
    it('should update user settings and return updated data', async () => {
      const newSettings = { theme: 'light', notifications: false };
      const request = createMockRequest('PUT', newSettings);
      const params = Promise.resolve({ id: '456' });
      
      const response = await PUT(request, { params });
      const data = await response.json();
      
      expect(data).toEqual({
        userId: '456',
        settings: newSettings,
        updated: true
      });
    });
  });
});
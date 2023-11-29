import axios, { AxiosInstance } from 'axios';
import { API_URL } from './constants';
import { IChunk, ISaveChunkValues } from '../models/models';

class Api {
  private apiClient: AxiosInstance;

  constructor(baseUrl: string) {
    this.apiClient = axios.create({
      baseURL: baseUrl,
    });
  }

  postChunk(data: ISaveChunkValues) {
    return this.apiClient.post('/chunks', data);
  }

  getChunks() {
    return this.apiClient.get('/chunks');
  }
}

export const api = new Api(API_URL);

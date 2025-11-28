/**
 * Type definitions for Advent Baby Care API
 */

export interface Outing {
  outing_id: string;
  name: string;
  duration: string;
  difficulty: number; // 1-10 scale
  required_items: string[];
  description: string;
  tips: string;
}

export interface OutingsResponse {
  success: boolean;
  count: number;
  outings: Outing[];
}

export interface ErrorResponse {
  error: string;
  message: string;
}

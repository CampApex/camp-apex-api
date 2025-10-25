/**
 * Ghostbusters API Type Definitions
 * Halloween-themed equipment checker module
 */

export interface Ghost {
  entity_id: string;
  name: string;
  classification: string;
  danger_rating: number;
  ectoplasm_level: number;
  required_equipment: string[];
  location: string;
  bounty: number;
  manifestation_time: string;
}

export interface EquipmentCheckRequest {
  inventory: string[];
  entities: string[];
}

export interface GhostMissionStatus {
  entity_id: string;
  name: string;
  classification: string;
  location: string;
  bounty: number;
  can_capture: boolean;
  missing_equipment: string[];
  danger_rating: number;
}

export interface EquipmentCheckResponse {
  mission_report: {
    ready_to_capture: GhostMissionStatus[];
    need_equipment: GhostMissionStatus[];
  };
  summary: {
    total_potential_earnings: number;
    guaranteed_earnings: number;
    ghosts_ready: number;
    ghosts_need_equipment: number;
  };
  missing_equipment: string[];
}

export interface ErrorResponse {
  error: string;
  message: string;
}

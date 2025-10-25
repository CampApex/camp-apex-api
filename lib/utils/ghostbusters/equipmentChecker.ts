import { Ghost, GhostMissionStatus, EquipmentCheckResponse } from '@/types/ghostbusters';

/**
 * Equipment Checker Utility
 * Analyzes user inventory against ghost requirements
 */

/**
 * Check if user has all required equipment for a specific ghost
 */
export function canCaptureGhost(
  inventory: string[],
  requiredEquipment: string[]
): boolean {
  return requiredEquipment.every(equipment =>
    inventory.includes(equipment)
  );
}

/**
 * Get missing equipment for a specific ghost
 */
export function getMissingEquipment(
  inventory: string[],
  requiredEquipment: string[]
): string[] {
  return requiredEquipment.filter(equipment =>
    !inventory.includes(equipment)
  );
}

/**
 * Analyze ghost mission status based on inventory
 */
export function analyzeGhostMissionStatus(
  ghost: Ghost,
  inventory: string[]
): GhostMissionStatus {
  const missingEquipment = getMissingEquipment(inventory, ghost.required_equipment);
  const canCapture = missingEquipment.length === 0;

  return {
    entity_id: ghost.entity_id,
    name: ghost.name,
    classification: ghost.classification,
    location: ghost.location,
    bounty: ghost.bounty,
    can_capture: canCapture,
    missing_equipment: missingEquipment,
    danger_rating: ghost.danger_rating
  };
}

/**
 * Generate complete equipment check report
 */
export function generateEquipmentReport(
  ghosts: Ghost[],
  inventory: string[]
): EquipmentCheckResponse {
  // Analyze each ghost
  const missionStatuses = ghosts.map(ghost =>
    analyzeGhostMissionStatus(ghost, inventory)
  );

  // Separate ghosts by readiness
  const readyToCapture = missionStatuses.filter(status => status.can_capture);
  const needEquipment = missionStatuses.filter(status => !status.can_capture);

  // Calculate earnings
  const guaranteedEarnings = readyToCapture.reduce(
    (total, status) => total + status.bounty,
    0
  );
  const totalPotentialEarnings = ghosts.reduce(
    (total, ghost) => total + ghost.bounty,
    0
  );

  // Collect all missing equipment (unique)
  const allMissingEquipment = new Set<string>();
  needEquipment.forEach(status => {
    status.missing_equipment.forEach(equipment => {
      allMissingEquipment.add(equipment);
    });
  });

  return {
    mission_report: {
      ready_to_capture: readyToCapture,
      need_equipment: needEquipment
    },
    summary: {
      total_potential_earnings: totalPotentialEarnings,
      guaranteed_earnings: guaranteedEarnings,
      ghosts_ready: readyToCapture.length,
      ghosts_need_equipment: needEquipment.length
    },
    missing_equipment: Array.from(allMissingEquipment).sort()
  };
}

/**
 * Validate inventory array
 */
export function validateInventory(inventory: unknown): inventory is string[] {
  return (
    Array.isArray(inventory) &&
    inventory.every(item => typeof item === 'string')
  );
}

/**
 * Validate entities array
 */
export function validateEntities(entities: unknown): entities is string[] {
  return (
    Array.isArray(entities) &&
    entities.every(item => typeof item === 'string')
  );
}

import { Ghost } from '@/types/ghostbusters';

/**
 * Ghost Database for the Ghostbusters Equipment Checker
 * Contains information about supernatural entities and their capture requirements
 */

export const GHOSTS: Ghost[] = [
  {
    entity_id: 'ghost-001',
    name: 'Slimer',
    classification: 'Class 5 Full Roaming Vapor',
    danger_rating: 3,
    ectoplasm_level: 8,
    required_equipment: [
      'Proton Pack',
      'Ghost Trap',
      'PKE Meter',
      'Ecto Goggles'
    ],
    location: 'Sedgewick Hotel Kitchen',
    bounty: 5000,
    manifestation_time: '11:30 PM'
  },
  {
    entity_id: 'ghost-002',
    name: 'Library Ghost',
    classification: 'Class 4 Repeating Phantasm',
    danger_rating: 5,
    ectoplasm_level: 6,
    required_equipment: [
      'Proton Pack',
      'Ghost Trap',
      'PKE Meter',
      'Containment Unit',
      'Ecto Goggles'
    ],
    location: 'New York Public Library',
    bounty: 7500,
    manifestation_time: '12:00 AM'
  },
  {
    entity_id: 'ghost-003',
    name: 'Vinz Clortho (Terror Dog)',
    classification: 'Class 7 Metaspectral Infestation',
    danger_rating: 8,
    ectoplasm_level: 9,
    required_equipment: [
      'Proton Pack',
      'Ghost Trap',
      'PKE Meter',
      'Containment Unit',
      'Ecto Goggles',
      'Muon Trap',
      'Protection Grid'
    ],
    location: 'Dana Barrett\'s Apartment',
    bounty: 15000,
    manifestation_time: '11:00 PM'
  },
  {
    entity_id: 'ghost-004',
    name: 'Stay Puft Marshmallow Man',
    classification: 'Class 8 Giga-manifestation',
    danger_rating: 10,
    ectoplasm_level: 10,
    required_equipment: [
      'Proton Pack',
      'Ghost Trap',
      'PKE Meter',
      'Containment Unit',
      'Ecto Goggles',
      'Muon Trap',
      'Protection Grid',
      'Proton Grenades',
      'Ecto-1 Vehicle'
    ],
    location: 'Columbus Circle',
    bounty: 50000,
    manifestation_time: '11:59 PM'
  }
];

/**
 * Get all ghosts in the database
 */
export function getAllGhosts(): Ghost[] {
  return GHOSTS;
}

/**
 * Get a specific ghost by entity_id
 */
export function getGhostById(entityId: string): Ghost | undefined {
  return GHOSTS.find(ghost => ghost.entity_id === entityId);
}

/**
 * Get multiple ghosts by their entity_ids
 */
export function getGhostsByIds(entityIds: string[]): Ghost[] {
  return GHOSTS.filter(ghost => entityIds.includes(ghost.entity_id));
}

/**
 * Get all unique equipment from all ghosts
 */
export function getAllEquipmentTypes(): string[] {
  const equipmentSet = new Set<string>();
  GHOSTS.forEach(ghost => {
    ghost.required_equipment.forEach(equipment => {
      equipmentSet.add(equipment);
    });
  });
  return Array.from(equipmentSet).sort();
}

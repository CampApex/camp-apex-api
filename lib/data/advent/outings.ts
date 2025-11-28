import { Outing } from '@/types/advent';

/**
 * Baby Outing Database
 * Contains information about different types of outings and required diaper bag items
 */

export const OUTINGS: Outing[] = [
  {
    outing_id: 'outing-001',
    name: 'Quick Errand',
    duration: '30 minutes',
    difficulty: 2,
    required_items: [
      'Diapers',
      'Wipes',
      'Pacifier',
      'Small Toy'
    ],
    description: 'A quick trip to the grocery store or pharmacy',
    tips: 'Keep it light - you\'ll be back home soon!'
  },
  {
    outing_id: 'outing-002',
    name: 'Doctor Visit',
    duration: '2 hours',
    difficulty: 5,
    required_items: [
      'Diapers',
      'Wipes',
      'Pacifier',
      'Changing Pad',
      'Bottle',
      'Formula',
      'Burp Cloth',
      'Health Insurance Card',
      'Vaccination Record'
    ],
    description: 'Routine checkup at the pediatrician',
    tips: 'Bring comfort items - baby might get shots!'
  },
  {
    outing_id: 'outing-003',
    name: 'Day Trip',
    duration: '6-8 hours',
    difficulty: 8,
    required_items: [
      'Diapers',
      'Wipes',
      'Pacifier',
      'Changing Pad',
      'Bottle',
      'Formula',
      'Burp Cloth',
      'Extra Outfit',
      'Blanket',
      'Sunscreen',
      'Hat',
      'Snacks',
      'Toys',
      'Portable Changing Mat'
    ],
    description: 'Full day outing to the park, zoo, or visiting family',
    tips: 'Pack like you\'re going on an expedition - because you are!'
  },
  {
    outing_id: 'outing-004',
    name: 'Restaurant Visit',
    duration: '1.5 hours',
    difficulty: 6,
    required_items: [
      'Diapers',
      'Wipes',
      'Pacifier',
      'Changing Pad',
      'Bottle',
      'Burp Cloth',
      'Small Toy',
      'Sanitizing Wipes',
      'Bib'
    ],
    description: 'Dining out with the baby',
    tips: 'Time it between naps for a peaceful meal!'
  },
  {
    outing_id: 'outing-005',
    name: 'Playdate',
    duration: '2-3 hours',
    difficulty: 4,
    required_items: [
      'Diapers',
      'Wipes',
      'Pacifier',
      'Changing Pad',
      'Bottle',
      'Formula',
      'Toys',
      'Blanket',
      'Snacks'
    ],
    description: 'Meeting up with other parents and babies',
    tips: 'Bring toys to share and make new friends!'
  },
  {
    outing_id: 'outing-006',
    name: 'Shopping Trip',
    duration: '3 hours',
    difficulty: 7,
    required_items: [
      'Diapers',
      'Wipes',
      'Pacifier',
      'Changing Pad',
      'Bottle',
      'Formula',
      'Burp Cloth',
      'Extra Outfit',
      'Snacks',
      'Toys',
      'Baby Carrier'
    ],
    description: 'Baby clothes shopping or mall trip',
    tips: 'Baby carrier keeps hands free for shopping!'
  }
];

/**
 * Get all outings in the database
 */
export function getAllOutings(): Outing[] {
  return OUTINGS;
}

/**
 * Get a specific outing by outing_id
 */
export function getOutingById(outingId: string): Outing | undefined {
  return OUTINGS.find(outing => outing.outing_id === outingId);
}

/**
 * Get a specific outing by name
 */
export function getOutingByName(name: string): Outing | undefined {
  return OUTINGS.find(outing => outing.name === name);
}

/**
 * Get all unique items across all outings
 */
export function getAllUniqueItems(): string[] {
  const itemSet = new Set<string>();
  OUTINGS.forEach(outing => {
    outing.required_items.forEach(item => {
      itemSet.add(item);
    });
  });
  return Array.from(itemSet).sort();
}

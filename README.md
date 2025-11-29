# Camp Apex APIs

A Next.js API project hosted on Vercel featuring multiple API modules. Built with TypeScript, App Router, and Tailwind CSS for scalability.

## API Documentation

### 🎃 [Apex Week of Horror 2025](./Apex%20Week%20of%20Horror%202025.md)
Halloween-themed Ghostbusters API for checking ghost capture readiness based on equipment inventory. Learn API integration while hunting ghosts and earning bounties!

**Features:**
- GET all ghost entities with required equipment
- POST to check equipment readiness against specific ghosts
- Calculate potential earnings from ghost bounties
- Perfect for learning HTTP requests and JSON parsing

### 🎄 [Advent of Salesforce 2025 API Examples](./Advent%20of%20Salesforce%202025%20API%20Examples.md)
Baby Care themed API for managing diaper bag preparation and outing planning. Practice API integration with real-world parenting scenarios!

**Features:**
- GET all outing types with required items
- Check diaper bag readiness for specific outings
- Plan for multiple outings with combined item lists
- Great for learning data filtering and set operations

---

## Current Modules

### Ghostbusters Equipment Checker

Halloween-themed API integration challenge for checking ghost capture readiness based on equipment inventory.

See [Apex Week of Horror 2025](./Apex%20Week%20of%20Horror%202025.md) for complete documentation and examples.

#### Endpoints

##### GET /api/ghostbusters/entities

Returns a list of all ghost entities with their required equipment.

**Response Example:**

```json
{
  "success": true,
  "count": 4,
  "entities": [
    {
      "entity_id": "ghost-001",
      "name": "Slimer",
      "classification": "Class 5 Full Roaming Vapor",
      "danger_rating": 3,
      "ectoplasm_level": 8,
      "required_equipment": [
        "Proton Pack",
        "Ghost Trap",
        "PKE Meter",
        "Ecto Goggles"
      ],
      "location": "Sedgewick Hotel Kitchen",
      "bounty": 5000,
      "manifestation_time": "11:30 PM"
    }
  ]
}
```

##### POST /api/ghostbusters/check-equipment

Compares user's inventory against ghost requirements and returns a mission report.

**Request Body:**

```json
{
  "inventory": ["Proton Pack", "Ghost Trap", "PKE Meter"],
  "entities": ["ghost-001", "ghost-002"]
}
```

**Notes:**

- `inventory` (required): Array of equipment strings you currently have
- `entities` (optional): Array of ghost entity IDs to check. If omitted, checks all ghosts.

**Response Example:**

```json
{
  "success": true,
  "mission_report": {
    "ready_to_capture": [
      {
        "entity_id": "ghost-001",
        "name": "Slimer",
        "classification": "Class 5 Full Roaming Vapor",
        "location": "Sedgewick Hotel Kitchen",
        "bounty": 5000,
        "can_capture": true,
        "missing_equipment": [],
        "danger_rating": 3
      }
    ],
    "need_equipment": [
      {
        "entity_id": "ghost-002",
        "name": "Library Ghost",
        "classification": "Class 4 Repeating Phantasm",
        "location": "New York Public Library",
        "bounty": 7500,
        "can_capture": false,
        "missing_equipment": ["Containment Unit", "Ecto Goggles"],
        "danger_rating": 5
      }
    ]
  },
  "summary": {
    "total_potential_earnings": 12500,
    "guaranteed_earnings": 5000,
    "ghosts_ready": 1,
    "ghosts_need_equipment": 1
  },
  "missing_equipment": ["Containment Unit", "Ecto Goggles"]
}
```

## Ghost Entities

The API includes 4 ghost entities:

1. **Slimer** - Class 5 Full Roaming Vapor (Bounty: $5,000)
2. **Library Ghost** - Class 4 Repeating Phantasm (Bounty: $7,500)
3. **Vinz Clortho (Terror Dog)** - Class 7 Metaspectral Infestation (Bounty: $15,000)
4. **Stay Puft Marshmallow Man** - Class 8 Giga-manifestation (Bounty: $50,000)

## Available Equipment Types

- Proton Pack
- Ghost Trap
- PKE Meter
- Ecto Goggles
- Containment Unit
- Muon Trap
- Protection Grid
- Proton Grenades
- Ecto-1 Vehicle

---

### Baby Care Diaper Bag Checker

Advent of Salesforce 2025 themed API for checking diaper bag readiness and planning baby outings.

See [Advent of Salesforce 2025 API Examples](./Advent%20of%20Salesforce%202025%20API%20Examples.md) for complete documentation and examples.

#### Endpoints

##### GET /api/advent/outings

Returns a list of all outing types with their required items.

**Response Example:**

```json
{
  "success": true,
  "count": 6,
  "outings": [
    {
      "outing_id": "outing-001",
      "name": "Quick Errand",
      "duration": "30 minutes",
      "difficulty": 2,
      "required_items": ["Diapers", "Wipes", "Pacifier", "Small Toy"],
      "description": "A quick trip to the grocery store or pharmacy",
      "tips": "Keep it light - you'll be back home soon!"
    }
  ]
}
```

## Outing Types

The API includes 6 outing types:

1. **Quick Errand** - 30 minutes (Difficulty: 2/10) - 4 items
2. **Doctor Visit** - 2 hours (Difficulty: 5/10) - 9 items
3. **Day Trip** - 6-8 hours (Difficulty: 8/10) - 14 items
4. **Restaurant Visit** - 1.5 hours (Difficulty: 6/10) - 9 items
5. **Playdate** - 2-3 hours (Difficulty: 4/10) - 9 items
6. **Shopping Trip** - 3 hours (Difficulty: 7/10) - 11 items

---

## License

MIT

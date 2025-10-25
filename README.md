# Camp Apex APIs

A Next.js API project hosted on Vercel featuring multiple API modules. Built with TypeScript, App Router, and Tailwind CSS for scalability.

## Current Modules

### Ghostbusters Equipment Checker

Halloween-themed API integration challenge for checking ghost capture readiness based on equipment inventory.

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

## License

MIT

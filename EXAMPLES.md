# Ghostbusters API Examples

## Quick Test Commands

### 1. Get All Ghost Entities

```bash
curl http://camp-apex-api.vercel.app/api/ghostbusters/entities
```

**Response:**

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
    // ... more ghosts
  ]
}
```

---

### 2. Check Equipment - Full Inventory (Can capture Slimer!)

```bash
curl -X POST http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment \
  -H "Content-Type: application/json" \
  -d '{
    "inventory": ["Proton Pack", "Ghost Trap", "PKE Meter", "Ecto Goggles"]
  }'
```

**Response:**

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
        "missing_equipment": ["Containment Unit"],
        "danger_rating": 5
      }
      // ... more ghosts
    ]
  },
  "summary": {
    "total_potential_earnings": 77500,
    "guaranteed_earnings": 5000,
    "ghosts_ready": 1,
    "ghosts_need_equipment": 3
  },
  "missing_equipment": [
    "Containment Unit",
    "Ecto-1 Vehicle",
    "Muon Trap",
    "Protection Grid",
    "Proton Grenades"
  ]
}
```

---

### 3. Check Equipment - Minimal Inventory

```bash
curl -X POST http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment \
  -H "Content-Type: application/json" \
  -d '{
    "inventory": ["Proton Pack", "Ghost Trap"]
  }'
```

**Response:**

```json
{
  "success": true,
  "mission_report": {
    "ready_to_capture": [],
    "need_equipment": [
      {
        "entity_id": "ghost-001",
        "name": "Slimer",
        "location": "Sedgewick Hotel Kitchen",
        "bounty": 5000,
        "can_capture": false,
        "missing_equipment": ["PKE Meter", "Ecto Goggles"],
        "danger_rating": 3
      }
      // ... all ghosts need equipment
    ]
  },
  "summary": {
    "total_potential_earnings": 77500,
    "guaranteed_earnings": 0,
    "ghosts_ready": 0,
    "ghosts_need_equipment": 4
  },
  "missing_equipment": [
    "Containment Unit",
    "Ecto-1 Vehicle",
    "Ecto Goggles",
    "Muon Trap",
    "PKE Meter",
    "Protection Grid",
    "Proton Grenades"
  ]
}
```

---

### 4. Check Equipment - Specific Ghost Only

```bash
curl -X POST http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment \
  -H "Content-Type: application/json" \
  -d '{
    "inventory": ["Proton Pack", "Ghost Trap", "PKE Meter", "Ecto Goggles"],
    "entities": ["ghost-001"]
  }'
```

**Response:**

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
    "need_equipment": []
  },
  "summary": {
    "total_potential_earnings": 5000,
    "guaranteed_earnings": 5000,
    "ghosts_ready": 1,
    "ghosts_need_equipment": 0
  },
  "missing_equipment": []
}
```

---

### 5. Check Equipment - Multiple Specific Ghosts

```bash
curl -X POST http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment \
  -H "Content-Type: application/json" \
  -d '{
    "inventory": ["Proton Pack", "Ghost Trap", "PKE Meter", "Ecto Goggles", "Containment Unit"],
    "entities": ["ghost-001", "ghost-002"]
  }'
```

**Response:**

```json
{
  "success": true,
  "mission_report": {
    "ready_to_capture": [
      {
        "entity_id": "ghost-001",
        "name": "Slimer",
        "bounty": 5000,
        "can_capture": true
      },
      {
        "entity_id": "ghost-002",
        "name": "Library Ghost",
        "bounty": 7500,
        "can_capture": true
      }
    ],
    "need_equipment": []
  },
  "summary": {
    "total_potential_earnings": 12500,
    "guaranteed_earnings": 12500,
    "ghosts_ready": 2,
    "ghosts_need_equipment": 0
  },
  "missing_equipment": []
}
```

---

### 6. Check Equipment - Complete Arsenal (All Ghosts!)

```bash
curl -X POST http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment \
  -H "Content-Type: application/json" \
  -d '{
    "inventory": [
      "Proton Pack",
      "Ghost Trap",
      "PKE Meter",
      "Ecto Goggles",
      "Containment Unit",
      "Muon Trap",
      "Protection Grid",
      "Proton Grenades",
      "Ecto-1 Vehicle"
    ]
  }'
```

**Response:**

```json
{
  "success": true,
  "mission_report": {
    "ready_to_capture": [
      {
        "entity_id": "ghost-001",
        "name": "Slimer",
        "bounty": 5000,
        "can_capture": true
      },
      {
        "entity_id": "ghost-002",
        "name": "Library Ghost",
        "bounty": 7500,
        "can_capture": true
      },
      {
        "entity_id": "ghost-003",
        "name": "Vinz Clortho (Terror Dog)",
        "bounty": 15000,
        "can_capture": true
      },
      {
        "entity_id": "ghost-004",
        "name": "Stay Puft Marshmallow Man",
        "bounty": 50000,
        "can_capture": true
      }
    ],
    "need_equipment": []
  },
  "summary": {
    "total_potential_earnings": 77500,
    "guaranteed_earnings": 77500,
    "ghosts_ready": 4,
    "ghosts_need_equipment": 0
  },
  "missing_equipment": []
}
```

---

## Error Handling Examples

### Missing Inventory Field

```bash
curl -X POST http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Response:**

```json
{
  "error": "Bad Request",
  "message": "Missing required field: inventory"
}
```

---

### Invalid Inventory Format

```bash
curl -X POST http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment \
  -H "Content-Type: application/json" \
  -d '{
    "inventory": "not an array"
  }'
```

**Response:**

```json
{
  "error": "Bad Request",
  "message": "Inventory must be an array of strings"
}
```

---

### Invalid Ghost Entity ID

```bash
curl -X POST http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment \
  -H "Content-Type: application/json" \
  -d '{
    "inventory": ["Proton Pack"],
    "entities": ["ghost-999"]
  }'
```

**Response:**

```json
{
  "error": "Not Found",
  "message": "No valid ghost entities found with the provided IDs"
}
```

---

## JavaScript/Fetch Examples

### Get All Entities

```javascript
fetch("http://camp-apex-api.vercel.app/api/ghostbusters/entities")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### Check Equipment

```javascript
fetch("http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    inventory: ["Proton Pack", "Ghost Trap", "PKE Meter", "Ecto Goggles"],
    entities: ["ghost-001", "ghost-002"],
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Mission Report:", data.mission_report);
    console.log("Summary:", data.summary);
    console.log("Missing Equipment:", data.missing_equipment);
  })
  .catch((error) => console.error("Error:", error));
```

---

## Python Examples

### Get All Entities

```python
import requests

response = requests.get('http://camp-apex-api.vercel.app/api/ghostbusters/entities')
data = response.json()
print(f"Found {data['count']} ghosts")
for ghost in data['entities']:
    print(f"- {ghost['name']} (Bounty: ${ghost['bounty']})")
```

### Check Equipment

```python
import requests

payload = {
    "inventory": ["Proton Pack", "Ghost Trap", "PKE Meter", "Ecto Goggles"],
    "entities": ["ghost-001", "ghost-002"]
}

response = requests.post(
    'http://camp-apex-api.vercel.app/api/ghostbusters/check-equipment',
    json=payload
)

data = response.json()
print(f"Ghosts Ready: {data['summary']['ghosts_ready']}")
print(f"Guaranteed Earnings: ${data['summary']['guaranteed_earnings']}")
print(f"Missing Equipment: {', '.join(data['missing_equipment'])}")
```

---

## Ghost Entity IDs Reference

- `ghost-001` - Slimer ($5,000)
- `ghost-002` - Library Ghost ($7,500)
- `ghost-003` - Vinz Clortho / Terror Dog ($15,000)
- `ghost-004` - Stay Puft Marshmallow Man ($50,000)

Total Potential Earnings: **$77,500**

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

---

---

# Baby Care Advent API Examples

## Quick Test Commands

### 1. Get All Outing Types

```bash
curl https://camp-apex-api.vercel.app/api/advent/outings
```

**Response:**

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
      "required_items": [
        "Diapers",
        "Wipes",
        "Pacifier",
        "Small Toy"
      ],
      "description": "A quick trip to the grocery store or pharmacy",
      "tips": "Keep it light - you'll be back home soon!"
    },
    {
      "outing_id": "outing-002",
      "name": "Doctor Visit",
      "duration": "2 hours",
      "difficulty": 5,
      "required_items": [
        "Diapers",
        "Wipes",
        "Pacifier",
        "Changing Pad",
        "Bottle",
        "Formula",
        "Burp Cloth",
        "Health Insurance Card",
        "Vaccination Record"
      ],
      "description": "Routine checkup at the pediatrician",
      "tips": "Bring comfort items - baby might get shots!"
    },
    {
      "outing_id": "outing-003",
      "name": "Day Trip",
      "duration": "6-8 hours",
      "difficulty": 8,
      "required_items": [
        "Diapers",
        "Wipes",
        "Pacifier",
        "Changing Pad",
        "Bottle",
        "Formula",
        "Burp Cloth",
        "Extra Outfit",
        "Blanket",
        "Sunscreen",
        "Hat",
        "Snacks",
        "Toys",
        "Portable Changing Mat"
      ],
      "description": "Full day outing to the park, zoo, or visiting family",
      "tips": "Pack like you're going on an expedition - because you are!"
    },
    {
      "outing_id": "outing-004",
      "name": "Restaurant Visit",
      "duration": "1.5 hours",
      "difficulty": 6,
      "required_items": [
        "Diapers",
        "Wipes",
        "Pacifier",
        "Changing Pad",
        "Bottle",
        "Burp Cloth",
        "Small Toy",
        "Sanitizing Wipes",
        "Bib"
      ],
      "description": "Dining out with the baby",
      "tips": "Time it between naps for a peaceful meal!"
    },
    {
      "outing_id": "outing-005",
      "name": "Playdate",
      "duration": "2-3 hours",
      "difficulty": 4,
      "required_items": [
        "Diapers",
        "Wipes",
        "Pacifier",
        "Changing Pad",
        "Bottle",
        "Formula",
        "Toys",
        "Blanket",
        "Snacks"
      ],
      "description": "Meeting up with other parents and babies",
      "tips": "Bring toys to share and make new friends!"
    },
    {
      "outing_id": "outing-006",
      "name": "Shopping Trip",
      "duration": "3 hours",
      "difficulty": 7,
      "required_items": [
        "Diapers",
        "Wipes",
        "Pacifier",
        "Changing Pad",
        "Bottle",
        "Formula",
        "Burp Cloth",
        "Extra Outfit",
        "Snacks",
        "Toys",
        "Baby Carrier"
      ],
      "description": "Baby clothes shopping or mall trip",
      "tips": "Baby carrier keeps hands free for shopping!"
    }
  ]
}
```

---

## Apex Examples

### Get All Outings and Find Missing Items

```apex
public class DiaperBagChecker {
    public List<String> checkDiaperBag(String outingName, List<String> currentBagItems) {
        // Make HTTP request to API
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://camp-apex-api.vercel.app/api/advent/outings');
        request.setMethod('GET');

        HttpResponse response = http.send(request);

        if (response.getStatusCode() == 200) {
            // Parse response
            Map<String, Object> result = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            List<Object> outings = (List<Object>) result.get('outings');

            // Find the matching outing
            for (Object outingObj : outings) {
                Map<String, Object> outing = (Map<String, Object>) outingObj;
                if (outing.get('name') == outingName) {
                    List<Object> requiredItems = (List<Object>) outing.get('required_items');

                    // Find missing items
                    List<String> missingItems = new List<String>();
                    Set<String> currentItemsSet = new Set<String>(currentBagItems);

                    for (Object item : requiredItems) {
                        String itemStr = (String) item;
                        if (!currentItemsSet.contains(itemStr)) {
                            missingItems.add(itemStr);
                        }
                    }

                    return missingItems;
                }
            }
        }

        return new List<String>();
    }
}
```

### Example Usage Scenarios

#### Scenario 1: Quick Errand - Missing Items

```apex
DiaperBagChecker checker = new DiaperBagChecker();
List<String> currentBag = new List<String>{'Diapers', 'Wipes'};
List<String> missing = checker.checkDiaperBag('Quick Errand', currentBag);
System.debug(missing); // Output: ['Pacifier', 'Small Toy']
```

#### Scenario 2: Doctor Visit - Well Prepared

```apex
DiaperBagChecker checker = new DiaperBagChecker();
List<String> currentBag = new List<String>{
    'Diapers', 'Wipes', 'Pacifier', 'Changing Pad',
    'Bottle', 'Formula', 'Burp Cloth',
    'Health Insurance Card', 'Vaccination Record'
};
List<String> missing = checker.checkDiaperBag('Doctor Visit', currentBag);
System.debug(missing); // Output: [] (empty - all set!)
```

#### Scenario 3: Day Trip - Major Prep Needed

```apex
DiaperBagChecker checker = new DiaperBagChecker();
List<String> currentBag = new List<String>{'Diapers', 'Wipes', 'Bottle'};
List<String> missing = checker.checkDiaperBag('Day Trip', currentBag);
System.debug(missing);
// Output: ['Pacifier', 'Changing Pad', 'Formula', 'Burp Cloth',
//          'Extra Outfit', 'Blanket', 'Sunscreen', 'Hat',
//          'Snacks', 'Toys', 'Portable Changing Mat']
```

---

## JavaScript/Fetch Examples

### Get All Outings

```javascript
fetch("https://camp-apex-api.vercel.app/api/advent/outings")
  .then((response) => response.json())
  .then((data) => {
    console.log(`Found ${data.count} outing types`);
    data.outings.forEach(outing => {
      console.log(`${outing.name}: ${outing.required_items.length} items needed`);
    });
  })
  .catch((error) => console.error("Error:", error));
```

### Check Diaper Bag for Specific Outing

```javascript
async function checkDiaperBag(outingName, currentBagItems) {
  try {
    const response = await fetch("https://camp-apex-api.vercel.app/api/advent/outings");
    const data = await response.json();

    // Find the outing
    const outing = data.outings.find(o => o.name === outingName);

    if (!outing) {
      console.log("Outing not found!");
      return [];
    }

    // Find missing items
    const currentSet = new Set(currentBagItems);
    const missing = outing.required_items.filter(item => !currentSet.has(item));

    console.log(`For ${outingName}:`);
    console.log(`- Required: ${outing.required_items.length} items`);
    console.log(`- You have: ${currentBagItems.length} items`);
    console.log(`- Missing: ${missing.length} items`);

    if (missing.length > 0) {
      console.log(`Need to pack: ${missing.join(', ')}`);
    } else {
      console.log("You're all set! 🎒");
    }

    return missing;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

// Example usage
checkDiaperBag("Quick Errand", ["Diapers", "Wipes"]);
```

---

## Python Examples

### Get All Outings

```python
import requests

response = requests.get('https://camp-apex-api.vercel.app/api/advent/outings')
data = response.json()

print(f"Found {data['count']} outing types\n")

for outing in data['outings']:
    print(f"📍 {outing['name']}")
    print(f"   Duration: {outing['duration']}")
    print(f"   Difficulty: {outing['difficulty']}/10")
    print(f"   Items needed: {len(outing['required_items'])}")
    print(f"   Tip: {outing['tips']}\n")
```

### Check Diaper Bag Function

```python
import requests

def check_diaper_bag(outing_name, current_bag_items):
    """Check what items are missing from the diaper bag for a specific outing"""
    response = requests.get('https://camp-apex-api.vercel.app/api/advent/outings')
    data = response.json()

    # Find the outing
    outing = next((o for o in data['outings'] if o['name'] == outing_name), None)

    if not outing:
        print(f"Outing '{outing_name}' not found!")
        return []

    # Find missing items
    current_set = set(current_bag_items)
    missing = [item for item in outing['required_items'] if item not in current_set]

    print(f"\n🎒 Checking bag for: {outing_name}")
    print(f"   Duration: {outing['duration']}")
    print(f"   Required items: {len(outing['required_items'])}")
    print(f"   You have: {len(current_bag_items)}")
    print(f"   Missing: {len(missing)}")

    if missing:
        print(f"\n   ⚠️  Don't forget to pack:")
        for item in missing:
            print(f"      - {item}")
    else:
        print(f"\n   ✅ You're all set!")

    return missing

# Example usage
check_diaper_bag("Quick Errand", ["Diapers", "Wipes"])
check_diaper_bag("Doctor Visit", ["Diapers", "Wipes", "Pacifier", "Changing Pad",
                                   "Bottle", "Formula", "Burp Cloth",
                                   "Health Insurance Card", "Vaccination Record"])
check_diaper_bag("Day Trip", ["Diapers", "Wipes", "Bottle"])
```

---

## Outing Types Reference

| Outing ID | Name | Duration | Difficulty | Items Required |
|-----------|------|----------|------------|----------------|
| `outing-001` | Quick Errand | 30 minutes | 2/10 | 4 items |
| `outing-002` | Doctor Visit | 2 hours | 5/10 | 9 items |
| `outing-003` | Day Trip | 6-8 hours | 8/10 | 14 items |
| `outing-004` | Restaurant Visit | 1.5 hours | 6/10 | 9 items |
| `outing-005` | Playdate | 2-3 hours | 4/10 | 9 items |
| `outing-006` | Shopping Trip | 3 hours | 7/10 | 11 items |

### Common Items Across All Outings

The following items appear in most or all outings:
- **Diapers** - Required for all outings
- **Wipes** - Required for all outings
- **Pacifier** - Required for all outings
- **Bottle** - Required for 5 of 6 outings
- **Changing Pad** - Required for 5 of 6 outings

### Special Items for Specific Outings

- **Health Insurance Card & Vaccination Record** - Doctor Visit only
- **Sunscreen, Hat, Portable Changing Mat** - Day Trip only
- **Sanitizing Wipes & Bib** - Restaurant Visit only
- **Baby Carrier** - Shopping Trip only

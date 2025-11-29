# Advent of Salesforce 2025 - Baby Care API Examples

Welcome to the Advent of Salesforce 2025! This API provides endpoints for managing baby care outings and diaper bag preparation. Perfect for learning API integration with real-world parenting scenarios.

## API Base URL

```
https://camp-apex-api.vercel.app
```

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

---

## Challenge Ideas

### Challenge 1: Check Diaper Bag
Write a method that accepts an outing name and a list of current bag items, then returns a list of missing items needed for that outing.

### Challenge 2: Find Ready Outings
Write a method that accepts a list of current bag items and returns a list of all outings you're fully prepared for.

### Challenge 3: Plan Busy Day
Write a method that accepts a list of scheduled outings and returns the complete set of unique items needed for all outings combined.

### Challenge 4: Find Quick Outings
Write a method that accepts available minutes and returns a list of all outings that fit within that time frame.

---

## API Information

- **Base URL**: `https://camp-apex-api.vercel.app`
- **Endpoint**: `/api/advent/outings`
- **Method**: GET
- **Response Format**: JSON
- **Authentication**: None required
- **Rate Limiting**: Standard Vercel limits apply

---

## Support

For issues or questions about the Advent of Salesforce 2025 API, please visit the [Camp Apex API repository](https://github.com/your-repo).

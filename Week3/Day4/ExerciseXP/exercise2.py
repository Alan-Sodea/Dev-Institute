# Instructions
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.

data = json.loads(sampleJson)
salary = data["company"]["employee"]["payable"]["salary"]
print(f"Salary: {salary}")
data["company"]["employee"]["birth_date"] = "1990-01-01"
with open('updated_sample.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)
print(json.dumps(data, indent=4))

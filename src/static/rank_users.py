import json
import os
import csv


filename = "/src/static/glori_lyst.csv"

working_dir = os.getcwd()

filepath = working_dir + filename


data = []

headers = []


with open(filepath, "r") as file:
    reader = csv.reader(file)
    for (i, row) in enumerate(reader):
        if (i == 0):
            # get the headers
            headers = row
            continue

        row_data = {}
        
        row_data["rank"] = i

        for (j, item) in enumerate(row):
          row_data[headers[j]] = item

        data.append(row_data)




# write to data to json file
with open(os.getcwd() + "/src/static/glori_lyst.json", "w") as file:
    json.dump(data, file)
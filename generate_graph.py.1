import json
import os
import matplotlib.pyplot as plt
from collections import Counter

# Load JSON data
def load_json(file_path):
    try:
        with open(file_path, "r") as file:
            data = json.load(file)

            # Debug: Print raw JSON data
            print(f"Raw JSON data: {data}")

            # Check if the data contains alerts
            if isinstance(data, dict) and "alerts" in data:
                return data["alerts"]

            # If data is already a list, return it
            if isinstance(data, list):
                return data

            raise ValueError("Expected a list of alerts or an 'alerts' key in the JSON file.")
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
        return []
    except Exception as e:
        print(f"Error loading JSON: {e}")
        return []

# Process data to count alerts by severity
def process_data(data):
    valid_alerts = [alert for alert in data if isinstance(alert, dict) and "rule" in alert]
    severity_counts = Counter(alert.get("rule", {}).get("severity", "unknown") for alert in valid_alerts)
    return severity_counts

# Generate a bar chart
def create_graph(severity_counts):
    if not severity_counts:
        print("No valid data to plot.")
        return

    severities = list(severity_counts.keys())
    counts = list(severity_counts.values())

    plt.figure(figsize=(8, 5))
    plt.bar(severities, counts, color=["red", "orange", "blue", "gray"])
    plt.xlabel("Severity")
    plt.ylabel("Number of Alerts")
    plt.title("GitHub Code Scanning Alerts by Severity")
    plt.grid(axis="y", linestyle="--", alpha=0.7)
    plt.savefig("github_alerts_graph.png")
    plt.show()

# Main function
def main():
    # Define file path
    file_path = "security-report-nested.json"  # Adjust this path as needed

    # Debug: Check if the file exists
    if not os.path.exists(file_path):
        print(f"Error: The file '{file_path}' does not exist.")
        return

    # Load the JSON report
    data = load_json(file_path)

    # Debug: Print loaded data structure
    print(f"Loaded data: {data[:2]}")  # Print first two entries for debugging

    # Process data
    severity_counts = process_data(data)

    # Debug: Print severity counts
    print(f"Severity counts: {severity_counts}")

    # Generate graph
    create_graph(severity_counts)

# Run the script
if __name__ == "__main__":
    main()

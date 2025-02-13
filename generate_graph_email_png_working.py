import os
import json
import requests
import matplotlib.pyplot as plt
from collections import Counter

# GitHub API configuration
GITHUB_API_URL = "https://api.github.com/repos/pratiksha2805-eng/EmployeeService/code-scanning/alerts"
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")  # Load token from environment variable

# Fetch GitHub security scan data
def fetch_security_data(owner, repo):
    try:
        headers = {
            "Authorization": f"Bearer {GITHUB_TOKEN}",
            "Accept": "application/vnd.github+json",
        }
        url = GITHUB_API_URL.format(owner=owner, repo=repo)
        response = requests.get(url, headers=headers)

        # Check for errors
        if response.status_code == 401:
            print("Error: Unauthorized. Check your GitHub token.")
            return []
        elif response.status_code == 403:
            print("Error: Rate limit exceeded or insufficient permissions.")
            return []
        elif response.status_code != 200:
            print(f"Error: Failed to fetch data. Status code: {response.status_code}")
            return []

        # Parse JSON data
        data = response.json()

        # Debug: Print the first two alerts
        print(f"Sample data: {data[:2]}")

        # Ensure data is a list
        if not isinstance(data, list):
            print("Error: Unexpected JSON structure. Expected a list of alerts.")
            return []

        return data
    except Exception as e:
        print(f"Error fetching data: {e}")
        return []

# Process data to count alerts by severity
def process_data(data):
    # Extract valid alerts and count by severity
    valid_alerts = [alert for alert in data if isinstance(alert, dict) and "rule" in alert]
    severity_counts = Counter(alert.get("rule", {}).get("severity", "unknown") for alert in valid_alerts)
    return severity_counts

# Generate a bar chart
def create_graph(severity_counts):
    if not severity_counts:
        print("No valid data to plot.")
        return

    # Extract data for plotting
    severities = list(severity_counts.keys())
    counts = list(severity_counts.values())

    # Create the bar chart
    plt.figure(figsize=(8, 5))
    plt.bar(severities, counts, color=["red", "orange", "blue", "gray"])
    plt.xlabel("Severity")
    plt.ylabel("Number of Alerts")
    plt.title("GitHub Code Scanning Alerts by Severity")
    plt.grid(axis="y", linestyle="--", alpha=0.7)

    # Save or display the graph
    plt.savefig("github_alerts_graph.png")
    print("Graph saved as 'github_alerts_graph.png'.")
    plt.show()

# Main function
def main():
    # Replace these with the owner and repository you want to scan
    owner = "your-organization-or-username"
    repo = "your-repository-name"

    # Ensure GitHub token is set
    if not GITHUB_TOKEN:
        print("Error: GitHub token is not set. Set it as an environment variable 'GITHUB_TOKEN'.")
        return

    # Fetch security data
    data = fetch_security_data(owner, repo)

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

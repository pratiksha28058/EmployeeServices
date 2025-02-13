import os
import requests
import plotly.express as px
from flask import Flask
import dash
from dash import dcc, html

# Set GitHub Token and Repository Details
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")  # Set as an environment variable
OWNER = "your-organization-or-username"  # Replace with the GitHub organization or username
REPO = "your-repository-name"           # Replace with the repository name
API_URL = f"https://api.github.com/repos/{OWNER}/{REPO}/code-scanning/alerts"

# Flask Server for Dash
server = Flask(__name__)
app = dash.Dash(__name__, server=server)

# Fetch GitHub Code Scanning Alerts
def fetch_alerts():
    headers = {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Accept": "application/vnd.github+json"
    }
    
    response = requests.get(API_URL, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    elif response.status_code == 404:
        raise ValueError("Repository not found or code scanning alerts are not enabled.")
    elif response.status_code == 401:
        raise ValueError("Unauthorized. Check your GITHUB_TOKEN and permissions.")
    else:
        raise ValueError(f"Failed to fetch data. Status: {response.status_code}, Response: {response.text}")

# Process Alerts Data
def process_alerts(data):
    severities = [alert.get("rule", {}).get("severity", "unknown") for alert in data]
    return severities

# Prepare Dashboard Layout
def prepare_layout(severity_counts):
    severity_data = [{"Severity": key, "Count": value} for key, value in severity_counts.items()]
    df = px.data.tips()  # Create a DataFrame from severity_counts

    # Bar chart using Plotly
    fig = px.bar(
        severity_data,
        x="Severity",
        y="Count",
        color="Severity",
        title="GitHub Code Scanning Alerts by Severity",
        labels={"Severity": "Severity", "Count": "Number of Alerts"}
    )

    # Set up layout
    app.layout = html.Div(children=[
        html.H1("GitHub Code Security Dashboard", style={"textAlign": "center"}),
        dcc.Graph(id="alerts-graph", figure=fig),
        html.Div("Interactive dashboard for Errors, Warnings, and Notes.")
    ])

# Main Function
def main():
    try:
        # Fetch alerts
        alerts = fetch_alerts()

        # Process alerts
        severities = process_alerts(alerts)

        # Count alerts by severity
        severity_counts = {sev: severities.count(sev) for sev in set(severities)}

        # Debug: Print severity counts
        print(f"Severity Counts: {severity_counts}")

        # Prepare layout
        prepare_layout(severity_counts)

        # Run the dashboard
        app.run_server(debug=True)
    except Exception as e:
        print(f"Error: {e}")

# Run the script
if __name__ == "__main__":
    main()

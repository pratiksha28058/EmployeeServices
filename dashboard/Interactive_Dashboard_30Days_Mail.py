import requests
import json
import dash
from dash import dcc, html
import plotly.express as px
from flask import Flask
import smtplib
import os 

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# GitHub API Token and Repository Details
# GITHUB_TOKEN = "your_github_personal_access_token"
# OWNER = "your_github_username_or_org"
# REPO = "your_github_repository"

# GitHub repository details
OWNER = 'pratiksha2805-eng'
REPO = 'EmployeeService'
# TOKEN = os.getenv("GIT_TOKEN")  # Load token from environment variable
# GITHUB_TOKEN = os.getenv("GIT_TOKEN")  # Load token from environment variable
# # GitHub API configuration
GITHUB_API_URL = "https://api.github.com/repos/pratiksha2805-eng/EmployeeService/code-scanning/alerts"
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")  # Load token from environment variable

# Fetch Security Alerts from GitHub API
def fetch_security_alerts():
    url = f"https://api.github.com/repos/{OWNER}/{REPO}/vulnerability-alerts"
    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.dorian-preview+json"
    }
    
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        return []
    
    return response.json()

# Categorize alerts
def categorize_alerts(alerts):
    categories = {"Error": [], "Warning": [], "Note": []}

    for alert in alerts:
        severity = alert.get("security_advisory", {}).get("severity", "low").lower()
        if severity in ["critical", "high"]:
            categories["Error"].append(alert)
        elif severity in ["moderate"]:
            categories["Warning"].append(alert)
        else:
            categories["Note"].append(alert)

    return categories

# Generate Report
def generate_html_report(categories):
    report = """
    <html>
    <head><style>
        body { font-family: Arial, sans-serif; }
        .error { color: red; }
        .warning { color: orange; }
        .note { color: blue; }
    </style></head>
    <body>
        <h2>GitHub Security Report</h2>
        <h3 class="error">Errors (Critical & High)</h3><ul>
    """
    for alert in categories["Error"]:
        report += f"<li>{alert['security_advisory']['summary']}</li>"
    
    report += """</ul><h3 class="warning">Warnings (Moderate)</h3><ul>"""
    for alert in categories["Warning"]:
        report += f"<li>{alert['security_advisory']['summary']}</li>"
    
    report += """</ul><h3 class="note">Notes (Low)</h3><ul>"""
    for alert in categories["Note"]:
        report += f"<li>{alert['security_advisory']['summary']}</li>"
    
    report += "</ul></body></html>"
    return report

# Send Email
def send_email(report):
    sender_email = "pratikshatiwari10042@gmail.com"
    receiver_email = "sony2887@gmail.com"
    password = "mvzk hoty tmqe dvzm"

    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = "GitHub Security Dashboard Report"

    msg.attach(MIMEText(report, "html"))

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, msg.as_string())

# Flask Server for Dash App
server = Flask(__name__)
app = dash.Dash(__name__, server=server)

# Fetch Data and Prepare Dashboard
alerts = fetch_security_alerts()
categories = categorize_alerts(alerts)

data = [
    {"Type": "Error", "Count": len(categories["Error"])},
    {"Type": "Warning", "Count": len(categories["Warning"])},
    {"Type": "Note", "Count": len(categories["Note"])}
]

df = px.data.tips()
fig = px.bar(data, x="Type", y="Count", color="Type", title="GitHub Security Alerts Overview")

app.layout = html.Div(children=[
    html.H1("GitHub Security Dashboard"),
    dcc.Graph(figure=fig)
])

if __name__ == "__main__":
    html_report = generate_html_report(categories)
    send_email(html_report)  # Send Report via Email
    app.run(debug=True)

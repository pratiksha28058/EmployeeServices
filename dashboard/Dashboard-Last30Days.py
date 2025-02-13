import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import plotly.express as px
import pandas as pd
import requests
import os

from datetime import datetime, timedelta

# GitHub repository details
OWNER = 'pratiksha2805-eng'
REPO = 'EmployeeService'
# TOKEN = os.getenv("GIT_TOKEN")  # Load token from environment variable
# GITHUB_TOKEN = os.getenv("GIT_TOKEN")  # Load token from environment variable
# # GitHub API configuration
GITHUB_API_URL = "https://api.github.com/repos/pratiksha2805-eng/EmployeeService/code-scanning/alerts"
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")  # Load token from environment variable

# Function to fetch code scanning alerts from GitHub
def fetch_github_alerts(owner, repo, token):
    url = f'https://api.github.com/repos/{owner}/{repo}/code-scanning/alerts'
    headers = {'Authorization': f'token {token}'}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f'Error fetching data: {response.status_code}')
        return []

# Process alerts to filter by date and severity
def process_alerts(alerts, days=30):
    cutoff_date = datetime.now() - timedelta(days=days)
    data = []
    for alert in alerts:
        created_at = datetime.strptime(alert['created_at'], '%Y-%m-%dT%H:%M:%SZ')
        if created_at >= cutoff_date and alert['rule']['severity'] in ['error', 'warning']:
            data.append({
                'Rule': alert['rule']['id'],
                'Severity': alert['rule']['severity'].capitalize(),
                'Created At': created_at,
                'State': alert['state'].capitalize()
            })
    return pd.DataFrame(data)

# Fetch and process alerts
alerts = fetch_github_alerts(OWNER, REPO, GITHUB_TOKEN)
df_alerts = process_alerts(alerts)

# Initialize the Dash app
app = dash.Dash(__name__)
app.title = 'GitHub Code Security Dashboard'

# Define the layout
app.layout = html.Div([
    html.H1('GitHub Code Security Alerts Dashboard'),
    dcc.Graph(id='severity-line-chart'),
    dcc.Interval(
        id='interval-component',
        interval=60*60*1000,  # Refresh data every hour
        n_intervals=0
    )
])

# Define callback to update the line chart
@app.callback(
    Output('severity-line-chart', 'figure'),
    Input('interval-component', 'n_intervals')
)
def update_graph(n):
    # Fetch and process the latest alerts
    alerts = fetch_github_alerts(OWNER, REPO, TOKkEN)
    df_alerts = process_alerts(alerts)
    
    if df_alerts.empty:
        fig = px.line(title='No Alerts in the Past 30 Days')
    else:
        # Group by date and severity
        df_alerts['Date'] = df_alerts['Created At'].dt.date
        df_grouped = df_alerts.groupby(['Date', 'Severity']).size().reset_index(name='Count')
        
        # Create the line chart
        fig = px.line(df_grouped, x='Date', y='Count', color='Severity', title='Alerts Trend Over Time')
        fig.update_xaxes(title_text='Date')
        fig.update_yaxes(title_text='Number of Alerts')
    
    return fig

if __name__ == '__main__':
    app.run_server(debug=True)

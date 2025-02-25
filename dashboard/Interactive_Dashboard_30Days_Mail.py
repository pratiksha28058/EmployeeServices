import os
import requests
import plotly.express as px
from flask import Flask
import dash
from dash import dcc, html
from dotenv import load_dotenv
load_dotenv()
import pandas as pd
print(pd.__version__)

# Optionally load environment variables from a .env file
from dotenv import load_dotenv
load_dotenv()

# Read configuration from environment variables
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
GITHUB_OWNER = 'pratiksha28058'
GITHUB_REPO = 'EmployeeServices'
GITHUB_API_URL = "https://api.github.com/repos/pratiksha28058/EmployeeService/code-scanning/alerts"


if not all([GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO]):
    raise ValueError("Please set GITHUB_TOKEN, GITHUB_OWNER, and GITHUB_REPO environment variables.")

# GitHub API endpoint for code scanning alerts
API_URL = f"https://api.github.com/repos/{GITHUB_OWNER}/{GITHUB_REPO}/code-scanning/alerts"

# Define headers for authentication
headers = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def fetch_code_scanning_alerts():
    """
    Fetch code scanning alerts from the GitHub API.
    Note: For production, you might want to handle pagination.
    """
    response = requests.get(API_URL, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching alerts: {response.status_code} {response.text}")
        return []

# Fetch alerts and create a DataFrame
alerts = fetch_code_scanning_alerts()

# Convert alerts to a DataFrame and filter for the last 30 days
if alerts:
    # Create DataFrame and parse dates
    df = pd.DataFrame(alerts)
    # Assume 'created_at' exists and convert to datetime
    df['created_at'] = pd.to_datetime(df['created_at'])
    
    # Filter data to the last 30 days
    thirty_days_ago = datetime.utcnow() - timedelta(days=30)
    df = df[df['created_at'] >= thirty_days_ago]

    # Extract the security severity level (assume field 'security_severity_level')
    # Some alerts might not have this field – drop those rows
    df = df[df['security_severity_level'].notnull()]
    df['severity'] = df['security_severity_level'].str.lower()  # normalize to lowercase
else:
    # If no alerts are returned, create an empty DataFrame with the expected columns
    df = pd.DataFrame(columns=['created_at', 'severity'])

# Create a date range for the last 30 days
date_range = pd.date_range(end=pd.Timestamp.utcnow(), periods=30).normalize()
# Create an empty DataFrame with the date range as index
df_counts = pd.DataFrame(index=date_range)

# For each severity (error, warning, note), count alerts per day
for sev in ['error', 'warning', 'note']:
    # Filter alerts for this severity, group by date (normalize timestamp), and count
    if not df.empty:
        counts = df[df['severity'] == sev].groupby(df['created_at'].dt.normalize()).size()
    else:
        counts = pd.Series(dtype=int)
    # Reindex to fill missing dates with 0
    counts = counts.reindex(date_range, fill_value=0)
    df_counts[sev.capitalize()] = counts

# Reset index for plotting
df_counts = df_counts.reset_index().rename(columns={'index': 'Date'})

# -------------------------------
# Build the Dash App
# -------------------------------
app = Dash(__name__)
app.title = "GitHub Security Dashboard"

app.layout = html.Div([
    html.H1("GitHub Security Code Scanning Alerts (Last 30 Days)"),
    html.P("Select a severity type:"),
    dcc.Dropdown(
        id='severity-dropdown',
        options=[
            {'label': 'Error', 'value': 'Error'},
            {'label': 'Warning', 'value': 'Warning'},
            {'label': 'Note', 'value': 'Note'}
        ],
        value='Error',
        clearable=False
    ),
    dcc.Graph(id='severity-chart'),
    html.Hr(),
    html.H2("Raw Data"),
    dash_table.DataTable(
        id='data-table',
        columns=[{"name": col, "id": col} for col in df_counts.columns],
        data=df_counts.to_dict('records'),
        page_size=10,
    )
])

@app.callback(
    Output('severity-chart', 'figure'),
    [Input('severity-dropdown', 'value')]
)
def update_chart(selected_severity):
    fig = px.line(df_counts, x='Date', y=selected_severity, 
                  title=f"{selected_severity} Alerts Over the Last 30 Days",
                  markers=True)
    fig.update_layout(
        xaxis_title="Date",
        yaxis_title="Count",
        template="plotly_white"
    )
    return fig

if __name__ == '__main__':
    # The app listens on port 8050 by default
    port = int(os.environ.get("PORT", 8050))
    app.run_server(debug=True, host='0.0.0.0', port=port)

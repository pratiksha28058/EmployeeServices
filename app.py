import dash
from dash import dcc, html
import pandas as pd
import plotly.express as px

# Sample data for GitHub Code Security report
data = {
    "Severity": ["Error", "Warning", "Note", "Error", "Warning", "Note"],
    "Count": [10, 5, 2, 15, 3, 8],
}

df = pd.DataFrame(data)

# Create a Dash app
app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1("GitHub Code Security Dashboard", style={"text-align": "center"}),
    dcc.Graph(
        figure=px.bar(
            df,
            x="Severity",
            y="Count",
            color="Severity",
            title="Code Security Alerts by Severity"
        )
    )
])

server = app.server  # Required for deployment to Azure
if __name__ == "__main__":
    app.run_server(debug=True)

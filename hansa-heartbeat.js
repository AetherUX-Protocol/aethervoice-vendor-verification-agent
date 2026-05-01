name: Hansa Marketplace Heartbeat

on:
  schedule:
    - cron: '0 */3 * * *'
  workflow_dispatch:

jobs:
  audit-heartbeat:
    runs-on: ubuntu-latest
    # This env variable opts you into the new Node.js 24 standard early
    env:
      FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          # Changed to 24 to align with the new runner standard
          node-version: '24'

      - name: Install Dependencies
        run: npm install

      - name: Execute Sovereign Audit Heartbeat
        run: node hansa-heartbeat.js
        env:
          AISA_API_KEY: ${{ secrets.AISA_API_KEY }} 
          
      - name: Log Activity Success
        run: echo "Audit heartbeat completed successfully at $(date)"

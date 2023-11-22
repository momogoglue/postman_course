# Newman Collection Runner Guide

This guide provides instructions on how to use scripts and Newman CLI for running Postman collections.

## Prerequisites

### Node.js Installation

- **Windows**: Download and install Node.js from [Node.js Downloads](https://nodejs.org/en/download).
- **Linux**: Use the command `sudo apt install node`.
- **Mac**: Install Node.js using Homebrew with `brew install node`.

Node Package Manager (npm) will be installed automatically with Node.js.

## Running Collections Using Scripts

### 1. Install Packages

- Navigate to the directory containing your `package.json` file.
- Run `npm install`.
  - This should create the `node_modules` directory in your project.

### 2. Run the Script

- Execute the script using: `node newman_collection_run.js`.

## Using Newman CLI

### Steps for Setup

1. Initialize a new npm project: `npm init -y`.
2. Install Newman and Reporters globally:
   - `npm install -g newman`
   - `npm install -g newman-reporter-cli`
   - `npm install -g newman-reporter-json`
   - `npm install -g newman-reporter-html`
   - `npm install -g newman-reporter-htmlextra`

### Commands for Generating Reports

- **JSON Report**:
  `newman run ./collection.json -e ./env.json --reporters cli,json --reporter-json.export ./report.json`

- **HTML Report**:
  `newman run collection.json -e env.json --reporters html --reporter-html-export report.html`

- **HTMLExtra Report**:
  `newman run collection.json -e environment.json -r htmlextra`

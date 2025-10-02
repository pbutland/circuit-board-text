# Circuit Board Text Visualizer

A web application that visualizes words using circuit board patterns.

## Overview

The Circuit Board Text Visualizer displays words and phrases using circuit board patterns. It accepts any combination of letters (a-z or A-Z) and spaces.

## Features

- **Real-time visualization**: As you type, the application automatically visualizes the text
- **Input validation**: Only allows A-Z letters and spaces
- **Multi-word support**: Works with phrases and sentences, not just single words
- **Dark/light mode**: Switch between themes for comfortable viewing
- **Responsive design**: Works on desktop and mobile devices
- **SVG image**: High-quality visual representation of circuit board patterns

## Usage

1. Open the application in your web browser
2. Enter a word or phrase in the input field (only A-Z letters and spaces are allowed)
3. The application will instantly visualize your text with circuit board patterns
4. Toggle between light and dark mode using the radio buttons

## Technical Details

The application uses:

- **TypeScript** for type-safe JavaScript development
- **ES Modules** for modern JavaScript structuring
- **SVG** for high-quality tile visualizations
- **Simple text parsing** for handling input validation
- **Responsive CSS** with custom theming
- **Fetch API** for loading tile SVG files asynchronously

## Development

### Prerequisites

- Node.js (v18 or later)
- Yarn (v4.6.0 or later)

### Setup

```bash
# Clone the repository
git clone https://github.com/username/circuit-board-text.git
cd circuit-board-text

# Install dependencies
yarn install
```

### Development Commands

```bash
# Start development server
yarn start

# Build for production
yarn build
```

### Project Structure

```
/
├── letters/           # SVG files for each letter (a-z,A-Z)
├── words/             # Example word visualizations
├── src/
│   ├── app.ts         # Main application code
├── dist/              # Compiled output (generated)
├── index.html         # Main HTML file
└── package.json       # Project configuration
```

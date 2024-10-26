
# WAD.js - Web App Designer
<img src="FB_IMG_17299278035107748.jpg"/>
## Overview

WAD.js is a JavaScript library designed to simplify and accelerate the design of components like forms, sidebars, tooltips, and more. This library aims to help developers realize their dream projects without wasting time, particularly in creating responsive designs. With WAD.js, the challenges of making web applications responsive are significantly reduced.

## Features

- **Simplified Component Creation**: Easily create styled components such as buttons, footers, navigation bars, tables, and more.
- **Responsive Design**: Built with responsiveness in mind, making it easier to develop adaptable web applications.
- **Developer Feedback**: The library is continually improved based on user feedback.

## Components

Explore the various components of WAD.js:

### Button
Handles the creation of styled buttons.
```javascript
Button.create(text, onClick);
Button.create("Read More", (e) => { alert("Button clicked"); });
```

### Footer
Designs a responsive footer.
```javascript
var footer = Footer.create([{
    companyName: "WAD Designer",
    copyright: "Designed with WAD.js | Created By Poloko",
    links: [{ text: "", href: "" }] // Add more social links
}]);
```

### Navbar
Creates a responsive navigation bar.
```javascript
Navbar.create([
    { text: "Home", href: "home.html" }
]);
```

### Table
Creates a customizable table with styled headers and rows.
```javascript
Table.create(headers, rows);
const table = Table.create(
  ['Name', 'Age', 'Occupation'],
  [['John Doe', '30', 'Engineer'], ['Jane Smith', '28', 'Designer']]
);
```

### Sidebar
Creates a collapsible sidebar for navigation.
```javascript
Sidebar.create([
    { text: "Home", href: "home.html" }
]);
```

### Alert
Creates a dismissible alert banner for notifications.
```javascript
Alert.create(message, type);
Alert.create(["Error"], "error");
Alert.create(["Information"], "info");
Alert.create(["Success"], "success");
```

### Dropdown
Creates a customizable dropdown menu.
```javascript
Dropdown.create(options, onSelect);
Dropdown.create(["Option 1", "Option 2"], (value) => { alert("You selected: " + value); });
```

### Accordion
Creates an accordion for expandable sections.
```javascript
Accordion.create([{ title: "Section 1", content: "Content 1" }]);
```

### Additional Components
WAD.js also includes components like Badge, Toast, Chip, Spinner, Form, Card, Tabs, ZoomText, Readmore, Grid Layout, Search, and Image Gallery.

## Installation

To get started with WAD.js, include the script in your HTML file:

```npm
mkdir  your-project
cd your-project
npm init -y
npm install wad-designer@3.0.0
``



## Usage

Create components by calling the respective methods provided in the library. Each component comes with its own set of parameters to customize functionality and appearance.

## Future Development

WAD.js is currently in development, and we encourage feedback from developers. Please be patient as we work on adding more components and features based on your needs.
## About Developer
This library is proudly created by @Poloko Edward Pule
## License

This project is licensed under the MIT License.



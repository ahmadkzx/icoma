# Icom
Icom is UI environment for generate and manage **icon components**.
With it you can generate icon components from the template and use them in your project.  

![enter image description here](https://user-images.githubusercontent.com/69081259/160601300-ef551395-deb5-4270-a860-9aa775c55eb9.png)

## What is icon component?
icon component is a (React, Vue, Angular, ...) component that takes some props like size and renders SVG.

## How to use

 1. Install Icom: `npm i icom --save-dev`
 2. Add these scripts in your package.json:
	 - `"icom:init": "icom init"`
	 - `"icon:start": "icom start"`
3. Initialize Icom: `npm run icom:init`
4. Finally start Icom on localhost: `npm run icom:start`

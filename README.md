# Withered Foxy Jumpscare Extension

> **Disclaimer:** This Chrome extension is **for fun and not meant to be taken seriously**.  
> It randomly displays a jumpscare GIF with sound when browsing websites.  
> IT IS PRETTY LOUD SO BE WARNED!

---

## Overview

Withered Foxy Jumpscare is a playful Chrome extension that gives a **1 in 10,000 chance** of triggering a jumpscare GIF and sound when you load any webpage.  

- Has audio (requires user interaction on some websites due to Chrome autoplay rules).  
- Works on most websites.

---

## Installation (Developer Mode)

1. **Clone or download** this repository to your computer by going to PowerShell or Terminal and copy-pasting this line or by clicking the green "Code" button on the repository home screen and clicking "Download ZIP":

"git clone https://github.com/Coded-To-The-Max/foxy-jumpscare-extension.git" or https://github.com/Coded-To-The-Max/foxy-jumpscare-extension if doing the latter

2. Once downloaded, if you downloaded the ZIP, right-click on it and click "Extract All," then open Chrome and go to:

chrome://extensions/

3. Enable Developer Mode (toggle in the top right).

Click Load unpacked and select the folder containing this extension.

The extension should now be active. Navigate to any website to test.

4. For testing, you can temporarily force the jumpscare by editing content.js:

if (true) {
  jumpscare();
}

5. For the most consistent result: 

Go to google.com and search for anything. Then, scroll immediately as the page loads to trigger the audio to play.

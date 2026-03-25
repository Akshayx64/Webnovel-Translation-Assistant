# Webnovel-Translation-Assistant
If you're like me and spend way too much time copying chapters from Chinese webnovel sites into Gemini or ChatGPT, this script is for you.

Instead of the usual "highlight, copy, switch tabs, type 'Translate this:', and paste" routine, this handles all the annoying parts with one shortcut. It’s set up for twkan.com right now, but you can tweak it for pretty much any site you read on.

Quick Install
-------------

If you already have Tampermonkey installed, you can just click the link below to add the script to your browser:

[**➔ Click here to Install the Script**](https://github.com/Akshayx64/Webnovel-Translation-Assistant/raw/refs/heads/main/twkan%20LLM%20Prompt%20Copier%20(with%20Shortcut)-1.5.user.js)

Getting started (Manual Install)
--------------------------------

1.  **Get a script manager:** Install **Tampermonkey** for your browser (Chrome, Firefox, Edge, etc.).
    
2.  **Add the script:**
    
    *   Click your Tampermonkey icon and hit **Create a new script...**
        
    *   Delete everything in the editor.
        
    *   Copy the code from the script.user.js file in this repo and paste it in.
        
    *   Hit **File > Save** (or Ctrl + S).
        

How to use it
-------------

1.  Open your chapter on twkan.com.
    
2.  Hit **Ctrl + b** on your keyboard. You’ll see a little blue button in the corner flash green and say "Copied!"
    
3.  Head over to your LLM tab, paste, and you're done.
    

**Quick tip:** If you only want to translate a specific part, just highlight that section manually and hit the shortcut. The script will only format and copy what you've selected.

Tweaking it for other sites
---------------------------

Not reading on twkan? No problem. Open the script and look for these parts:

*   **The URL:** Change the @match lines at the top to whatever site you're using.
    
*   **The Text Container:** Change #txtcontent0 to whatever ID your site uses for the story text.
    
*   **The Watermark:** Look for the .replace() line and swap out the Chinese text for whatever watermark your site likes to hide in the chapters.
    
*   **The Prompt:** You can change the "Translate the following..." text to whatever instructions you prefer.


Disclaimer
----------

Just a heads up: I built this using AI (Gemini) to help automate my reading flow. It works great for me, but since it's AI-generated, feel free to look through the code if you want to customize it further or check how it's handling the text.
    

License
-------

MIT License. 

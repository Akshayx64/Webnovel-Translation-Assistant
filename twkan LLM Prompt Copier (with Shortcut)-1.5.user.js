// ==UserScript==
// @name         twkan LLM Prompt Copier (with Shortcut)
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Grabs text from #txtcontent0, cleans it, adds prompt, and copies via Ctrl+b.
// @match        *://twkan.com/*
// @match        *://*.twkan.com/*
// @grant        GM_setClipboard
// ==/UserScript==

(function(){
'use strict';

const btn=document.createElement('button');
btn.innerHTML='Copy for LLM';
Object.assign(btn.style,{
 position:'fixed',bottom:'20px',right:'20px',zIndex:'999999',
 padding:'12px 16px',backgroundColor:'#4285f4',color:'white',
 border:'none',borderRadius:'8px',cursor:'pointer',
 fontWeight:'bold',boxShadow:'0 4px 6px rgba(0,0,0,0.1)'
});
document.body.appendChild(btn);

btn.addEventListener('click',()=>{
 let text=window.getSelection().toString();
 if(!text){
  const el=document.querySelector('#txtcontent0');
  if(!el){alert("Could not find #txtcontent0");return;}
  text=el.innerHTML;
  text=text.replace(/<br\s*\/?>/gi,'\n')
           .replace(/<[^>]*>?/gm,'')
           .replace(/（請記住.*?）/g,'')
           .replace(/&e[mn]sp;/gi,'')
           .replace(/&esmp;/gi,'')
           .replace(/\u2003/g,' ')
           .replace(/\n{3,}/g,'\n\n')
           .trim();
 }

const prompt="Translate the following Chinese webnovel text to English in a natural, readable style. Maintain the tone of the story:\n\n"+text;
GM_setClipboard(prompt);

btn.innerHTML='Copied!';
btn.style.backgroundColor='#34a853';
setTimeout(()=>{
 btn.innerHTML='Copy for LLM';
 btn.style.backgroundColor='#4285f4';
},2000);
});

document.addEventListener('keydown',e=>{
 if(e.ctrlKey&&e.key.toLowerCase()==='b'){
  e.preventDefault();
  btn.click();
 }
});

})();
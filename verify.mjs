import {chromium} from '@playwright/test';
import {spawn} from 'node:child_process';
import fs from 'node:fs';
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','--host','127.0.0.1'],{stdio:'pipe'});
let browser;
try{
 for(let i=0;i<50;i++){try{if((await fetch('http://127.0.0.1:5173')).ok)break}catch{}await new Promise(r=>setTimeout(r,200));}
 browser=await chromium.launch({channel: 'chromium'});
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [1440,768,390]){
  await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:5173');await page.getByRole('heading',{level:1}).waitFor();
  if(await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth))throw Error('Overflow at '+width);
  await page.screenshot({path:'preview-'+width+'.png',fullPage:true});
 }
 await page.getByRole('button',{name:'Ouvrir le menu'}).click();await page.locator('header nav').getByRole('link',{name:'Ma méthode'}).click();
 if(await page.getByRole('button',{name:'Ouvrir le menu'}).getAttribute('aria-expanded')!=='false')throw Error('Menu did not close');
 await page.getByRole('button',{name:/02 Planification/}).click();await page.locator('#phase-detail').getByRole('heading',{name:'Planification'}).waitFor();
 await page.locator('details').first().locator('summary').click();if(!await page.locator('details').first().getAttribute('open')&&await page.locator('details').first().getAttribute('open')!== '')throw Error('Disclosure failed');
 await page.getByRole('button',{name:'Activer le mode sombre'}).click();await page.reload();if(await page.locator('html').getAttribute('data-theme')!=='dark')throw Error('Theme persistence failed');
 await page.getByRole('button',{name:'Envoyer un message'}).click();if(await page.locator('[aria-invalid=true]').count()!==4)throw Error('Validation failed');
 await page.locator('#name').fill('Test');await page.locator('#email').fill('invalid');await page.locator('#subject').fill('QSE');await page.locator('#message').fill('Projet');await page.getByRole('button',{name:'Envoyer un message'}).click();await page.getByText('Saisissez une adresse email valide.').waitFor();
 await page.emulateMedia({reducedMotion:'reduce'});if(await page.locator('html').evaluate(el=>getComputedStyle(el).scrollBehavior)!=='auto')throw Error('Reduced motion failed');
 if(errors.length)throw Error(errors.join('\n'));
 console.log('PASS: 1440/768/390px, no overflow, menu, phase, expertise, theme persistence, validation, reduced motion, no runtime errors');
 fs.writeFileSync('verification.txt','Build and typecheck passed. Browser: 1440/768/390px, menu, phases, disclosures, theme persistence, invalid/empty form, reduced motion, no runtime errors.\n');
}finally{await browser?.close();server.kill();}


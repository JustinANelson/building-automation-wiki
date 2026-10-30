/** Site stylesheet. Technical-manual look: ruled tables, monospace part numbers, no cards or pills. */
export const CSS = `
:root{
  --paper:#f4f5f3;--page:#fff;--side:#eceeea;--head:#222a31;--head-fg:#e9edf0;
  --fg:#1d2125;--muted:#5d666e;--rule:#c9cec9;--rule-strong:#8d958f;--row:#f4f6f3;
  --link:#0b4f8a;
  --ok:#25693a;--warn:#8a5700;--bad:#9b2c2c;--none:#6b747c;
  --note-draft-bg:#fff5dc;--note-draft-bar:#c98f00;--note-rev-bg:#eaf1f8;--note-rev-bar:#0b4f8a;
  --mono:"Cascadia Mono","Cascadia Code",Consolas,"SF Mono",ui-monospace,monospace;
  --sans:"Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;
}
@media (prefers-color-scheme:dark){:root{
  --paper:#101315;--page:#171b1e;--side:#1b2024;--head:#0c0f11;--head-fg:#dfe5e9;
  --fg:#dde2e6;--muted:#8f99a2;--rule:#2f363c;--rule-strong:#59626b;--row:#1c2125;
  --link:#7db4ec;
  --ok:#5fb27a;--warn:#e0a63d;--bad:#e27c7c;--none:#8f99a2;
  --note-draft-bg:#2b2410;--note-draft-bar:#c98f00;--note-rev-bg:#14212d;--note-rev-bar:#4c8fd0;
}}
*{box-sizing:border-box}
html{scroll-padding-top:64px}
body{margin:0;background:var(--paper);color:var(--fg);font:15px/1.5 var(--sans)}
a{color:var(--link);text-decoration:none}a:hover{text-decoration:underline}
code,.mono,.pn{font-family:var(--mono)}

/* header */
.bar{position:sticky;top:0;z-index:20;display:flex;align-items:center;gap:20px;height:48px;padding:0 16px;background:var(--head);color:var(--head-fg)}
.bar a{color:var(--head-fg)}
.brand{display:flex;align-items:baseline;gap:10px;white-space:nowrap}
.brand b{font:700 17px var(--mono);letter-spacing:.02em}
.brand span{font-size:12px;color:#9aa5ae;text-transform:uppercase;letter-spacing:.08em}
.bar nav{display:flex;gap:16px;font-size:13px;margin-left:8px}
.search{position:relative;margin-left:auto;width:min(380px,40vw)}
.search input{width:100%;height:30px;padding:0 10px;font:13px var(--mono);color:#e9edf0;background:#10151a;border:1px solid #46525c;border-radius:2px}
.search input::placeholder{color:#8794a0}.search input:focus{outline:2px solid #5aa0e0;outline-offset:0}
#results{position:absolute;right:0;left:0;top:34px;margin:0;padding:0;list-style:none;background:var(--page);color:var(--fg);border:1px solid var(--rule-strong);box-shadow:0 6px 18px rgba(0,0,0,.25)}
#results li a{display:block;padding:6px 10px;color:var(--fg);border-bottom:1px solid var(--rule)}
#results li.on a,#results li a:hover{background:var(--row);text-decoration:none}
#results small{display:block;color:var(--muted);font-size:12px}
#results .pn{font-size:12px;color:var(--link)}

/* shell */
.shell{display:grid;grid-template-columns:268px minmax(0,1fr);min-height:calc(100vh - 48px)}
.side{background:var(--side);border-right:1px solid var(--rule);padding:14px 0 40px;font-size:13px;position:sticky;top:48px;align-self:start;height:calc(100vh - 48px);overflow:auto}
.side h3{margin:16px 16px 6px;font:600 11px var(--sans);text-transform:uppercase;letter-spacing:.1em;color:var(--muted)}
.side h3:first-child{margin-top:2px}
.side ul{list-style:none;margin:0;padding:0}
.side details>summary{cursor:pointer;padding:3px 16px;list-style:none;font-weight:600}
.side details>summary::-webkit-details-marker{display:none}
.side details>summary::before{content:"+";display:inline-block;width:14px;color:var(--muted);font-family:var(--mono)}
.side details[open]>summary::before{content:"\\2212"}
.side details ul{margin:0 0 6px;padding-left:30px}
.side li a{display:block;padding:2px 16px 2px 0;color:var(--fg)}
.side a:hover{color:var(--link)}
.side .cur>a,.side summary a.cur{font-weight:700;color:var(--link);box-shadow:inset 3px 0 0 var(--link);margin-left:-30px;padding-left:27px}
.side .line{font-style:normal;color:var(--muted);font-size:12px;margin-top:4px}
.side ul ul{padding-left:12px}
.side .flat a{padding:2px 16px}
.side .flat .cur>a{margin-left:0;padding-left:13px}

/* article */
main{background:var(--page);padding:20px 32px 64px;min-width:0}
.crumbs{font-size:12.5px;color:var(--muted);margin-bottom:10px}
.crumbs a{color:var(--muted)}.crumbs a:hover{color:var(--link)}.crumbs i{font-style:normal;margin:0 6px;color:var(--rule-strong)}
h1{margin:0 0 4px;font:700 26px/1.2 var(--sans);letter-spacing:-.005em;padding-bottom:6px;border-bottom:2px solid var(--fg)}
.kind{font:600 11px var(--sans);text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:2px}
.lede{margin:12px 0 4px;font-size:16px}
h2{margin:30px 0 8px;font:700 15px var(--sans);text-transform:uppercase;letter-spacing:.06em;padding-bottom:4px;border-bottom:1px solid var(--rule-strong)}
h2 small{font:400 12px var(--sans);text-transform:none;letter-spacing:0;color:var(--muted);margin-left:8px}
.body{max-width:76ch}.body p{margin:8px 0}.body ul{padding-left:20px}
.body table{border-collapse:collapse;margin:10px 0;font-size:14px}.body th{text-align:left;font:600 11.5px var(--sans);text-transform:uppercase;letter-spacing:.07em;color:var(--muted);padding:5px 14px 5px 0;border-bottom:2px solid var(--rule-strong)}.body td{padding:5px 14px 5px 0;border-bottom:1px solid var(--rule)}
.body blockquote{margin:10px 0;padding:6px 12px;border-left:4px solid var(--note-draft-bar);background:var(--note-draft-bg);font-size:13.5px}.body blockquote p{margin:4px 0}
.body h1,.body h2,.body h3{font-size:15px;text-transform:none;border:0;letter-spacing:0;margin:14px 0 4px}

/* notices */
.note{margin:14px 0;padding:8px 12px;font-size:13.5px;border-left:4px solid;border-top:1px solid var(--rule);border-right:1px solid var(--rule);border-bottom:1px solid var(--rule)}
.note b{margin-right:4px}
.note.draft{background:var(--note-draft-bg);border-left-color:var(--note-draft-bar)}
.note.needs-review{background:var(--note-rev-bg);border-left-color:var(--note-rev-bar)}

/* infobox */
.art{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:0 32px;align-items:start}
.art .txt{grid-column:1;grid-row:1;min-width:0}
.info{grid-column:2;grid-row:1;position:sticky;top:64px;margin:12px 0 16px;border:1px solid var(--rule-strong);background:var(--row);font-size:13.5px}
.info caption{caption-side:top;text-align:left;padding:6px 10px;font:700 12px var(--sans);text-transform:uppercase;letter-spacing:.08em;background:var(--head);color:var(--head-fg)}
.info table{width:100%;border-collapse:collapse}
.info th{width:38%;text-align:left;font-weight:600;color:var(--muted);padding:5px 10px;vertical-align:top;border-top:1px solid var(--rule)}
.info td{padding:5px 10px;vertical-align:top;border-top:1px solid var(--rule)}

/* tables */
table.t{width:100%;border-collapse:collapse;font-size:14px;margin:4px 0 8px}
table.t th{text-align:left;font:600 11.5px var(--sans);text-transform:uppercase;letter-spacing:.07em;color:var(--muted);padding:6px 10px 6px 0;border-bottom:2px solid var(--rule-strong);white-space:nowrap}
table.t td{padding:6px 10px 6px 0;border-bottom:1px solid var(--rule);vertical-align:top}
table.t tr:hover td{background:var(--row)}
table.t.compact{max-width:760px}
table.t td.n,table.t th.n{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.pn{font-weight:600;font-size:13.5px;white-space:nowrap;cursor:copy}
.pn.copied::after{content:" copied";font:12px var(--sans);color:var(--ok);font-weight:400}
.muted{color:var(--muted)}.empty{color:var(--muted);font-style:italic;margin:6px 0}
.st{white-space:nowrap}
.st::before{content:"";display:inline-block;width:8px;height:8px;margin-right:6px;background:var(--none);vertical-align:0}
.st.current::before{background:var(--ok)}.st.legacy::before{background:var(--warn)}.st.end-of-life::before{background:var(--bad)}
.rv{font-size:12.5px;white-space:nowrap}.rv.draft{color:var(--warn)}.rv.needs-review{color:var(--link)}.rv.verified{color:var(--ok)}
.filter{width:100%;max-width:420px;height:34px;padding:0 10px;margin:6px 0 10px;font:14px var(--mono);color:var(--fg);background:var(--page);border:1px solid var(--rule-strong)}
.lead{max-width:70ch;color:var(--muted);margin:10px 0 0}
figure{margin:10px 0}figure img{max-width:100%;max-height:360px;width:auto;height:auto;border:1px solid var(--rule)}figcaption{font-size:12.5px;color:var(--muted)}
footer{margin-top:48px;padding-top:10px;border-top:1px solid var(--rule);font-size:12.5px;color:var(--muted)}

@media (max-width:900px){
  .shell{display:block}
  .side{position:static;height:auto;border-right:0;border-bottom:1px solid var(--rule);max-height:50vh}
  main{padding:16px}
  .art{display:block}.info{position:static;margin:12px 0}
  .brand span,.bar nav{display:none}.search{width:auto;flex:1}
  .pn{white-space:normal;word-break:break-all}
}
@media print{
  .bar,.side,.search,.filter{display:none}
  .shell{display:block}main{padding:0;background:#fff}
  body{background:#fff;color:#000;font-size:11pt}a{color:#000}
  .art{display:block}.info{position:static;width:100%;margin:8px 0;break-inside:avoid}
  tr{break-inside:avoid}
}
`;

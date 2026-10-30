/** Site stylesheet. Printed-reference look: serif prose, ruled tables, monospace part numbers, one warm accent, no cards or pills. */
export const CSS = `
:root{
  --paper:#faf8f4;--page:#faf8f4;--side:#f3f0e9;--head:#faf8f4;--head-fg:#2a2622;
  --fg:#2a2622;--muted:#756f66;--rule:#ddd7cb;--rule-strong:#b9b1a2;--row:#f1ede4;
  --link:#8a3b12;
  --ok:#3f6b3a;--warn:#8a5a00;--bad:#9b2c2c;--none:#8a847a;
  --note-draft-bg:#f6edd5;--note-draft-bar:#b98a1c;--note-rev-bg:#e9eef0;--note-rev-bar:#4a6b78;
  --mono:"Cascadia Mono","Cascadia Code",Consolas,"SF Mono",ui-monospace,monospace;
  --sans:"Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;
  --serif:Charter,"Bitstream Charter","Iowa Old Style","Palatino Linotype",Georgia,serif;
}
@media (prefers-color-scheme:dark){:root{
  --paper:#1c1a17;--page:#1c1a17;--side:#211f1b;--head:#1c1a17;--head-fg:#e8e2d6;
  --fg:#e2dccf;--muted:#9a9386;--rule:#36322b;--rule-strong:#5a5448;--row:#252219;
  --link:#e0a070;
  --ok:#8cbf84;--warn:#e0b050;--bad:#e08a8a;--none:#9a9386;
  --note-draft-bg:#2e2712;--note-draft-bar:#b98a1c;--note-rev-bg:#1f2a2f;--note-rev-bar:#6d9aa8;
}}
*{box-sizing:border-box}
html{scroll-padding-top:72px}
body{margin:0;background:var(--paper);color:var(--fg);font:15px/1.5 var(--sans);-webkit-font-smoothing:antialiased}
a{color:var(--link);text-decoration:none}a:hover{text-decoration:underline;text-underline-offset:2px}
code,.mono,.pn{font-family:var(--mono)}

/* header */
.bar{position:sticky;top:0;z-index:20;display:flex;align-items:center;gap:24px;height:52px;padding:0 20px;background:var(--head);color:var(--head-fg);border-bottom:1px solid var(--rule)}
.bar a{color:var(--head-fg)}
.brand{display:flex;align-items:baseline;gap:12px;white-space:nowrap}
.brand b{font:700 20px var(--serif)}
.brand span{font:italic 13.5px var(--serif);color:var(--muted)}
.bar nav{display:flex;gap:20px;font-size:14px;margin-left:12px}
.bar nav a{color:var(--muted)}.bar nav a:hover{color:var(--link);text-decoration:none}
.search{position:relative;margin-left:auto;width:min(360px,40vw)}
.search input{width:100%;height:32px;padding:0 10px;font:13px var(--mono);color:var(--fg);background:var(--page);border:1px solid var(--rule-strong);border-radius:0}
.search input::placeholder{color:var(--muted)}.search input:focus{outline:2px solid var(--link);outline-offset:-1px}
#results{position:absolute;right:0;left:0;top:36px;margin:0;padding:0;list-style:none;background:var(--page);color:var(--fg);border:1px solid var(--rule-strong);box-shadow:0 4px 14px rgba(0,0,0,.15)}
#results li a{display:block;padding:6px 10px;color:var(--fg);border-bottom:1px solid var(--rule)}
#results li.on a,#results li a:hover{background:var(--row);text-decoration:none}
#results small{display:block;color:var(--muted);font-size:12px}
#results .pn{font-size:12px;color:var(--link)}

/* shell */
.shell{display:grid;grid-template-columns:270px minmax(0,1fr);min-height:calc(100vh - 52px)}
.side{background:var(--side);border-right:1px solid var(--rule);padding:18px 0 40px;font-size:13.5px;line-height:1.35;position:sticky;top:52px;align-self:start;height:calc(100vh - 52px);overflow:auto}
.side h3{margin:22px 18px 6px;font:italic 400 13px var(--serif);color:var(--muted);border-bottom:1px solid var(--rule);padding-bottom:3px}
.side h3:first-child{margin-top:0}
.side ul{list-style:none;margin:0;padding:0}
.side details>summary{cursor:pointer;padding:3px 18px;list-style:none}
.side details>summary::-webkit-details-marker{display:none}
.side details>summary::before{content:"\\25B8";display:inline-block;width:14px;color:var(--muted);font-size:11px}
.side details[open]>summary::before{content:"\\25BE"}
.side details>summary a{color:var(--fg)}
.side details ul{margin:0 0 6px;padding-left:32px}
.side li a{display:block;padding:3px 18px 3px 0;color:var(--fg)}
.side a:hover{color:var(--link);text-decoration:none}
.side .cur>a,.side summary a.cur{font-weight:700;color:var(--link);box-shadow:inset 2px 0 0 var(--link);margin-left:-32px;padding-left:30px}
.side ul ul{padding-left:12px}
.side .flat a{padding:3px 18px}
.side .flat .cur>a{margin-left:0;padding-left:16px}

/* article */
main{background:var(--page);padding:28px 40px 72px;min-width:0;max-width:1180px}
.crumbs{font-size:13px;color:var(--muted);margin-bottom:18px}
.crumbs a{color:var(--muted)}.crumbs a:hover{color:var(--link)}.crumbs i{font-style:normal;margin:0 7px;color:var(--rule-strong)}
h1{margin:0 0 6px;font:400 34px/1.15 var(--serif);letter-spacing:-.01em}
.kind{font:italic 14px var(--serif);color:var(--muted);margin-bottom:4px}
.lede{margin:14px 0 6px;font:19px/1.5 var(--serif)}
h2{margin:36px 0 10px;font:700 21px/1.25 var(--serif);padding-bottom:5px;border-bottom:1px solid var(--rule)}
h2 small{font:400 13px var(--sans);color:var(--muted);margin-left:10px}
.body{max-width:68ch;font:16.5px/1.6 var(--serif)}.body p{margin:10px 0}.body ul,.body ol{padding-left:22px}.body li{margin:3px 0}
.body table{border-collapse:collapse;margin:12px 0;font:14px var(--sans)}.body th{text-align:left;font:600 13px var(--sans);color:var(--muted);padding:5px 14px 5px 0;border-bottom:1px solid var(--rule-strong)}.body td{padding:5px 14px 5px 0;border-bottom:1px solid var(--rule)}
.body blockquote{margin:12px 0;padding:4px 14px;border-left:3px solid var(--note-draft-bar);background:var(--note-draft-bg);font-size:15px}.body blockquote p{margin:4px 0}
.body h1,.body h2,.body h3{font:700 18px/1.3 var(--serif);border:0;margin:22px 0 4px}
.body h3{font-size:16.5px;font-style:italic}
.body code{font-size:.88em;background:var(--row);padding:1px 4px}

/* notices */
.note{margin:16px 0;padding:8px 14px;font-size:14px;border-left:3px solid}
.note b{margin-right:5px}
.note.draft{background:var(--note-draft-bg);border-left-color:var(--note-draft-bar)}
.note.needs-review{background:var(--note-rev-bg);border-left-color:var(--note-rev-bar)}

/* infobox */
.art{display:grid;grid-template-columns:minmax(0,1fr) 270px;gap:0 40px;align-items:start}
.art .txt{grid-column:1;grid-row:1;min-width:0}
.info{grid-column:2;grid-row:1;position:sticky;top:72px;margin:14px 0 16px;border-top:2px solid var(--fg);border-bottom:1px solid var(--rule-strong);font-size:13.5px}
.info caption{caption-side:top;text-align:left;padding:8px 0 6px;font:italic 400 14px/1.3 var(--serif);color:var(--muted)}
.info table{width:100%;border-collapse:collapse}
.info th{width:38%;text-align:left;font-weight:400;color:var(--muted);padding:5px 10px 5px 0;vertical-align:top;border-top:1px solid var(--rule)}
.info td{padding:5px 0;vertical-align:top;border-top:1px solid var(--rule)}

/* tables */
table.t{width:100%;border-collapse:collapse;font-size:14px;margin:4px 0 8px}
table.t th{text-align:left;font:600 13px var(--sans);color:var(--muted);padding:6px 12px 6px 0;border-bottom:1px solid var(--rule-strong);white-space:nowrap}
table.t td{padding:7px 12px 7px 0;border-bottom:1px solid var(--rule);vertical-align:top}
table.t tr:hover td{background:var(--row)}
table.t.compact{max-width:760px}
table.t td.n,table.t th.n{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.pn{font-weight:600;font-size:13.5px;white-space:nowrap;cursor:copy}
.pn.copied::after{content:" copied";font:12px var(--sans);color:var(--ok);font-weight:400}
.muted{color:var(--muted)}.empty{color:var(--muted);font-style:italic;margin:6px 0}
.st{white-space:nowrap}
.st::before{content:"";display:inline-block;width:7px;height:7px;margin-right:6px;border-radius:50%;background:var(--none);vertical-align:1px}
.st.current::before{background:var(--ok)}.st.legacy::before{background:var(--warn)}.st.end-of-life::before{background:var(--bad)}
.rv{font-size:13px;white-space:nowrap}.rv.draft{color:var(--warn)}.rv.needs-review{color:var(--link)}.rv.verified{color:var(--ok)}
.filter{width:100%;max-width:420px;height:34px;padding:0 10px;margin:8px 0 12px;font:14px var(--mono);color:var(--fg);background:var(--page);border:1px solid var(--rule-strong);border-radius:0}
.lead{max-width:64ch;color:var(--muted);margin:12px 0 0;font:17px/1.55 var(--serif)}
figure{margin:12px 0}figure img{max-width:100%;max-height:420px;width:auto;height:auto;border:1px solid var(--rule);background:#fff}figcaption{font-size:13px;color:var(--muted);margin-top:4px;max-width:80ch}
ul.cols{list-style:none;margin:8px 0 0;padding:0;columns:3 230px;column-gap:32px}ul.cols li{break-inside:avoid;padding:3px 0;font:16px/1.35 var(--serif)}
footer{margin-top:56px;padding-top:12px;border-top:1px solid var(--rule);font:italic 13.5px var(--serif);color:var(--muted)}

@media (max-width:900px){
  .shell{display:block}
  .side{position:static;height:auto;border-right:0;border-bottom:1px solid var(--rule);max-height:50vh}
  main{padding:16px}
  .art{display:block}.info{position:static;margin:12px 0}
  .brand span,.bar nav{display:none}.search{width:auto;flex:1}
  .pn{white-space:normal;word-break:break-all}
  h1{font-size:28px}
}
@media print{
  .bar,.side,.search,.filter{display:none}
  .shell{display:block}main{padding:0;background:#fff;max-width:none}
  body{background:#fff;color:#000;font-size:11pt}a{color:#000}
  .art{display:block}.info{position:static;width:100%;margin:8px 0;break-inside:avoid}
  tr{break-inside:avoid}
}
`;

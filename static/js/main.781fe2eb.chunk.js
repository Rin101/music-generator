(this["webpackJsonpmusic-generator"]=this["webpackJsonpmusic-generator"]||[]).push([[0],{28:function(e,s,t){},29:function(e,s,t){},30:function(e,s,t){},45:function(e,s,t){"use strict";t.r(s);var c=t(0),n=t(1),a=t(3),r=t(2),i=t(8),o=t.n(i),l=t(16),j=t.n(l),u=(t(28),t(29),t(30),t(11)),d=t(10),b=t(18),f=["A2","A#2","B2","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A3","A#3","B3","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A4","A#4","B4","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A5","A#5","B5","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A6","A#6","B6","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A7","A#7","B7","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7"],m={majorScale:[0,2,4,5,7,9,11],minorScale:[0,2,3,5,7,8,10],majorPentatonic:[0,2,4,7,9],minorPentatonic:[0,3,5,7,10],harmonicMinor:[0,2,3,5,7,8,11],harmonicMajor:[0,2,4,5,7,8,11]};function h(e){var s=function(e){var s=["majorScale","minorScale","majorPentatonic","minorPentatonic","harmonicMinor","harmonicMajor","majorScale","minorScale"],t=["C","C#","D","D#","E","F","G","G#","A","A#","B"];return{scale:"None"==e.scale?s[Math.floor(Math.random()*s.length)]:e.scale,key:"None"==e.key?t[Math.floor(Math.random()*t.length)]:e.key,bpm:"None"==e.bpm?Math.floor(80*Math.random()+70):e.bpm,selectedNotes:"None"==e.selectedNotes?null:e.selectedNotes,rest:e.rest,length:e.length}}(e),t=[],c=function(e){for(var s=[.5,1,2,1.5,.5,1,1/4],t=4*e,c=[],n=t,a=0;n;){for(var r=Math.trunc(n/s[a]),i=Math.floor(Math.random()*(r+1)),o=i;o>0;)c.push(s[a]),o-=1;n-=i*s[a],a+=1}return function(e){var s=0;e.forEach((function(e){s+=e})),s<t&&e.push(t-s)}(c),function(e){for(var s,t,c=e.length;0!==c;)t=Math.floor(Math.random()*c),s=e[c-=1],e[c]=e[t],e[t]=s;return e}(c)}(s.length),n=s.selectedNotes||function(e,s){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[3,4],c=[],n=s+t[0],a=f.indexOf(n),r=Object(u.a)(m[e]),i=Math.abs(t[1]-t[0]),o=0;o<=i-1;)r.forEach((function(e){return r.push(e+12*o)})),o+=1;for(r.push(12*i),o=0;o<r.length;)c.push(f[a+r[o]]),o+=1;return c}(s.scale,s.key);s.rest?n.push("rest"):c.forEach((function(e){t.push([n[Math.floor(Math.random()*n.length)],e])}));var a={song:t,bpm:s.bpm,details:{scale:s.scale,key:s.key}};return console.log(a),a}var O=t(9);function p(e){var s=Object(i.useRef)(),t=Object(i.useRef)(),c=Object(i.useRef)(),n=Object(i.useRef)(),a=Object(i.useRef)(),r=Object(i.useRef)(),o=Object(i.useRef)(),l=(new b.b).toDestination(),j=(new b.a({urls:{A1:"A1.mp3",A2:"A2.mp3"},baseUrl:"https://tonejs.github.io/audio/casio/"}).toDestination(),function(e){return 1/(e/60)});function u(e){s.current.classList.contains("playing")?(s.current.classList.remove("playing"),s.current.querySelector("i.fas").classList.remove("fa-pause"),s.current.querySelector("i.fas").classList.add("fa-play")):function(e){var t=b.d();s.current.classList.add("playing"),s.current.querySelector("i.fas").classList.remove("fa-play"),s.current.querySelector("i.fas").classList.add("fa-pause");var c=e.bpm;b.c.bpm.value=c;for(var n=0,a=0;n<e.song.length&&s.current.classList.contains("playing");)"rest"!=e.song[n][0]&&l.triggerAttackRelease(e.song[n][0],j(c)*e.song[n][1],t+a),a+=j(c)*e.song[n][1],n+=1}(e)}return Object(O.jsxs)("div",{className:"music-player-item",ref:t,children:[Object(O.jsxs)("div",{className:"music-player",children:[Object(O.jsx)("div",{className:"play-pause-container",children:Object(O.jsx)("div",{className:"play-pause",ref:s,onClick:function(){return u(e.song)},children:Object(O.jsx)("button",{className:"play-pause-button",children:Object(O.jsx)("i",{className:"fas fa-play"})})})}),Object(O.jsx)("div",{className:"progress-container",ref:r,onClick:function(e){return function(e,s){var t=e,c=s,n=c/t*100;o.current.style.width="".concat(n,"%"),console.log(t,c,n)}(e.target.clientWidth,e.target.offsetX)},children:Object(O.jsx)("div",{className:"progress",ref:o})}),Object(O.jsx)("button",{className:"like-unlike unliked",children:Object(O.jsx)("i",{className:"far fa-heart"})})]}),Object(O.jsxs)("div",{className:"song-details-container",children:[Object(O.jsxs)("div",{className:"details-i-container",ref:c,onClick:function(){c.current.classList.contains("showing")?(c.current.querySelector("i.fas").classList.remove("fa-caret-up"),c.current.querySelector("i.fas").classList.add("fa-caret-down"),c.current.classList.remove("showing"),n.current.style.display="none"):(c.current.querySelector("i.fas").classList.remove("fa-caret-down"),c.current.querySelector("i.fas").classList.add("fa-caret-up"),n.current.style.display="block",c.current.classList.add("showing"))},children:[Object(O.jsx)("input",{ref:a,type:"checkbox",className:"on-off-details"}),Object(O.jsx)("i",{className:"fas fa-caret-down"})]}),Object(O.jsxs)("div",{ref:n,className:"song-details",children:[Object(O.jsxs)("p",{children:["scale: ",e.song.details.scale]}),Object(O.jsxs)("p",{children:["key: ",e.song.details.key]})]})]}),Object(O.jsx)("div",{className:"player-menu",children:Object(O.jsxs)("div",{className:"player-menu-holder",children:[Object(O.jsx)("div",{className:"player-menu-item",children:Object(O.jsx)("i",{className:"far fa-heart"})}),Object(O.jsx)("div",{className:"player-menu-item",children:Object(O.jsx)("i",{className:"fas fa-trash"})}),Object(O.jsx)("div",{className:"player-menu-item",children:Object(O.jsx)("i",{className:"fas fa-edit"})})]})})]})}var v=t(7);function x(e){var s=e.customSettings,t=e.setCustomSettings,c=Object(i.useRef)(),n=Object(i.useRef)(),a=Object(i.useRef)(),r=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),j=function(e){c.current.style.display="block",c.current.style.top=e.pageY+"px",c.current.style.left=e.pageX+"px"},u=function(){c.current.style.display="none"},d=function(){n.current.style.display="flex",a.current.style.display="none"};return Object(O.jsxs)("div",{className:"custom-settings",children:[Object(O.jsx)("div",{ref:c,className:"cursor"}),Object(O.jsx)("div",{className:"setting-card",ref:n,onMouseMove:function(e){return j(e)},onMouseLeave:function(){return u()},onClick:function(){return n.current.style.display="none",void(a.current.style.display="flex")},children:Object(O.jsx)("i",{className:"fas fa-cog"})}),Object(O.jsxs)("div",{ref:a,className:"selectors",onMouseMove:function(e){return j(e)},onMouseLeave:function(){return u()},children:[Object(O.jsx)("label",{children:"scale : "}),Object(O.jsxs)("select",{ref:o,name:"scale",id:"scale",children:[Object(O.jsx)("option",{value:"None",children:"None"}),Object(O.jsx)("option",{value:"majorScale",children:"Major"}),Object(O.jsx)("option",{value:"minorScale",children:"Minor"}),Object(O.jsx)("option",{value:"majorPentatonic",children:"Major Pentatonic"}),Object(O.jsx)("option",{value:"minorPentatonic",children:"Minor Pentatonic"}),Object(O.jsx)("option",{value:"harmonicMajor",children:"Harmonic Major"}),Object(O.jsx)("option",{value:"harmonicMinor",children:"Harmonic Minor"})]}),Object(O.jsx)("label",{children:"key : "}),Object(O.jsxs)("select",{ref:l,name:"key",id:"key",children:[Object(O.jsx)("option",{value:"None",children:"None"}),Object(O.jsx)("option",{value:"C",children:"C"}),Object(O.jsx)("option",{value:"C#",children:"C#"}),Object(O.jsx)("option",{value:"D",children:"D"}),Object(O.jsx)("option",{value:"D#",children:"D#"}),Object(O.jsx)("option",{value:"E",children:"E"}),Object(O.jsx)("option",{value:"F",children:"F"}),Object(O.jsx)("option",{value:"F#",children:"F#"}),Object(O.jsx)("option",{value:"G",children:"G"}),Object(O.jsx)("option",{value:"G#",children:"G#"}),Object(O.jsx)("option",{value:"A",children:"A"}),Object(O.jsx)("option",{value:"A#",children:"A#"}),Object(O.jsx)("option",{value:"B",children:"B"})]}),Object(O.jsx)("div",{ref:r,className:"apply-settings",onClick:function(){return function(){for(var e=[o.current.value,l.current.value],c=["None","None"],n=0;n<e.length;)e[n]="None"!=e[n]?e[n]:c[n],n+=1;var a=Object(v.a)({},s);a.scale=e[0],a.key=e[1],t(a),d()}()},children:Object(O.jsxs)("p",{children:[Object(O.jsx)("i",{className:"fas fa-sliders-h"})," apply settings"]})})]})]})}var N=t(58);function y(){var e=Object(i.useState)([]),s=Object(d.a)(e,2),t=s[0],c=s[1],n=Object(i.useState)({length:"4",scale:"None",key:"None",rest:!1,bpm:"None",selectedNotes:"None"}),a=Object(d.a)(n,2),r=a[0],o=a[1],l=function(){return t.length>0?t.map((function(e){return Object(O.jsx)(p,{song:e},e.song)})):Object(O.jsx)("div",{className:"empty-player",children:Object(O.jsx)("p",{children:"Click the Generate button to create music!"})})};return Object(O.jsxs)("div",{className:"generator",children:[Object(O.jsx)("section",{className:"side-bar",children:Object(O.jsxs)("div",{className:"side-menu-container",children:[Object(O.jsx)("div",{className:"menu-bar",children:Object(O.jsx)("i",{className:"fas fa-bars"})}),Object(O.jsxs)("div",{className:"side-menu account",children:[Object(O.jsx)("i",{className:"fas fa-user-circle"}),"Account"]}),Object(O.jsxs)("div",{className:"side-menu login",children:[Object(O.jsx)("i",{className:"fas fa-sign-in-alt"}),"Login"]}),Object(O.jsxs)("div",{className:"side-menu about",children:[Object(O.jsx)("i",{className:"fas fa-building"}),"About"]}),Object(O.jsxs)("div",{className:"side-menu faq",children:[Object(O.jsx)("i",{className:"fas fa-question-circle"}),"FAQ"]})]})}),Object(O.jsxs)("section",{className:"content",children:[Object(O.jsx)("div",{className:"top-image",children:Object(O.jsx)("h1",{children:"Music Genarator AI"})}),Object(O.jsx)("div",{className:"thin-line"}),Object(O.jsxs)("div",{className:"music",children:[Object(O.jsxs)("div",{className:"laboratory",children:[Object(O.jsx)("div",{className:"generator-button-container",children:Object(O.jsx)(N.a,{variant:"contained",className:"generator-button",onClick:function(){return function(e){var s=h(e);c([s].concat(Object(u.a)(t)))}(r)},children:"GENERATE"})}),Object(O.jsx)("div",{className:"settings-container",children:Object(O.jsx)(x,{customSettings:r,setCustomSettings:o})})]}),Object(O.jsx)("div",{className:"music-player-container",children:Object(O.jsx)(l,{})})]})]})]})}var g=function(e){Object(a.a)(t,e);var s=Object(r.a)(t);function t(){return Object(c.a)(this,t),s.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"app",children:Object(O.jsx)(y,{})})}}]),t}(o.a.Component);j.a.render(Object(O.jsx)(g,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.781fe2eb.chunk.js.map
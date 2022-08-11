"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[836],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3584:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={id:"faq",title:"FAQ"},l=void 0,u={unversionedId:"faq",id:"faq",title:"FAQ",description:"How to tell if my server instance is behind NAT?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/handbook/docs/faq",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/faq.md",tags:[],version:"current",lastUpdatedAt:1660233297,formattedLastUpdatedAt:"Aug 11, 2022",frontMatter:{id:"faq",title:"FAQ"},sidebar:"docs",previous:{title:"Security",permalink:"/handbook/docs/security"},next:{title:"Our community",permalink:"/handbook/docs/community/community-intro"}},p={},m=[{value:"How to tell if my server instance is behind NAT?",id:"how-to-tell-if-my-server-instance-is-behind-nat",level:2},{value:"Clients could communicate well in room created at <code>meet.jit.si</code>. The same clients still could connect to my self-hosted instance but can neither hear nor see one another. What&#39;s wrong?",id:"clients-could-communicate-well-in-room-created-at-meetjitsi-the-same-clients-still-could-connect-to-my-self-hosted-instance-but-can-neither-hear-nor-see-one-another-whats-wrong",level:2},{value:"It works with two participants, but crashes or does not work properly when a third joins",id:"it-works-with-two-participants-but-crashes-or-does-not-work-properly-when-a-third-joins",level:2},{value:"Can I mute and unmute other participants?",id:"can-i-mute-and-unmute-other-participants",level:2},{value:"How can I protect my meetings with Jitsi?",id:"how-can-i-protect-my-meetings-with-jitsi",level:2},{value:"<em>1. Create a &quot;strong&quot; room name.</em>",id:"1-create-a-strong-room-name",level:3},{value:"<em>2. Use a different room name for each meeting / conference you have.</em>",id:"2-use-a-different-room-name-for-each-meeting--conference-you-have",level:3},{value:"<em>3. Add a password to the room.</em>",id:"3-add-a-password-to-the-room",level:3},{value:"<em>4. Enable &quot;secure domain&quot; if you are using your own instance of Jitsi.</em>",id:"4-enable-secure-domain-if-you-are-using-your-own-instance-of-jitsi",level:3},{value:"It&#39;s working when I connect from a browser, but not from the iOS or Android apps",id:"its-working-when-i-connect-from-a-browser-but-not-from-the-ios-or-android-apps",level:2},{value:"Can I record and save the video?",id:"can-i-record-and-save-the-video",level:2},{value:"I set the password in meeting but it is not working the next time",id:"i-set-the-password-in-meeting-but-it-is-not-working-the-next-time",level:2},{value:"How to limit the number of participants?",id:"how-to-limit-the-number-of-participants",level:2}],c={toc:m};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-tell-if-my-server-instance-is-behind-nat"},"How to tell if my server instance is behind NAT?"),(0,a.kt)("p",null,"In general, if the tool ifconfig (or ipconfig) shows the assigned IPv4 address to be a private / local address (10.x.x.x, or  172.16.x.x - 172.31.x.x, or 192.168.x.x) but you know that its public IPv4 address is different from that, the server is most probably behind NAT."),(0,a.kt)("p",null,"If you are hosting your server on a VPS, and you are not sure, ask your VPS provider's support team."),(0,a.kt)("h2",{id:"clients-could-communicate-well-in-room-created-at-meetjitsi-the-same-clients-still-could-connect-to-my-self-hosted-instance-but-can-neither-hear-nor-see-one-another-whats-wrong"},"Clients could communicate well in room created at ",(0,a.kt)("inlineCode",{parentName:"h2"},"meet.jit.si"),". The same clients still could connect to my self-hosted instance but can neither hear nor see one another. What's wrong?"),(0,a.kt)("p",null,"Most probably, the server is behind NAT, but you haven't added the NAT-specific configuration. See this ",(0,a.kt)("a",{parentName:"p",href:"https://community.jitsi.org/t/cannot-see-video-or-hear-audio-on-self-hosted-instance/"},"resolved question"),". You need to follow the steps detailed ",(0,a.kt)("a",{parentName:"p",href:"devops-guide/devops-guide-quickstart#advanced-configuration"},"here"),"."),(0,a.kt)("h2",{id:"it-works-with-two-participants-but-crashes-or-does-not-work-properly-when-a-third-joins"},"It works with two participants, but crashes or does not work properly when a third joins"),(0,a.kt)("p",null,"P2P mode is working, but it fails when you are trying to pass traffic via jitsi-videobridge2."),(0,a.kt)("p",null,"Check you've got your firewall / NAT set up correctly \u2014 especially UDP 10000. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"devops-guide/devops-guide-quickstart#setup-and-configure-your-firewall"},"here"),"."),(0,a.kt)("h2",{id:"can-i-mute-and-unmute-other-participants"},"Can I mute and unmute other participants?"),(0,a.kt)("p",null,"If you are the moderator of a conference (everyone is a moderator if you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"meet.jit.si"),"), you can mute everyone's microphone. You cannot unmute other people's microphones, and they can unmute their microphone at any time."),(0,a.kt)("p",null,'You may want to set some "ground rules" for who can talk and when, just as with any physical meeting or classroom.'),(0,a.kt)("p",null,'If you would like to limit who can become a moderator, you need to set up your own instance of Jitsi and enable "secure domain". Please see ',(0,a.kt)("a",{parentName:"p",href:"#4-enable-secure-domain-if-you-are-using-your-own-instance-of-jitsi"},"here")," for more information."),(0,a.kt)("h2",{id:"how-can-i-protect-my-meetings-with-jitsi"},"How can I protect my meetings with Jitsi?"),(0,a.kt)("h3",{id:"1-create-a-strong-room-name"},(0,a.kt)("em",{parentName:"h3"},'1. Create a "strong" room name.')),(0,a.kt)("p",null,'Use a strong room name, which no-one else is likely to be using. Use the name generator on the welcome page, or else generate your own "strong" name.'),(0,a.kt)("p",null,"For example, on macOS, in terminal, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"uuidgen")," to generate a string of letters of numbers (e.g. B741B63E-C5E6-4D82-BAC4-048BE25D8CC7)."),(0,a.kt)("p",null,"Your room name would be ",(0,a.kt)("inlineCode",{parentName:"p"},"meet.jit.si/B741B63E-C5E6-4D82-BAC4-048BE25D8CC7")," on the hosted ",(0,a.kt)("inlineCode",{parentName:"p"},"meet.jit.si")," platform."),(0,a.kt)("p",null,'If you use "test" or "LucysMeeting" or "pilates" or similar, then it\'s highly likely that other users will have had the same idea.'),(0,a.kt)("h3",{id:"2-use-a-different-room-name-for-each-meeting--conference-you-have"},(0,a.kt)("em",{parentName:"h3"},"2. Use a different room name for each meeting / conference you have.")),(0,a.kt)("p",null,"If you are going to have multiple meetings, ideally use a different room name for each one."),(0,a.kt)("p",null,"If that is not practical, at least use a different room name for each group of people."),(0,a.kt)("h3",{id:"3-add-a-password-to-the-room"},(0,a.kt)("em",{parentName:"h3"},"3. Add a password to the room.")),(0,a.kt)("p",null,"Once you have started your room, set a password for it. Only people who have the password can join from that point on, but it does not affect people who have already joined."),(0,a.kt)("p",null,"You will need to tell everyone the password."),(0,a.kt)("p",null,"If they give the password to others, those other people can also join."),(0,a.kt)("h3",{id:"4-enable-secure-domain-if-you-are-using-your-own-instance-of-jitsi"},(0,a.kt)("em",{parentName:"h3"},'4. Enable "secure domain" if you are using your own instance of Jitsi.')),(0,a.kt)("p",null,"In addition to the tips above, consider enabling the ",(0,a.kt)("a",{parentName:"p",href:"https://jitsi.github.io/handbook/docs/devops-guide/secure-domain"},'"secure domain" configuration'),". This requires you (or someone else) to enter a username and password to open a room. It also allows you to become a moderator."),(0,a.kt)("h2",{id:"its-working-when-i-connect-from-a-browser-but-not-from-the-ios-or-android-apps"},"It's working when I connect from a browser, but not from the iOS or Android apps"),(0,a.kt)("p",null,"This probably means that you are not serving the fullchain for your TLS certificate. You can check if your cert chain\nis properly configured ",(0,a.kt)("a",{parentName:"p",href:"https://whatsmychaincert.com/"},"here"),"."),(0,a.kt)("p",null,"In nginx, if you are using Let's Encrypt, you should have a line like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ssl_certificate /etc/letsencrypt/live/jitsi.example.com/fullchain.pem;")),(0,a.kt)("h2",{id:"can-i-record-and-save-the-video"},"Can I record and save the video?"),(0,a.kt)("p",null,"Yes. There are multiple methods (using external software or services):"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),": If you want to use a privacy-friendly method, use method 1 or 2."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"OBS"),": Use ",(0,a.kt)("a",{parentName:"p",href:"https://obsproject.com/"},"OBS")," to record your Session (e.g. your browser window).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"RTMP-Server"),": For this you have to setup your own RTMP-Server and then use your RTMP URL + Stream key instead of the Youtube Stream key as described ",(0,a.kt)("a",{parentName:"p",href:"https://jitsi.org/blog/live-streaming-with-jitsi-and-youtube/"},"here"),". Self-installed Jitsi Meet deployments will need to setup Jibri to do this.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dropbox"),": ",(0,a.kt)("a",{parentName:"p",href:"/handbook/docs/dev-guide/dev-guide-web-integrations#creating-the-dropbox-app-for-dropbox-recording-integration"},"Connect to Dropbox with Jitsi Meet")," and save the video in the Dropbox. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Video Services/Websites"),": Stream your conference to YouTube or other sites (e.g. Twitch) and access the recording there (see ",(0,a.kt)("a",{parentName:"p",href:"https://jitsi.org/blog/live-streaming-with-jitsi-and-youtube/"},"howto"),"). Self-installed Jitsi Meet deployments will need to setup Jibri to do this. "))),(0,a.kt)("p",null,"More methods might be implemented in the future, but are not ready yet (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/issues/6014"},"Local Recording"),"."),(0,a.kt)("h2",{id:"i-set-the-password-in-meeting-but-it-is-not-working-the-next-time"},"I set the password in meeting but it is not working the next time"),(0,a.kt)("p",null,"Once the meeting ends it's password also gets removed, so you need to set the password again for next meeting."),(0,a.kt)("h2",{id:"how-to-limit-the-number-of-participants"},"How to limit the number of participants?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the command ",(0,a.kt)("inlineCode",{parentName:"li"},"prosodyctl about")," to view the version of prosody and plug directory, similar to the output below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Prosody 0.11.6\n\n# Prosody directories\n\nData directory: /var/lib/prosody\n\nConfig directory: /etc/prosody\n\nSource directory: /usr/lib/prosody\n\nPlugin directories:\n\n/usr/share/jitsi-meet/prosody-plugins/\n\n/usr/lib/prosody/modules/\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Check if there is a ",(0,a.kt)("inlineCode",{parentName:"li"},"mod_muc_max_occupants.lua")," file in your plugin directory.")),(0,a.kt)("p",null,"If not, please create a new file ",(0,a.kt)("inlineCode",{parentName:"p"},"mod_muc_max_occupants.lua")," in the plugin directory And copy everything from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/resources/prosody-plugins/mod_muc_max_occupants.lua"},"here")," to paste."),(0,a.kt)("p",null,"If it exists, please ignore this step."),(0,a.kt)("p",null,"3.Edit your ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/prosody/conf.avail/meet.example.com.cfg.lua")," file and add ",(0,a.kt)("inlineCode",{parentName:"p"},"muc_max_occupants"),' as a module_enabled in the conference.meet.example.com "muc" section.'),(0,a.kt)("p",null,"Then, add the options below that. You need both ",(0,a.kt)("inlineCode",{parentName:"p"},"muc_max_occupants")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"muc_access_whitelist")," defined."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Component "conference.meet.example.com" "muc"\n   storage = "memory"\n   modules_enabled = {\n       "muc_meeting_id";\n       "muc_domain_mapper";\n       "muc_max_occupants"; \n   }\n   muc_max_occupants = "5"\n   muc_access_whitelist = { "focus@auth.meet.example.com" }\n   admins = { "focus@auth.meet.example.com" }\n   muc_room_locking = false\n   muc_room_default_public_jids = true\n')),(0,a.kt)("p",null,'Note: the relationship between storage = "" and your prosody version, and you need to modify all storage="" .'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Prosody nightly747 storage = "null"'),(0,a.kt)("li",{parentName:"ul"},'Prosody 0.10 storage = "none"'),(0,a.kt)("li",{parentName:"ul"},'Prosody 0.11 storage = "memory"')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You need to use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"prosodyctl restart")," to see the effect.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you want to update to use prosody, you can check ",(0,a.kt)("a",{parentName:"p",href:"https://community.jitsi.org/t/how-to-how-do-i-update-prosody/72205"},"here"),"."))))}d.isMDXComponent=!0}}]);
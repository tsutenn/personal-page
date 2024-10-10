(function(){"use strict";var e={8458:function(e,t,n){var l=n(5130),a=n(6768),r=n(4232),i=n(6450),o=n(3367),u=n(6990),f=n(9728),c=n(1720),s=n(6756),d=n(5526),p=n(8477);function b(e,t,n,l,b,_){const k=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(i.E,null,{default:(0,a.k6)((()=>[(0,a.bF)(o.z,{app:""},{default:(0,a.k6)((()=>[(0,a.bF)(u.l,null,{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("TSUTENN")]))),_:1}),(0,a.bF)(c.h)])),_:1}),(0,a.bF)(p.Y,null,{default:(0,a.k6)((()=>[(0,a.bF)(k)])),_:1})])),_:1}),(0,a.bF)(f.O,{style:{"background-color":"#eee"}},{default:(0,a.k6)((()=>[(0,a.bF)(s.L,{justify:"center","no-gutters":""},{default:(0,a.k6)((()=>[(0,a.bF)(d.B,{class:"text-center mt-4",cols:"12"},{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)((new Date).getFullYear())+" — ",1),(0,a.Lk)("strong",null,(0,r.v_)(_.author),1)])),_:1})])),_:1})])),_:1})],64)}var _={name:"App",data(){return{profile:void 0}},computed:{author(){return this.profile&&this.profile.name?this.profile.name:"Kaiwen Li"}},async created(){try{const e=await fetch("/profile.json");this.profile=await e.json()}catch(e){console.error("Error fetching profile data:",e)}},mounted(){document.title="Tsutenn's Page"}},k=n(1241);const h=(0,k.A)(_,[["render",b]]);var m=h,v=(n(5524),n(1036)),g=n(8600),F=n(8221),y=(0,v.$N)({icons:{defaultSet:"fa",aliases:g.z,sets:{fa:g.fa,mdi:F.r}}});async function w(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var W=n(1387),x=n(3416),j=n(4765),E=n(1606),C=n(5832),L=n(697),X=n(7511),I=n(3813),P=n(3346),O=n(9669),S=n(307),T=n(6887),D=n(7254),M=n(7294),A=n(7505),U=n(9562);const H=["innerHTML"],B={key:0},K={key:0},Q={key:0},z=["href"],J=["href"],N={key:0,class:"d-flex transition-fast-in-fast-out v-card--reveal",style:{height:"60px","background-color":"#5c6bc0",color:"white"}},G={class:"mt-4"},R={key:1,class:"d-flex transition-fast-in-fast-out v-card--reveal",style:{height:"100%","background-color":"#5c6bc0",color:"white"}},V={class:"mt-4"},Y={class:"text-caption font-weight-medium"},Z={style:{height:"45px","justify-content":"center"}},$=["href"];function q(e,t,n,l,i,o){const u=(0,a.g2)("v-list-item-content");return(0,a.uX)(),(0,a.Wv)(I.I,{style:{"max-width":"1280px","min-width":"600px"}},{default:(0,a.k6)((()=>[(0,a.bF)(j.J,{class:"mb-4",outlined:"",style:{padding:"8px","background-color":"#5c6bc0",color:"white"}},{default:(0,a.k6)((()=>[(0,a.bF)(d.B,null,{default:(0,a.k6)((()=>[(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(x.y,{size:"100",style:{margin:"16px auto"}},{default:(0,a.k6)((()=>[(0,a.bF)(S.y,{src:o.avatar,alt:"Avatar"},null,8,["src"])])),_:1})])),_:1}),(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(E.r,{style:{"font-size":"32pt",margin:"8px auto 0 auto"}},{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(o.fullname),1)])),_:1})])),_:1}),(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(d.B,{style:{padding:"0"}},{default:(0,a.k6)((()=>[(0,a.bF)(C.Z,{style:{"text-align":"center"}},{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(o.position),1)])),_:1}),(0,a.bF)(C.Z,{style:{"text-align":"center"}},{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(o.organization),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.bF)(I.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.Lk)("h1",null,"ABOUT ME",-1)]))),_:1}),(0,a.bF)(s.L,{cols:"12"},{default:(0,a.k6)((()=>[(0,a.bF)(d.B,{cols:"8"},{default:(0,a.k6)((()=>[(0,a.bF)(s.L,{style:{"padding-top":"16px","padding-right":"8px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("p",{innerHTML:i.about},null,8,H)])),_:1}),(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>[o.education.length>0?((0,a.uX)(),(0,a.CE)("h2",B," Education ")):(0,a.Q3)("",!0),(0,a.bF)(T.x8,{width:"100%"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.education,((e,t)=>((0,a.uX)(),(0,a.Wv)(D.g,{key:t},{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.degree),1)])),_:2},1024),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.university),1)])),_:2},1024),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(o.formattedDate(e.start_date))+" - "+(0,r.v_)(o.formattedDate(e.end_date)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>[o.employment.length>0?((0,a.uX)(),(0,a.CE)("h2",K," Work Experience ")):(0,a.Q3)("",!0),(0,a.bF)(T.x8,{width:"100%"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.employment,((e,t)=>((0,a.uX)(),(0,a.Wv)(D.g,{key:t},{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.position),1)])),_:2},1024),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.company),1)])),_:2},1024),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(o.formattedDate(e.start_date))+" - "+(0,r.v_)(o.formattedDate(e.end_date)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>[o.academic.length>0?((0,a.uX)(),(0,a.CE)("h2",Q," Research and Teaching Experience ")):(0,a.Q3)("",!0),(0,a.bF)(T.x8,{width:"100%"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.academic,((e,t)=>((0,a.uX)(),(0,a.Wv)(D.g,{key:t},{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.position),1)])),_:2},1024),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.name)+" - "+(0,r.v_)(e.department),1)])),_:2},1024),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(o.formattedDate(e.start_date))+" - "+(0,r.v_)(o.formattedDate(e.end_date)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),(0,a.bF)(X.G,{vertical:""}),(0,a.bF)(d.B,{cols:"4",style:{"padding-left":"26px"}},{default:(0,a.k6)((()=>[o.email.length>0?((0,a.uX)(),(0,a.Wv)(s.L,{key:0},{default:(0,a.k6)((()=>[t[2]||(t[2]=(0,a.Lk)("h2",null,"Contact",-1)),(0,a.bF)(T.x8,{width:"100%"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.email,((e,n)=>((0,a.uX)(),(0,a.Wv)(D.g,{key:n},{default:(0,a.k6)((()=>[(0,a.Lk)("a",{href:"mailto:"+e,target:"_blank",style:{color:"inherit","text-decoration":"none"}},[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>[(0,a.bF)(O.w,null,{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("mdi:mdi-email")]))),_:1}),(0,a.eW)(" "+(0,r.v_)(e),1)])),_:2},1024)])),_:2},1024)],8,z)])),_:2},1024)))),128))])),_:1})])),_:1})):(0,a.Q3)("",!0),o.social_media.length>0?((0,a.uX)(),(0,a.Wv)(s.L,{key:1},{default:(0,a.k6)((()=>[t[3]||(t[3]=(0,a.Lk)("h2",null,"Follow Me",-1)),(0,a.bF)(T.x8,{width:"100%"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.social_media,((e,t)=>((0,a.uX)(),(0,a.Wv)(D.g,{key:t},{default:(0,a.k6)((()=>[(0,a.Lk)("a",{href:e.url,target:"_blank",style:{color:"inherit","text-decoration":"none"}},[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>[(0,a.bF)(O.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.icon),1)])),_:2},1024),(0,a.eW)(" "+(0,r.v_)(e.nickname),1)])),_:2},1024)])),_:2},1024)],8,J)])),_:2},1024)))),128))])),_:1})])),_:1})):(0,a.Q3)("",!0)])),_:1})])),_:1}),(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.Lk)("h1",null,"SELECTED PROJECTS",-1)]))),_:1}),(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(I.I,{class:"pa-4 text-center"},{default:(0,a.k6)((()=>[(0,a.bF)(s.L,{align:"center",class:"fill-height",justify:"center"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.projects,((e,t)=>((0,a.uX)(),(0,a.Wv)(d.B,{key:t,cols:"12",md:"6"},{default:(0,a.k6)((()=>[(0,a.bF)(P.d,null,{default:(0,a.k6)((({isHovering:t,props:n})=>[(0,a.bF)(j.J,(0,a.v6)({class:{"on-hover":t},elevation:t?12:2,ref_for:!0},n),{default:(0,a.k6)((()=>[(0,a.bF)(S.y,{src:e.images[0],height:"225px",cover:""},{default:(0,a.k6)((()=>[(0,a.bF)(U.Qo,null,{default:(0,a.k6)((()=>[t?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",N,[(0,a.bF)(d.B,null,{default:(0,a.k6)((()=>[(0,a.bF)(E.r,{class:"text-h6 d-flex flex-column",style:{"justify-content":"center"}},{default:(0,a.k6)((()=>[(0,a.Lk)("p",G,(0,r.v_)(e.title),1)])),_:2},1024)])),_:2},1024)])),t?((0,a.uX)(),(0,a.CE)("div",R,[(0,a.bF)(d.B,null,{default:(0,a.k6)((()=>[(0,a.bF)(E.r,{class:"text-h6 d-flex flex-column",style:{height:"100px","justify-content":"center"}},{default:(0,a.k6)((()=>[(0,a.Lk)("p",V,(0,r.v_)(e.title),1)])),_:2},1024),(0,a.bF)(L.O,{style:{height:"80px","justify-content":"center"}},{default:(0,a.k6)((()=>[(0,a.Lk)("p",Y,(0,r.v_)(e.subtitle),1)])),_:2},1024),(0,a.Lk)("div",Z,[(0,a.bF)(s.L,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.link,((e,t)=>((0,a.uX)(),(0,a.Wv)(d.B,{key:t},{default:(0,a.k6)((()=>[(0,a.Lk)("a",{href:e.url,style:{color:"white"},target:"_blank"},[(0,a.bF)(O.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.icon),1)])),_:2},1024),(0,a.eW)(" "+(0,r.v_)(e.name),1)],8,$)])),_:2},1024)))),128))])),_:2},1024)])])),_:2},1024)])):(0,a.Q3)("",!0)])),_:2},1024)])),_:2},1032,["src"])])),_:2},1040,["class","elevation"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),i.publications.length>0?((0,a.uX)(),(0,a.Wv)(s.L,{key:0},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.Lk)("h1",null,"PUBLICATIONS",-1)]))),_:1})):(0,a.Q3)("",!0),i.publications.length>0?((0,a.uX)(),(0,a.Wv)(s.L,{key:1},{default:(0,a.k6)((()=>[(0,a.bF)(T.x8,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.limitedPublications,((e,t)=>((0,a.uX)(),(0,a.Wv)(D.g,{key:t},{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.title),1)])),_:2},1024),(0,a.bF)(A.w,{innerHTML:o.formatAuthors(e.authors,e.your_position)},null,8,["innerHTML"]),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.journal)+(0,r.v_)(e.pages?", "+e.pages:"")+(0,r.v_)(e.year?". ("+e.year+")":"."),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):(0,a.Q3)("",!0)])),_:1})])),_:1})}var ee=n(357),te={name:"HomePage",data(){return{profile:void 0,publications:[],projects:[],about:""}},computed:{avatar(){return this.profile&&this.profile.avatar?this.profile.avatar:"/favicon.ico"},fullname(){return this.profile&&this.profile.name?this.profile.name:"YOUR NAME"},position(){return this.profile&&this.profile.position?this.profile.position:""},organization(){return this.profile&&this.profile.organization?this.profile.organization:""},education(){return this.profile&&this.profile.education?this.profile.education:[]},employment(){return this.profile&&this.profile.employment?this.profile.employment:[]},academic(){return this.profile&&this.profile.academic?this.profile.academic:[]},social_media(){return this.profile&&this.profile.social_media?this.profile.social_media:[]},email(){return this.profile&&this.profile.email?this.profile.email:[]},limitedPublications(){return this.publications.slice(0,3)},limitedProjects(){return this.projects.slice(0,3)}},methods:{formattedDate(e){try{const t=new Date(e);return new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"}).format(t)}catch(t){return"Present"}},formatAuthors(e,t){const n=[...e];return n[t-1]=`<strong>${n[t-1]}</strong>`,(0,ee.xI)(n.join(", "))}},async created(){try{const e=await fetch("/profile.json");this.profile=await e.json()}catch(e){console.error("Error fetching profile data:",e)}try{const e=await fetch("/projects.json");this.projects=await e.json()}catch(e){console.error("Error fetching projects data:",e)}try{const e=await fetch("/publications.json");this.publications=await e.json()}catch(e){console.error("Error fetching publications data:",e)}if(this.profile&&this.profile.about)try{const e=await fetch(this.profile.about),t=await e.text();this.about=(0,ee.xI)(t)}catch(e){console.error("Error fetching file:",e)}}};const ne=(0,k.A)(te,[["render",q],["__scopeId","data-v-bfbfb03e"]]);var le=ne;function ae(e,t,n,l,r,i){const o=(0,a.g2)("v-list-item-content");return(0,a.uX)(),(0,a.Wv)(I.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(j.J,{outlined:""},{default:(0,a.k6)((()=>[(0,a.bF)(E.r,null,{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Experience")]))),_:1}),(0,a.bF)(T.x8,null,{default:(0,a.k6)((()=>[(0,a.bF)(D.g,null,{default:(0,a.k6)((()=>[(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("M.Sc. in Human-Computer Interaction")]))),_:1}),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("Xi’an Jiaotong-Liverpool University, Sep. 2022 — Apr. 2024")]))),_:1})])),_:1})])),_:1}),(0,a.bF)(D.g,null,{default:(0,a.k6)((()=>[(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("Front-End Engineer (Internship)")]))),_:1}),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)("China Communications Services Corp. Ltd., Jun. 2024 — Sep. 2024")]))),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var re={name:"ExperiencePage",data(){return{projects:[{title:"MapCraft: Geographic Information Graphics Web Editor",date:"Mar. 2024 - May 2024"},{title:"Grasp Selection for Point Cloud in Immersive Environment",date:"Sep. 2023 - Dec. 2023"},{title:"Data Cubes in Hand: Multiple Cube Tracking and Data Transmission",date:"May 2023 - Sep. 2023"}]}}};const ie=(0,k.A)(re,[["render",ae]]);var oe=ie;function ue(e,t,n,l,i,o){const u=(0,a.g2)("v-list-item-content");return(0,a.uX)(),(0,a.Wv)(I.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(j.J,{outlined:""},{default:(0,a.k6)((()=>[(0,a.bF)(E.r,null,{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Publications")]))),_:1}),(0,a.bF)(T.x8,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.publications,((e,t)=>((0,a.uX)(),(0,a.Wv)(D.g,{key:t},{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.title),1)])),_:2},1024),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.journal),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}var fe={name:"PublicationsPage",data(){return{publications:[{title:"MapCraft: Dissecting and Designing Custom Geo-Infographics",journal:"Journal of Visualization (SCI Q3)"},{title:"3DStoryline: Immersive Visual Storytelling",journal:"Journal of Visualization (SCI Q3)"},{title:"Data Cubes in Hand: A Design Space of Tangible Cubes for Visualizing 3D Spatio-Temporal Data",journal:"CHI Conference on Human Factors in Computing Systems"}]}}};const ce=(0,k.A)(fe,[["render",ue]]);var se=ce;function de(e,t,n,l,i,o){const u=(0,a.g2)("v-list-item-content");return(0,a.uX)(),(0,a.Wv)(I.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(j.J,{outlined:""},{default:(0,a.k6)((()=>[(0,a.bF)(E.r,null,{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Projects")]))),_:1}),(0,a.bF)(T.x8,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.projects,((e,t)=>((0,a.uX)(),(0,a.Wv)(D.g,{key:t},{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(M.U,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.title),1)])),_:2},1024),(0,a.bF)(A.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.date),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}var pe={name:"ProjectsPage",data(){return{projects:[{title:"MapCraft: Geographic Information Graphics Web Editor",date:"Mar. 2024 - May 2024"},{title:"Grasp Selection for Point Cloud in Immersive Environment",date:"Sep. 2023 - Dec. 2023"},{title:"Data Cubes in Hand: Multiple Cube Tracking and Data Transmission",date:"May 2023 - Sep. 2023"}]}}};const be=(0,k.A)(pe,[["render",de]]);var _e=be;const ke=[{path:"/",name:"Home",component:le,meta:{title:"Tsutenn's Page"}},{path:"/experience",name:"Experience",component:oe},{path:"/publications",name:"Publications",component:se},{path:"/projects",name:"Projects",component:_e}],he=(0,W.aE)({history:(0,W.LA)(),routes:ke});var me=he;w(),(0,l.Ef)(m).use(y).use(me).mount("#app")}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var r=t[l]={exports:{}};return e[l].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,l,a,r){if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],a=e[c][1],r=e[c][2];for(var o=!0,u=0;u<l.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](l[u])}))?l.splice(u--,1):(o=!1,r<i&&(i=r));if(o){e.splice(c--,1);var f=a();void 0!==f&&(t=f)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[l,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"===typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"===typeof l.then)return l}var r=Object.create(null);n.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var o=2&a&&l;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((function(e){i[e]=function(){return l[e]}}));return i["default"]=function(){return l},n.d(r,i),r}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,l){return n.f[l](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.ace1d635.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="personal-page:";n.l=function(l,a,r,i){if(e[l])e[l].push(a);else{var o,u;if(void 0!==r)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var s=f[c];if(s.getAttribute("src")==l||s.getAttribute("data-webpack")==t+r){o=s;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+r),o.src=l),e[l]=[a];var d=function(t,n){o.onerror=o.onload=null,clearTimeout(p);var a=e[l];if(delete e[l],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={524:0};n.f.j=function(t,l){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)l.push(a[2]);else{var r=new Promise((function(n,l){a=e[t]=[n,l]}));l.push(a[2]=r);var i=n.p+n.u(t),o=new Error,u=function(l){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=l&&("load"===l.type?"missing":l.type),i=l&&l.target&&l.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,a[1](o)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,r,i=l[0],o=l[1],u=l[2],f=0;if(i.some((function(t){return 0!==e[t]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(u)var c=u(n)}for(t&&t(l);f<i.length;f++)r=i[f],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},l=self["webpackChunkpersonal_page"]=self["webpackChunkpersonal_page"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(8458)}));l=n.O(l)})();
//# sourceMappingURL=app.e8cb8903.js.map
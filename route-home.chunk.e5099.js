"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[311],{209:(e,t,a)=>{a.d(t,{Z:()=>n});const n="https://pastebin.run/"},899:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(998),i=a(74);const o="submit__Qtnvd",s="full__SGYzF";var r=a(209),l=a(797);class u extends n.Component{constructor(...e){var t;super(...e),t=this,this.state={code:"",expiration:"PT1H",languages:[],language:"plaintext"},this.onLanguageChange=e=>this.setState({language:e.target.value}),this.onExpirationChange=e=>this.setState({expiration:e.target.value}),this.onTextareaChange=e=>this.setState({code:e.target.value}),this.onSubmit=async function(e){e.preventDefault();const{code:a,expiration:n,language:o}=t.state,s=await fetch(`${r.Z}api/v1/pastes`,{body:new URLSearchParams({code:a,expiration:n,language:o}),method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}});(0,i.BC)(`/${await s.text()}`)}}async componentWillMount(){this.setState({languages:await(await fetch(`${r.Z}api/v1/languages`)).json()})}render(e,{expiration:t,code:a,languages:n,language:i}){return(0,l.BX)("form",{onSubmit:this.onSubmit,children:[(0,l.BX)("label",{children:["Language: ",(0,l.tZ)("select",{value:i,onInput:this.onLanguageChange,children:n.map((({identifier:e,name:t})=>(0,l.tZ)("option",{value:e,children:t})))})]})," ",(0,l.BX)("label",{children:["Expires: ",(0,l.BX)("select",{value:t,onInput:this.onExpirationChange,children:[(0,l.tZ)("option",{value:"PT1H",children:"1 hour"}),(0,l.tZ)("option",{value:"P1D",children:"1 day"}),(0,l.tZ)("option",{value:"P7D",children:"1 week"}),(0,l.tZ)("option",{children:"Never"})]})]}),(0,l.tZ)("button",{class:o,type:"submit",children:"Share"}),(0,l.tZ)("textarea",{class:s,required:!0,onInput:this.onTextareaChange,children:a})]})}}const h=u}}]);
//# sourceMappingURL=route-home.chunk.e5099.js.map
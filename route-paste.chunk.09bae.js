"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39],{209:(t,n,e)=>{e.d(n,{Z:()=>i});const i="https://pastebin.run/"},978:(t,n,e)=>{e.r(n),e.d(n,{default:()=>l});var i=e(998);const r="pre__vhzJX";var o=e(209),s=e(797);class l extends i.Component{constructor(...t){super(...t),this.controller=new AbortController,this.state={code:null},this.copyLink=t=>{t.preventDefault(),navigator.clipboard.writeText(this.getLink())}}getLink(){const{id:t}=this.props;return`https://pastebin.run/${t}`}async componentWillMount(){const{id:t}=this.props,{signal:n}=this.controller;this.setState({code:await(await fetch(`${o.Z}${t}.txt`,{signal:n})).text()})}componentWillUnmount(){this.controller.abort()}render(t,{code:n}){return(0,s.BX)("div",{children:[(0,s.BX)("div",{children:["Share link: ",(0,s.tZ)("input",{readonly:!0,value:this.getLink()})," ",(0,s.tZ)("button",{onClick:this.copyLink,children:"Copy link"})]}),null===n?"Loading…":(0,s.tZ)("pre",{class:r,children:(0,s.tZ)("code",{children:n})})]})}}}}]);
//# sourceMappingURL=route-paste.chunk.09bae.js.map
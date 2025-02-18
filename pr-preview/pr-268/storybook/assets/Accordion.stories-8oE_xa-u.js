import{j as o}from"./jsx-runtime-CBDCb4rg.js";import{c as w}from"./clsx-B-dksMZM.js";import{a as Q}from"./Button-BeKNHBLF.js";import{j as S,e as le,l as de,c as _,o as q,$ as ce,b as U,B as X,J as ue,d as pe,I as me}from"./useFocusable-BFvoMS9y.js";import{r as fe}from"./index-D2jEcJry.js";import{r as n,R as f}from"./index-B-o1Wr-g.js";import{$ as ge}from"./useEvent-D6jxNLXQ.js";import{$ as Y}from"./useControlledState-BgxdDqm0.js";import{$ as xe}from"./Heading-BLef6T-v.js";import{B as D}from"./Button-dZcdrYJ-.js";import{C as P}from"./chevron-down-DOK0m5UE.js";import{c as be}from"./createLucideIcon-DjmUzaoT.js";import"./Hidden-DWlCxbq5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./RSPContexts-BT50PPhj.js";function he(a,e,i){let{isDisabled:t}=a,s=S(),r=S(),u=!le()&&"onbeforematch"in document.body,d=n.useRef(null),g=n.useCallback(()=>{d.current=requestAnimationFrame(()=>{i.current&&i.current.setAttribute("hidden","until-found")}),fe.flushSync(()=>{e.toggle()})},[i,e]);return ge(i,"beforematch",u?g:null),de(()=>{d.current&&cancelAnimationFrame(d.current),u&&i.current&&!t&&(e.isExpanded?i.current.removeAttribute("hidden"):i.current.setAttribute("hidden","until-found"))},[t,i,e.isExpanded,u]),n.useEffect(()=>()=>{d.current&&cancelAnimationFrame(d.current)},[]),{buttonProps:{id:s,"aria-expanded":e.isExpanded,"aria-controls":r,onPress:p=>{!t&&p.pointerType!=="keyboard"&&e.toggle()},isDisabled:t,onPressStart(p){p.pointerType==="keyboard"&&!t&&e.toggle()}},panelProps:{id:r,role:"group","aria-labelledby":s,"aria-hidden":!e.isExpanded,hidden:u?!0:!e.isExpanded}}}function $e(a){let[e,i]=Y(a.isExpanded,a.defaultExpanded||!1,a.onExpandedChange);const t=n.useCallback(()=>{i(!0)},[i]),s=n.useCallback(()=>{i(!1)},[i]),r=n.useCallback(()=>{i(!e)},[i,e]);return{isExpanded:e,setExpanded:i,expand:t,collapse:s,toggle:r}}function ve(a){let{allowsMultipleExpanded:e=!1,isDisabled:i=!1}=a,[t,s]=Y(n.useMemo(()=>a.expandedKeys?new Set(a.expandedKeys):void 0,[a.expandedKeys]),n.useMemo(()=>a.defaultExpandedKeys?new Set(a.defaultExpandedKeys):new Set,[a.defaultExpandedKeys]),a.onExpandedChange);return n.useEffect(()=>{!e&&t.size>1&&s(new Set([t.values().next().value]))}),{allowsMultipleExpanded:e,isDisabled:i,expandedKeys:t,setExpandedKeys:s,toggleKey(r){let l;e?(l=new Set(t),l.has(r)?l.delete(r):l.add(r)):l=new Set(t.has(r)?[]:[r]),s(l)}}}const ee=n.createContext(null),Ee=n.forwardRef(function(e,i){let t=ve(e),s=_({...e,defaultClassName:"react-aria-DisclosureGroup",values:{isDisabled:t.isDisabled,state:t}}),r=q(e);return f.createElement("div",{...r,...s,ref:i,"data-disabled":e.isDisabled||void 0},f.createElement(ee.Provider,{value:t},s.children))}),ye=n.createContext(null),we=n.createContext(null),ae=n.createContext(null),Se=n.forwardRef(function(e,i){[e,i]=ce(e,i,ye);let t=n.useContext(ee),{id:s,...r}=e,l=S();s||(s=l);let u=t?t.expandedKeys.has(s):e.isExpanded,d=$e({...e,isExpanded:u,onExpandedChange(oe){var y;t&&t.toggleKey(s),(y=e.onExpandedChange)===null||y===void 0||y.call(e,oe)}}),g=f.useRef(null),p=e.isDisabled||(t==null?void 0:t.isDisabled)||!1,{buttonProps:ie,panelProps:ne}=he({...e,isExpanded:u,isDisabled:p},d,g),{isFocusVisible:R,focusProps:se}=U({within:!0}),C=_({...e,id:void 0,defaultClassName:"react-aria-Disclosure",values:{isExpanded:d.isExpanded,isDisabled:p,isFocusVisibleWithin:R,state:d}}),re=q(r);return f.createElement(X,{values:[[Q,{slots:{[ue]:{},trigger:ie}}],[ae,{panelProps:ne,panelRef:g}],[we,d]]},f.createElement("div",{ref:i,"data-expanded":d.isExpanded||void 0,"data-disabled":p||void 0,"data-focus-visible-within":R||void 0,...re,...se,...C},C.children))}),_e=n.forwardRef(function(e,i){let{role:t="group"}=e,{panelProps:s,panelRef:r}=n.useContext(ae),{isFocusVisible:l,focusProps:u}=U({within:!0}),d=_({...e,defaultClassName:"react-aria-DisclosurePanel",values:{isFocusVisibleWithin:l}}),g=q(e);return f.createElement("div",{...g,ref:me(i,r),...pe(s,u),...d,role:t,"data-focus-visible-within":l||void 0},f.createElement(X,{values:[[Q,null]]},e.children))}),qe="_root_106wg_4",Ie="_contained_106wg_12",Re="_triggerText_106wg_27",Ce="_trigger_106wg_27",De="_icon_106wg_52",Pe="_item_106wg_80",Le="_panel_106wg_86",je="_panel0_106wg_86",Te="_content_106wg_96",c={root:qe,contained:Ie,triggerText:Re,trigger:Ce,icon:De,item:Pe,panel:Le,panel0:je,content:Te},te=({variant:a="uncontained",type:e="single",children:i,...t})=>o.jsx(Ee,{allowsMultipleExpanded:e==="multiple",className:w(c.root,a==="contained"?c.contained:c.uncontained),...t,children:i});te.__docgenInfo={description:"Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.",methods:[],displayName:"Accordion",props:{variant:{required:!1,tsType:{name:"union",raw:"'uncontained' | 'contained'",elements:[{name:"literal",value:"'uncontained'"},{name:"literal",value:"'contained'"}]},description:"Display either the larger contained variant or a smaller uncontained variant",defaultValue:{value:"'uncontained'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:"Weither to allow the user to have multiple accordions open at the same time",defaultValue:{value:"'single'",computed:!1}}},composes:["DisclosureGroupProps"]};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=be("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]),E=({title:a,children:e,className:i,headingLevel:t=3,...s})=>{const r=n.useRef(null),[l,u]=n.useState(0),d=typeof a=="object";return n.useLayoutEffect(()=>{r.current&&u(r.current.clientHeight)},[]),o.jsxs(Se,{...s,className:w(c.item,i),children:[d?o.jsx("div",{className:c.trigger,children:o.jsxs(D,{slot:"trigger",variant:"icon",children:[o.jsx(P,{size:20,className:c.icon}),a]})}):o.jsx(xe,{level:t,className:c.trigger,children:o.jsxs(D,{slot:"trigger",variant:"icon",children:[o.jsx(P,{size:20,className:c.icon}),o.jsx("span",{className:c.triggerText,children:a})]})}),o.jsx(_e,{style:{"--panel-height":`${l}px`},className:w(c.panel,l===0&&c.panel0),children:o.jsx("div",{ref:r,className:c.content,children:e})})]})};E.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{title:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"The text displayed in the collapsed state. If a ReactNode is proveded we're not adding a heading and you have to provide one yourself."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingProps['level']",raw:"HeadingProps['level']"},description:"Adjust the titles heading level to your heading tag structure",defaultValue:{value:"3",computed:!1}}},composes:["Omit"]};const I=["Ett","Två","Tre","Fyra"],Ue={component:te,title:"Components/Accordion",tags:["autodocs"],args:{}},x={args:{children:I.map(a=>o.jsxs(E,{id:a,title:"En öppningsbar panel "+a.toLocaleLowerCase(),children:["Innehåll i öppningsbarpanel ",a,". Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!"]},a))}},m={args:{variant:"contained",children:I.map(a=>o.jsxs(E,{id:a,title:"En öppningsbar panel "+a.toLocaleLowerCase(),children:["Innehåll i öppningsbarpanel ",a," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},a))}},b={args:{...x.args,type:"multiple"}},h={args:{...m.args,type:"multiple"}},$={args:{...m.args,defaultExpandedKeys:["Två"]}},v={args:{...m.args,children:I.map((a,e)=>o.jsxs(E,{id:a,title:o.jsxs(o.Fragment,{children:[o.jsx(Ne,{}),o.jsxs("b",{children:["En öppningsbar panel ' + ",a.toLocaleLowerCase()]}),o.jsxs("p",{style:{margin:0},children:["2025-03-0",e]})]}),children:["Innehåll i öppningsbarpanel ",a," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},a))}};var L,j,T;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: ITEMS.map(item => <AccordionItem id={item} key={item} title={'En öppningsbar panel ' + item.toLocaleLowerCase()}>
        Innehåll i öppningsbarpanel {item}. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis
        quasi consequuntur doloremque harum commodi odit velit pariatur
        voluptate aliquid, inventore praesentium tempore dignissimos officia
        sint libero!
      </AccordionItem>)
  }
}`,...(T=(j=x.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var N,A,M;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: ITEMS.map(item => <AccordionItem id={item} key={item} title={'En öppningsbar panel ' + item.toLocaleLowerCase()}>
        Innehåll i öppningsbarpanel {item} Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus perspiciatis officia,
        voluptate ratione quam nemo quod aut maiores animi nostrum, in labore
        adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Impedit dolorem tempora
        laboriosam asperiores eum dignissimos accusantium voluptate eligendi
        beatae vel quis rerum error dolore cum incidunt pariatur accusamus,
        illum consequuntur?
      </AccordionItem>)
  }
}`,...(M=(A=m.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var K,B,F;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...SingleSubtle.args,
    type: 'multiple'
  }
}`,...(F=(B=b.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var V,k,W;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...SingleBoxed.args,
    type: 'multiple'
  }
}`,...(W=(k=h.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var H,O,z;$.parameters={...$.parameters,docs:{...(H=$.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...SingleBoxed.args,
    defaultExpandedKeys: ['Två']
  }
}`,...(z=(O=$.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var G,J,Z;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...SingleBoxed.args,
    children: ITEMS.map((item, i) => <AccordionItem id={item} key={item} title={<>
            <File />
            <b>En öppningsbar panel ' + {item.toLocaleLowerCase()}</b>
            <p style={{
        margin: 0
      }}>2025-03-0{i}</p>
          </>}>
        Innehåll i öppningsbarpanel {item} Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus perspiciatis officia,
        voluptate ratione quam nemo quod aut maiores animi nostrum, in labore
        adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Impedit dolorem tempora
        laboriosam asperiores eum dignissimos accusantium voluptate eligendi
        beatae vel quis rerum error dolore cum incidunt pariatur accusamus,
        illum consequuntur?
      </AccordionItem>)
  }
}`,...(Z=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};const Xe=["SingleSubtle","SingleBoxed","MultipleSubtle","MultipleBoxed","DefaultOpen","CustomTriggerElements"];export{v as CustomTriggerElements,$ as DefaultOpen,h as MultipleBoxed,b as MultipleSubtle,m as SingleBoxed,x as SingleSubtle,Xe as __namedExportsOrder,Ue as default};

import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{e as ne,u as P}from"./index-DtSMq7G1.js";import{c as ie}from"./clsx-B-dksMZM.js";import{a as se}from"./Button-Co7pWk88.js";import{c as C,d as be,f as xe,b as q,a as ve,l as re,o as ye,n as Ee,$ as Ie}from"./utils-Dv9Ux5aE.js";import{$ as A}from"./filterDOMProps-BSfnXAP7.js";import{r as o,R as m}from"./index-BbAIUH2N.js";import{$ as oe}from"./useControlledState-DGyHFLi9.js";import{r as we}from"./index-cpIEhwLo.js";import{$ as $e}from"./useEvent-DnmuJhSu.js";import{$ as le}from"./useFocusRing-CPQALXIu.js";import{B as Se}from"./Button-3NpdgcIL.js";import{C as _e}from"./chevron-down-U1dNK9nR.js";import{H as Ce}from"./Heading-JSV6GWEx.js";import{C as qe}from"./check-B_S0S3VY.js";import{C as Ae}from"./circle-alert-CfGi5BVv.js";import{c as ke}from"./createLucideIcon-8wDOqnHv.js";import"./ProgressBar-6st-rJzm.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./useLabel-BAqrTMfP.js";import"./context-eceod8wW.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";import"./useFocusable-Cs9agisI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-L79sjQsB.js";import"./RSPContexts-CeCCo7XS.js";function De(e,t,a){let{isDisabled:n}=e,i=C(),r=C(),u=!be()&&"onbeforematch"in document.body,l=o.useRef(null),p=o.useCallback(()=>{l.current=requestAnimationFrame(()=>{a.current&&a.current.setAttribute("hidden","until-found")}),we.flushSync(()=>{t.toggle()})},[a,t]);return $e(a,"beforematch",u?p:null),xe(()=>{l.current&&cancelAnimationFrame(l.current),u&&a.current&&!n&&(t.isExpanded?a.current.removeAttribute("hidden"):a.current.setAttribute("hidden","until-found"))},[n,a,t.isExpanded,u]),o.useEffect(()=>()=>{l.current&&cancelAnimationFrame(l.current)},[]),{buttonProps:{id:i,"aria-expanded":t.isExpanded,"aria-controls":r,onPress:g=>{!n&&g.pointerType!=="keyboard"&&t.toggle()},isDisabled:n,onPressStart(g){g.pointerType==="keyboard"&&!n&&t.toggle()}},panelProps:{id:r,role:"group","aria-labelledby":i,"aria-hidden":!t.isExpanded,hidden:u?!0:!t.isExpanded}}}function Pe(e){let[t,a]=oe(e.isExpanded,e.defaultExpanded||!1,e.onExpandedChange);const n=o.useCallback(()=>{a(!0)},[a]),i=o.useCallback(()=>{a(!1)},[a]),r=o.useCallback(()=>{a(!t)},[a,t]);return{isExpanded:t,setExpanded:a,expand:n,collapse:i,toggle:r}}function Ne(e){let{allowsMultipleExpanded:t=!1,isDisabled:a=!1}=e,[n,i]=oe(o.useMemo(()=>e.expandedKeys?new Set(e.expandedKeys):void 0,[e.expandedKeys]),o.useMemo(()=>e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,[e.defaultExpandedKeys]),e.onExpandedChange);return o.useEffect(()=>{!t&&n.size>1&&i(new Set([n.values().next().value]))}),{allowsMultipleExpanded:t,isDisabled:a,expandedKeys:n,setExpandedKeys:i,toggleKey(r){let c;t?(c=new Set(n),c.has(r)?c.delete(r):c.add(r)):c=new Set(n.has(r)?[]:[r]),i(c)}}}const de=o.createContext(null),Te=o.forwardRef(function(t,a){let n=Ne(t),i=q({...t,defaultClassName:"react-aria-DisclosureGroup",values:{isDisabled:n.isDisabled,state:n}}),r=A(t);return m.createElement("div",{...r,...i,ref:a,"data-disabled":t.isDisabled||void 0},m.createElement(de.Provider,{value:n},i.children))}),Le=o.createContext(null),Me=o.createContext(null),ce=o.createContext(null),Re=o.forwardRef(function(t,a){[t,a]=ve(t,a,Le);let n=o.useContext(de),{id:i,...r}=t,c=C();i||(i=c);let u=n?n.expandedKeys.has(i):t.isExpanded,l=Pe({...t,isExpanded:u,onExpandedChange(he){var _;n&&n.toggleKey(i),(_=t.onExpandedChange)===null||_===void 0||_.call(t,he)}}),p=m.useRef(null),g=t.isDisabled||(n==null?void 0:n.isDisabled)||!1,{buttonProps:pe,panelProps:me}=De({...t,isExpanded:u,isDisabled:g},l,p),{isFocusVisible:k,focusProps:fe}=le({within:!0}),D=q({...t,id:void 0,defaultClassName:"react-aria-Disclosure",values:{isExpanded:l.isExpanded,isDisabled:g,isFocusVisibleWithin:k,state:l}}),ge=A(r);return m.createElement(re,{values:[[se,{slots:{[ye]:{},trigger:pe}}],[ce,{panelProps:me,panelRef:p}],[Me,l]]},m.createElement("div",{ref:a,"data-expanded":l.isExpanded||void 0,"data-disabled":g||void 0,"data-focus-visible-within":k||void 0,...ge,...fe,...D},D.children))}),Ve=o.forwardRef(function(t,a){let{role:n="group"}=t,{panelProps:i,panelRef:r}=o.useContext(ce),{isFocusVisible:c,focusProps:u}=le({within:!0}),l=q({...t,defaultClassName:"react-aria-DisclosurePanel",values:{isFocusVisibleWithin:c}}),p=A(t);return m.createElement("div",{...p,ref:Ee(a,r),...Ie(i,u),...l,role:n,"data-focus-visible-within":c||void 0},m.createElement(re,{values:[[se,null]]},t.children))}),je='"../theme/tokens.css"',Be="_root_1v9cm_4",Ke="_contained_1v9cm_13",We="_item_1v9cm_22",Fe="_success_1v9cm_23",He="_warning_1v9cm_30",ze="_triggerButton_1v9cm_46",Oe="_trigger_1v9cm_46",Ge="_triggerMainContent_1v9cm_71",Ue="_triggerText_1v9cm_75",Ze="_chevronIcon_1v9cm_88",Je="_statusIcon_1v9cm_94",Qe="_panel_1v9cm_112",Xe="_content_1v9cm_124",Ye="_header_1v9cm_129",d={tokens:je,"--font-family":'"Inter", sans-serif',"--layer-01":"light-dark(#f2f2f2, #262626)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--normal-transition":"300ms","--text-primary":"light-dark(#171717, #f2f2f2)","--fast-transition":"250ms","--border-secondary":"light-dark(#737373, #8c8c8c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-success":"light-dark(#008d3c, #008d3c)","--icon-warning":"light-dark(#e62323, #e62323)","--support-background-success-hover":"light-dark(#bae5c5, light-dark(#e6e6e6, #333333))","--support-background-warning-hover":"light-dark(#fcc8c8, light-dark(#e6e6e6, #333333))","--border-disabled":"light-dark(#bfbfbf, #525252)","--text-disabled":"light-dark(#bfbfbf, #525252)",root:Be,contained:Ke,item:We,success:Fe,warning:He,triggerButton:ze,trigger:Oe,triggerMainContent:Ge,triggerText:Ue,chevronIcon:Ze,statusIcon:Je,panel:Qe,content:Xe,header:Ye},ue="accordion",$=({variant:e="uncontained",type:t="single",children:a,className:n,...i})=>s.jsx(Te,{"data-testid":ue,allowsMultipleExpanded:i.allowsMultipleExpanded||t==="multiple",className:ie(d.root,e==="contained"?d.contained:d.uncontained,n),...i,children:a});try{$.displayName="Accordion",$.__docgenInfo={description:"Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.",displayName:"Accordion",props:{variant:{defaultValue:{value:"uncontained"},description:"Display either the larger contained variant or a smaller uncontained variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"uncontained"'},{value:'"contained"'}]}},type:{defaultValue:{value:"single"},description:"@deprecated Use 'allowsMultipleExpanded' instead",name:"type",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},allowsMultipleExpanded:{defaultValue:null,description:"Whether multiple items can be expanded at the same time.",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Whether all items are disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},expandedKeys:{defaultValue:null,description:"The currently expanded keys in the group (controlled).",name:"expandedKeys",required:!1,type:{name:"Iterable<Key>"}},defaultExpandedKeys:{defaultValue:null,description:"The initial expanded keys in the group (uncontrolled).",name:"defaultExpandedKeys",required:!1,type:{name:"Iterable<Key>"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when items are expanded or collapsed.",name:"onExpandedChange",required:!1,type:{name:"(keys: Set<Key>) => any"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DisclosureGroupRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DisclosureGroupRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DisclosureGroupRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=ke("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]),f=({title:e,children:t,className:a,headingLevel:n="h2",type:i,...r})=>{const c=typeof e=="object",l={success:qe,warning:Ae,default:null}[i||"default"],p=l?s.jsx(l,{size:20,className:d.statusIcon}):null;return s.jsxs(Re,{...r,className:ie(d.item,i==="success"&&d.success,i==="warning"&&d.warning,a),children:[s.jsx("div",{className:d.trigger,children:s.jsxs(Se,{className:d.triggerButton,slot:"trigger",variant:"icon",children:[s.jsx(_e,{size:20,className:d.chevronIcon}),s.jsx("div",{className:d.triggerMainContent,children:c?e:s.jsx(Ce,{level:3,elementType:n,className:d.triggerText,children:e})}),p]})}),s.jsx(Ve,{className:d.panel,children:s.jsx("div",{className:d.content,children:t})})]})};try{f.displayName="AccordionItem",f.__docgenInfo={description:"",displayName:"AccordionItem",props:{title:{defaultValue:null,description:"The text displayed in the collapsed state. If a ReactNode is proveded we're not adding a heading and you have to provide one yourself.",name:"title",required:!1,type:{name:"ReactNode"}},headingLevel:{defaultValue:{value:"h2"},description:"Adjust the titles heading level to your heading tag structure",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},type:{defaultValue:null,description:"Display an accordion item in different status states",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"default"'}]}},isDisabled:{defaultValue:null,description:"Whether the disclosure is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when the disclosure's expanded state changes.",name:"onExpandedChange",required:!1,type:{name:"(isExpanded: boolean) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DisclosureRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DisclosureRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},id:{defaultValue:null,description:"An id for the disclosure when used within a DisclosureGroup, matching the id used in `expandedKeys`.",name:"id",required:!1,type:{name:"Key"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},isExpanded:{defaultValue:null,description:"Whether the disclosure is expanded (controlled).",name:"isExpanded",required:!1,type:{name:"boolean"}},defaultExpanded:{defaultValue:null,description:"Whether the disclosure is expanded by default (uncontrolled).",name:"defaultExpanded",required:!1,type:{name:"boolean"}}}}}catch{}const S=["Ett","Två","Tre","Fyra"],Pt={component:$,title:"Components/Accordion",tags:["autodocs"],args:{}},b={args:{className:"test",children:S.map(e=>s.jsxs(f,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e,". Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!"]},e))},play:async({canvas:e,step:t})=>{await t("It should preserve its classNames when being passed new ones",async()=>{const a=e.getByTestId(ue);ne(a).toHaveClass(d.root,"test")})}},h={args:{variant:"contained",children:S.map(e=>s.jsxs(f,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},x={args:{...b.args,type:"multiple"}},v={args:{...h.args,type:"multiple"}},y={args:{...h.args,defaultExpandedKeys:["Två"]}},E={args:{...h.args,children:S.map((e,t)=>s.jsxs(f,{id:e,title:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[s.jsx(et,{}),s.jsxs("b",{children:["En öppningsbar panel ' + ",e.toLocaleLowerCase()]}),s.jsxs("p",{style:{margin:0},children:["2025-03-0",t]})]}),children:["Innehåll i öppningsbarpanel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},I={args:{},tags:["!dev","!autodocs"],render:()=>s.jsxs($,{children:[s.jsxs(f,{title:"AccordionItem with dynamic content",children:["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",s.jsx(tt,{})]}),s.jsx(f,{title:"Another AccordionItem",children:"More text about another subject..."})]}),play:async({canvas:e})=>{await P.click(e.getByRole("button",{name:"AccordionItem with dynamic content"})),await P.click(e.getByTestId("btn-0")),await ne(e.getByTestId("hidden-content")).toBeVisible()}},tt=()=>{const[e,t]=m.useState(!1);return s.jsxs("div",{children:[s.jsx("button",{onClick:()=>t(a=>!a),"data-testid":"btn-0",children:e?"hide":"show"}),e?s.jsx("div",{style:{background:"black",color:"white",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},"data-testid":"hidden-content",children:"Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!"}):null]})},w={args:{variant:"contained",children:S.map((e,t)=>s.jsxs(f,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),type:t===2?"success":t===3?"warning":void 0,children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}};var N,T,L;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    className: 'test',
    children: ITEMS.map(item => <AccordionItem id={item} key={item} title={'En öppningsbar panel ' + item.toLocaleLowerCase()}>
        Innehåll i öppningsbar panel {item}. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis
        quasi consequuntur doloremque harum commodi odit velit pariatur
        voluptate aliquid, inventore praesentium tempore dignissimos officia
        sint libero!
      </AccordionItem>)
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should preserve its classNames when being passed new ones', async () => {
      const accordion = canvas.getByTestId(ACCORDION_TEST_ID);
      expect(accordion).toHaveClass(styles.root, 'test');
    });
  }
}`,...(L=(T=b.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var M,R,V;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: ITEMS.map(item => <AccordionItem id={item} key={item} title={'En öppningsbar panel ' + item.toLocaleLowerCase()}>
        Innehåll i öppningsbar panel {item} Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus perspiciatis officia,
        voluptate ratione quam nemo quod aut maiores animi nostrum, in labore
        adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Impedit dolorem tempora
        laboriosam asperiores eum dignissimos accusantium voluptate eligendi
        beatae vel quis rerum error dolore cum incidunt pariatur accusamus,
        illum consequuntur?
      </AccordionItem>)
  }
}`,...(V=(R=h.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var j,B,K;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...SingleSubtle.args,
    type: 'multiple'
  }
}`,...(K=(B=x.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var W,F,H;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...SingleBoxed.args,
    type: 'multiple'
  }
}`,...(H=(F=v.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var z,O,G;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...SingleBoxed.args,
    defaultExpandedKeys: ['Två']
  }
}`,...(G=(O=y.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var U,Z,J;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...SingleBoxed.args,
    children: ITEMS.map((item, i) => <AccordionItem id={item} key={item} title={<div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
            <File />
            <b>En öppningsbar panel ' + {item.toLocaleLowerCase()}</b>
            <p style={{
        margin: 0
      }}>2025-03-0{i}</p>
          </div>}>
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
}`,...(J=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,X,Y;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {},
  tags: ['!dev', '!autodocs'],
  render: () => <Accordion>
      <AccordionItem title={'AccordionItem with dynamic content'}>
        Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a
        fruit salad.
        <ExpandableStuff />
      </AccordionItem>
      <AccordionItem title={'Another AccordionItem'}>
        More text about another subject...
      </AccordionItem>
    </Accordion>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'AccordionItem with dynamic content'
    }));
    await userEvent.click(canvas.getByTestId('btn-0'));
    await expect(canvas.getByTestId('hidden-content')).toBeVisible();
  }
}`,...(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: ITEMS.map((item, i) => <AccordionItem id={item} key={item} title={'En öppningsbar panel ' + item.toLocaleLowerCase()} type={i === 2 ? 'success' : i === 3 ? 'warning' : undefined}>
        Innehåll i öppningsbar panel {item} Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus perspiciatis officia,
        voluptate ratione quam nemo quod aut maiores animi nostrum, in labore
        adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Impedit dolorem tempora
        laboriosam asperiores eum dignissimos accusantium voluptate eligendi
        beatae vel quis rerum error dolore cum incidunt pariatur accusamus,
        illum consequuntur?
      </AccordionItem>)
  }
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Nt=["SingleSubtle","SingleBoxed","MultipleSubtle","MultipleBoxed","DefaultOpen","CustomTriggerElements","DynamicContent","AccordionWithStatus"];export{w as AccordionWithStatus,E as CustomTriggerElements,y as DefaultOpen,I as DynamicContent,v as MultipleBoxed,x as MultipleSubtle,h as SingleBoxed,b as SingleSubtle,Nt as __namedExportsOrder,Pt as default};

import{j as i}from"./jsx-runtime-DtgEGaVE.js";import{e as ae,u as P}from"./index-DtSMq7G1.js";import{c as w}from"./clsx-B-dksMZM.js";import{a as ne}from"./Button-Co7pWk88.js";import{c as C,d as ge,f as he,b as _,a as be,l as ie,o as xe,n as ye,$ as ve}from"./utils-Dv9Ux5aE.js";import{$ as q}from"./filterDOMProps-BSfnXAP7.js";import{r,R as p}from"./index-BbAIUH2N.js";import{$ as se}from"./useControlledState-DGyHFLi9.js";import{r as Ee}from"./index-cpIEhwLo.js";import{$ as $e}from"./useEvent-DnmuJhSu.js";import{$ as oe}from"./useFocusRing-CPQALXIu.js";import{$ as Se}from"./Heading-DYVViZ07.js";import{B as N}from"./Button-CYs2qUZj.js";import{C as T}from"./chevron-down-U1dNK9nR.js";import{c as Ie}from"./createLucideIcon-8wDOqnHv.js";import"./ProgressBar-6st-rJzm.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./useLabel-BAqrTMfP.js";import"./context-eceod8wW.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";import"./useFocusable-Cs9agisI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./RSPContexts-CeCCo7XS.js";import"./Button.module-BbIEL4Kw.js";function we(e,t,a){let{isDisabled:n}=e,s=C(),o=C(),u=!ge()&&"onbeforematch"in document.body,l=r.useRef(null),h=r.useCallback(()=>{l.current=requestAnimationFrame(()=>{a.current&&a.current.setAttribute("hidden","until-found")}),Ee.flushSync(()=>{t.toggle()})},[a,t]);return $e(a,"beforematch",u?h:null),he(()=>{l.current&&cancelAnimationFrame(l.current),u&&a.current&&!n&&(t.isExpanded?a.current.removeAttribute("hidden"):a.current.setAttribute("hidden","until-found"))},[n,a,t.isExpanded,u]),r.useEffect(()=>()=>{l.current&&cancelAnimationFrame(l.current)},[]),{buttonProps:{id:s,"aria-expanded":t.isExpanded,"aria-controls":o,onPress:m=>{!n&&m.pointerType!=="keyboard"&&t.toggle()},isDisabled:n,onPressStart(m){m.pointerType==="keyboard"&&!n&&t.toggle()}},panelProps:{id:o,role:"group","aria-labelledby":s,"aria-hidden":!t.isExpanded,hidden:u?!0:!t.isExpanded}}}function Ce(e){let[t,a]=se(e.isExpanded,e.defaultExpanded||!1,e.onExpandedChange);const n=r.useCallback(()=>{a(!0)},[a]),s=r.useCallback(()=>{a(!1)},[a]),o=r.useCallback(()=>{a(!t)},[a,t]);return{isExpanded:t,setExpanded:a,expand:n,collapse:s,toggle:o}}function _e(e){let{allowsMultipleExpanded:t=!1,isDisabled:a=!1}=e,[n,s]=se(r.useMemo(()=>e.expandedKeys?new Set(e.expandedKeys):void 0,[e.expandedKeys]),r.useMemo(()=>e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,[e.defaultExpandedKeys]),e.onExpandedChange);return r.useEffect(()=>{!t&&n.size>1&&s(new Set([n.values().next().value]))}),{allowsMultipleExpanded:t,isDisabled:a,expandedKeys:n,setExpandedKeys:s,toggleKey(o){let d;t?(d=new Set(n),d.has(o)?d.delete(o):d.add(o)):d=new Set(n.has(o)?[]:[o]),s(d)}}}const re=r.createContext(null),qe=r.forwardRef(function(t,a){let n=_e(t),s=_({...t,defaultClassName:"react-aria-DisclosureGroup",values:{isDisabled:n.isDisabled,state:n}}),o=q(t);return p.createElement("div",{...o,...s,ref:a,"data-disabled":t.isDisabled||void 0},p.createElement(re.Provider,{value:n},s.children))}),Ae=r.createContext(null),De=r.createContext(null),le=r.createContext(null),je=r.forwardRef(function(t,a){[t,a]=be(t,a,Ae);let n=r.useContext(re),{id:s,...o}=t,d=C();s||(s=d);let u=n?n.expandedKeys.has(s):t.isExpanded,l=Ce({...t,isExpanded:u,onExpandedChange(fe){var I;n&&n.toggleKey(s),(I=t.onExpandedChange)===null||I===void 0||I.call(t,fe)}}),h=p.useRef(null),m=t.isDisabled||(n==null?void 0:n.isDisabled)||!1,{buttonProps:ce,panelProps:ue}=we({...t,isExpanded:u,isDisabled:m},l,h),{isFocusVisible:D,focusProps:pe}=oe({within:!0}),j=_({...t,id:void 0,defaultClassName:"react-aria-Disclosure",values:{isExpanded:l.isExpanded,isDisabled:m,isFocusVisibleWithin:D,state:l}}),me=q(o);return p.createElement(ie,{values:[[ne,{slots:{[xe]:{},trigger:ce}}],[le,{panelProps:ue,panelRef:h}],[De,l]]},p.createElement("div",{ref:a,"data-expanded":l.isExpanded||void 0,"data-disabled":m||void 0,"data-focus-visible-within":D||void 0,...me,...pe,...j},j.children))}),Pe=r.forwardRef(function(t,a){let{role:n="group"}=t,{panelProps:s,panelRef:o}=r.useContext(le),{isFocusVisible:d,focusProps:u}=oe({within:!0}),l=_({...t,defaultClassName:"react-aria-DisclosurePanel",values:{isFocusVisibleWithin:d}}),h=q(t);return p.createElement("div",{...h,ref:ye(a,o),...ve(s,u),...l,role:n,"data-focus-visible-within":d||void 0},p.createElement(ie,{values:[[ne,null]]},t.children))}),Ne='"../theme/tokens.css"',Te="_root_ocdj3_4",Re="_contained_ocdj3_12",Ve="_triggerText_ocdj3_29",Me="_trigger_ocdj3_29",Le="_icon_ocdj3_54",ke="_panel_ocdj3_82",Ke="_item_ocdj3_94",Be="_content_ocdj3_98",We="_header_ocdj3_103",c={tokens:Ne,"--font-family":'"Inter", sans-serif',"--layer-01":"light-dark(#f2f2f2, #262626)","--layer-selected-01":"light-dark(#d9d9d9, #383838)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--normal-transition":"300ms","--text-primary":"light-dark(#171717, #f2f2f2)",root:Te,contained:Re,triggerText:Ve,trigger:Me,icon:Le,panel:ke,item:Ke,content:Be,header:We},de="accordion",S=({variant:e="uncontained",type:t="single",children:a,className:n,...s})=>i.jsx(qe,{"data-testid":de,allowsMultipleExpanded:s.allowsMultipleExpanded||t==="multiple",className:w(c.root,e==="contained"?c.contained:c.uncontained,n),...s,children:a});try{S.displayName="Accordion",S.__docgenInfo={description:"Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.",displayName:"Accordion",props:{variant:{defaultValue:{value:"uncontained"},description:"Display either the larger contained variant or a smaller uncontained variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"uncontained"'},{value:'"contained"'}]}},type:{defaultValue:{value:"single"},description:"@deprecated Use 'allowsMultipleExpanded' instead",name:"type",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},allowsMultipleExpanded:{defaultValue:null,description:"Whether multiple items can be expanded at the same time.",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Whether all items are disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},expandedKeys:{defaultValue:null,description:"The currently expanded keys in the group (controlled).",name:"expandedKeys",required:!1,type:{name:"Iterable<Key>"}},defaultExpandedKeys:{defaultValue:null,description:"The initial expanded keys in the group (uncontrolled).",name:"defaultExpandedKeys",required:!1,type:{name:"Iterable<Key>"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when items are expanded or collapsed.",name:"onExpandedChange",required:!1,type:{name:"(keys: Set<Key>) => any"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DisclosureGroupRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DisclosureGroupRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DisclosureGroupRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=Ie("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]),g=({title:e,children:t,className:a,headingLevel:n=3,...s})=>{const o=typeof e=="object";return i.jsxs(je,{...s,className:w(c.item,a),children:[o?i.jsx("div",{className:c.trigger,children:i.jsxs(N,{slot:"trigger",variant:"icon",children:[i.jsx(T,{size:20,className:c.icon}),e]})}):i.jsx(Se,{level:n,className:c.trigger,children:i.jsxs(N,{slot:"trigger",variant:"icon",children:[i.jsx(T,{size:20,className:c.icon}),i.jsx("span",{className:c.triggerText,children:e})]})}),i.jsx(Pe,{className:w(c.panel),children:i.jsx("div",{className:c.content,children:t})})]})};try{g.displayName="AccordionItem",g.__docgenInfo={description:"",displayName:"AccordionItem",props:{title:{defaultValue:null,description:"The text displayed in the collapsed state. If a ReactNode is proveded we're not adding a heading and you have to provide one yourself.",name:"title",required:!1,type:{name:"ReactNode"}},headingLevel:{defaultValue:{value:"3"},description:"Adjust the titles heading level to your heading tag structure",name:"headingLevel",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"Whether the disclosure is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"An id for the disclosure when used within a DisclosureGroup, matching the id used in `expandedKeys`.",name:"id",required:!1,type:{name:"Key"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DisclosureRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DisclosureRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when the disclosure's expanded state changes.",name:"onExpandedChange",required:!1,type:{name:"(isExpanded: boolean) => void"}},isExpanded:{defaultValue:null,description:"Whether the disclosure is expanded (controlled).",name:"isExpanded",required:!1,type:{name:"boolean"}},defaultExpanded:{defaultValue:null,description:"Whether the disclosure is expanded by default (uncontrolled).",name:"defaultExpanded",required:!1,type:{name:"boolean"}}}}}catch{}const A=["Ett","Två","Tre","Fyra"],yt={component:S,title:"Components/Accordion",tags:["autodocs"],args:{}},b={args:{className:"test",children:A.map(e=>i.jsxs(g,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e,". Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!"]},e))},play:async({canvas:e,step:t})=>{await t("It should preserve its classNames when being passed new ones",async()=>{const a=e.getByTestId(de);ae(a).toHaveClass(c.root,"test")})}},f={args:{variant:"contained",children:A.map(e=>i.jsxs(g,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},x={args:{...b.args,type:"multiple"}},y={args:{...f.args,type:"multiple"}},v={args:{...f.args,defaultExpandedKeys:["Två"]}},E={args:{...f.args,children:A.map((e,t)=>i.jsxs(g,{id:e,title:i.jsxs(i.Fragment,{children:[i.jsx(Fe,{}),i.jsxs("b",{children:["En öppningsbar panel ' + ",e.toLocaleLowerCase()]}),i.jsxs("p",{style:{margin:0},children:["2025-03-0",t]})]}),children:["Innehåll i öppningsbarpanel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},$={args:{},tags:["!dev","!autodocs"],render:()=>i.jsxs(S,{children:[i.jsxs(g,{title:"AccordionItem with dynamic content",children:["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",i.jsx(ze,{})]}),i.jsx(g,{title:"Another AccordionItem",children:"More text about another subject..."})]}),play:async({canvas:e})=>{await P.click(e.getByRole("button",{name:"AccordionItem with dynamic content"})),await P.click(e.getByTestId("btn-0")),await ae(e.getByTestId("hidden-content")).toBeVisible()}},ze=()=>{const[e,t]=p.useState(!1);return i.jsxs("div",{children:[i.jsx("button",{onClick:()=>t(a=>!a),"data-testid":"btn-0",children:e?"hide":"show"}),e?i.jsx("div",{style:{background:"black",color:"white",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},"data-testid":"hidden-content",children:"Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!"}):null]})};var R,V,M;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(V=b.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var L,k,K;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(k=f.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};var B,W,F;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...SingleSubtle.args,
    type: 'multiple'
  }
}`,...(F=(W=x.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var z,H,O;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...SingleBoxed.args,
    type: 'multiple'
  }
}`,...(O=(H=y.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var G,U,Z;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...SingleBoxed.args,
    defaultExpandedKeys: ['Två']
  }
}`,...(Z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var J,Q,X;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,te;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(te=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const vt=["SingleSubtle","SingleBoxed","MultipleSubtle","MultipleBoxed","DefaultOpen","CustomTriggerElements","DynamicContent"];export{E as CustomTriggerElements,v as DefaultOpen,$ as DynamicContent,y as MultipleBoxed,x as MultipleSubtle,f as SingleBoxed,b as SingleSubtle,vt as __namedExportsOrder,yt as default};

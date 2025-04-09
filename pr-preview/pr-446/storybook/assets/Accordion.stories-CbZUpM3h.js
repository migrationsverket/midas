import{j as i}from"./jsx-runtime-DtgEGaVE.js";import{e as ae,w as ge,u as N}from"./index-DtSMq7G1.js";import{c as I}from"./clsx-B-dksMZM.js";import{a as ne}from"./Button-C6oo4-9j.js";import{h as q,c as he,e as be,a as C,$ as xe,l as ie,o as ye,n as ve,b as Ee}from"./utils-fGMpyvF6.js";import{$ as _}from"./filterDOMProps-BSfnXAP7.js";import{r,R as p}from"./index-BbAIUH2N.js";import{$ as se}from"./useControlledState-DGyHFLi9.js";import{r as $e}from"./index-cpIEhwLo.js";import{$ as Se}from"./useEvent-Ou8lCwV4.js";import{a as oe}from"./useFocusRing-CklmaPa3.js";import{$ as we}from"./Heading-Bra5wENi.js";import{B as T}from"./Button-DfeeyDXl.js";import{C as R}from"./chevron-down-U1dNK9nR.js";import{c as Ie}from"./createLucideIcon-8wDOqnHv.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusable-Cn0G9B-O.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./RSPContexts-CeCCo7XS.js";function qe(t,e,a){let{isDisabled:n}=t,s=q(),o=q(),u=!he()&&"onbeforematch"in document.body,l=r.useRef(null),h=r.useCallback(()=>{l.current=requestAnimationFrame(()=>{a.current&&a.current.setAttribute("hidden","until-found")}),$e.flushSync(()=>{e.toggle()})},[a,e]);return Se(a,"beforematch",u?h:null),be(()=>{l.current&&cancelAnimationFrame(l.current),u&&a.current&&!n&&(e.isExpanded?a.current.removeAttribute("hidden"):a.current.setAttribute("hidden","until-found"))},[n,a,e.isExpanded,u]),r.useEffect(()=>()=>{l.current&&cancelAnimationFrame(l.current)},[]),{buttonProps:{id:s,"aria-expanded":e.isExpanded,"aria-controls":o,onPress:m=>{!n&&m.pointerType!=="keyboard"&&e.toggle()},isDisabled:n,onPressStart(m){m.pointerType==="keyboard"&&!n&&e.toggle()}},panelProps:{id:o,role:"group","aria-labelledby":s,"aria-hidden":!e.isExpanded,hidden:u?!0:!e.isExpanded}}}function Ce(t){let[e,a]=se(t.isExpanded,t.defaultExpanded||!1,t.onExpandedChange);const n=r.useCallback(()=>{a(!0)},[a]),s=r.useCallback(()=>{a(!1)},[a]),o=r.useCallback(()=>{a(!e)},[a,e]);return{isExpanded:e,setExpanded:a,expand:n,collapse:s,toggle:o}}function _e(t){let{allowsMultipleExpanded:e=!1,isDisabled:a=!1}=t,[n,s]=se(r.useMemo(()=>t.expandedKeys?new Set(t.expandedKeys):void 0,[t.expandedKeys]),r.useMemo(()=>t.defaultExpandedKeys?new Set(t.defaultExpandedKeys):new Set,[t.defaultExpandedKeys]),t.onExpandedChange);return r.useEffect(()=>{!e&&n.size>1&&s(new Set([n.values().next().value]))}),{allowsMultipleExpanded:e,isDisabled:a,expandedKeys:n,setExpandedKeys:s,toggleKey(o){let d;e?(d=new Set(n),d.has(o)?d.delete(o):d.add(o)):d=new Set(n.has(o)?[]:[o]),s(d)}}}const re=r.createContext(null),Ae=r.forwardRef(function(e,a){let n=_e(e),s=C({...e,defaultClassName:"react-aria-DisclosureGroup",values:{isDisabled:n.isDisabled,state:n}}),o=_(e);return p.createElement("div",{...o,...s,ref:a,"data-disabled":e.isDisabled||void 0},p.createElement(re.Provider,{value:n},s.children))}),De=r.createContext(null),Pe=r.createContext(null),le=r.createContext(null),Ne=r.forwardRef(function(e,a){[e,a]=xe(e,a,De);let n=r.useContext(re),{id:s,...o}=e,d=q();s||(s=d);let u=n?n.expandedKeys.has(s):e.isExpanded,l=Ce({...e,isExpanded:u,onExpandedChange(fe){var w;n&&n.toggleKey(s),(w=e.onExpandedChange)===null||w===void 0||w.call(e,fe)}}),h=p.useRef(null),m=e.isDisabled||(n==null?void 0:n.isDisabled)||!1,{buttonProps:ce,panelProps:ue}=qe({...e,isExpanded:u,isDisabled:m},l,h),{isFocusVisible:D,focusProps:pe}=oe({within:!0}),P=C({...e,id:void 0,defaultClassName:"react-aria-Disclosure",values:{isExpanded:l.isExpanded,isDisabled:m,isFocusVisibleWithin:D,state:l}}),me=_(o);return p.createElement(ie,{values:[[ne,{slots:{[ye]:{},trigger:ce}}],[le,{panelProps:ue,panelRef:h}],[Pe,l]]},p.createElement("div",{ref:a,"data-expanded":l.isExpanded||void 0,"data-disabled":m||void 0,"data-focus-visible-within":D||void 0,...me,...pe,...P},P.children))}),Te=r.forwardRef(function(e,a){let{role:n="group"}=e,{panelProps:s,panelRef:o}=r.useContext(le),{isFocusVisible:d,focusProps:u}=oe({within:!0}),l=C({...e,defaultClassName:"react-aria-DisclosurePanel",values:{isFocusVisibleWithin:d}}),h=_(e);return p.createElement("div",{...h,ref:ve(a,o),...Ee(s,u),...l,role:n,"data-focus-visible-within":d||void 0},p.createElement(ie,{values:[[ne,null]]},e.children))}),Re='"../theme/tokens.css"',je="_root_1gq1b_4",Ve="_contained_1gq1b_12",Me="_triggerText_1gq1b_29",Le="_trigger_1gq1b_29",ke="_icon_1gq1b_54",Ke="_item_1gq1b_82",Be="_panel_1gq1b_85",We="_content_1gq1b_96",Fe="_header_1gq1b_101",c={tokens:Re,"--font-family":'"Inter", sans-serif',"--layer-01":"light-dark(#f2f2f2, #262626)","--layer-selected-01":"light-dark(#d9d9d9, #383838)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--normal-transition":"300ms","--text-primary":"light-dark(#171717, #f2f2f2)",root:je,contained:Ve,triggerText:Me,trigger:Le,icon:ke,item:Ke,panel:Be,content:We,header:Fe},de="accordion",S=({variant:t="uncontained",type:e="single",children:a,className:n,...s})=>i.jsx(Ae,{"data-testid":de,allowsMultipleExpanded:s.allowsMultipleExpanded||e==="multiple",className:I(c.root,t==="contained"?c.contained:c.uncontained,n),...s,children:a});try{S.displayName="Accordion",S.__docgenInfo={description:"Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.",displayName:"Accordion",props:{variant:{defaultValue:{value:"uncontained"},description:"Display either the larger contained variant or a smaller uncontained variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"uncontained"'},{value:'"contained"'}]}},type:{defaultValue:{value:"single"},description:"@deprecated Use 'allowsMultipleExpanded' instead",name:"type",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},allowsMultipleExpanded:{defaultValue:null,description:"Whether multiple items can be expanded at the same time.",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Whether all items are disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},expandedKeys:{defaultValue:null,description:"The currently expanded keys in the group (controlled).",name:"expandedKeys",required:!1,type:{name:"Iterable<Key>"}},defaultExpandedKeys:{defaultValue:null,description:"The initial expanded keys in the group (uncontrolled).",name:"defaultExpandedKeys",required:!1,type:{name:"Iterable<Key>"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when items are expanded or collapsed.",name:"onExpandedChange",required:!1,type:{name:"(keys: Set<Key>) => any"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DisclosureGroupRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DisclosureGroupRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DisclosureGroupRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=Ie("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]),g=({title:t,children:e,className:a,headingLevel:n=3,...s})=>{const o=typeof t=="object";return i.jsxs(Ne,{...s,className:I(c.item,a),children:[o?i.jsx("div",{className:c.trigger,children:i.jsxs(T,{slot:"trigger",variant:"icon",children:[i.jsx(R,{size:20,className:c.icon}),t]})}):i.jsx(we,{level:n,className:c.trigger,children:i.jsxs(T,{slot:"trigger",variant:"icon",children:[i.jsx(R,{size:20,className:c.icon}),i.jsx("span",{className:c.triggerText,children:t})]})}),i.jsx(Te,{className:I(c.panel),children:i.jsx("div",{className:c.content,children:e})})]})};try{g.displayName="AccordionItem",g.__docgenInfo={description:"",displayName:"AccordionItem",props:{title:{defaultValue:null,description:"The text displayed in the collapsed state. If a ReactNode is proveded we're not adding a heading and you have to provide one yourself.",name:"title",required:!1,type:{name:"ReactNode"}},headingLevel:{defaultValue:{value:"3"},description:"Adjust the titles heading level to your heading tag structure",name:"headingLevel",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"An id for the disclosure when used within a DisclosureGroup, matching the id used in `expandedKeys`.",name:"id",required:!1,type:{name:"Key"}},isDisabled:{defaultValue:null,description:"Whether the disclosure is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DisclosureRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DisclosureRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when the disclosure's expanded state changes.",name:"onExpandedChange",required:!1,type:{name:"(isExpanded: boolean) => void"}},isExpanded:{defaultValue:null,description:"Whether the disclosure is expanded (controlled).",name:"isExpanded",required:!1,type:{name:"boolean"}},defaultExpanded:{defaultValue:null,description:"Whether the disclosure is expanded by default (uncontrolled).",name:"defaultExpanded",required:!1,type:{name:"boolean"}}}}}catch{}const A=["Ett","Två","Tre","Fyra"],xt={component:S,title:"Components/Accordion",tags:["autodocs"],args:{}},b={args:{className:"test",children:A.map(t=>i.jsxs(g,{id:t,title:"En öppningsbar panel "+t.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",t,". Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!"]},t))},play:async({canvas:t,step:e})=>{await e("It should preserve its classNames when being passed new ones",async()=>{const a=t.getByTestId(de);ae(a).toHaveClass(c.root,"test")})}},f={args:{variant:"contained",children:A.map(t=>i.jsxs(g,{id:t,title:"En öppningsbar panel "+t.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",t," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},t))}},x={args:{...b.args,type:"multiple"}},y={args:{...f.args,type:"multiple"}},v={args:{...f.args,defaultExpandedKeys:["Två"]}},E={args:{...f.args,children:A.map((t,e)=>i.jsxs(g,{id:t,title:i.jsxs(i.Fragment,{children:[i.jsx(ze,{}),i.jsxs("b",{children:["En öppningsbar panel ' + ",t.toLocaleLowerCase()]}),i.jsxs("p",{style:{margin:0},children:["2025-03-0",e]})]}),children:["Innehåll i öppningsbarpanel ",t," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},t))}},$={args:{},render:()=>i.jsxs(S,{children:[i.jsxs(g,{title:"AccordionItem with dynamic content",children:["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",i.jsx(He,{})]}),i.jsx(g,{title:"Another AccordionItem",children:"More text about another subject..."})]}),play:async({canvasElement:t})=>{const e=ge(t);await N.click(e.getByRole("button",{name:"AccordionItem with dynamic content"})),await N.click(e.getByTestId("btn-0")),await ae(e.getByTestId("hidden-content")).toBeVisible()}},He=()=>{const[t,e]=p.useState(!1);return i.jsxs("div",{children:[i.jsx("button",{onClick:()=>e(a=>!a),"data-testid":"btn-0",children:t?"hide":"show"}),t?i.jsx("div",{style:{background:"lightblue",color:"white",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},"data-testid":"hidden-content",children:"🍍 Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!"}):null]})};var j,V,M;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'AccordionItem with dynamic content'
    }));
    await userEvent.click(canvas.getByTestId('btn-0'));
    await expect(canvas.getByTestId('hidden-content')).toBeVisible();
  }
}`,...(te=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const yt=["SingleSubtle","SingleBoxed","MultipleSubtle","MultipleBoxed","DefaultOpen","CustomTriggerElements","DynamicContent"];export{E as CustomTriggerElements,v as DefaultOpen,$ as DynamicContent,y as MultipleBoxed,x as MultipleSubtle,f as SingleBoxed,b as SingleSubtle,yt as __namedExportsOrder,xt as default};

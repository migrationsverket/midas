import{j as n}from"./jsx-runtime-BYYWji4R.js";import{e as T,u as P}from"./index-Q7OVwvWC.js";import{c as D}from"./clsx-B-dksMZM.js";import{f as ve}from"./Button-HNQZo37q.js";import{e as R,d as De,$ as Re,a as B,k as ye,m as Be,b as ke,n as Me}from"./utils-RHx87K0F.js";import{a as xe,c as k}from"./useFocusRing-Fkrzm1DF.js";import{r,R as f}from"./index-ClcD9ViR.js";import{$ as Ie}from"./useControlledState-H1tiOFpU.js";import{r as Ne}from"./index-DQEgcCId.js";import{$ as Pe}from"./useEvent-D_ha2BWP.js";import{$ as je}from"./SSRProvider-BhYbDCf7.js";import{l as Ee,h as C}from"./test-DcKGE-up.js";import{B as qe}from"./Button-CUNPGbcq.js";import{C as Ve}from"./chevron-down-CPcpcOqy.js";import{H as Ke}from"./Heading-CV1Pcj_U.js";import{T as We}from"./triangle-alert-DDp1K7fX.js";import{C as Fe}from"./check-yXF3Bjrk.js";import{c as He}from"./createLucideIcon-uZw3gxGR.js";import"./Hidden-BC9qER92.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-BLF2LAsl.js";import"./_class_private_field_init-BOtJyCjG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-DbxVSEkM.js";import"./RSPContexts-HQcWPJyv.js";function ze(e,a,t){let{isDisabled:i}=e,s=R(),o=R(),u=!je()&&"onbeforematch"in document.body,c=r.useRef(null),m=r.useCallback(()=>{c.current=requestAnimationFrame(()=>{t.current&&t.current.setAttribute("hidden","until-found")}),Ne.flushSync(()=>{a.toggle()})},[t,a]);return Pe(t,"beforematch",u?m:null),De(()=>{c.current&&cancelAnimationFrame(c.current),u&&t.current&&!i&&(a.isExpanded?t.current.removeAttribute("hidden"):t.current.setAttribute("hidden","until-found"))},[i,t,a.isExpanded,u]),r.useEffect(()=>()=>{c.current&&cancelAnimationFrame(c.current)},[]),{buttonProps:{id:s,"aria-expanded":a.isExpanded,"aria-controls":o,onPress:g=>{!i&&g.pointerType!=="keyboard"&&a.toggle()},isDisabled:i,onPressStart(g){g.pointerType==="keyboard"&&!i&&a.toggle()}},panelProps:{id:o,role:"group","aria-labelledby":s,"aria-hidden":!a.isExpanded,hidden:u?!0:!a.isExpanded}}}function Oe(e){let[a,t]=Ie(e.isExpanded,e.defaultExpanded||!1,e.onExpandedChange);const i=r.useCallback(()=>{t(!0)},[t]),s=r.useCallback(()=>{t(!1)},[t]),o=r.useCallback(()=>{t(!a)},[t,a]);return{isExpanded:a,setExpanded:t,expand:i,collapse:s,toggle:o}}function Ge(e){let{allowsMultipleExpanded:a=!1,isDisabled:t=!1}=e,[i,s]=Ie(r.useMemo(()=>e.expandedKeys?new Set(e.expandedKeys):void 0,[e.expandedKeys]),r.useMemo(()=>e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,[e.defaultExpandedKeys]),e.onExpandedChange);return r.useEffect(()=>{if(!a&&i.size>1){let o=i.values().next().value;o!=null&&s(new Set([o]))}}),{allowsMultipleExpanded:a,isDisabled:t,expandedKeys:i,setExpandedKeys:s,toggleKey(o){let d;a?(d=new Set(i),d.has(o)?d.delete(o):d.add(o)):d=new Set(i.has(o)?[]:[o]),s(d)}}}const Se=r.createContext(null),Ue=r.forwardRef(function(a,t){let i=Ge(a),s=B({...a,defaultClassName:"react-aria-DisclosureGroup",values:{isDisabled:i.isDisabled,state:i}}),o=k(a);return f.createElement("div",{...o,...s,ref:t,"data-disabled":a.isDisabled||void 0},f.createElement(Se.Provider,{value:i},s.children))}),Ze=r.createContext(null),Je=r.createContext(null),we=r.createContext(null),Qe=r.forwardRef(function(a,t){[a,t]=Re(a,t,Ze);let i=r.useContext(Se),{id:s,...o}=a,d=R();s||(s=d);let u=i?i.expandedKeys.has(s):a.isExpanded,c=Oe({...a,isExpanded:u,onExpandedChange(Le){var L;i&&i.toggleKey(s),(L=a.onExpandedChange)===null||L===void 0||L.call(a,Le)}}),m=f.useRef(null),g=a.isDisabled||(i==null?void 0:i.isDisabled)||!1,{buttonProps:$e,panelProps:_e}=ze({...a,isExpanded:u,isDisabled:g},c,m),{isFocusVisible:M,focusProps:Ce}=xe({within:!0}),N=B({...a,id:void 0,defaultClassName:"react-aria-Disclosure",values:{isExpanded:c.isExpanded,isDisabled:g,isFocusVisibleWithin:M,state:c}}),Te=k(o);return f.createElement(ye,{values:[[ve,{slots:{[Be]:{},trigger:$e}}],[we,{panelProps:_e,panelRef:m}],[Je,c]]},f.createElement("div",{ref:t,"data-expanded":c.isExpanded||void 0,"data-disabled":g||void 0,"data-focus-visible-within":M||void 0,...Te,...Ce,...N},N.children))}),Xe=r.forwardRef(function(a,t){let{role:i="group"}=a,{panelProps:s,panelRef:o}=r.useContext(we),{isFocusVisible:d,focusProps:u}=xe({within:!0}),c=B({...a,defaultClassName:"react-aria-DisclosurePanel",values:{isFocusVisibleWithin:d}}),m=k(a);return f.createElement("div",{...m,ref:Me(t,o),...ke(s,u),...c,role:i,"data-focus-visible-within":d||void 0},f.createElement(ye,{values:[[ve,null]]},a.children))}),Ye="_root_1t40y_4",ea="_contained_1t40y_13",aa="_item_1t40y_22",ta="_success_1t40y_23",ia="_warning_1t40y_30",na="_uncontained_1t40y_43",sa="_content_1t40y_44",oa="_triggerButton_1t40y_52",ra="_trigger_1t40y_52",la="_triggerMainContent_1t40y_77",da="_triggerText_1t40y_81",ca="_chevronIcon_1t40y_95",ua="_statusIcon_1t40y_101",pa="_panel_1t40y_119",ma="_hasBackground_1t40y_136",l={root:Ye,contained:ea,item:aa,success:ta,warning:ia,uncontained:na,content:sa,triggerButton:oa,trigger:ra,triggerMainContent:la,triggerText:da,chevronIcon:ca,statusIcon:ua,panel:pa,hasBackground:ma},Ae="accordion",y=({variant:e="uncontained",children:a,className:t,...i})=>n.jsx(Ue,{"data-testid":Ae,className:D(l.root,e==="contained"?l.contained:l.uncontained,t),...i,children:a});try{y.displayName="Accordion",y.__docgenInfo={description:"Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.",displayName:"Accordion",props:{variant:{defaultValue:{value:"uncontained"},description:"Display either the larger contained variant or a smaller uncontained variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"uncontained"'},{value:'"contained"'}]}},allowsMultipleExpanded:{defaultValue:null,description:"Whether multiple items can be expanded at the same time.",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Whether all items are disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},expandedKeys:{defaultValue:null,description:"The currently expanded keys in the group (controlled).",name:"expandedKeys",required:!1,type:{name:"Iterable<Key>"}},defaultExpandedKeys:{defaultValue:null,description:"The initial expanded keys in the group (uncontrolled).",name:"defaultExpandedKeys",required:!1,type:{name:"Iterable<Key>"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when items are expanded or collapsed.",name:"onExpandedChange",required:!1,type:{name:"(keys: Set<Key>) => any"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DisclosureGroupRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DisclosureGroupRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DisclosureGroupRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],fa=He("file",ga),p=({title:e,children:a,className:t,headingLevel:i="h2",type:s,hasBackground:o=!0,...d})=>{const u=typeof e=="object",m={success:Fe,warning:We,default:null}[s||"default"],g=m?n.jsx(m,{size:20,className:l.statusIcon}):null;return n.jsxs(Qe,{...d,className:D(l.item,s==="success"&&l.success,s==="warning"&&l.warning,t),children:[n.jsx("div",{className:l.trigger,children:n.jsxs(qe,{className:l.triggerButton,slot:"trigger",variant:"icon",children:[n.jsx(Ve,{size:20,className:l.chevronIcon}),n.jsx("div",{className:l.triggerMainContent,children:u?e:n.jsx(Ke,{level:3,elementType:i,className:l.triggerText,children:e})}),g]})}),n.jsx(Xe,{className:l.panel,children:n.jsx("div",{className:D(l.content,o&&l.hasBackground),children:a})})]})};try{p.displayName="AccordionItem",p.__docgenInfo={description:"",displayName:"AccordionItem",props:{title:{defaultValue:null,description:"The text displayed in the collapsed state. If a ReactNode is proveded we're not adding a heading and you have to provide one yourself.",name:"title",required:!1,type:{name:"ReactNode"}},headingLevel:{defaultValue:{value:"h2"},description:"Adjust the titles heading level to your heading tag structure",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},type:{defaultValue:null,description:"Display an accordion item in different status states",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"default"'}]}},hasBackground:{defaultValue:{value:"true"},description:"Adds a background element to the content, set to false for a transparent look",name:"hasBackground",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Whether the disclosure is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DisclosureRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DisclosureRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when the disclosure's expanded state changes.",name:"onExpandedChange",required:!1,type:{name:"(isExpanded: boolean) => void"}},id:{defaultValue:null,description:"An id for the disclosure when used within a DisclosureGroup, matching the id used in `expandedKeys`.",name:"id",required:!1,type:{name:"Key"}},isExpanded:{defaultValue:null,description:"Whether the disclosure is expanded (controlled).",name:"isExpanded",required:!1,type:{name:"boolean"}},defaultExpanded:{defaultValue:null,description:"Whether the disclosure is expanded by default (uncontrolled).",name:"defaultExpanded",required:!1,type:{name:"boolean"}}}}}catch{}const x=["Ett","Två","Tre","Fyra"],Fa={component:y,subcomponents:{AccordionItem:p},title:"Components/Accordion",tags:["autodocs"],args:{}},b={args:{className:"test",children:x.map(e=>n.jsxs(p,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e,". Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!"]},e))},play:async({canvas:e,step:a})=>{await a("It should preserve its classNames when being passed new ones",async()=>{const t=e.getByTestId(Ae);T(t).toHaveClass(l.root,"test")})}},h={args:{variant:"contained",children:x.map(e=>n.jsxs(p,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},v={parameters:{chromatic:{disableSnapshot:!0}},args:{...b.args,allowsMultipleExpanded:!0}},I={args:{...v.args,isDisabled:!0},play:async({canvas:e,step:a,globals:{scheme:t}})=>{await a("it should have the disabled style",async()=>{await T(e.getAllByRole("heading",{level:2})[0]).toHaveStyle({color:Ee(C("#bfbfbf"),C("#525252"),t)})})}},E={parameters:{chromatic:{disableSnapshot:!0}},args:{...h.args,allowsMultipleExpanded:!0}},q={args:{...h.args,defaultExpandedKeys:["Två"]}},S={args:{...h.args,children:x.map((e,a)=>n.jsxs(p,{id:e,title:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsx(fa,{}),n.jsxs("b",{children:["En öppningsbar panel ' + ",e.toLocaleLowerCase()]}),n.jsxs("p",{style:{margin:0},children:["2025-03-0",a]})]}),children:["Innehåll i öppningsbarpanel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},w={args:{},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>n.jsxs(y,{children:[n.jsxs(p,{title:"AccordionItem with dynamic content",children:["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",n.jsx(ha,{})]}),n.jsx(p,{title:"Another AccordionItem",children:"More text about another subject..."})]}),play:async({canvas:e})=>{await P.click(e.getByRole("button",{name:"AccordionItem with dynamic content"})),await P.click(e.getByTestId("btn-0")),await T(e.getByTestId("hidden-content")).toBeVisible()}},A={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>n.jsx(y,{children:n.jsx(p,{title:"Test",children:n.jsx(qe,{isDisabled:!0,children:"Test"})})}),play:async({canvas:e,step:a,globals:{scheme:t}})=>{await a("it should not have the disabled style even if it contains disabled children",async()=>{await T(e.getByRole("heading",{level:2,name:"Test"})).toHaveStyle({color:Ee(C("#171717"),C("#f2f2f2"),t)})})}},ha=()=>{const[e,a]=f.useState(!1);return n.jsxs("div",{children:[n.jsx("button",{onClick:()=>a(t=>!t),"data-testid":"btn-0",children:e?"hide":"show"}),e?n.jsx("div",{style:{background:"black",color:"white",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},"data-testid":"hidden-content",children:"Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!"}):null]})},$={parameters:{docs:{source:{code:`<Accordion variant="contained">
  <AccordionItem
    id="Ett"
    title="En öppningsbar panel ett"
    hasBackground={false}
  >
    Innehåll i öppningsbar panel Ett Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
  </AccordionItem>
  <AccordionItem
    id="Två"
    title="En öppningsbar panel två"
    hasBackground={false}
  >
    Innehåll i öppningsbar panel Två Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
  </AccordionItem>
  <AccordionItem
    id="Tre"
    title="En öppningsbar panel tre"
    type="success"
    hasBackground={false}
  >
    Innehåll i öppningsbar panel Tre Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
  </AccordionItem>
  <AccordionItem
    id="Fyra"
    title="En öppningsbar panel fyra"
    type="warning"
    hasBackground={false}
  >
    Innehåll i öppningsbar panel Fyra Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
  </AccordionItem>
</Accordion>`}}},args:{variant:"contained",children:x.map((e,a)=>n.jsxs(p,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),type:a===2?"success":a===3?"warning":void 0,hasBackground:!1,children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},_={args:{variant:"contained",children:x.map((e,a)=>n.jsxs(p,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),type:a===2?"success":a===3?"warning":void 0,children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}};var j,V,K;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(K=(V=b.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var W,F,H;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var z,O,G;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...SingleSubtle.args,
    allowsMultipleExpanded: true
  }
}`,...(G=(O=v.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var U,Z,J;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...MultipleSubtle.args,
    isDisabled: true
  },
  play: async ({
    canvas,
    step,
    globals: {
      scheme
    }
  }) => {
    await step('it should have the disabled style', async () => {
      await expect(canvas.getAllByRole('heading', {
        level: 2
      })[0]).toHaveStyle({
        color: lightDark(hexToRgb('#bfbfbf'), hexToRgb('#525252'), scheme)
      });
    });
  }
}`,...(J=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,X,Y;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...SingleBoxed.args,
    allowsMultipleExpanded: true
  }
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ae,te;q.parameters={...q.parameters,docs:{...(ee=q.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...SingleBoxed.args,
    defaultExpandedKeys: ['Två']
  }
}`,...(te=(ae=q.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ie,ne,se;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,re,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {},
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <Accordion>
      <AccordionItem title='AccordionItem with dynamic content'>
        Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a
        fruit salad.
        <ExpandableStuff />
      </AccordionItem>
      <AccordionItem title='Another AccordionItem'>
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
}`,...(le=(re=w.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var de,ce,ue;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <Accordion>
      <AccordionItem title='Test'>
        <Button isDisabled>Test</Button>
      </AccordionItem>
    </Accordion>,
  play: async ({
    canvas,
    step,
    globals: {
      scheme
    }
  }) => {
    await step('it should not have the disabled style even if it contains disabled children', async () => {
      await expect(canvas.getByRole('heading', {
        level: 2,
        name: 'Test'
      })).toHaveStyle({
        color: lightDark(hexToRgb('#171717'), hexToRgb('#f2f2f2'), scheme)
      });
    });
  }
}`,...(ue=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,ge;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Accordion variant="contained">
  <AccordionItem
    id="Ett"
    title="En öppningsbar panel ett"
    hasBackground={false}
  >
    Innehåll i öppningsbar panel Ett Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
  </AccordionItem>
  <AccordionItem
    id="Två"
    title="En öppningsbar panel två"
    hasBackground={false}
  >
    Innehåll i öppningsbar panel Två Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
  </AccordionItem>
  <AccordionItem
    id="Tre"
    title="En öppningsbar panel tre"
    type="success"
    hasBackground={false}
  >
    Innehåll i öppningsbar panel Tre Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
  </AccordionItem>
  <AccordionItem
    id="Fyra"
    title="En öppningsbar panel fyra"
    type="warning"
    hasBackground={false}
  >
    Innehåll i öppningsbar panel Fyra Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
  </AccordionItem>
</Accordion>\`
      }
    }
  },
  args: {
    variant: 'contained',
    children: ITEMS.map((item, i) => <AccordionItem id={item} key={item} title={'En öppningsbar panel ' + item.toLocaleLowerCase()} type={i === 2 ? 'success' : i === 3 ? 'warning' : undefined} hasBackground={false}>
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
}`,...(ge=(me=$.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,he,be;_.parameters={..._.parameters,docs:{...(fe=_.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(he=_.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};const Ha=["SingleSubtle","SingleBoxed","MultipleSubtle","MultipleSubtleDisabled","MultipleBoxed","DefaultOpen","CustomTriggerElements","DynamicContent","DS1060","AccordionWithStatus","AccordionHasBackground"];export{_ as AccordionHasBackground,$ as AccordionWithStatus,S as CustomTriggerElements,A as DS1060,q as DefaultOpen,w as DynamicContent,E as MultipleBoxed,v as MultipleSubtle,I as MultipleSubtleDisabled,h as SingleBoxed,b as SingleSubtle,Ha as __namedExportsOrder,Fa as default};

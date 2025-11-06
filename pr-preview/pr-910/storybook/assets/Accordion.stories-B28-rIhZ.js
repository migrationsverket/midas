import{j as t,e as W}from"./iframe-P7vGAEPf.js";import{a as $,$ as O,A as i}from"./AccordionItem-rEY4BDzV.js";import{c as G}from"./clsx-Ciqy0D92.js";import{c as U}from"./createLucideIcon-ciePIdUU.js";import{B as Z}from"./Button-DY1ErDAz.js";import"./preload-helper-Dp1pzeXC.js";import"./icon-map-DsKFVU7W.js";import"./info-E40AuyPr.js";import"./check-DT3yyRNa.js";import"./Button-D-J3k31G.js";import"./utils-C4AsHK4M.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dd1MY3p8.js";import"./useFocusRing-Z18YPlKo.js";import"./index-BkwmXWKL.js";import"./index-B_mfWF_k.js";import"./useLabels-CRiZEYvW.js";import"./useButton-BqR4PLc1.js";import"./useControlledState-B91FfRND.js";import"./useEvent-7z0Ak1sV.js";import"./chevron-down-zOUlT37N.js";import"./Heading-BNyZLvof.js";import"./RSPContexts-D3POtDHv.js";import"./Button.module-CcWMkJAG.js";const J="_root_17bdp_1",Q="_contained_17bdp_5",g={root:J,contained:Q},s=({variant:e,children:n,className:p,isContained:P,size:F="large",...H})=>{const f=P||e==="contained";return t.jsx($.Provider,{value:{isContained:f,size:F},children:t.jsx(O,{className:G(g.root,f?g.contained:g.uncontained,p),...H,children:n})})};try{s.displayName="Accordion",s.__docgenInfo={description:"Accordions help reduce visual clutter on a page by organizing content into collapsible sections.",displayName:"Accordion",props:{variant:{defaultValue:null,description:"Display either the larger contained variant or a smaller uncontained variant\n@deprecated since 11.0.0. Please use `isContained` instead",name:"variant",required:!1,type:{name:"enum",value:[{value:'"uncontained"'},{value:'"contained"'}]}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:"Whether all items are disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isContained:{defaultValue:null,description:"",name:"isContained",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"Component size when used with `isContained` (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},allowsMultipleExpanded:{defaultValue:null,description:"Whether multiple items can be expanded at the same time.",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}},expandedKeys:{defaultValue:null,description:"The currently expanded keys in the group (controlled).",name:"expandedKeys",required:!1,type:{name:"Iterable<Key>"}},defaultExpandedKeys:{defaultValue:null,description:"The initial expanded keys in the group (uncontrolled).",name:"defaultExpandedKeys",required:!1,type:{name:"Iterable<Key>"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when items are expanded or collapsed.",name:"onExpandedChange",required:!1,type:{name:"((keys: Set<Key>) => any)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<DisclosureGroupRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<DisclosureGroupRenderProps>"}}}}}catch{}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],Y=U("file",X),h=["Ett","Två","Tre","Fyra"],we={component:s,subcomponents:{AccordionItem:i},title:"Components/Accordion",tags:["autodocs"],args:{size:"large"}},a={args:{className:"test",children:h.map(e=>t.jsxs(i,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e,". Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!"]},e))}},o={args:{...a.args,isContained:!0}},r={tags:["!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...a.args,allowsMultipleExpanded:!0}},l={args:{...a.args,defaultExpandedKeys:["Två"]}},d={args:{...o.args,children:h.map((e,n)=>t.jsxs(i,{id:e,title:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[t.jsx(Y,{}),t.jsxs("b",{children:["En öppningsbar panel ' + ",e.toLocaleLowerCase()]}),t.jsxs("p",{style:{margin:0},children:["2025-03-0",n]})]}),children:["Innehåll i öppningsbarpanel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},c={args:{},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>t.jsxs(s,{children:[t.jsxs(i,{title:"AccordionItem with dynamic content",children:["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",t.jsx(ee,{})]}),t.jsx(i,{title:"Another AccordionItem",children:"More text about another subject..."})]})},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>t.jsx(s,{children:t.jsx(i,{title:"Test",children:t.jsx(Z,{isDisabled:!0,children:"Test"})})})},ee=()=>{const[e,n]=W.useState(!1);return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>n(p=>!p),"data-testid":"btn-0",children:e?"hide":"show"}),e?t.jsx("div",{style:{background:"black",color:"white",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},"data-testid":"hidden-content",children:"Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!"}):null]})},m={args:{variant:"contained",children:h.map((e,n)=>t.jsxs(i,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),type:n===2?"success":n===3?"warning":void 0,children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}};var b,y,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: 'test',
    children: ITEMS.map(item => <AccordionItem id={item} key={item} title={'En öppningsbar panel ' + item.toLocaleLowerCase()}>
        Innehåll i öppningsbar panel {item}. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis
        quasi consequuntur doloremque harum commodi odit velit pariatur
        voluptate aliquid, inventore praesentium tempore dignissimos officia
        sint libero!
      </AccordionItem>)
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,I,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isContained: true
  }
}`,...(A=(I=o.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var q,E,w;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Default.args,
    allowsMultipleExpanded: true
  }
}`,...(w=(E=r.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var C,S,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpandedKeys: ['Två']
  }
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,D,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Contained.args,
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
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var _,k,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {},
  tags: ['!dev', '!autodocs', '!snapshot'],
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
    </Accordion>
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var V,K,N;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <Accordion>
      <AccordionItem title='Test'>
        <Button isDisabled>Test</Button>
      </AccordionItem>
    </Accordion>
}`,...(N=(K=u.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var z,B,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const Ce=["Default","Contained","AllowsMultipleExpanded","DefaultExpandedKeys","CustomTriggerElements","DynamicContent","DS1060","AccordionHasBackground"];export{m as AccordionHasBackground,r as AllowsMultipleExpanded,o as Contained,d as CustomTriggerElements,u as DS1060,a as Default,l as DefaultExpandedKeys,c as DynamicContent,Ce as __namedExportsOrder,we as default};

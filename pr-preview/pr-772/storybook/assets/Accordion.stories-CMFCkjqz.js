import{j as t,e as F}from"./iframe-BXSXFnI0.js";import{c as G}from"./clsx-B-dksMZM.js";import{a as Y,$ as Z,A as s}from"./AccordionItem-O-DZ6IA4.js";import{l as J,h as b}from"./test-DcKGE-up.js";import{c as Q}from"./createLucideIcon-Cxn_Jk_B.js";import{B as X}from"./Button-BigH2JBp.js";import"./preload-helper-Dp1pzeXC.js";import"./icon-map-C2CkGoAd.js";import"./info-CWd9FEt_.js";import"./check-DQdN-BhX.js";import"./Button-C9o6_9sT.js";import"./utils-BFi5W1w4.js";import"./Hidden-DpHRpK5a.js";import"./useFocusRing-DUYm-sNb.js";import"./index-CM7xiaE7.js";import"./index-DYB1p1DC.js";import"./useLabels-DHs8ZQEk.js";import"./useButton-AEA0bYXx.js";import"./useControlledState-BifY1oMp.js";import"./useEvent-BB3IFhZZ.js";import"./chevron-down-CWRvCTVq.js";import"./Heading-BY-YaldO.js";import"./RSPContexts-B_VrPxi0.js";import"./Button.module-CF2bVDCq.js";const ee="_root_1soqs_1",te="_contained_1soqs_5",g={root:ee,contained:te},W="accordion",r=({variant:e,children:n,className:a,isContained:U,...$})=>{const f=U||e==="contained";return t.jsx(Y.Provider,{value:{isContained:f},children:t.jsx(Z,{"data-testid":W,className:G(g.root,f?g.contained:g.uncontained,a),...$,children:n})})};try{r.displayName="Accordion",r.__docgenInfo={description:"Accordions help reduce visual clutter on a page by organizing content into collapsible sections.",displayName:"Accordion",props:{variant:{defaultValue:null,description:"Display either the larger contained variant or a smaller uncontained variant\n@deprecated since 11.0.0. Please use `isContained` instead",name:"variant",required:!1,type:{name:"enum",value:[{value:'"uncontained"'},{value:'"contained"'}]}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:"Whether all items are disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isContained:{defaultValue:null,description:"",name:"isContained",required:!1,type:{name:"boolean"}},allowsMultipleExpanded:{defaultValue:null,description:"Whether multiple items can be expanded at the same time.",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}},expandedKeys:{defaultValue:null,description:"The currently expanded keys in the group (controlled).",name:"expandedKeys",required:!1,type:{name:"Iterable<Key>"}},defaultExpandedKeys:{defaultValue:null,description:"The initial expanded keys in the group (uncontrolled).",name:"defaultExpandedKeys",required:!1,type:{name:"Iterable<Key>"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when items are expanded or collapsed.",name:"onExpandedChange",required:!1,type:{name:"((keys: Set<Key>) => any)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DisclosureGroupRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DisclosureGroupRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],ae=Q("file",ne),{expect:h,userEvent:v}=__STORYBOOK_MODULE_TEST__,y=["Ett","Två","Tre","Fyra"],_e={component:r,subcomponents:{AccordionItem:s},title:"Components/Accordion",tags:["autodocs"],args:{}},i={args:{className:"test",children:y.map(e=>t.jsxs(s,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e,". Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!"]},e))},play:async({canvas:e,step:n})=>{await n("It should preserve its classNames when being passed new ones",async()=>{const a=e.getByTestId(W);await h(a).toHaveClass(g.root,"test")})}},o={args:{...i.args,isContained:!0}},l={parameters:{chromatic:{disableSnapshot:!0}},args:{...i.args,allowsMultipleExpanded:!0}},c={args:{...i.args,defaultExpandedKeys:["Två"]}},d={args:{...o.args,children:y.map((e,n)=>t.jsxs(s,{id:e,title:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[t.jsx(ae,{}),t.jsxs("b",{children:["En öppningsbar panel ' + ",e.toLocaleLowerCase()]}),t.jsxs("p",{style:{margin:0},children:["2025-03-0",n]})]}),children:["Innehåll i öppningsbarpanel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},u={args:{},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>t.jsxs(r,{children:[t.jsxs(s,{title:"AccordionItem with dynamic content",children:["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",t.jsx(ie,{})]}),t.jsx(s,{title:"Another AccordionItem",children:"More text about another subject..."})]}),play:async({canvas:e})=>{await v.click(e.getByRole("button",{name:"AccordionItem with dynamic content"})),await v.click(e.getByTestId("btn-0")),await h(e.getByTestId("hidden-content")).toBeVisible()}},p={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>t.jsx(r,{children:t.jsx(s,{title:"Test",children:t.jsx(X,{isDisabled:!0,children:"Test"})})}),play:async({canvas:e,step:n,globals:{scheme:a}})=>{await n("it should not have the disabled style even if it contains disabled children",async()=>{await h(e.getByRole("heading",{level:2,name:"Test"})).toHaveStyle({color:J(b("#171717"),b("#f2f2f2"),a)})})}},ie=()=>{const[e,n]=F.useState(!1);return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>n(a=>!a),"data-testid":"btn-0",children:e?"hide":"show"}),e?t.jsx("div",{style:{background:"black",color:"white",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},"data-testid":"hidden-content",children:"Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!"}):null]})},m={args:{variant:"contained",children:y.map((e,n)=>t.jsxs(s,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),type:n===2?"success":n===3?"warning":void 0,children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}};var x,I,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      await expect(accordion).toHaveClass(styles.root, 'test');
    });
  }
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var A,S,q;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isContained: true
  }
}`,...(q=(S=o.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var E,T,C;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Default.args,
    allowsMultipleExpanded: true
  }
}`,...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var _,D,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpandedKeys: ['Två']
  }
}`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var j,k,B;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var M,R,N;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(R=u.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var V,K,H;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(K=p.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var P,O,z;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(O=m.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const De=["Default","Contained","AllowsMultipleExpanded","DefaultExpandedKeys","CustomTriggerElements","DynamicContent","DS1060","AccordionHasBackground"];export{m as AccordionHasBackground,l as AllowsMultipleExpanded,o as Contained,d as CustomTriggerElements,p as DS1060,i as Default,c as DefaultExpandedKeys,u as DynamicContent,De as __namedExportsOrder,_e as default};

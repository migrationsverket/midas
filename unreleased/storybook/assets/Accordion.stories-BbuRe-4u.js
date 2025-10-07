import{j as n,e as z}from"./iframe-tMAfFlEh.js";import{l as F,h}from"./test-DcKGE-up.js";import{a as $,$ as Y,A as r}from"./AccordionItem-DiH5pOql.js";import{c as Z}from"./clsx-Ciqy0D92.js";import{c as J}from"./createLucideIcon-DypcAXrG.js";import{B as Q}from"./Button-pHzC2hpi.js";import"./preload-helper-Dp1pzeXC.js";import"./icon-map-pIF3QO-x.js";import"./info-28izQaUI.js";import"./check-DanvVVau.js";import"./Button-CZURlwfX.js";import"./utils-B3xo7mSp.js";import"./clsx-B-dksMZM.js";import"./Hidden-B596e1a0.js";import"./useFocusRing-CJNxFNQw.js";import"./index-CsE9Qa5Q.js";import"./index-fmbOzPWH.js";import"./useLabels-3R6y6U_U.js";import"./useButton-8kU_3xRu.js";import"./useControlledState-Cdw5pzn5.js";import"./useEvent-CEdTgcJ3.js";import"./chevron-down-CfjkDO18.js";import"./Heading-CfuXlYlc.js";import"./RSPContexts-D_qLp80d.js";import"./Button.module-CcWMkJAG.js";const X="_root_17bdp_1",ee="_contained_17bdp_5",v={root:X,contained:ee},l=({variant:e,children:t,className:a,isContained:W,...G})=>{const y=W||e==="contained";return n.jsx($.Provider,{value:{isContained:y},children:n.jsx(Y,{className:Z(v.root,y?v.contained:v.uncontained,a),...G,children:t})})};try{l.displayName="Accordion",l.__docgenInfo={description:"Accordions help reduce visual clutter on a page by organizing content into collapsible sections.",displayName:"Accordion",props:{variant:{defaultValue:null,description:"Display either the larger contained variant or a smaller uncontained variant\n@deprecated since 11.0.0. Please use `isContained` instead",name:"variant",required:!1,type:{name:"enum",value:[{value:'"uncontained"'},{value:'"contained"'}]}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:"Whether all items are disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isContained:{defaultValue:null,description:"",name:"isContained",required:!1,type:{name:"boolean"}},allowsMultipleExpanded:{defaultValue:null,description:"Whether multiple items can be expanded at the same time.",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}},expandedKeys:{defaultValue:null,description:"The currently expanded keys in the group (controlled).",name:"expandedKeys",required:!1,type:{name:"Iterable<Key>"}},defaultExpandedKeys:{defaultValue:null,description:"The initial expanded keys in the group (uncontrolled).",name:"defaultExpandedKeys",required:!1,type:{name:"Iterable<Key>"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when items are expanded or collapsed.",name:"onExpandedChange",required:!1,type:{name:"((keys: Set<Key>) => any)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<DisclosureGroupRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<DisclosureGroupRenderProps>"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},inert:{defaultValue:null,description:"",name:"inert",required:!1,type:{name:"boolean"}},translate:{defaultValue:null,description:"",name:"translate",required:!1,type:{name:"enum",value:[{value:'"yes"'},{value:'"no"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onClickCapture:{defaultValue:null,description:"",name:"onClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClick:{defaultValue:null,description:"",name:"onAuxClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClickCapture:{defaultValue:null,description:"",name:"onAuxClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenuCapture:{defaultValue:null,description:"",name:"onContextMenuCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClickCapture:{defaultValue:null,description:"",name:"onDoubleClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDownCapture:{defaultValue:null,description:"",name:"onMouseDownCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMoveCapture:{defaultValue:null,description:"",name:"onMouseMoveCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOutCapture:{defaultValue:null,description:"",name:"onMouseOutCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOverCapture:{defaultValue:null,description:"",name:"onMouseOverCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUpCapture:{defaultValue:null,description:"",name:"onMouseUpCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchCancelCapture:{defaultValue:null,description:"",name:"onTouchCancelCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMoveCapture:{defaultValue:null,description:"",name:"onTouchMoveCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStartCapture:{defaultValue:null,description:"",name:"onTouchStartCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onPointerDown:{defaultValue:null,description:"",name:"onPointerDown",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerDownCapture:{defaultValue:null,description:"",name:"onPointerDownCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMove:{defaultValue:null,description:"",name:"onPointerMove",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMoveCapture:{defaultValue:null,description:"",name:"onPointerMoveCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUp:{defaultValue:null,description:"",name:"onPointerUp",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUpCapture:{defaultValue:null,description:"",name:"onPointerUpCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancel:{defaultValue:null,description:"",name:"onPointerCancel",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancelCapture:{defaultValue:null,description:"",name:"onPointerCancelCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerEnter:{defaultValue:null,description:"",name:"onPointerEnter",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerLeave:{defaultValue:null,description:"",name:"onPointerLeave",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOver:{defaultValue:null,description:"",name:"onPointerOver",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOverCapture:{defaultValue:null,description:"",name:"onPointerOverCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOut:{defaultValue:null,description:"",name:"onPointerOut",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOutCapture:{defaultValue:null,description:"",name:"onPointerOutCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCapture:{defaultValue:null,description:"",name:"onGotPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCaptureCapture:{defaultValue:null,description:"",name:"onGotPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCapture:{defaultValue:null,description:"",name:"onLostPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCaptureCapture:{defaultValue:null,description:"",name:"onLostPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onScrollCapture:{defaultValue:null,description:"",name:"onScrollCapture",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onWheelCapture:{defaultValue:null,description:"",name:"onWheelCapture",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onAnimationStart:{defaultValue:null,description:"",name:"onAnimationStart",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationStartCapture:{defaultValue:null,description:"",name:"onAnimationStartCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEnd:{defaultValue:null,description:"",name:"onAnimationEnd",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEndCapture:{defaultValue:null,description:"",name:"onAnimationEndCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIteration:{defaultValue:null,description:"",name:"onAnimationIteration",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIterationCapture:{defaultValue:null,description:"",name:"onAnimationIterationCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onTransitionCancel:{defaultValue:null,description:"",name:"onTransitionCancel",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionCancelCapture:{defaultValue:null,description:"",name:"onTransitionCancelCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEnd:{defaultValue:null,description:"",name:"onTransitionEnd",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEndCapture:{defaultValue:null,description:"",name:"onTransitionEndCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRun:{defaultValue:null,description:"",name:"onTransitionRun",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionRunCapture:{defaultValue:null,description:"",name:"onTransitionRunCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStart:{defaultValue:null,description:"",name:"onTransitionStart",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionStartCapture:{defaultValue:null,description:"",name:"onTransitionStartCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}}}}}catch{}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],te=J("file",ne),{expect:f,userEvent:T}=__STORYBOOK_MODULE_TEST__,E=["Ett","Två","Tre","Fyra"],xe={component:l,subcomponents:{AccordionItem:r},title:"Components/Accordion",tags:["autodocs"],args:{}},i={args:{className:"test",children:E.map(e=>n.jsxs(r,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e,". Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!"]},e))},play:async({canvasElement:e,step:t})=>{await t("It should preserve its classNames when being passed new ones",async()=>{const a=e.querySelector("div");await f(a).toHaveClass(v.root,"test")})}},o={args:{...i.args,isContained:!0}},s={parameters:{chromatic:{disableSnapshot:!0}},args:{...i.args,allowsMultipleExpanded:!0}},u={args:{...i.args,defaultExpandedKeys:["Två"]}},d={args:{...o.args,children:E.map((e,t)=>n.jsxs(r,{id:e,title:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsx(te,{}),n.jsxs("b",{children:["En öppningsbar panel ' + ",e.toLocaleLowerCase()]}),n.jsxs("p",{style:{margin:0},children:["2025-03-0",t]})]}),children:["Innehåll i öppningsbarpanel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},c={args:{},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>n.jsxs(l,{children:[n.jsxs(r,{title:"AccordionItem with dynamic content",children:["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",n.jsx(ae,{})]}),n.jsx(r,{title:"Another AccordionItem",children:"More text about another subject..."})]}),play:async({canvas:e})=>{await T.click(e.getByRole("button",{name:"AccordionItem with dynamic content"})),await T.click(e.getByTestId("btn-0")),await f(e.getByTestId("hidden-content")).toBeVisible()}},m={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>n.jsx(l,{children:n.jsx(r,{title:"Test",children:n.jsx(Q,{isDisabled:!0,children:"Test"})})}),play:async({canvas:e,step:t,globals:{scheme:a}})=>{await t("it should not have the disabled style even if it contains disabled children",async()=>{await f(e.getByRole("heading",{level:2,name:"Test"})).toHaveStyle({color:F(h("#171717"),h("#f2f2f2"),a)})})}},ae=()=>{const[e,t]=z.useState(!1);return n.jsxs("div",{children:[n.jsx("button",{onClick:()=>t(a=>!a),"data-testid":"btn-0",children:e?"hide":"show"}),e?n.jsx("div",{style:{background:"black",color:"white",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},"data-testid":"hidden-content",children:"Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!"}):null]})},p={args:{variant:"contained",children:E.map((e,t)=>n.jsxs(r,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),type:t===2?"success":t===3?"warning":void 0,children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}};var M,H,g;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    canvasElement,
    step
  }) => {
    await step('It should preserve its classNames when being passed new ones', async () => {
      const accordion = canvasElement.querySelector('div');
      await expect(accordion).toHaveClass(styles.root, 'test');
    });
  }
}`,...(g=(H=i.parameters)==null?void 0:H.docs)==null?void 0:g.source}}};var C,q,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isContained: true
  }
}`,...(b=(q=o.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};var D,L,V;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Default.args,
    allowsMultipleExpanded: true
  }
}`,...(V=(L=s.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var x,A,P;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpandedKeys: ['Två']
  }
}`,...(P=(A=u.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var w,I,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var k,_,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(_=c.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var O,R,B;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var N,K,U;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(K=p.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const Ae=["Default","Contained","AllowsMultipleExpanded","DefaultExpandedKeys","CustomTriggerElements","DynamicContent","DS1060","AccordionHasBackground"];export{p as AccordionHasBackground,s as AllowsMultipleExpanded,o as Contained,d as CustomTriggerElements,m as DS1060,i as Default,u as DefaultExpandedKeys,c as DynamicContent,Ae as __namedExportsOrder,xe as default};

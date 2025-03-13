import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{T as s,a as m,s as v}from"./Tooltip-PX-F9Mp8.js";import{w as x,e as S}from"./index-DtSMq7G1.js";import{B as d}from"./Button-BhgeQp1E.js";import{c as b}from"./createLucideIcon-8wDOqnHv.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BGGzdKnh.js";import"./utils-DdXLQA3f.js";import"./index-cpIEhwLo.js";import"./useFocusable-C2jS3Qdx.js";import"./useFocusRing-CAIiVOBX.js";import"./useOverlayTriggerState-Md-KFT5u.js";import"./context-BR8A0IbO.js";import"./useControlledState-DGyHFLi9.js";import"./useModal-BVB1AyA1.js";import"./Button-BhwOwugC.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-0Xxd6rx0.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=b("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),A={component:s,title:"Components/Tooltip",tags:["autodocs"],argTypes:{children:{control:"text"}}},e={args:{children:"Spara"},render:a=>t.jsxs(m,{children:[t.jsx(d,{variant:"tertiary","aria-label":"Spara",children:t.jsx(g,{})}),t.jsx(s,{...a})]})},r={args:{className:"test-class"},render:a=>t.jsxs(m,{isOpen:!0,children:[t.jsx(d,{variant:"tertiary","aria-label":"Spara",children:t.jsx(g,{})}),t.jsx(s,{"data-testid":"test",...a,children:"Spara"})]}),play:async({step:a,args:{className:y},canvasElement:u})=>{const T=u.ownerDocument.body,h=x(T).getByTestId("test");await a("it should preserve its classNames when being passed new ones",async()=>{S(h).toHaveClass(v.tooltip,y)})}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Spara'
  },
  render: args => <TooltipTrigger>
      <Button variant='tertiary' aria-label='Spara'>
        <Save />
      </Button>
      <Tooltip {...args} />
    </TooltipTrigger>
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    className: 'test-class'
  },
  render: args => <TooltipTrigger isOpen>
      <Button variant='tertiary' aria-label='Spara'>
        <Save />
      </Button>
      <Tooltip data-testid='test' {...args}>
        Spara
      </Tooltip>
    </TooltipTrigger>,
  play: async ({
    step,
    args: {
      className
    },
    canvasElement
  }) => {
    // Tooltip is outside of #storybook-root element
    const body = canvasElement.ownerDocument.body;
    const tooltip = within(body).getByTestId('test');
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(tooltip).toHaveClass(styles.tooltip, className as string);
    });
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const F=["Primary","Open"];export{r as Open,e as Primary,F as __namedExportsOrder,A as default};

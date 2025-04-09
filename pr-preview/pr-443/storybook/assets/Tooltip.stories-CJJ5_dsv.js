import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{T as s,a as c,s as v}from"./Tooltip-BssewiAc.js";import{w as x,e as S}from"./index-DtSMq7G1.js";import{B as d}from"./Button-BZSRI6fu.js";import{c as b}from"./createLucideIcon-8wDOqnHv.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CXQgvVpK.js";import"./utils-fGMpyvF6.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";import"./useFocusRing-CklmaPa3.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./useControlledState-DGyHFLi9.js";import"./useModal-BdzBpG_k.js";import"./Button-C6oo4-9j.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=b("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),U={component:s,title:"Components/Tooltip",tags:["autodocs"],argTypes:{children:{control:"text"}}},r={args:{children:"Spara"},render:a=>t.jsxs(c,{children:[t.jsx(d,{variant:"tertiary","aria-label":"Spara",children:t.jsx(g,{})}),t.jsx(s,{...a})]})},e={args:{className:"test-class"},render:a=>t.jsxs(c,{isOpen:!0,children:[t.jsx(d,{variant:"tertiary","aria-label":"Spara",children:t.jsx(g,{})}),t.jsx(s,{"data-testid":"test",...a,children:"Spara"})]}),play:async({step:a,args:{className:y},canvasElement:u})=>{const T=u.ownerDocument.body,h=x(T).getByTestId("test");await a("it should preserve its classNames when being passed new ones",async()=>{S(h).toHaveClass(v.tooltip,y)})}};var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Spara'
  },
  render: args => <TooltipTrigger>
      <Button variant='tertiary' aria-label='Spara'>
        <Save />
      </Button>
      <Tooltip {...args} />
    </TooltipTrigger>
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const W=["Primary","Open"];export{e as Open,r as Primary,W as __namedExportsOrder,U as default};

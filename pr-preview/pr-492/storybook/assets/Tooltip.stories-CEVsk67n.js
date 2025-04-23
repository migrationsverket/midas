import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{T as s,a as l,s as B}from"./Tooltip-B-BEQCAY.js";import{w as S,e as w}from"./index-DtSMq7G1.js";import{B as c}from"./Button-BQdVR7vE.js";import{c as f}from"./createLucideIcon-8wDOqnHv.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-fkN0_ThZ.js";import"./utils-Dv9Ux5aE.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cs9agisI.js";import"./useFocusRing-CPQALXIu.js";import"./useOverlayTriggerState-Bjtc1fMu.js";import"./ProgressBar-6st-rJzm.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-eceod8wW.js";import"./NumberFormatter-DT0cDaax.js";import"./useControlledState-DGyHFLi9.js";import"./useModal-j8uWYn4E.js";import"./Button.module-kL9Mhzoi.js";import"./Button-Co7pWk88.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=f("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),tt={component:s,title:"Components/Tooltip",tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered"}},e={args:{children:"Spara"},render:a=>t.jsxs(l,{children:[t.jsx(c,{variant:"tertiary","aria-label":"Spara",children:t.jsx(m,{})}),t.jsx(s,{...a})]})},r={args:{className:"test-class"},render:a=>t.jsxs(l,{isOpen:!0,children:[t.jsx(c,{variant:"tertiary","aria-label":"Spara",children:t.jsx(m,{})}),t.jsx(s,{"data-testid":"test",...a,children:"Spara"})]}),play:async({step:a,args:{className:n},canvasElement:i})=>{const p=i.ownerDocument.body,j=S(p).getByTestId("test");await a("it should preserve its classNames when being passed new ones",async()=>{w(j).toHaveClass(B.tooltip,n)})}},o={args:{placement:"top",children:"Spara"},render:a=>t.jsxs(l,{isOpen:!0,children:[t.jsx(c,{variant:"tertiary","aria-label":"Spara",children:t.jsx(m,{})}),t.jsx(s,{"data-testid":"tooltip-placement",...a})]}),play:async({step:a,canvasElement:n})=>{const i=n.ownerDocument.body,p=S(i).getByTestId("tooltip-placement");await a("should be placed at the top",async()=>{w(p).toHaveAttribute("data-placement","top")})}};var d,y,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Spara'
  },
  render: args => <TooltipTrigger>
      <Button variant='tertiary' aria-label='Spara'>
        <Save />
      </Button>
      <Tooltip {...args} />
    </TooltipTrigger>
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,h,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var v,b,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    children: 'Spara'
  },
  render: args => <TooltipTrigger isOpen>
      <Button variant='tertiary' aria-label='Spara'>
        <Save />
      </Button>
      <Tooltip data-testid='tooltip-placement' {...args} />
    </TooltipTrigger>,
  play: async ({
    step,
    canvasElement
  }) => {
    const body = canvasElement.ownerDocument.body;
    const tooltip = within(body).getByTestId('tooltip-placement');
    await step('should be placed at the top', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'top');
    });
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const at=["Primary","Open","Placement"];export{r as Open,o as Placement,e as Primary,at as __namedExportsOrder,tt as default};

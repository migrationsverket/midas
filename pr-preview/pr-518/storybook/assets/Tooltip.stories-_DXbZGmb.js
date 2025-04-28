import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{T as o,a as s,s as D}from"./Tooltip-DoRUIz6z.js";import{w as g,e as u}from"./index-DtSMq7G1.js";import{B as i}from"./Button-Ct5SsluS.js";import{c as R}from"./createLucideIcon-8wDOqnHv.js";import{a as N}from"./context-oTIQb5ND.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-fkN0_ThZ.js";import"./utils-Dv9Ux5aE.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";import"./useFocusRing-CPQALXIu.js";import"./useOverlayTriggerState-CnVHlh1Q.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./NumberFormatter-DT0cDaax.js";import"./useControlledState-DGyHFLi9.js";import"./useModal-j8uWYn4E.js";import"./Button.module-kL9Mhzoi.js";import"./Button-K4F0BPlU.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BM4Mp5Au.js";import"./usePress-DljlCKCj.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=R("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),lt={component:o,title:"Components/Tooltip",tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered"}},l={args:{children:"Spara"},render:a=>t.jsxs(s,{children:[t.jsx(i,{variant:"tertiary","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(o,{...a})]})},c={args:{className:"test-class"},render:a=>t.jsxs(s,{isOpen:!0,children:[t.jsx(i,{variant:"tertiary","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(o,{"data-testid":"test",...a,children:"Spara"})]}),play:async({step:a,args:{className:e},canvasElement:r})=>{const n=r.ownerDocument.body,A=g(n).getByTestId("test");await a("it should preserve its classNames when being passed new ones",async()=>{u(A).toHaveClass(D.tooltip,e)})}},d={args:{placement:"top",children:"Spara"},render:a=>t.jsxs(s,{isOpen:!0,children:[t.jsx(i,{variant:"tertiary","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(o,{"data-testid":"tooltip-placement",...a})]}),play:async({step:a,canvasElement:e})=>{const r=e.ownerDocument.body,n=g(r).getByTestId("tooltip-placement");await a("should be placed at the top",async()=>{u(n).toHaveAttribute("data-placement","top")})}},m={args:{placement:"start",children:"Spara"},tags:["!dev","!autodocs"],render:a=>t.jsxs(s,{isOpen:!0,children:[t.jsx(i,{variant:"tertiary","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(o,{"data-testid":"tooltip-placement",...a})]}),play:async({step:a,canvasElement:e})=>{const r=e.ownerDocument.body,n=g(r).getByTestId("tooltip-placement");await a("should be placed at the start (left)",async()=>{u(n).toHaveAttribute("data-placement","left")})}},y={args:{placement:"start",children:"Spara"},tags:["!dev","!autodocs"],render:a=>t.jsx(N,{locale:"ar-AR",children:t.jsxs(s,{isOpen:!0,children:[t.jsx(i,{variant:"tertiary","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(o,{"data-testid":"tooltip-placement",...a})]})}),play:async({step:a,canvasElement:e})=>{const r=e.ownerDocument.body,n=g(r).getByTestId("tooltip-placement");await a("should be placed at the start for RTL (right)",async()=>{u(n).toHaveAttribute("data-placement","right")})}};var h,b,T;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Spara'
  },
  render: args => <TooltipTrigger>
      <Button variant='tertiary' aria-label='Spara'>
        <Save />
      </Button>
      <Tooltip {...args} />
    </TooltipTrigger>
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var v,S,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var w,j,f;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var B,I,O;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placement: 'start',
    children: 'Spara'
  },
  tags: ['!dev', '!autodocs'],
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
    await step('should be placed at the start (left)', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'left');
    });
  }
}`,...(O=(I=m.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var E,H,P;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placement: 'start',
    children: 'Spara'
  },
  tags: ['!dev', '!autodocs'],
  render: args => <I18nProvider locale={'ar-AR'}>
    <TooltipTrigger isOpen>
      <Button variant='tertiary' aria-label='Spara'>
        <Save />
      </Button>
      <Tooltip data-testid='tooltip-placement' {...args} />
    </TooltipTrigger>
    </I18nProvider>,
  play: async ({
    step,
    canvasElement
  }) => {
    const body = canvasElement.ownerDocument.body;
    const tooltip = within(body).getByTestId('tooltip-placement');
    await step('should be placed at the start for RTL (right)', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'right');
    });
  }
}`,...(P=(H=y.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const ct=["Primary","Open","Placement","PlacementStart","PlacementStartRTL"];export{c as Open,d as Placement,m as PlacementStart,y as PlacementStartRTL,l as Primary,ct as __namedExportsOrder,lt as default};

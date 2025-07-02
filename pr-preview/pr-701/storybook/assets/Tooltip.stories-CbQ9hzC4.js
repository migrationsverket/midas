import{j as t}from"./jsx-runtime-BYYWji4R.js";import{T as r,a as s,s as H}from"./Tooltip-B8-fD_De.js";import{w as u,e as y}from"./index-CqmFxPum.js";import{B as i}from"./Button-BIwz49X6.js";import{S as p}from"./save-BFMBpXoD.js";import{a as R}from"./context-zNjZoWML.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B5tMncCy.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./index-DQEgcCId.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./Button-Dw7lljiq.js";import"./Hidden-BC9qER92.js";import"./useButton-DFlERivp.js";import"./useControlledState-H1tiOFpU.js";import"./Button.module-DKVuWS4g.js";import"./createLucideIcon-DQK9Z80p.js";const et={component:s,subcomponents:{TooltipTrigger:r},title:"Components/Tooltip",tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered"}},l={args:{children:"Spara"},render:e=>t.jsxs(r,{children:[t.jsx(i,{variant:"icon","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(s,{...e})]})},c={args:{className:"test-class"},render:e=>t.jsxs(r,{isOpen:!0,children:[t.jsx(i,{variant:"icon","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(s,{"data-testid":"test",...e,children:"Spara"})]}),play:async({step:e,args:{className:a},canvasElement:n})=>{const o=n.ownerDocument.body,D=u(o).getByTestId("test");await e("it should preserve its classNames when being passed new ones",async()=>{y(D).toHaveClass(H.tooltip,a)})}},d={args:{placement:"top",children:"Spara"},render:e=>t.jsxs(r,{isOpen:!0,children:[t.jsx(i,{variant:"icon","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(s,{"data-testid":"tooltip-placement",...e})]}),play:async({step:e,canvasElement:a})=>{const n=a.ownerDocument.body,o=u(n).getByTestId("tooltip-placement");await e("should be placed at the top",async()=>{y(o).toHaveAttribute("data-placement","top")})}},m={args:{placement:"start",children:"Spara"},tags:["!dev","!autodocs"],render:e=>t.jsxs(r,{isOpen:!0,children:[t.jsx(i,{variant:"icon","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(s,{"data-testid":"tooltip-placement",...e})]}),play:async({step:e,canvasElement:a})=>{const n=a.ownerDocument.body,o=u(n).getByTestId("tooltip-placement");await e("should be placed at the start (left)",async()=>{y(o).toHaveAttribute("data-placement","left")})}},g={args:{placement:"start",children:"Spara"},tags:["!dev","!autodocs"],render:e=>t.jsx(R,{locale:"ar-AR",children:t.jsxs(r,{isOpen:!0,children:[t.jsx(i,{variant:"icon","aria-label":"Spara",children:t.jsx(p,{})}),t.jsx(s,{"data-testid":"tooltip-placement",...e})]})}),play:async({step:e,canvasElement:a})=>{const n=a.ownerDocument.body,o=u(n).getByTestId("tooltip-placement");await e("should be placed at the start for RTL (right)",async()=>{y(o).toHaveAttribute("data-placement","right")})}};var b,h,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Spara'
  },
  render: args => <TooltipTrigger>
      <Button variant='icon' aria-label='Spara'>
        <Save />
      </Button>
      <Tooltip {...args} />
    </TooltipTrigger>
}`,...(T=(h=l.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var v,S,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    className: 'test-class'
  },
  render: args => <TooltipTrigger isOpen>
      <Button variant='icon' aria-label='Spara'>
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
      <Button variant='icon' aria-label='Spara'>
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
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var B,O,E;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placement: 'start',
    children: 'Spara'
  },
  tags: ['!dev', '!autodocs'],
  render: args => <TooltipTrigger isOpen>
      <Button variant='icon' aria-label='Spara'>
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
}`,...(E=(O=m.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var I,P,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placement: 'start',
    children: 'Spara'
  },
  tags: ['!dev', '!autodocs'],
  render: args => <I18nProvider locale='ar-AR'>
      <TooltipTrigger isOpen>
        <Button variant='icon' aria-label='Spara'>
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
}`,...(A=(P=g.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const at=["Primary","Open","Placement","PlacementStart","PlacementStartRTL"];export{c as Open,d as Placement,m as PlacementStart,g as PlacementStartRTL,l as Primary,at as __namedExportsOrder,et as default};

import{j as s,f as _}from"./iframe-DQ0Yww4t.js";import{T as B,a as j,s as A}from"./Tooltip-BQX3N06u.js";import{S as H}from"./save-CvmH2Bur.js";import{B as N}from"./Button-0PdEaH1l.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DrQ94dbA.js";import"./utils-DI4y5G2T.js";import"./index-BbLD2t5R.js";import"./index-CRGwpPOp.js";import"./useFocusRing-hOwPeJyf.js";import"./Button-BuKSg3tr.js";import"./Hidden-BRgVz7Qp.js";import"./useLabels-BSqZnwjD.js";import"./useButton-D0NQhWnm.js";import"./useResizeObserver-Bje9T0K9.js";import"./useControlledState-D6_zb-vR.js";import"./createLucideIcon-B0HN-IoQ.js";import"./Button.module-DRhvPh0f.js";const{expect:l,within:m}=__STORYBOOK_MODULE_TEST__,P=t=>s.jsx("div",{style:{padding:"5rem",display:"flex",justifyContent:"center"},children:s.jsxs(B,{isOpen:t.isOpen,children:[s.jsx(N,{variant:"icon","aria-label":"Spara",children:s.jsx(H,{})}),s.jsx(j,{...t})]})}),tt={component:j,subcomponents:{TooltipTrigger:B},title:"Components/Tooltip",tags:["autodocs"],parameters:{layout:"centered"},args:{children:"Spara"},render:P},n={},r={args:{className:"test-class",isOpen:!0},play:async({step:t,args:{className:e},canvasElement:o})=>{const a=o.ownerDocument.body,D=m(a).getByRole("tooltip");await t("it should preserve its classNames when being passed new ones",async()=>{l(D).toHaveClass(A.tooltip,e)})}},c={args:{placement:"top",isOpen:!0},play:async({step:t,canvasElement:e})=>{const o=e.ownerDocument.body,a=m(o).getByRole("tooltip");await t("should be placed at the top",async()=>{l(a).toHaveAttribute("data-placement","top")})}},p={args:{placement:"start",isOpen:!0},tags:["!dev","!autodocs"],play:async({step:t,canvasElement:e})=>{const o=e.ownerDocument.body,a=m(o).getByRole("tooltip");await t("should be placed at the start (left)",async()=>{l(a).toHaveAttribute("data-placement","left")})}},i={args:{placement:"start",isOpen:!0},tags:["!dev","!autodocs"],render:t=>s.jsx(_,{locale:"ar-AR",children:s.jsx(P,{...t})}),play:async({step:t,canvasElement:e})=>{const o=e.ownerDocument.body,a=m(o).getByRole("tooltip");await t("should be placed at the start for RTL (right)",async()=>{l(a).toHaveAttribute("data-placement","right")})}};var d,y,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    className: 'test-class',
    isOpen: true
  },
  play: async ({
    step,
    args: {
      className
    },
    canvasElement
  }) => {
    // Tooltip is outside of #storybook-root element
    const body = canvasElement.ownerDocument.body;
    const tooltip = within(body).getByRole('tooltip');
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(tooltip).toHaveClass(styles.tooltip, className as string);
    });
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,w,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    isOpen: true
  },
  play: async ({
    step,
    canvasElement
  }) => {
    const body = canvasElement.ownerDocument.body;
    const tooltip = within(body).getByRole('tooltip');
    await step('should be placed at the top', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'top');
    });
  }
}`,...(f=(w=c.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var x,R,O;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placement: 'start',
    isOpen: true
  },
  tags: ['!dev', '!autodocs'],
  play: async ({
    step,
    canvasElement
  }) => {
    const body = canvasElement.ownerDocument.body;
    const tooltip = within(body).getByRole('tooltip');
    await step('should be placed at the start (left)', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'left');
    });
  }
}`,...(O=(R=p.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var S,T,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placement: 'start',
    isOpen: true
  },
  tags: ['!dev', '!autodocs'],
  render: args => <I18nProvider locale='ar-AR'>
      <Render {...args} />
    </I18nProvider>,
  play: async ({
    step,
    canvasElement
  }) => {
    const body = canvasElement.ownerDocument.body;
    const tooltip = within(body).getByRole('tooltip');
    await step('should be placed at the start for RTL (right)', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'right');
    });
  }
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const et=["Primary","Open","Placement","PlacementStart","PlacementStartRTL"];export{r as Open,c as Placement,p as PlacementStart,i as PlacementStartRTL,n as Primary,et as __namedExportsOrder,tt as default};

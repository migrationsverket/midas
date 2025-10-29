import{j as s,h as b}from"./iframe-crrRDQdL.js";import{T as d,a as y,s as h}from"./Tooltip-B7nHlUDu.js";import{S as v}from"./save-DPnZoz1j.js";import{B as w}from"./Button-Bst02TFm.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CO2GiP8Q.js";import"./utils-Ys3_FUZM.js";import"./index-DYukp6dc.js";import"./index-D6zF5ab1.js";import"./useFocusRing-CKHcw9hW.js";import"./Button-D2FSU2f8.js";import"./Hidden-CpiXS9Kq.js";import"./useLabels-BqmK4HVG.js";import"./useButton-OtuQrflQ.js";import"./useResizeObserver-DfpGnFuS.js";import"./useControlledState-BzKJy9y_.js";import"./createLucideIcon-CHU1oBRH.js";import"./Button.module-CtQ1deO8.js";const{expect:l,within:m}=__STORYBOOK_MODULE_TEST__,u=t=>s.jsx("div",{style:{padding:"5rem",display:"flex",justifyContent:"center"},children:s.jsxs(d,{isOpen:t.isOpen,children:[s.jsx(w,{variant:"icon","aria-label":"Spara",children:s.jsx(v,{})}),s.jsx(y,{...t})]})}),K={component:y,subcomponents:{TooltipTrigger:d},title:"Components/Tooltip",tags:["autodocs"],parameters:{layout:"centered",a11y:{test:"todo"}},args:{children:"Spara"},render:u},n={},r={args:{className:"test-class",isOpen:!0},play:async({step:t,args:{className:e},canvasElement:o})=>{const a=o.ownerDocument.body,g=m(a).getByRole("tooltip");await t("it should preserve its classNames when being passed new ones",async()=>{l(g).toHaveClass(h.tooltip,e)})}},c={args:{placement:"top",isOpen:!0},play:async({step:t,canvasElement:e})=>{const o=e.ownerDocument.body,a=m(o).getByRole("tooltip");await t("should be placed at the top",async()=>{l(a).toHaveAttribute("data-placement","top")})}},p={args:{placement:"start",isOpen:!0},tags:["!dev","!autodocs"],play:async({step:t,canvasElement:e})=>{const o=e.ownerDocument.body,a=m(o).getByRole("tooltip");await t("should be placed at the start (left)",async()=>{l(a).toHaveAttribute("data-placement","left")})}},i={args:{placement:"start",isOpen:!0},tags:["!dev","!autodocs"],render:t=>s.jsx(b,{locale:"ar-AR",children:s.jsx(u,{...t})}),play:async({step:t,canvasElement:e})=>{const o=e.ownerDocument.body,a=m(o).getByRole("tooltip");await t("should be placed at the start for RTL (right)",async()=>{l(a).toHaveAttribute("data-placement","right")})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const M=["Primary","Open","Placement","PlacementStart","PlacementStartRTL"];export{r as Open,c as Placement,p as PlacementStart,i as PlacementStartRTL,n as Primary,M as __namedExportsOrder,K as default};

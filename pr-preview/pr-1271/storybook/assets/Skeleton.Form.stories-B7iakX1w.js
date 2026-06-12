import{j as e,l}from"./iframe-CVnRxWgx.js";import{S as t}from"./Skeleton-CBZtVytB.js";import{T as p}from"./TextField-kMtySOx5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-RIOU8v3x.js";import"./utils-CGtyN9cn.js";import"./FieldError-CfE9jQyI.js";import"./Text-CIPwlNyJ.js";import"./useFocusRing-94VK6gl0.js";import"./index-Br_PJyAP.js";import"./index-DGjZojd9.js";import"./Text-D7ORYKKB.js";import"./RSPContexts-CE4pINDX.js";import"./Form-YZ9PuLqX.js";import"./Group-DvpDJCQD.js";import"./Input-B5olS4Q4.js";import"./Hidden-DjmPCuwM.js";import"./Button-i9ocr7Pu.js";import"./useLabel-u8jIf097.js";import"./useLabels-DvMiIHJl.js";import"./useButton-DiNxNOYc.js";import"./useTextField-DFydc_q3.js";import"./useControlledState-DJTyz9Tw.js";import"./useField-BkKnTjOj.js";import"./TextField.module-DdivwlC8.js";import"./Label-84omXKnW.js";import"./Dialog-LaCjxAWH.js";import"./OverlayArrow-BiPAt-vL.js";import"./useResizeObserver-A4LeQFPG.js";import"./Collection-BFzhGCWq.js";import"./index-DM4vN2rR.js";import"./Separator-BWOTOwjn.js";import"./SelectionManager-DLo-akIF.js";import"./useEvent-qLpbXbRS.js";import"./scrollIntoView-Bmq2UQLA.js";import"./SelectionIndicator-kxHNfWwY.js";import"./useDescription-DwHvhYZf.js";import"./ListKeyboardDelegate-jy6EvDEx.js";import"./PressResponder-CmzEFpYC.js";import"./useLocalizedStringFormatter-6_DEL2_r.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DcHjItjD.js";import"./getScrollParent-BYv7XFLc.js";import"./VisuallyHidden-x3g4TarU.js";import"./ModalOverlay-CUWmT974.js";import"./x-CUtMZV2x.js";import"./createLucideIcon-CO_w61Gv.js";import"./useLocalizedStringFormatter-B64DUcOo.js";import"./Heading-CQ8h6NgE.js";import"./Button-BlcQlVBG.js";import"./Button.module-BB7N-cLd.js";import"./info-m5V2KM-G.js";import"./Popover-C9KnZmCU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>\`
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  }}>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Actual TextField
        </h3>
        <TextField label='Namn' description='Fyll i ditt fullständiga namn' />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};

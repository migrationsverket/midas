import{j as e,l}from"./iframe-DvdASj8M.js";import{S as t}from"./Skeleton-C9U53O1H.js";import{T as p}from"./TextField-h3moAYFH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2XLVY9x.js";import"./utils-2bkJAsr0.js";import"./FieldError-BHomaXXv.js";import"./Text-HREkQCRS.js";import"./useFocusRing-BaJY9r_4.js";import"./index-CQ_pr3hm.js";import"./index-CcYTU2s7.js";import"./Text-DUdz_YCU.js";import"./RSPContexts-KaeisNYM.js";import"./Form-Bzu484ao.js";import"./useFormValidation-BjECE3Vg.js";import"./Group-CqWaLBP9.js";import"./Input-C4KEWQ7H.js";import"./Hidden-9BXFjXWH.js";import"./Button-Ziwvh2At.js";import"./useLabels-BdcIIg7x.js";import"./useButton-BEZYe4nN.js";import"./useTextField-D_V2Ueh7.js";import"./useControlledState-BTi70xM1.js";import"./useField-9ykgCi-4.js";import"./TextField.module-Cm6797Xw.js";import"./Label-D-C-nC0P.js";import"./Dialog-avUb-agd.js";import"./OverlayArrow-D4MoERoz.js";import"./useResizeObserver-DQXxfksJ.js";import"./Collection-BPPX9AyK.js";import"./index-3FXGvnxL.js";import"./Separator-Bx1ytvD8.js";import"./SelectionManager-CB0MSLoI.js";import"./useEvent-CdPSZ4wH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DfYwX-3g.js";import"./useDescription-DEfag5zN.js";import"./ListKeyboardDelegate-n2f3KV6i.js";import"./PressResponder-DF1qrNRw.js";import"./useLocalizedStringFormatter-yjXDy8l0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B-SGXJMc.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bdeVna33.js";import"./Button-eMwP9vIv.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9OuGGhbc.js";import"./createLucideIcon-6vu73fXR.js";import"./x-CIUdYWTM.js";import"./Heading-l6wWUNtY.js";import"./info-BGkEj6ot.js";import"./Popover-DgHN9szD.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};

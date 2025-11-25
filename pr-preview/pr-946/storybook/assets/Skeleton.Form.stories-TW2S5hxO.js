import{j as e,l}from"./iframe-Dme4aFdT.js";import{S as t}from"./Skeleton-ij6wZQo6.js";import{T as d}from"./TextField-BJvf7awx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-pPchGRRP.js";import"./utils-RWkis8G9.js";import"./TextField-Ct9diZ_N.js";import"./FieldError-D1kPuc3v.js";import"./Text-CMIivFWB.js";import"./useFocusRing-DWu_JWOd.js";import"./index-C7JOf_RQ.js";import"./index-C6e9A8g1.js";import"./Text-gw1qxFi7.js";import"./RSPContexts-GmODFMNz.js";import"./Form-HTp76sHB.js";import"./useFormValidation-Cu9FWwIg.js";import"./Group-tZthJ2i4.js";import"./Input-DzePpcyV.js";import"./Hidden-C10E5C8v.js";import"./Button-XAFJZG3z.js";import"./useLabels-Cct5OOSs.js";import"./useButton-DF_MCZ4k.js";import"./useTextField-CqpmIQFK.js";import"./useControlledState-BetURhw8.js";import"./useField-oEkr_deD.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BL5wFbOO.js";import"./Dialog-Cuz97ck8.js";import"./OverlayArrow-Clz9TAVy.js";import"./useResizeObserver-BkyJ2d6V.js";import"./Collection-W26yHb3J.js";import"./index-DlLHXnc9.js";import"./Separator-DWYlp_w5.js";import"./SelectionManager-6e5CdkHx.js";import"./useEvent-DYfcnNGN.js";import"./scrollIntoView-D3gv1S2x.js";import"./SelectionIndicator-CJrJ3N-9.js";import"./useDescription-DMhS4Cus.js";import"./ListKeyboardDelegate-CR4vArZj.js";import"./PressResponder-DV52zyiq.js";import"./useLocalizedStringFormatter-CkiUW1JU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-j8aW_06G.js";import"./VisuallyHidden-C5B2ZvOk.js";import"./Button-DKWrf8rk.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dx4ypEyW.js";import"./createLucideIcon-CNaULXtJ.js";import"./x-tPwbUnSI.js";import"./Heading-yDDwOJL2.js";import"./info-BkoqP5MC.js";import"./Popover-BWFBMMxJ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};

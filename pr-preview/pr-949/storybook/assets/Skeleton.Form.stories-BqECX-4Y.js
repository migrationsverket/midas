import{j as e,l}from"./iframe-CfzEJfTl.js";import{S as t}from"./Skeleton-D78SFUnh.js";import{T as d}from"./TextField-BaAp86uP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BTTH8idd.js";import"./utils-DMT3jteK.js";import"./TextField-BgkegD6n.js";import"./FieldError-CNWb36NS.js";import"./Text-C2N2S6jp.js";import"./useFocusRing-5mlRQFlf.js";import"./index-CMLkFNUk.js";import"./index-DlHBYD_b.js";import"./Text-DMZehI1u.js";import"./RSPContexts-BRrdno09.js";import"./Form-1YBoc813.js";import"./useFormValidation-arzJgOWK.js";import"./Group-DZ_OzXQ3.js";import"./Input-BPbFnp1W.js";import"./Hidden-CO_ry7Y6.js";import"./Button-_yEl9m9t.js";import"./useLabels-DnN5Bi55.js";import"./useButton-DxBAtA7-.js";import"./useTextField-Dd5rKgIV.js";import"./useControlledState-CiYq6-kc.js";import"./useField-gFr9eP0s.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DwSB85mD.js";import"./Dialog-CHar3iRp.js";import"./OverlayArrow-Cqd5StSd.js";import"./useResizeObserver-BIMmTIw9.js";import"./Collection-Ba8uBxyK.js";import"./index-BdOjyXga.js";import"./Separator-BlXWKXik.js";import"./SelectionManager-Bo9jaaWh.js";import"./useEvent-BW6_HwHq.js";import"./scrollIntoView-D7CVscOt.js";import"./SelectionIndicator-Bskb6dyx.js";import"./useDescription-BFDNZgK_.js";import"./ListKeyboardDelegate-DLATjNqf.js";import"./PressResponder-BD0BMPqD.js";import"./useLocalizedStringFormatter-8C8un9Z1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BjV0FuZW.js";import"./VisuallyHidden-DH1p0Y9r.js";import"./Button-qxfYGoKg.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CBKlJ1yT.js";import"./createLucideIcon-D2wUs9_7.js";import"./x-CIFy6nfS.js";import"./Heading-DTHxO0Gw.js";import"./info-Ct8OMXLr.js";import"./Popover-CSX2uwF8.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

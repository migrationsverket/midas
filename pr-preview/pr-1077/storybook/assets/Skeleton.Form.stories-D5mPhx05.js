import{j as e,l}from"./iframe-B8csx-lQ.js";import{S as t}from"./Skeleton-Cwlyuj4C.js";import{T as p}from"./TextField-BFzRRmoS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-OgpIUX-N.js";import"./utils-CaD1t0h3.js";import"./FieldError-qCPIdUr6.js";import"./Text-Nk_W5AjM.js";import"./useFocusRing-CtLa9eaD.js";import"./index-CFvG_i59.js";import"./index-DswvhGAm.js";import"./Text-BdB7kbkm.js";import"./RSPContexts-D1g7Zz4R.js";import"./Form-C6CeHvqz.js";import"./useFormValidation-CRpLLkPo.js";import"./Group-DtoBJmaO.js";import"./Input-BpdG6Jrx.js";import"./Hidden-rw470soy.js";import"./Button-BMaw0M-e.js";import"./useLabels-BKsEn5mf.js";import"./useButton-BXjDl97D.js";import"./useTextField-WkTKoR1k.js";import"./useControlledState-DXIS0caZ.js";import"./useField-DQ83cjwx.js";import"./TextField.module-DdivwlC8.js";import"./Label-BR3ISRbn.js";import"./Dialog-DNnGQ-hP.js";import"./OverlayArrow-CaIIpklf.js";import"./useResizeObserver-BXQACy-a.js";import"./Collection-zter9-ZZ.js";import"./index-BNvBtkY9.js";import"./Separator-DkOqRr6B.js";import"./SelectionManager-BRaVJSqk.js";import"./useEvent-BfC5JKdk.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CgvpTl4k.js";import"./useDescription-DSFLvKUh.js";import"./ListKeyboardDelegate-CKNg6H-q.js";import"./PressResponder-2rGBVuff.js";import"./useLocalizedStringFormatter-D4J2Tzs0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CFZn14D1.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DLhvU9s0.js";import"./Button-CCTCnZfY.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CJcJ86Ob.js";import"./createLucideIcon-HRlJw9Ov.js";import"./x-CSxMNTqR.js";import"./Heading-hrmOO8gY.js";import"./info-DdeMKIXY.js";import"./Popover-CuAHLTOr.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

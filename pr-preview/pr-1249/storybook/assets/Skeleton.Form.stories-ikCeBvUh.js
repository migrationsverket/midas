import{j as e,l}from"./iframe-DwYJYgGb.js";import{S as t}from"./Skeleton-KS228928.js";import{T as p}from"./TextField-BE7u7Pwo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-5vG3PqhS.js";import"./utils-fIJ7LVq8.js";import"./FieldError-8dF8Tbve.js";import"./Text-B4syvpmZ.js";import"./useFocusRing-CXC08Tq5.js";import"./index-DfNt6tNa.js";import"./index-CHvQzPdc.js";import"./Text-CxhOo0fu.js";import"./RSPContexts-DE3QJKMh.js";import"./Form-CF6mtsDJ.js";import"./Group-C2t1rW1T.js";import"./Input-_uPRWUXT.js";import"./Hidden-CwjkXMFO.js";import"./Button-Ddo8eX0a.js";import"./useLabel-BSyxEYuS.js";import"./useLabels-BjAn-6Ht.js";import"./useButton-CGX3_Nnb.js";import"./useTextField-CYPEtwKi.js";import"./useControlledState-CxwoTKvB.js";import"./useField-mcTKDTGz.js";import"./TextField.module-DdivwlC8.js";import"./Label-Q_Om9wzz.js";import"./Dialog-eIQcg82T.js";import"./OverlayArrow-CmYMGfKa.js";import"./useResizeObserver-Cfbnluet.js";import"./Collection-Du3GdM9A.js";import"./index-BXWU9W6R.js";import"./Separator-Ie15OD8n.js";import"./SelectionManager-Bzzdwe4i.js";import"./useEvent-exXZI4Sz.js";import"./scrollIntoView-BsKOETet.js";import"./SelectionIndicator-D5viv05a.js";import"./useDescription-DtI32Oaq.js";import"./ListKeyboardDelegate-Cm-sBpbt.js";import"./PressResponder-CtJMV9fG.js";import"./useLocalizedStringFormatter-LO9Tkb5c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DJwCaNaH.js";import"./getScrollParent-Dee46RGf.js";import"./VisuallyHidden-B0sEyNoY.js";import"./ModalOverlay-DiFMsDLM.js";import"./x-CX4TJhGN.js";import"./createLucideIcon-CCgdfoT7.js";import"./useLocalizedStringFormatter-CQladlVx.js";import"./Heading-Dhs8v48I.js";import"./Button-DpQdXJp1.js";import"./Button.module-BB7N-cLd.js";import"./info-Dn1DucMW.js";import"./Popover-DWnmGCyZ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-Dzhbyx-V.js";import{S as t}from"./Skeleton-BKkd0w0f.js";import{T as p}from"./TextField-D8SP1S3l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DWCvR7Be.js";import"./utils-CB1YxmUd.js";import"./FieldError-BKbX9qzJ.js";import"./Text-B9yiudZO.js";import"./useFocusRing-DJW4L7nP.js";import"./index-GOgi-yIv.js";import"./index-C7t27xFG.js";import"./Text--lu7STeo.js";import"./RSPContexts-BZBUf3ht.js";import"./Form-D-cIW_uQ.js";import"./Group-BeMwF-ca.js";import"./Input-DvtTB9MK.js";import"./Hidden-CFP4Nw8t.js";import"./Button-CBTAD5ia.js";import"./useLabel-Cr2tVHj4.js";import"./useLabels-Dn3VJT3c.js";import"./useButton-ZzDTgbRW.js";import"./useTextField-C5k5GhGk.js";import"./useControlledState-BsGPn7dI.js";import"./useField-DQZemjAW.js";import"./TextField.module-DdivwlC8.js";import"./Label-C63CAp6v.js";import"./Dialog-PCq06Qm1.js";import"./OverlayArrow-DC5up_Z2.js";import"./useResizeObserver-DA-7fZmx.js";import"./Collection-Cyrn4hfM.js";import"./index-COsjAsAS.js";import"./Separator-dQuh_2rQ.js";import"./SelectionManager-CAcvLEQx.js";import"./useEvent-CM_jpF7d.js";import"./scrollIntoView-CGVh69Nr.js";import"./SelectionIndicator-FpX-lNKX.js";import"./useDescription-CQR6r60R.js";import"./ListKeyboardDelegate-D4rfyZ0F.js";import"./PressResponder-XCyiw1VR.js";import"./useLocalizedStringFormatter-D1IY3EM8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CQB60EaB.js";import"./getScrollParent-BKCTdMaY.js";import"./VisuallyHidden-BTnUWvIm.js";import"./ModalOverlay-CQBaCv5J.js";import"./x-Daz8ULC7.js";import"./createLucideIcon-Daz74Vgk.js";import"./useLocalizedStringFormatter-CZwJWfDJ.js";import"./Heading-llBbS4q-.js";import"./Button-DVuadbrT.js";import"./Button.module-BB7N-cLd.js";import"./info-DgGoIkZW.js";import"./Popover-PoVtDkxQ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-1ypBIpqt.js";import{S as t}from"./Skeleton-OxIDbLY5.js";import{T as d}from"./TextField-DAIGDlbt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BTj0acB6.js";import"./utils-B8wMECB5.js";import"./TextField-Ct9bjaMp.js";import"./FieldError-D4xQIw7Q.js";import"./Text-0r7LapIC.js";import"./useFocusRing-BE60GF6p.js";import"./index-OME_eh5M.js";import"./index-bt6Kq2KN.js";import"./Text-B5RNhX_R.js";import"./RSPContexts-BL8PJjGn.js";import"./Form-DAQzpkwF.js";import"./useFormValidation-BQeFm4UE.js";import"./Group-ChVZpX5C.js";import"./Input-7SAs_smO.js";import"./Hidden-JN6h68tz.js";import"./Button-sTPpWxn_.js";import"./useLabels-LwVbPde8.js";import"./useButton-CiHam1fw.js";import"./useTextField-DKMDzkZI.js";import"./useControlledState-Dh7cHA4x.js";import"./useField-BDAsYkFm.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-O-uuT901.js";import"./Dialog-BaNJ9vqK.js";import"./OverlayArrow-Ot35ddh7.js";import"./useResizeObserver-BwXd_kUk.js";import"./Collection-Coqx6eiU.js";import"./index-DEwtnGH3.js";import"./Separator-D4ZgytYp.js";import"./SelectionManager-C3-Fl_-R.js";import"./useEvent-Cutut5XJ.js";import"./scrollIntoView-C9GMTZXb.js";import"./SelectionIndicator-CSJULSgo.js";import"./useDescription-BbB1SG_e.js";import"./ListKeyboardDelegate-D_W7JyfP.js";import"./PressResponder-DbFB1V-x.js";import"./useLocalizedStringFormatter-DyDkLKc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CZ3e9-X3.js";import"./VisuallyHidden-C69N3wb4.js";import"./useLocalizedStringFormatter-WJZfuSlE.js";import"./Button-Cxrzoy92.js";import"./Button.module-CtQ1deO8.js";import"./x-CBuOp1N4.js";import"./createLucideIcon-C531gWR5.js";import"./Heading-yWckuHhd.js";import"./info-BNJPoxUQ.js";import"./Popover-y-XhwUhv.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

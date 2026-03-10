import{j as e,l}from"./iframe-D4qwi5aS.js";import{S as t}from"./Skeleton-DwTa9jp-.js";import{T as p}from"./TextField-DpmVpv52.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DhPEMBUU.js";import"./utils-B-Nz338F.js";import"./FieldError-COTYRssi.js";import"./Text-0C5O0r7x.js";import"./useFocusRing-6dU2HUqL.js";import"./index-BCxIJmj3.js";import"./index-CRmVn8Hv.js";import"./Text-C5mfap0J.js";import"./RSPContexts-CXXJq7xx.js";import"./Form-C7dsP6GN.js";import"./useFormValidation-VS44UaCw.js";import"./Group-m7tVaWxe.js";import"./Input-D9oSdawS.js";import"./Hidden-CM9pZ1fW.js";import"./Button-Da-DtFCd.js";import"./useLabels-Cj7LPX5i.js";import"./useButton-7Tej6Dr7.js";import"./useTextField-CGSVZqvT.js";import"./useControlledState-BpYdNZzj.js";import"./useField-CemwzZhq.js";import"./TextField.module-DdivwlC8.js";import"./Label-UddvlPk9.js";import"./Dialog-DglFMp0k.js";import"./OverlayArrow-CNo4ecrH.js";import"./useResizeObserver-CEDVDmEs.js";import"./Collection-CuVUb6O2.js";import"./index-BSSxLsJ3.js";import"./Separator-CzylDj9v.js";import"./SelectionManager-32JLFw_J.js";import"./useEvent-uU1Q1mcZ.js";import"./scrollIntoView-Dwx5yIaq.js";import"./SelectionIndicator-B1z3YSxs.js";import"./useDescription-1CMda98v.js";import"./ListKeyboardDelegate-D0Gtj1tU.js";import"./PressResponder-BU5iSFLt.js";import"./useLocalizedStringFormatter-BblBLaNa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B2lfJXjh.js";import"./getScrollParent-Cwbjb50l.js";import"./VisuallyHidden-bcnkwpD1.js";import"./Button-BtMm2W3M.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-9LC131sM.js";import"./createLucideIcon-hD68kNPm.js";import"./x-CiO824Qj.js";import"./Heading-8tKoHdkE.js";import"./info-C0SVif4L.js";import"./Popover-B0dCiXtz.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

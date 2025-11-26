import{j as e,l}from"./iframe-BFAT86ge.js";import{S as t}from"./Skeleton-BvV8EZTI.js";import{T as d}from"./TextField-ZgGOxqMI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BLEw2fuz.js";import"./utils-Ba9aKAk3.js";import"./TextField-CYNLVTBS.js";import"./FieldError-D620tWPG.js";import"./Text-ZCo5zKuv.js";import"./useFocusRing-DMrOFPKB.js";import"./index-BFncSmEm.js";import"./index-frs3Q4tr.js";import"./Text-DuhPYjo1.js";import"./RSPContexts-BYWA1x4J.js";import"./Form-D2r3omc4.js";import"./useFormValidation-C2NZitLO.js";import"./Group-BI-qvtT1.js";import"./Input-BmvtXt0I.js";import"./Hidden-eduYOiEE.js";import"./Button-DLAy5IOQ.js";import"./useLabels-C6lMhNDy.js";import"./useButton-B3TVvISn.js";import"./useTextField-B5lblK7e.js";import"./useControlledState-CkPmYDR8.js";import"./useField-BiZ-hB8h.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-kdwunqNb.js";import"./Dialog-PUDk5BYI.js";import"./OverlayArrow-BGApCK5D.js";import"./useResizeObserver-B7UpDBay.js";import"./Collection-BiYgrWvW.js";import"./index-B1FZUAB2.js";import"./Separator-Dhh2VqBs.js";import"./SelectionManager-DlsLVDHq.js";import"./useEvent-CnO47SCe.js";import"./scrollIntoView-BSaH7Nmd.js";import"./SelectionIndicator-D0NQfIHj.js";import"./useDescription-Cc9k7uL8.js";import"./ListKeyboardDelegate-CvV3oALN.js";import"./PressResponder-C6_AVyjI.js";import"./useLocalizedStringFormatter-EcwRZ9Dr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CsKOuMBX.js";import"./VisuallyHidden-CyAMcSTC.js";import"./Button-D7VV456q.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-D_c5jWec.js";import"./createLucideIcon-DcKvq49U.js";import"./x-Chk2rlLw.js";import"./Heading-BPJd7_5o.js";import"./info-BGysnS2p.js";import"./Popover-CUejfpX7.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

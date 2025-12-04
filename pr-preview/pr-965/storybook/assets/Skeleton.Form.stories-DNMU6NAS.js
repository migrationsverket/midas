import{j as e,l}from"./iframe-CNsxVRri.js";import{S as t}from"./Skeleton-DT0XYFl-.js";import{T as d}from"./TextField-BEDetPLZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2yk0ARi.js";import"./utils-Co8chztC.js";import"./TextField-NqqLhsXa.js";import"./FieldError-CQWVGndw.js";import"./Text-BcPHhIoD.js";import"./useFocusRing-DsaNSwIK.js";import"./index-iQGs7ivC.js";import"./index-xzFc3yKu.js";import"./Text-B0puKBqo.js";import"./RSPContexts-C2NqX-xc.js";import"./Form-B6CFbbwE.js";import"./useFormValidation-BWezWJjJ.js";import"./Group-Cz-0LkKn.js";import"./Input-BQ-lUrmJ.js";import"./Hidden-DMs7iDYH.js";import"./Button-Do7i_7km.js";import"./useLabels-DqA2utri.js";import"./useButton-DcobyQYb.js";import"./useTextField-DX-6Lf27.js";import"./useControlledState-CUxSahqU.js";import"./useField-B6T0pS4P.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Tx4_SrL5.js";import"./Dialog-5tOVNM_2.js";import"./OverlayArrow-DAa0_K1x.js";import"./useResizeObserver-DbTvgdDX.js";import"./Collection-CPDPbXqb.js";import"./index-Cj8N2CDg.js";import"./Separator-CJNgCpNk.js";import"./SelectionManager-CFEzyJjx.js";import"./useEvent-BWpSMV0r.js";import"./scrollIntoView-ClfUnk7u.js";import"./SelectionIndicator-DbzXfTDz.js";import"./useDescription-D59E3gfa.js";import"./ListKeyboardDelegate-C9WpRKID.js";import"./PressResponder-DSQ1wpIq.js";import"./useLocalizedStringFormatter-BPCDmmQm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DME4hMuJ.js";import"./VisuallyHidden-8GTBfxVg.js";import"./Button-BVskKP47.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C5Du77Az.js";import"./createLucideIcon-RNATAqG3.js";import"./x-BTpUX4-J.js";import"./Heading-DaJq3jyB.js";import"./info-B5j5iOPY.js";import"./Popover-DuW4ikAG.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

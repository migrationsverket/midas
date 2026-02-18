import{j as e,l}from"./iframe-DY-bI3Dg.js";import{S as t}from"./Skeleton-ho1EQ6WS.js";import{T as p}from"./TextField-BvlMiHw9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BecHIjRQ.js";import"./utils-BUdZKq-e.js";import"./FieldError-q3KGq0Kn.js";import"./Text-BkObjjcV.js";import"./useFocusRing-CoHcHCSJ.js";import"./index-BbO7iBgM.js";import"./index-BlJnpVmq.js";import"./Text-Ds5qe3f-.js";import"./RSPContexts-kc53uUDM.js";import"./Form-D66FRXmw.js";import"./useFormValidation-CXVRgJGB.js";import"./Group-BTkKg-7f.js";import"./Input-BCd3MNHK.js";import"./Hidden-CIKdpVxl.js";import"./Button-BtfH31ZB.js";import"./useLabels-BM327Hkh.js";import"./useButton-BbpHsEWl.js";import"./useTextField-BhUrSeZr.js";import"./useControlledState-DqXLKbh_.js";import"./useField-CytuTSNm.js";import"./TextField.module-Cm6797Xw.js";import"./Label-CdOudSpf.js";import"./Dialog-DKiU6M1K.js";import"./OverlayArrow-BgP4fVxJ.js";import"./useResizeObserver-D5biT02n.js";import"./Collection-D7m5k63G.js";import"./index-lbOlXOLi.js";import"./Separator-C33z_10n.js";import"./SelectionManager-B5LK4q_Z.js";import"./useEvent-yA0ydpfu.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CDaozb0n.js";import"./useDescription-MJqaxJYE.js";import"./ListKeyboardDelegate-DA4YIuyy.js";import"./PressResponder-CkPTmaw2.js";import"./useLocalizedStringFormatter-C3XMQvqw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BkvUYII9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bco5rUHP.js";import"./Button-D_pZMGSb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C40Mbmtc.js";import"./createLucideIcon-WJDXuKIa.js";import"./x-DCOCLMzd.js";import"./Heading-eS0c-HBo.js";import"./info-D9M1w_z6.js";import"./Popover-DywFxgdd.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

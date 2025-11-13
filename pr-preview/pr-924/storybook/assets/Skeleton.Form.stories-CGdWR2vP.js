import{j as e,l}from"./iframe-BkRwSuoF.js";import{S as t}from"./Skeleton-C9UaUXPu.js";import{T as d}from"./TextField-CfqHw4zO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CzPEf0qQ.js";import"./utils-BdDw6N01.js";import"./FieldError-dJdm6PvZ.js";import"./Text-jotSgVSv.js";import"./useFocusRing-B3CGeMvZ.js";import"./index-CCvpWvoT.js";import"./index-Dldu1ldC.js";import"./Text-gdxh6ZQb.js";import"./RSPContexts-B3MVorUA.js";import"./Form-DOOHuSw0.js";import"./useFormValidation-CyIPY_c0.js";import"./Group-CZmbId2T.js";import"./Input-bJEZLITv.js";import"./Hidden-C-1m_lMC.js";import"./Button-CO79J77U.js";import"./useLabels--gJ5LkCh.js";import"./useButton-CswrRlr6.js";import"./useTextField-CADFlfXR.js";import"./useControlledState-v9DI2Sbw.js";import"./useField-B5j2ehat.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-D0k0Szph.js";import"./Dialog-gbv4WXg5.js";import"./OverlayArrow-Cp57ejBN.js";import"./useResizeObserver-yTt8U_gJ.js";import"./Collection-BDg-oKXI.js";import"./index-DXImVbQC.js";import"./Separator-Y3kzNyzs.js";import"./SelectionManager-CmDhkmt5.js";import"./useEvent-FTwQNHvp.js";import"./scrollIntoView-O2aOyMO3.js";import"./SelectionIndicator-B_q3NmJe.js";import"./useDescription-EQv126BS.js";import"./ListKeyboardDelegate-B9onWOf6.js";import"./PressResponder-CxcA2ZlI.js";import"./useLocalizedStringFormatter-Cwp5Qrc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DA13BLUh.js";import"./VisuallyHidden-Dh5oNNi1.js";import"./useLocalizedStringFormatter-CsTWeR-2.js";import"./Button-Og-jXPv3.js";import"./Button.module-CtQ1deO8.js";import"./x-CvWV-YFY.js";import"./createLucideIcon-CDTY4y58.js";import"./Heading-C09GpJqN.js";import"./info-9I298WH0.js";import"./Popover-7GaU8Vrs.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};

import{j as e,l}from"./iframe-B6mQtHg_.js";import{S as t}from"./Skeleton-WXOfhwzK.js";import{T as p}from"./TextField-ICZTEDeu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C2_MWFS5.js";import"./utils-BRho1dRj.js";import"./FieldError-DsUm8Cjt.js";import"./Text-P1kAvbTC.js";import"./useFocusRing-D8gmEGCC.js";import"./index-9ySVHYs0.js";import"./index-DwLN6Mmc.js";import"./Text-CC5_ooHx.js";import"./RSPContexts-BXQmSd5O.js";import"./Form-CsBpewWU.js";import"./useFormValidation-Bzj4B0-M.js";import"./Group-CR_5RNct.js";import"./Input-Dy5xnt0b.js";import"./Hidden-Zr6f3d_F.js";import"./Button-fYT3W3-R.js";import"./useLabels-BdOR7spR.js";import"./useButton-MzgnshF7.js";import"./useTextField-DkG25mzw.js";import"./useControlledState-BRStpwCw.js";import"./useField-DPGyVH2q.js";import"./TextField.module-DdivwlC8.js";import"./Label-C5lEjVRK.js";import"./Dialog-DWvUH0sc.js";import"./OverlayArrow-D9hgR9BD.js";import"./useResizeObserver-CDTc09hL.js";import"./Collection-Dh9iTOnN.js";import"./index-iGuCePgB.js";import"./Separator-CEDzVaUO.js";import"./SelectionManager-Cghfwki6.js";import"./useEvent-CRuitgb9.js";import"./scrollIntoView-5Pop8Kz8.js";import"./SelectionIndicator-DxHOx4Ux.js";import"./useDescription-D1JiDHG9.js";import"./ListKeyboardDelegate-l6tisyI0.js";import"./PressResponder-E-1FVKal.js";import"./useLocalizedStringFormatter-Bb8-ILz9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQO17Uvf.js";import"./getScrollParent-D1snmpn8.js";import"./VisuallyHidden-B9plZj9e.js";import"./x-CmYm4Ua_.js";import"./createLucideIcon-BZZ3uCZ8.js";import"./useLocalizedStringFormatter-C_-Wi8FC.js";import"./Heading-K2R40Ekj.js";import"./Button-CjEwSg5p.js";import"./Button.module-BB7N-cLd.js";import"./info-DbWSBnvm.js";import"./Popover-_YB3zJLu.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

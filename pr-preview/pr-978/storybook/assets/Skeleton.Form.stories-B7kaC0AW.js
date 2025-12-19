import{j as e,l}from"./iframe-C7QVanE1.js";import{S as t}from"./Skeleton-CC8jg9ak.js";import{T as p}from"./TextField-DoLXUk2J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-gOV4orFA.js";import"./utils-DryWrSsO.js";import"./TextField-DJgV6m_S.js";import"./FieldError-Bc8wiCVr.js";import"./Text-Caxmjr4k.js";import"./useFocusRing-CUPRYPTR.js";import"./index-CZH-gIg2.js";import"./index-CQdr9i86.js";import"./Text-DDFZmojY.js";import"./RSPContexts-B6-3qImG.js";import"./Form-z3vPy4HV.js";import"./useFormValidation-DgNcLFsP.js";import"./Group-CRl1oIsH.js";import"./Input-Dil5wJ-4.js";import"./Hidden-DWveG1to.js";import"./Button-B0ygehGU.js";import"./useLabels-CDWq4CCD.js";import"./useButton-Bgb6cmzM.js";import"./useTextField-D05VSCUA.js";import"./useControlledState-wg0wExfo.js";import"./useField-BkcLQ7gE.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DFC4Ayxj.js";import"./Dialog-DnW7z-lO.js";import"./OverlayArrow-C493vImD.js";import"./useResizeObserver-CeLtm5-b.js";import"./Collection-CfvVOKcU.js";import"./index-CN6QiRf-.js";import"./Separator-gW8aqniL.js";import"./SelectionManager-CN43C4SR.js";import"./useEvent-Bn3ja8Lv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BP1jOhS7.js";import"./useDescription-Bd9LwgFX.js";import"./ListKeyboardDelegate-Byqn4HKE.js";import"./PressResponder-BeST1YwG.js";import"./useLocalizedStringFormatter-CpMZdteZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BbdnziW9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-6jSDaJWd.js";import"./Button-CCRsXMgo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DHWurjhu.js";import"./createLucideIcon-Ci9lC38R.js";import"./x-BoziCGps.js";import"./Heading-DLpZtmIA.js";import"./info-NvV6yIu1.js";import"./Popover-CrAgRj2O.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

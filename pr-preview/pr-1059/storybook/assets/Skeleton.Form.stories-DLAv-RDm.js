import{j as e,l}from"./iframe-C5a1BioU.js";import{S as t}from"./Skeleton-B14eN5Ea.js";import{T as p}from"./TextField-B9XX69zF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CWRrKx1M.js";import"./utils-BKKhqGgZ.js";import"./FieldError-BHjSBbDT.js";import"./Text-Dsf7XnBX.js";import"./useFocusRing-CCvBuHoi.js";import"./index-DJjxifz8.js";import"./index-Cd0yh21x.js";import"./Text-CBM72llQ.js";import"./RSPContexts-Z4ebeqL_.js";import"./Form-D6YdVmID.js";import"./useFormValidation-cZ2U5Xpk.js";import"./Group-CqhSNf3u.js";import"./Input-DQciM4o6.js";import"./Hidden-BkRTM2tY.js";import"./Button-BcpwI67Q.js";import"./useLabels-aRHkw2YO.js";import"./useButton-DQmD9itb.js";import"./useTextField-DcbiXo2q.js";import"./useControlledState-Dc-egfuk.js";import"./useField-CmizDYFo.js";import"./TextField.module-Cm6797Xw.js";import"./Label-C7kvwi34.js";import"./Dialog-Cqc9Ac0d.js";import"./OverlayArrow-KY3NB0gh.js";import"./useResizeObserver-DIa6rcSq.js";import"./Collection-CLv5EMAY.js";import"./index-c6WcVRzH.js";import"./Separator-D9aUuX5_.js";import"./SelectionManager-D_-IELdk.js";import"./useEvent-BljPOtQc.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DEZMMIsz.js";import"./useDescription-DdZRWQoe.js";import"./ListKeyboardDelegate-C1xkpV8e.js";import"./PressResponder-E-FKMbJJ.js";import"./useLocalizedStringFormatter-nY2oYBwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CSgJ3-WG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D-CrKNJu.js";import"./Button-BmzaM-yt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter--NJZCpI7.js";import"./createLucideIcon-C3B2EhYD.js";import"./x-CgGKRg4Y.js";import"./Heading-BWMBGDm5.js";import"./info-C9AVZRiE.js";import"./Popover-CqN5RK-E.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

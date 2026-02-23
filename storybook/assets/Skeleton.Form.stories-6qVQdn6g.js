import{j as e,l}from"./iframe-COikYHdP.js";import{S as t}from"./Skeleton-B0KacupI.js";import{T as p}from"./TextField-DdeAq7Vo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-mT90SM5U.js";import"./utils-BMDm-KrN.js";import"./FieldError-DV7LrvHp.js";import"./Text-NJjQXwoJ.js";import"./useFocusRing-BWhmDfF8.js";import"./index-DaHyXhuy.js";import"./index-E3BpGcaE.js";import"./Text-B3B9omX-.js";import"./RSPContexts-BYXms5mf.js";import"./Form-DAtbnfCi.js";import"./useFormValidation-B9TCmMh5.js";import"./Group-DZHSABcu.js";import"./Input-CQH7djhz.js";import"./Hidden-BkpCwkk8.js";import"./Button-AP7Y4Mno.js";import"./useLabels-M7dy5Zja.js";import"./useButton-CCmPBSSV.js";import"./useTextField-RLOY_8_i.js";import"./useControlledState-Cl3D1B3q.js";import"./useField-Cj2sp65a.js";import"./TextField.module-Dhscz2t0.js";import"./Label-BZ7S-urD.js";import"./Dialog-CLFuv6eo.js";import"./OverlayArrow-CuE0bO4i.js";import"./useResizeObserver-BBtOrrfN.js";import"./Collection-9SssQ7g7.js";import"./index-C6l6_kf4.js";import"./Separator-72pt8j9u.js";import"./SelectionManager-BpR3qSNY.js";import"./useEvent-DLghMCOA.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BEa7QTXJ.js";import"./useDescription-BHrfYc6I.js";import"./ListKeyboardDelegate-D1f7Mx4w.js";import"./PressResponder-DT9HIJbT.js";import"./useLocalizedStringFormatter-Dt-u1m1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_I41jya.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-PvYD6Ub5.js";import"./Button-jvTkoE8j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fXUv9IGD.js";import"./createLucideIcon-Cfor4pko.js";import"./x-DsF834kI.js";import"./Heading-D5tI5UT-.js";import"./info--z7ZDhbZ.js";import"./Popover-BAgex6g3.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

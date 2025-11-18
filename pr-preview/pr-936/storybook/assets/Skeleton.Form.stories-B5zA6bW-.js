import{j as e,l}from"./iframe-Cm-nFXgj.js";import{S as t}from"./Skeleton-aL8s_e2Z.js";import{T as d}from"./TextField-C2M0JEuD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DP7Cbb5t.js";import"./utils-DzXT04ji.js";import"./TextField-CCmhCiQx.js";import"./FieldError-D74Ix_ol.js";import"./Text-COY0mYa2.js";import"./useFocusRing-B1ph6_YX.js";import"./index-COonVY99.js";import"./index-Cgz1zuFt.js";import"./Text-BPyIK2Xp.js";import"./RSPContexts-B-hrydvR.js";import"./Form-DA-PxQ89.js";import"./useFormValidation-CHfpCGS0.js";import"./Group-WeZAfMPu.js";import"./Input-Bs62qr5w.js";import"./Hidden-C2cWBi-M.js";import"./Button-BqjtFLeK.js";import"./useLabels-k6HUJMVn.js";import"./useButton-WCkm0bok.js";import"./useTextField-BfNi0PMi.js";import"./useControlledState-BAnQ-hqM.js";import"./useField-DJZk_iyu.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CVGX7SZA.js";import"./Dialog-BOiIsQ9M.js";import"./OverlayArrow-CujCbKhD.js";import"./useResizeObserver-D_vgl-2I.js";import"./Collection-DLj4MZQo.js";import"./index-DbjVBF2v.js";import"./Separator-CoDfGBLQ.js";import"./SelectionManager-CWdS5U_b.js";import"./useEvent-BSNIYPFi.js";import"./scrollIntoView-GK21G1Qr.js";import"./SelectionIndicator-5fNuxuas.js";import"./useDescription-CQizvqev.js";import"./ListKeyboardDelegate-Bq4Cv7eP.js";import"./PressResponder-65CT3wxF.js";import"./useLocalizedStringFormatter-Q8gIMwH7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D_A0WQI2.js";import"./VisuallyHidden-B9taaflH.js";import"./useLocalizedStringFormatter-5utfLQwv.js";import"./Button-DoGJ8kEh.js";import"./Button.module-CtQ1deO8.js";import"./x-Dl4JhGUD.js";import"./createLucideIcon-Cv6XV0Hb.js";import"./Heading-CDG1N05B.js";import"./info-D0Z1H11u.js";import"./Popover-FiI-epKw.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

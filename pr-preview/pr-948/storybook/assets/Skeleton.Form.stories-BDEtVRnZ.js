import{j as e,l}from"./iframe-g7NEJkuC.js";import{S as t}from"./Skeleton-Bv-kTM_U.js";import{T as d}from"./TextField-CZUF6V38.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DnehCmF9.js";import"./utils-0G2rZpWX.js";import"./TextField-CQFo2G_e.js";import"./FieldError-BxotCqXX.js";import"./Text-2wl8S3yv.js";import"./useFocusRing-umR6fa2b.js";import"./index-CHObnUG4.js";import"./index-D3ZTBEsf.js";import"./Text-COXbJ1k6.js";import"./RSPContexts-DnvA1an_.js";import"./Form-DORkrEre.js";import"./useFormValidation-pQBCJ-I-.js";import"./Group-CQ2OBqNb.js";import"./Input-2cfmIX1O.js";import"./Hidden-D0w2WJXS.js";import"./Button-DLz7qxXY.js";import"./useLabels-CaMMn4xN.js";import"./useButton-DLlC1wR-.js";import"./useTextField-DPgzgftV.js";import"./useControlledState-BfrgZwaU.js";import"./useField-TSEdftWR.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DsL0jyv0.js";import"./Dialog-UNwVDvyc.js";import"./OverlayArrow-C3diIVx5.js";import"./useResizeObserver-BzoJpgxS.js";import"./Collection-D6GjZd23.js";import"./index-fx8RI-wG.js";import"./Separator-DMTf5PvF.js";import"./SelectionManager-BRgBdon6.js";import"./useEvent-B-pgGpBm.js";import"./scrollIntoView-BhdzKXRp.js";import"./SelectionIndicator-nYxq64Nb.js";import"./useDescription-Q7smjSa7.js";import"./ListKeyboardDelegate-Bwr0wyqx.js";import"./PressResponder-NQTQ9Dq3.js";import"./useLocalizedStringFormatter-Ck5RdZog.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DPVMq2vt.js";import"./VisuallyHidden-DsC2d4kL.js";import"./Button-wkNo0dzg.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BH3Jo7uS.js";import"./createLucideIcon-968lwoO8.js";import"./x-BwjZIwdP.js";import"./Heading-Cuo-BxH3.js";import"./info-6B8gOvS_.js";import"./Popover-b7Xkp_a6.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

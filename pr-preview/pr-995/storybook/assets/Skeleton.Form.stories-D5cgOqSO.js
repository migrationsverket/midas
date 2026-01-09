import{j as e,l}from"./iframe-BdIMh-mp.js";import{S as t}from"./Skeleton-DW93cFro.js";import{T as p}from"./TextField-seaSJ3qG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BFVZCsDd.js";import"./TextField-BpG_pKKv.js";import"./utils-DcDhyL9A.js";import"./FieldError-DsymNm4A.js";import"./Text-C4WrRLPZ.js";import"./useFocusRing-BNwH8fuD.js";import"./index-hViR2ylZ.js";import"./index-DZNXlpZV.js";import"./Text-Bx_0lix_.js";import"./RSPContexts-heqwVcoc.js";import"./Form-CaiSIrkQ.js";import"./useFormValidation-C6vbNqNO.js";import"./Group-CnMK0XjG.js";import"./Input-DFl5F-qn.js";import"./Hidden-Wyg5sLjl.js";import"./Button-zJPbjdhx.js";import"./useLabels-C4ABAGya.js";import"./useButton-BS6Zvdtu.js";import"./useTextField-sO65FhyB.js";import"./useControlledState-CajUkngI.js";import"./useField-BrWC9yz0.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ajdRWdF1.js";import"./Dialog-BbZHBJH-.js";import"./OverlayArrow-Bp8STe4J.js";import"./useResizeObserver-D7jrSUSa.js";import"./Collection-Cy4nxbfX.js";import"./index-BbBJBKCY.js";import"./Separator-B5-iJ2c-.js";import"./SelectionManager-4etEtUOS.js";import"./useEvent-DQNjJNfH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B1zBVXx_.js";import"./useDescription-BK2hXU45.js";import"./ListKeyboardDelegate-CNLQbBT3.js";import"./PressResponder-BPkqrdcy.js";import"./useLocalizedStringFormatter-BqgT-J0v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMlNB04R.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D8MfmHyq.js";import"./Button-CNVh9qH3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXrVuCTi.js";import"./createLucideIcon-DEobE2Q1.js";import"./x-C6Q4fVg_.js";import"./Heading-DtHnABte.js";import"./info-BDaUDc1X.js";import"./Popover-Vb2xxPW2.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

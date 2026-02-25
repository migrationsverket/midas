import{j as e,l}from"./iframe-BMRKkr6e.js";import{S as t}from"./Skeleton-vRnmkXNy.js";import{T as p}from"./TextField-C7w9plfe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BaiFRGkU.js";import"./utils-B-Wd4T21.js";import"./FieldError-CYoJn7Ex.js";import"./Text-Dwlww6gP.js";import"./useFocusRing-CUJDhn4b.js";import"./index-DC2q9WHS.js";import"./index-DM5nM3xE.js";import"./Text-yRvyJMt7.js";import"./RSPContexts-BnN2F5J4.js";import"./Form-BSq0XxHe.js";import"./useFormValidation-D3ipRiab.js";import"./Group-gn_UrHcc.js";import"./Input-Bm6PWXPk.js";import"./Hidden-l6G7bJI-.js";import"./Button-Dhgmb7a4.js";import"./useLabels-LcBHp2R_.js";import"./useButton-Dx2DQTbk.js";import"./useTextField-9U_j3L1E.js";import"./useControlledState-CtWZRpAk.js";import"./useField-BYylXV7g.js";import"./TextField.module-DdivwlC8.js";import"./Label-_wBKyD_e.js";import"./Dialog-CwJI87Uj.js";import"./OverlayArrow-C3WhtyZT.js";import"./useResizeObserver-38Wtw_EX.js";import"./Collection-CrtYSmGP.js";import"./index-gixeR2_9.js";import"./Separator-C44O_kW2.js";import"./SelectionManager-DiVceX2c.js";import"./useEvent-bPhGLQHX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DdxuIDlF.js";import"./useDescription-C304Q647.js";import"./ListKeyboardDelegate-CR7uIuuR.js";import"./PressResponder-C3rlrrkb.js";import"./useLocalizedStringFormatter-DHdUL6pM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKvv7o_3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ul3GEQ14.js";import"./Button-8LMnIdeM.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DwRrqd4W.js";import"./createLucideIcon-DZqSyMAm.js";import"./x-D17aNKNC.js";import"./Heading-BEILCOej.js";import"./info-Saq-iQ1I.js";import"./Popover-CPI7ch0m.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

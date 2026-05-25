import{j as e,l}from"./iframe-RhDbrXC3.js";import{S as t}from"./Skeleton-DR3K4xx7.js";import{T as p}from"./TextField-COBCg-I6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BszqlPfW.js";import"./utils-DW8RLnA8.js";import"./FieldError-BMJ6O_ac.js";import"./Text-BjSdk3hx.js";import"./useFocusRing-gsVXsph9.js";import"./index-Bq-QYhEQ.js";import"./index-D8RpSJOW.js";import"./Text-CcqjDRD2.js";import"./RSPContexts-CYLIcFJW.js";import"./Form-BGhlaKqh.js";import"./Group-DhQ-VxvO.js";import"./Input-Dm1er1Vq.js";import"./Hidden-UG-LGAyj.js";import"./Button-B7Qh-IV7.js";import"./useLabel-CGSCFlTW.js";import"./useLabels-BNdBxkb6.js";import"./useButton-CVLOUy-6.js";import"./useTextField-DEgpf5VL.js";import"./useControlledState-DqxoR-5f.js";import"./useField-D3_NVbG0.js";import"./TextField.module-DdivwlC8.js";import"./Label-0pC4GIA4.js";import"./Dialog-Db-aziCe.js";import"./OverlayArrow-D5qzCApp.js";import"./useResizeObserver-DCkBLcw-.js";import"./Collection-BSc5pS1V.js";import"./index-Cx4SVn-F.js";import"./Separator-BYOQnxO2.js";import"./SelectionManager-BHvP0mMk.js";import"./useEvent-Cahrq6rW.js";import"./scrollIntoView-BRqXrGDm.js";import"./SelectionIndicator-CrZwTg5e.js";import"./useDescription-D6Rbp9cO.js";import"./ListKeyboardDelegate-BqZvF2rt.js";import"./PressResponder-56d_UeXY.js";import"./useLocalizedStringFormatter-DVReLGbq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-eyTzZ1lY.js";import"./getScrollParent-CN5B_Bz1.js";import"./VisuallyHidden-BacDaEj4.js";import"./ModalOverlay-DW0y9ttQ.js";import"./x-BCkyh0wS.js";import"./createLucideIcon-CO3bJS-y.js";import"./useLocalizedStringFormatter-C2RlB95E.js";import"./Heading-BSbl4Tma.js";import"./Button-ByeM9eCK.js";import"./Button.module-BB7N-cLd.js";import"./info-BwXMhHSU.js";import"./Popover-LSszjAGj.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

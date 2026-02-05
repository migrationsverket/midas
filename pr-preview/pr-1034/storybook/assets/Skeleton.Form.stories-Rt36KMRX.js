import{j as e,l}from"./iframe-D0l--c6C.js";import{S as t}from"./Skeleton-Dv97FEcF.js";import{T as p}from"./TextField-D2vE_GYC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B9YcW49i.js";import"./utils-VeCz3m0s.js";import"./TextField-D-TXcZgg.js";import"./FieldError-Bk0AsuFn.js";import"./Text-BpMUK5iu.js";import"./useFocusRing-TJh2D1Hm.js";import"./index-DoExQatV.js";import"./index-RphitS5C.js";import"./Text-evSykvIm.js";import"./RSPContexts-OtAouDzC.js";import"./Form-D7_1EBwv.js";import"./useFormValidation-DKycCepU.js";import"./Group-BKqtSSTY.js";import"./Input-9sUm-UmF.js";import"./Hidden-BF6VB1MU.js";import"./Button-BerIw-Lw.js";import"./useLabels-CSsYCRJ9.js";import"./useButton-Dk6hNhi1.js";import"./useTextField-D1yyU7Zd.js";import"./useControlledState-DG9hXw45.js";import"./useField-CkNB1FqH.js";import"./TextField.module-DpzeWGpt.js";import"./Label-8LkrEHlL.js";import"./Dialog-lxRiuV_L.js";import"./OverlayArrow-CG4zEYYh.js";import"./useResizeObserver-DCvhUmSc.js";import"./Collection-Fbt71xYE.js";import"./index-CAkoeHbW.js";import"./Separator-CSB41d5-.js";import"./SelectionManager-DneqIR5T.js";import"./useEvent-G9uvljhU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D_FwF8a6.js";import"./useDescription-Dv4NgNk6.js";import"./ListKeyboardDelegate-VEziE7E2.js";import"./PressResponder-f5Z6KAl0.js";import"./useLocalizedStringFormatter-DPchQlap.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeLJJodF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-EuNheofa.js";import"./Button-D47vYwiU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVxlra1v.js";import"./createLucideIcon-DBbK9uba.js";import"./x-CMJI3hQn.js";import"./Heading-h-TUqqkF.js";import"./info-EOV5rQvt.js";import"./Popover-CRr_QX5c.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

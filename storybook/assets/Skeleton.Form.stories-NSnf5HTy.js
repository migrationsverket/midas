import{j as e,l}from"./iframe-BarP2jEI.js";import{S as t}from"./Skeleton-BYk6G90H.js";import{T as p}from"./TextField-Wi6LQIRL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B0c94QJR.js";import"./utils-C4VFQC2w.js";import"./TextField-Bluy-sG3.js";import"./FieldError-DxRFbn5t.js";import"./Text-Cgl57qJM.js";import"./useFocusRing-DKrTHlrP.js";import"./index-qTJghRDJ.js";import"./index-B3DTuUjM.js";import"./Text-CFga_qib.js";import"./RSPContexts-DorGtGJK.js";import"./Form-C5lx1s5w.js";import"./useFormValidation-DoiobDGc.js";import"./Group-CD6hfVzc.js";import"./Input-CHXIUyiq.js";import"./Hidden-BzLfC3ct.js";import"./Button-BFy7bnhd.js";import"./useLabels-EBmgp5uD.js";import"./useButton-B6nqpc-n.js";import"./useTextField-OlH7MLtx.js";import"./useControlledState-DPmoT0HX.js";import"./useField-_KFG8c9F.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BWapmDIg.js";import"./Dialog-D7ridQn2.js";import"./OverlayArrow-CCV6megK.js";import"./useResizeObserver-BmyNX4--.js";import"./Collection-B0ZXv8zU.js";import"./index-ccBN5LT5.js";import"./Separator-D1J7mo9z.js";import"./SelectionManager-zJTbAlTg.js";import"./useEvent-8BDkAAU_.js";import"./scrollIntoView-DWi33ldc.js";import"./SelectionIndicator-BCuneF3-.js";import"./useDescription-Dpb_au7p.js";import"./ListKeyboardDelegate-Ds2DiDW7.js";import"./PressResponder-Eu0Dw5_N.js";import"./useLocalizedStringFormatter-C81jcEn6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BvHL7zz3.js";import"./VisuallyHidden-xLs_ajub.js";import"./Button-BcHfCKKh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C2KBH29y.js";import"./createLucideIcon-MWFfQUSk.js";import"./x-DIka_85k.js";import"./Heading-C0pjRHxu.js";import"./info-H4Ph27dn.js";import"./Popover-vDS3n8YI.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

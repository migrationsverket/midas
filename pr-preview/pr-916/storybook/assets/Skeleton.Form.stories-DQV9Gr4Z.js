import{j as e,l}from"./iframe-ylZf3Rzh.js";import{S as t}from"./Skeleton-CrqNCgY4.js";import{T as d}from"./TextField-CRKTfqb4.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C-7VQpm9.js";import"./utils-D06pAXX_.js";import"./FieldError-DTCUMNT4.js";import"./Text-Db7o3Fbo.js";import"./useFocusRing-Bo93gYby.js";import"./index-Bq-vAhim.js";import"./index-Crjclm7s.js";import"./Text-8r5M_h2W.js";import"./RSPContexts-DqWiROll.js";import"./Form-DGmsYjmu.js";import"./useFormValidation-DQYvxRz3.js";import"./Group-BH1NEErD.js";import"./Input-B_nIgldv.js";import"./Hidden-CalmMv23.js";import"./Button-DhYk_hW2.js";import"./useLabels-Bxulg4qY.js";import"./useButton-C5dBSQLo.js";import"./useTextField-C7uk9wws.js";import"./useControlledState-Cl9-8Wdt.js";import"./useField-BvB7zQrO.js";import"./TextField.module-DGUQcbB9.js";import"./Label-Cg1jBNTX.js";import"./Dialog-Bz179aOh.js";import"./OverlayArrow-DS1bsXeC.js";import"./useResizeObserver-CRzO9m8h.js";import"./Collection-CeI_Glya.js";import"./index-BVihLk1c.js";import"./Separator-DHI9XevK.js";import"./SelectionManager-klvasUvW.js";import"./useEvent-D3oA8MGZ.js";import"./scrollIntoView-B8UBJdD2.js";import"./SelectionIndicator-B3koVQNF.js";import"./useDescription-CvDzlQQ_.js";import"./ListKeyboardDelegate-wUvmdga7.js";import"./PressResponder-Dcp8WsCT.js";import"./useLocalizedStringFormatter-CDM70I-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D2Fpe8q7.js";import"./VisuallyHidden-DcsDn9V3.js";import"./useLocalizedStringFormatter-snId5igW.js";import"./Button-DIVvbVZE.js";import"./Button.module-CtQ1deO8.js";import"./x-8CDfFUmn.js";import"./createLucideIcon-9MEtXIpu.js";import"./Heading-DE2hCXd6.js";import"./info-Bf-AWb7w.js";import"./Popover-CCjiIGEY.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};

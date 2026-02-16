import{j as e,l}from"./iframe-CnLjYyDe.js";import{S as t}from"./Skeleton-eOEKCxiK.js";import{T as p}from"./TextField-ClJcXixg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-GGgBYaSg.js";import"./utils-PY6vNW2t.js";import"./FieldError-Dse4I99A.js";import"./Text-lxQvVvph.js";import"./useFocusRing-C1Kccm1N.js";import"./index-BZe8XCs4.js";import"./index-Bwgl-PlP.js";import"./Text-fnyNn8_R.js";import"./RSPContexts-D780ii40.js";import"./Form-BAHMXRIr.js";import"./useFormValidation-06JlsHvr.js";import"./Group-BWS2VBK9.js";import"./Input-BbGIQ2FK.js";import"./Hidden-CeVZqhsZ.js";import"./Button-CDIxZDro.js";import"./useLabels-BGVam2Lm.js";import"./useButton-BI5y_GVj.js";import"./useTextField-CgFbw68i.js";import"./useControlledState-CDg9gtZR.js";import"./useField-tmII_gfS.js";import"./TextField.module-DpzeWGpt.js";import"./Label-B69aw8i5.js";import"./Dialog-B0ZdwbGm.js";import"./OverlayArrow-CsTaPArh.js";import"./useResizeObserver-CSU3MdTQ.js";import"./Collection-Bwov6hkO.js";import"./index-B8bUntZI.js";import"./Separator-Chc__u0z.js";import"./SelectionManager-DEpk9IGH.js";import"./useEvent-YRvbwzIz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B38C2YlB.js";import"./useDescription-Bvw6I-Tk.js";import"./ListKeyboardDelegate-BMhvgd6_.js";import"./PressResponder-DdX93HrZ.js";import"./useLocalizedStringFormatter-DncuCv5i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-2Mlfyur2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DsHhkbAP.js";import"./Button-BssF-2IR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C41SEwV4.js";import"./createLucideIcon-CEFUCq1N.js";import"./x-BHy0cb0H.js";import"./Heading-CspeW5vm.js";import"./info-CPMZLgPj.js";import"./Popover-DeG2kA7V.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-CORtWEK2.js";import{S as t}from"./Skeleton-CEBL1Rk1.js";import{T as p}from"./TextField-D2LWCDOy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DC4qdlKV.js";import"./utils-CbLqdw8D.js";import"./TextField-BHJB6nM1.js";import"./FieldError-CbdqWLzS.js";import"./Text-D9pn1aDa.js";import"./useFocusRing-DAHXm3rF.js";import"./index-_3IIZhOl.js";import"./index-ghFCsy_t.js";import"./Text-qtQkisRI.js";import"./RSPContexts-b-sJlq1-.js";import"./Form-9GgLpfP_.js";import"./useFormValidation-Al7UTscT.js";import"./Group-1TYyKL1P.js";import"./Input-FKvb-ptk.js";import"./Hidden-DFmh2KXq.js";import"./Button-BOa3LVx9.js";import"./useLabels-CrPPDWzT.js";import"./useButton-C8e2jiOG.js";import"./useTextField-C9xxxFyO.js";import"./useControlledState-CODWqK6W.js";import"./useField-CdCDgYvT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-lGEepuei.js";import"./Dialog-CuXwUcGP.js";import"./OverlayArrow-BZfrClPC.js";import"./useResizeObserver-BGoShnXN.js";import"./Collection-BapyGBue.js";import"./index-D6Yp1oVT.js";import"./Separator-DVOOWIvI.js";import"./SelectionManager-D7Qo189l.js";import"./useEvent-Bof3Tfds.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-S37nVxrw.js";import"./useDescription-CDy7eaqv.js";import"./ListKeyboardDelegate-CGQcVm9U.js";import"./PressResponder-B5CUCkZV.js";import"./useLocalizedStringFormatter-D5B9Cm5e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CBk8eoOm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bgzwemdr.js";import"./Button-By3RYRvn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-1dyltKPK.js";import"./createLucideIcon-BjA-WVv0.js";import"./x-DYcLBvwH.js";import"./Heading-Cm3PwG0D.js";import"./info-Cm1PqeLv.js";import"./Popover-DNHdhSfu.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

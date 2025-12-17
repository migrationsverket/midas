import{j as e,l}from"./iframe-9863yx6x.js";import{S as t}from"./Skeleton-ByV7q013.js";import{T as p}from"./TextField-CPIgqKsP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DGBaUXvh.js";import"./utils-BhQ3vlj8.js";import"./TextField-Bc5R3XjH.js";import"./FieldError-BVSywb3B.js";import"./Text-DtjOYwSN.js";import"./useFocusRing-Ce48MUY0.js";import"./index-DLd0rQU9.js";import"./index-hIuVGS0q.js";import"./Text-xbHrSl7O.js";import"./RSPContexts-BzM22-AV.js";import"./Form-DTt4sDiQ.js";import"./useFormValidation-eTAg9DIf.js";import"./Group-Bx99FXR3.js";import"./Input-C6JCCbZZ.js";import"./Hidden-Cu3qX2yN.js";import"./Button-teT3EZQp.js";import"./useLabels-CYasyUGC.js";import"./useButton-CsKKQAqC.js";import"./useTextField-tbhdJosq.js";import"./useControlledState-Dbpms77R.js";import"./useField-BIJ2mXP4.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-yLVuVWyr.js";import"./Dialog-B5SyWMQm.js";import"./OverlayArrow-C7pCsMzu.js";import"./useResizeObserver-BxPL0cwk.js";import"./Collection-Di3OkD0q.js";import"./index-CKTGGerH.js";import"./Separator-CDggTgNt.js";import"./SelectionManager-C0j3TdpS.js";import"./useEvent-D-937SH4.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-eewfSWHW.js";import"./useDescription-CYKtSczo.js";import"./ListKeyboardDelegate-DJGCS9dk.js";import"./PressResponder-CukyNEYP.js";import"./useLocalizedStringFormatter-B_pYp1kt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-6NiNjFQ3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-wlBhk09R.js";import"./Button-CX3flpTi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DKcIukCd.js";import"./createLucideIcon-DoFpQJ8A.js";import"./x-DcJaNkiM.js";import"./Heading-DHbz02dp.js";import"./info-Ci8FgCFx.js";import"./Popover-CVyUoliT.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

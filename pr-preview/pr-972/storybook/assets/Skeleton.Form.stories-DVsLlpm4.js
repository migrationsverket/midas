import{j as e,l}from"./iframe-D7PorBx8.js";import{S as t}from"./Skeleton-D28E6gzd.js";import{T as p}from"./TextField-CcebDuBc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BQhCjV44.js";import"./utils-BRnNwB4A.js";import"./TextField-Ct5DOX-g.js";import"./FieldError-Depqq_2u.js";import"./Text-D7__6bd9.js";import"./useFocusRing-lOPOB9b4.js";import"./index-CVGY0x-i.js";import"./index-DjO4sh_O.js";import"./Text-19E1mvi9.js";import"./RSPContexts-CGV8yMDv.js";import"./Form-C5oDd9wn.js";import"./useFormValidation-VQ4GQEBo.js";import"./Group-CLgaaNDI.js";import"./Input-C7tdCgoN.js";import"./Hidden-CALyrsXm.js";import"./Button-BLXzbyhr.js";import"./useLabels-CcuOGFTT.js";import"./useButton-_Sa8lUYH.js";import"./useTextField-DvhvNQx1.js";import"./useControlledState-Cu60Zsv0.js";import"./useField-CE9-T19R.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DJQ3UTA-.js";import"./Dialog-Cfp-x5MB.js";import"./OverlayArrow-DVR4VHxI.js";import"./useResizeObserver-3DHtrkfM.js";import"./Collection-KYVnb416.js";import"./index-D9zy8vPy.js";import"./Separator-CD7ffBA2.js";import"./SelectionManager-51sRRdhh.js";import"./useEvent-CIuVaqMW.js";import"./scrollIntoView-C2jQgIYI.js";import"./SelectionIndicator-DmFPt-rE.js";import"./useDescription-D2ZN9jHt.js";import"./ListKeyboardDelegate-D5ycqaLk.js";import"./PressResponder-B-f0VFV5.js";import"./useLocalizedStringFormatter-CX2ZmV-K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-uRQuqh9K.js";import"./VisuallyHidden-B5Wc-8q5.js";import"./Button-BN9DksRd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C4dcCYqU.js";import"./createLucideIcon-s0-oR3K2.js";import"./x-xSgKD0h6.js";import"./Heading-DL-iVrBB.js";import"./info-MQtC1skP.js";import"./Popover-UeCbkken.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

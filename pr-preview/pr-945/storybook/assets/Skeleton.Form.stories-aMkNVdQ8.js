import{j as e,l}from"./iframe-B0TsSvpN.js";import{S as t}from"./Skeleton-Bi-jWtAB.js";import{T as d}from"./TextField-ylBj_tki.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-bNfZCQR9.js";import"./utils-Cr9q3b11.js";import"./TextField-C_jyJhJ1.js";import"./FieldError-B-MRedd_.js";import"./Text-BsgSxeOt.js";import"./useFocusRing-BgEJNMxL.js";import"./index-4peZajMB.js";import"./index-BlEvzA_t.js";import"./Text-NZFj7bgs.js";import"./RSPContexts-BWxM02pN.js";import"./Form-DUD00ZaB.js";import"./useFormValidation-8-0qwwnz.js";import"./Group-CE7OwL_L.js";import"./Input-Bgt2ME9G.js";import"./Hidden-DFn3CYqd.js";import"./Button-BNNDKrj3.js";import"./useLabels-CcQRsMgV.js";import"./useButton-4YKnYTOK.js";import"./useTextField-Bq_Suotv.js";import"./useControlledState-JdOJEBqA.js";import"./useField-DMkwO024.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BGYbXh9Z.js";import"./Dialog-tR-kdbi1.js";import"./OverlayArrow-CszOVKk2.js";import"./useResizeObserver-BA28wkO1.js";import"./Collection-BDsgwoiu.js";import"./index-ZEz0nyUJ.js";import"./Separator-CZYUiTJy.js";import"./SelectionManager-DrS7QM98.js";import"./useEvent-DNrIx6L7.js";import"./scrollIntoView-C6aLME3I.js";import"./SelectionIndicator-CHC8eP2Q.js";import"./useDescription-BogRrWOC.js";import"./ListKeyboardDelegate-TCOqdOXV.js";import"./PressResponder-k8-KWhje.js";import"./useLocalizedStringFormatter-DU6t-nF5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dh75CpyK.js";import"./VisuallyHidden-CzqEzZBD.js";import"./Button-CaiHz5_X.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-tisuuO7l.js";import"./createLucideIcon-CW9WyvOy.js";import"./x-BCupfa-l.js";import"./Heading-KuBDyk7R.js";import"./info-DODpZOlh.js";import"./Popover-B5dD5u2T.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};

import{j as e,l}from"./iframe-C5o5Abe9.js";import{S as t}from"./Skeleton-tY6SzUl_.js";import{T as d}from"./TextField-22nhmxAG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Fw1D0MBh.js";import"./utils-CI0V6-bZ.js";import"./FieldError-Bi-8FqnY.js";import"./Text-CZIcrdc8.js";import"./useFocusRing-DUJ025qE.js";import"./index-O7wF_jHq.js";import"./index-gJJpgxtN.js";import"./Text-C8hlp_Vi.js";import"./RSPContexts-gnW2D4kn.js";import"./Form-zY5OwCBG.js";import"./Group-BtL86FhI.js";import"./Input-BxeWODad.js";import"./Hidden-CBrM32Fq.js";import"./Button-D0wm-Bzx.js";import"./useLabels-Bc_QKjnL.js";import"./useButton-DaL-nw23.js";import"./useTextField-DE370Alt.js";import"./useControlledState-Bsc6Xcu0.js";import"./useField-4QdNIdvN.js";import"./TextField.module-DdivwlC8.js";import"./Label-K1zqzMKE.js";import"./Dialog-COiLvW4o.js";import"./OverlayArrow-s8kz02F0.js";import"./useResizeObserver-BKwIh5Ob.js";import"./Collection-Dp7l1slV.js";import"./index-u73MDQBH.js";import"./Separator-DMOHVm5N.js";import"./SelectionManager-B1m9ehvS.js";import"./useEvent-B6I2mMYo.js";import"./scrollIntoView-C2llSjE_.js";import"./SelectionIndicator-8ejiV-0X.js";import"./useDescription-BdlhheNd.js";import"./ListKeyboardDelegate-BsvTZLMl.js";import"./PressResponder-03Wi8eJV.js";import"./useLocalizedStringFormatter-D-x6F0Q7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-bRGkN9ac.js";import"./getScrollParent-B7dvtfm5.js";import"./VisuallyHidden-B90J4eav.js";import"./x-Bvhbyjtu.js";import"./createLucideIcon-Dogmr7E8.js";import"./useLocalizedStringFormatter-DRt_xGrO.js";import"./Heading-7leloXgK.js";import"./Button-B2ihGD6k.js";import"./Button.module-BB7N-cLd.js";import"./info-CLLx1BXs.js";import"./Popover-BG4ifw_E.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-CKrxTJqk.js";import{S as t}from"./Skeleton-Ck7qmKlF.js";import{T as p}from"./TextField-CpTVtzZZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DRdZ_VbZ.js";import"./utils-CTp3wZxS.js";import"./TextField-7R4KL6gR.js";import"./FieldError-B2UvJ45R.js";import"./Text-DxGoKI9p.js";import"./useFocusRing-DRsukC58.js";import"./index-gQIqyNrY.js";import"./index-C-w1hNWf.js";import"./Text-Ci3fUjCZ.js";import"./RSPContexts-uVMYOfO4.js";import"./Form-8CW9ryOU.js";import"./useFormValidation-Drlp9Ls6.js";import"./Group-CFpzGYy5.js";import"./Input-B99NZbeJ.js";import"./Hidden-Bbcauoo1.js";import"./Button-DigNz_6t.js";import"./useLabels-FN4mMJOV.js";import"./useButton-B9vJGxui.js";import"./useTextField-D6547NmK.js";import"./useControlledState-DaVWaM2P.js";import"./useField-D6Gx9W1M.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-cqQE4xr_.js";import"./Dialog-bY3-AyaQ.js";import"./OverlayArrow-D10FCSGe.js";import"./useResizeObserver-DhOgD2oT.js";import"./Collection-mzSYiwho.js";import"./index-BwxB3nHP.js";import"./Separator-CHBDTMW7.js";import"./SelectionManager-CybRNFvT.js";import"./useEvent-DOM6ytFV.js";import"./scrollIntoView-fAHEVyF_.js";import"./SelectionIndicator-wQCjbn2j.js";import"./useDescription-epMjwWcy.js";import"./ListKeyboardDelegate-DuXJOj-k.js";import"./PressResponder-50-epSN9.js";import"./useLocalizedStringFormatter-a3l9aGqu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-qWpmxnYs.js";import"./VisuallyHidden-Lpl0yh2S.js";import"./Button-DkUXR3sV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CbUcgQXm.js";import"./createLucideIcon-BNr4CCY-.js";import"./x-Cgxi5PyF.js";import"./Heading-Dd2GEWYO.js";import"./info-DjgBQLVF.js";import"./Popover-QHWmYIS1.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-BJVWIAI0.js";import{S as t}from"./Skeleton-iiuZ_ifL.js";import{T as d}from"./TextField-Dt9BOLz8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-F_mablt7.js";import"./utils-BgvIVkCn.js";import"./TextField-DIpOeMX7.js";import"./FieldError-DfZxug9i.js";import"./Text-DsWM3atI.js";import"./useFocusRing-qe9665FA.js";import"./index-YXp4qXd9.js";import"./index-Dkok9qcg.js";import"./Text-BPEOSvMa.js";import"./RSPContexts-rjHquLyv.js";import"./Form-DKmb3nnx.js";import"./useFormValidation-BI-HDx1u.js";import"./Group-CdeK9qXn.js";import"./Input-Cxyz9vM2.js";import"./Hidden-BopJK65L.js";import"./Button-Iro3jgs4.js";import"./useLabels-DPwT7URN.js";import"./useButton-ByxRcK80.js";import"./useTextField-BJlk4ELf.js";import"./useControlledState-elJiOlaP.js";import"./useField-BLXTxzPM.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DSUhOyZv.js";import"./Dialog-CKmh6uA6.js";import"./OverlayArrow-BlqdjP7k.js";import"./useResizeObserver-BZ7H1e8v.js";import"./Collection-C-C5KaR3.js";import"./index-0L5I_mRV.js";import"./Separator-LnRo_iyr.js";import"./SelectionManager-BmZOrW2o.js";import"./useEvent-WDK2xHev.js";import"./scrollIntoView-wRowNge2.js";import"./SelectionIndicator-DOw6UanC.js";import"./useDescription-BffrbCpK.js";import"./ListKeyboardDelegate-BjpzDs_-.js";import"./PressResponder-DM4sz-NC.js";import"./useLocalizedStringFormatter-CLFDyX6Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D7slfMbs.js";import"./VisuallyHidden-DemlhoEG.js";import"./useLocalizedStringFormatter-BJeLafFZ.js";import"./Button-BsXqtviW.js";import"./Button.module-CtQ1deO8.js";import"./x-DROWsTsK.js";import"./createLucideIcon-DVKYReIg.js";import"./Heading-CSPWmQYQ.js";import"./info-DN9JoJ2X.js";import"./Popover-Jn8dfkSm.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

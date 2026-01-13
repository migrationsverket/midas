import{j as e,l}from"./iframe-CLDUBT6H.js";import{S as t}from"./Skeleton-57CWYIdB.js";import{T as p}from"./TextField-DtgxcW8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B0rFc_QT.js";import"./utils-B2mKk8ds.js";import"./TextField-ECvDikQq.js";import"./FieldError-Br1ud4c9.js";import"./Text-DVTsZrXV.js";import"./useFocusRing-Dyp-2U09.js";import"./index-CQqCc5kI.js";import"./index-CGFri1B6.js";import"./Text-t9fg8swz.js";import"./RSPContexts-CLyyRvTx.js";import"./Form-CJ6D0tv0.js";import"./useFormValidation-BoSETYwH.js";import"./Group-CWAHdn8X.js";import"./Input-BrZhzFUe.js";import"./Hidden-DLcE0MmQ.js";import"./Button-CMos7Slo.js";import"./useLabels-BZXL5PjD.js";import"./useButton-CWWImr4k.js";import"./useTextField-BbYFC34E.js";import"./useControlledState-BGBJm32t.js";import"./useField-DYxJUrLm.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BvK0x4Pk.js";import"./Dialog-COHi94a3.js";import"./OverlayArrow-Dm-YbEON.js";import"./useResizeObserver-DnzBBkTW.js";import"./Collection-ANcjFW6d.js";import"./index-1H4z90Fg.js";import"./Separator-pBtVDwQr.js";import"./SelectionManager-Bl_i3Nud.js";import"./useEvent-DGS4bHRi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CW52jf_h.js";import"./useDescription-Do_MXPnI.js";import"./ListKeyboardDelegate-iBff9PwI.js";import"./PressResponder-DvwsM6yL.js";import"./useLocalizedStringFormatter-BmkSBfS1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DF7YW4H8.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6ZRi5s4.js";import"./Button-B6mQ2Bq0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BaqAvC1h.js";import"./createLucideIcon-5ka4vtZl.js";import"./x-BXo-ziXi.js";import"./Heading-TRsTpXmi.js";import"./info-5aOyXpBP.js";import"./Popover-DGF2Rnvu.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

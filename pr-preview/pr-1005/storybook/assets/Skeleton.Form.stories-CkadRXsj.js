import{j as e,l}from"./iframe-MGdNAUMz.js";import{S as t}from"./Skeleton-C-7T-5gC.js";import{T as p}from"./TextField-D_DDZL7S.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-q-LowQmx.js";import"./utils-yAZ9U3h-.js";import"./TextField-BlG-YPTw.js";import"./FieldError-zekZnl7-.js";import"./Text-DFJny9No.js";import"./useFocusRing-9yuQWUp-.js";import"./index-CFMDqy5s.js";import"./index-DxYbJLyO.js";import"./Text-D8P4tHEb.js";import"./RSPContexts-DhTziygn.js";import"./Form-DYj9-0zO.js";import"./useFormValidation-3gszShr7.js";import"./Group-D5jgAVDM.js";import"./Input-CrISesir.js";import"./Hidden-DaKSv-Rd.js";import"./Button-BGSDIYD6.js";import"./useLabels-CYaM2JW7.js";import"./useButton-CKkRVWTa.js";import"./useTextField-BtACyCdQ.js";import"./useControlledState-piNu0BKM.js";import"./useField-BA29SgkZ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-YJ2AWegw.js";import"./Dialog-D-j4KZpo.js";import"./OverlayArrow-BKt-WXKT.js";import"./useResizeObserver-DZuuQAtg.js";import"./Collection-CSnOiKVp.js";import"./index-DeKZwJvt.js";import"./Separator-W8ef00fQ.js";import"./SelectionManager-Dn_uWwP9.js";import"./useEvent-h_n_ZdPT.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8cUfzPMl.js";import"./useDescription-D7Bwelde.js";import"./ListKeyboardDelegate-Cw5ZXmnD.js";import"./PressResponder-FJ8ouTMy.js";import"./useLocalizedStringFormatter-CMEEk3KL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bn86Sij2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BK3tSjRA.js";import"./Button-f3B-7Wnz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcU_ael6.js";import"./createLucideIcon-CrP5_4Rr.js";import"./x-BWyXqCEY.js";import"./Heading-D--hORfB.js";import"./info-DX2nrYA-.js";import"./Popover-COiZ5hws.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

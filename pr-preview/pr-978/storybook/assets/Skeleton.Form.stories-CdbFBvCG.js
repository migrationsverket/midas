import{j as e,l}from"./iframe-BgZjYXda.js";import{S as t}from"./Skeleton-MWbLaH6C.js";import{T as p}from"./TextField-ZJMVH6aJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DL-NYDEQ.js";import"./utils-D0CD63H9.js";import"./TextField-D-w-2Mai.js";import"./FieldError-B_6bKRLN.js";import"./Text-BdUrBZw-.js";import"./useFocusRing-BCl8bI7q.js";import"./index-DsdCiTSh.js";import"./index-MXE8Cyql.js";import"./Text-CRywFydi.js";import"./RSPContexts-B3AEdr6z.js";import"./Form-CZdM7lDn.js";import"./useFormValidation-DTSDYxU2.js";import"./Group-DT2jNRpu.js";import"./Input-1YW0yhDF.js";import"./Hidden-CxgDdtDK.js";import"./Button-BEN3V4yN.js";import"./useLabels-B7Wr4Ixw.js";import"./useButton-GZvAYJ-B.js";import"./useTextField-Bvhh3F0C.js";import"./useControlledState-BOn_mVp6.js";import"./useField-CibIDzOa.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DEef3_3n.js";import"./Dialog-BUsOas3r.js";import"./OverlayArrow-CHMhOczE.js";import"./useResizeObserver-nbkz3K4G.js";import"./Collection-urK1xMW0.js";import"./index-BafI-QEC.js";import"./Separator-CQGOAX64.js";import"./SelectionManager-DyAXS5mS.js";import"./useEvent-CHanbtbs.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DF72ZQHt.js";import"./useDescription-C0V2PFjt.js";import"./ListKeyboardDelegate-CLVO0QEy.js";import"./PressResponder-DAi97wRC.js";import"./useLocalizedStringFormatter-CBItuOna.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B2QSIBSW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden--CMfLrKZ.js";import"./Button-C93M6E-Z.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-wqfGz20J.js";import"./createLucideIcon-BhiKWk6O.js";import"./x-CxMc9Wke.js";import"./Heading-DFgHxESE.js";import"./info-DL4VFBGx.js";import"./Popover-BMzBgMld.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

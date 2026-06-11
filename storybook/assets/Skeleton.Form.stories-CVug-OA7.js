import{j as e,l}from"./iframe-BpYPS4gm.js";import{S as t}from"./Skeleton-DoiDKoLu.js";import{T as p}from"./TextField-CcDG96zI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cb5rNado.js";import"./utils-BkzBTegZ.js";import"./FieldError-zyWIi-nv.js";import"./Text-CFeigIHC.js";import"./useFocusRing-Pq1S8Nkx.js";import"./index-C8EDYR9x.js";import"./index-CpQ1o8lj.js";import"./Text-DftiSqWN.js";import"./RSPContexts-Dy5rD26Q.js";import"./Form-WJVKf5wp.js";import"./Group-DFTVyhbS.js";import"./Input-BIlMzWOR.js";import"./Hidden-CTNCg_YB.js";import"./Button-DUppCSnI.js";import"./useLabel-DRewtayt.js";import"./useLabels-OrklnJZf.js";import"./useButton-BrYERvfl.js";import"./useTextField-DsORATT_.js";import"./useControlledState-I9JlEHBp.js";import"./useField-BW6eOBuw.js";import"./TextField.module-DdivwlC8.js";import"./Label-C71z01wx.js";import"./Dialog-CH-PgKEx.js";import"./OverlayArrow-CZrmaX8b.js";import"./useResizeObserver-o8UhDnAb.js";import"./Collection-nGuo6sVM.js";import"./index-B941AFyx.js";import"./Separator-uATXX7iM.js";import"./SelectionManager-mrLC95FY.js";import"./useEvent-DFWay8hB.js";import"./scrollIntoView-CExkIFba.js";import"./SelectionIndicator-00bJR3jm.js";import"./useDescription-DQt5_MYb.js";import"./ListKeyboardDelegate-DyuD9bVA.js";import"./PressResponder-DtFCU97c.js";import"./useLocalizedStringFormatter-QtzCwA5z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CGYNXkdx.js";import"./getScrollParent-DWwoSmAy.js";import"./VisuallyHidden-DHzGM297.js";import"./ModalOverlay-Be1ZuAix.js";import"./x-CV7Jhp5u.js";import"./createLucideIcon-Crq6vW28.js";import"./useLocalizedStringFormatter-Bf3e6727.js";import"./Heading-Chz2Xcdl.js";import"./Button-BN_pdcuF.js";import"./Button.module-BB7N-cLd.js";import"./info-DNRoJyV4.js";import"./Popover-f1uZ6345.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

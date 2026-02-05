import{j as e,l}from"./iframe-BJhw2N0g.js";import{S as t}from"./Skeleton-C3gtPho5.js";import{T as p}from"./TextField-C-EprQRY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CX0eL__7.js";import"./utils-RbG-Aia_.js";import"./TextField-CyP0JILT.js";import"./FieldError-C8pmpL6w.js";import"./Text-DyuufO01.js";import"./useFocusRing-BW39cesy.js";import"./index-EmEFlqRi.js";import"./index-Dqq__9iy.js";import"./Text-CXHx80oD.js";import"./RSPContexts-BF5tUZC_.js";import"./Form-DCLpShRY.js";import"./useFormValidation-DbGg4kwf.js";import"./Group-DEus3x70.js";import"./Input-BkK29b8z.js";import"./Hidden-BnfcrX-c.js";import"./Button-BdMf96yr.js";import"./useLabels-CV-btu-r.js";import"./useButton-C__A5Pf3.js";import"./useTextField-DRY1yN2Q.js";import"./useControlledState-LSwz2R3F.js";import"./useField-Dv7DXL3_.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DratL8iu.js";import"./Dialog-qP5GGgcy.js";import"./OverlayArrow-Bh8ocjNM.js";import"./useResizeObserver-CJIXI4e9.js";import"./Collection-CX5nJlp4.js";import"./index-H1ZMf6bK.js";import"./Separator-JPLEng4f.js";import"./SelectionManager-CrUJtpFM.js";import"./useEvent-C-emn93v.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY1Vs4zO.js";import"./useDescription-AGbylvSE.js";import"./ListKeyboardDelegate-D2n4TjCs.js";import"./PressResponder-0v3TlHho.js";import"./useLocalizedStringFormatter-Cl7mz5Qk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ByC3znn_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-72ICTt_i.js";import"./Button-DiHVVB0y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-0P1BRXD7.js";import"./createLucideIcon-IeDQBETZ.js";import"./x-BxZ4QCx-.js";import"./Heading-uv8eZZPp.js";import"./info-B4dlDAXD.js";import"./Popover-Bd6VQejF.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

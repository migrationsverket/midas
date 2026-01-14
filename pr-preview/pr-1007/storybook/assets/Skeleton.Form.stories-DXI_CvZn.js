import{j as e,l}from"./iframe-JacAhoxH.js";import{S as t}from"./Skeleton-40kOr9Hz.js";import{T as p}from"./TextField-WkgShN5M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-pYxMkQJX.js";import"./utils-CzU_JO7s.js";import"./TextField-C5Ls2LmB.js";import"./FieldError-B7rWxW-L.js";import"./Text-Edn7JPzd.js";import"./useFocusRing-spbXnPSy.js";import"./index-GcjV-LxB.js";import"./index-YZL0u5uz.js";import"./Text-MKVpmyfV.js";import"./RSPContexts-9Rf4wLRU.js";import"./Form-C4wPVDJ-.js";import"./useFormValidation-BoVDv6Cp.js";import"./Group-C2so4Pc_.js";import"./Input-Cuz7kykP.js";import"./Hidden-TGIGvYu7.js";import"./Button-8pJehvb2.js";import"./useLabels-7kgjtqhP.js";import"./useButton-BIrYoUZu.js";import"./useTextField-D8hJgexU.js";import"./useControlledState-p5pbSUwu.js";import"./useField-DEF7di_w.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-poos_zJX.js";import"./Dialog-CiOrT5e8.js";import"./OverlayArrow-DRAhygSP.js";import"./useResizeObserver-Buog1A5Y.js";import"./Collection--Knj5lbP.js";import"./index-DkwG0OeZ.js";import"./Separator-BERTsdg-.js";import"./SelectionManager-35kh4I0S.js";import"./useEvent-Dax9vfKX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C0R_2rsV.js";import"./useDescription-OQy-vlPi.js";import"./ListKeyboardDelegate-B_SUvSkL.js";import"./PressResponder-B63eX99g.js";import"./useLocalizedStringFormatter-CwYPGFUg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-I0gpbv_D.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-TrlJd0AM.js";import"./Button-BzRYHKPq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BG_WIZXv.js";import"./createLucideIcon-DGoL-s5C.js";import"./x-nQG_nTms.js";import"./Heading-C046WmVv.js";import"./info-BOq2dC_7.js";import"./Popover-Bl_YCtHe.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

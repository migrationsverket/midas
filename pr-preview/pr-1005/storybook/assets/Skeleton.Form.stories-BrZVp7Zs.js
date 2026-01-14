import{j as e,l}from"./iframe-BFGJdV-R.js";import{S as t}from"./Skeleton-DKbsuSGH.js";import{T as p}from"./TextField-JPz3Mpdu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-e-zksaLf.js";import"./utils-kIk1YPQB.js";import"./TextField-CM98IFcO.js";import"./FieldError-CQJGsK4z.js";import"./Text-BTml81CB.js";import"./useFocusRing-DJbT0PkJ.js";import"./index-q0PAT9Q8.js";import"./index-Bgs2Im9U.js";import"./Text-CkbWQQrW.js";import"./RSPContexts-CqmQDw7G.js";import"./Form-kf_9l73i.js";import"./useFormValidation-CfMbP7bF.js";import"./Group-B23xqvDa.js";import"./Input-CrWTszU2.js";import"./Hidden-B0o1kVdW.js";import"./Button-a7m7Ei1w.js";import"./useLabels-ENg7mHVd.js";import"./useButton-DDbtau5_.js";import"./useTextField-BfmVvTo2.js";import"./useControlledState-BkGWyaov.js";import"./useField-BaW-osIe.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C7zIDuhz.js";import"./Dialog-D_OZhhNV.js";import"./OverlayArrow-DEmWP7KY.js";import"./useResizeObserver-D1MRWwbK.js";import"./Collection-CiDKSw_z.js";import"./index-enciD4hB.js";import"./Separator-DriMwrCJ.js";import"./SelectionManager-oZcmF2nO.js";import"./useEvent-DQ79yaUH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D1ZBuTHZ.js";import"./useDescription-Bg2UYj8o.js";import"./ListKeyboardDelegate-4WXjROQx.js";import"./PressResponder-CR5O4XJJ.js";import"./useLocalizedStringFormatter-CssQMkou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXzkv8jy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C8v0qjRB.js";import"./Button-CC7hJvPh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_5YXSYz.js";import"./createLucideIcon-C3uE9ls3.js";import"./x-B48QovPv.js";import"./Heading-BO-wR8OH.js";import"./info-D5YW8ZDe.js";import"./Popover-CSbQ_ZIu.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

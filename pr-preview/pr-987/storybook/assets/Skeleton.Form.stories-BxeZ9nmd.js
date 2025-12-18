import{j as e,l}from"./iframe-BXluW0qw.js";import{S as t}from"./Skeleton-D4H6gTMB.js";import{T as p}from"./TextField-D3bsqroG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bt8R4MJH.js";import"./utils-qhqCas48.js";import"./TextField-DNzh4F88.js";import"./FieldError-DkGWPtYI.js";import"./Text-D4saPv-u.js";import"./useFocusRing-hYKFtLyc.js";import"./index-Cz-tQ20r.js";import"./index-Czak5Xsp.js";import"./Text-jsh445C9.js";import"./RSPContexts-CiUO47lm.js";import"./Form-l6KsTUw2.js";import"./useFormValidation-DbID4Z4G.js";import"./Group-BkeJd56N.js";import"./Input-FPSl9U_g.js";import"./Hidden-Dj90_01P.js";import"./Button-D751rG_Q.js";import"./useLabels-D-uykTL3.js";import"./useButton-sK7GQKK3.js";import"./useTextField-C3NjQCuZ.js";import"./useControlledState-DQw7CMNY.js";import"./useField-DWbyryzg.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dz5nrdFW.js";import"./Dialog-D--hf2tk.js";import"./OverlayArrow-CI_PcWVK.js";import"./useResizeObserver-CJSlKTuU.js";import"./Collection-LFwfl5_M.js";import"./index-jBsa-1DK.js";import"./Separator-BGxX7Hvs.js";import"./SelectionManager-JTF8g9_5.js";import"./useEvent-BA_ZQV4c.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ci8YD20B.js";import"./useDescription-BXiuV7mk.js";import"./ListKeyboardDelegate-CHFQe9A5.js";import"./PressResponder-BWX5znY8.js";import"./useLocalizedStringFormatter-D2jEh7gz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cz6zEb9E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BRFl4D4u.js";import"./Button-BBVzxyIb.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-C8r3sehO.js";import"./createLucideIcon-CuvupPzO.js";import"./x-CRtOwHXc.js";import"./Heading-DLg79cXd.js";import"./info-ekQ0lT2T.js";import"./Popover-Bo_8rdx6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

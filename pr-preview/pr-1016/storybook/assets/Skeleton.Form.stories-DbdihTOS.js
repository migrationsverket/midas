import{j as e,l}from"./iframe-Cy1O8yWi.js";import{S as t}from"./Skeleton-B7QQ6mS8.js";import{T as p}from"./TextField-ixnbWg3E.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BQ0A30ci.js";import"./utils-BjVRslkV.js";import"./TextField-DyJEl0Mx.js";import"./FieldError-CYJiMFhF.js";import"./Text-BhW5Vg2W.js";import"./useFocusRing-Bp1jLS3U.js";import"./index-5ACCliHA.js";import"./index-Cyzr7w3M.js";import"./Text-BQ9CxdIy.js";import"./RSPContexts-DYATOnMx.js";import"./Form-p9AgarO5.js";import"./useFormValidation-JJdJbyT_.js";import"./Group-BgR_avYf.js";import"./Input-AxKI_jjI.js";import"./Hidden-DfJC5d3o.js";import"./Button-D7uf2_z0.js";import"./useLabels-BdY4SXxc.js";import"./useButton-MFlutIw_.js";import"./useTextField-D4oWV2sN.js";import"./useControlledState-CGXlN-Wm.js";import"./useField-DKhAEfz8.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BHC0llIC.js";import"./Dialog-CmYRx3W9.js";import"./OverlayArrow-BeQMntv7.js";import"./useResizeObserver-BVD-DuOZ.js";import"./Collection-DE8F0J6D.js";import"./index-D0lRM3EA.js";import"./Separator-GeRgE_ub.js";import"./SelectionManager-B2hRycuL.js";import"./useEvent-BcfvInMW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcYJlAXq.js";import"./useDescription-dqHAgAeW.js";import"./ListKeyboardDelegate-0Mg55Vki.js";import"./PressResponder-BZp455IP.js";import"./useLocalizedStringFormatter-Cv53LFTg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CD3a7BGu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BDU5-Uv6.js";import"./Button-CD-tfith.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3W37BXaG.js";import"./createLucideIcon-D6XDS7Dv.js";import"./x-DJ2qkTKw.js";import"./Heading-L0-fmDPo.js";import"./info-BBEEJM3F.js";import"./Popover-TInVXXk9.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

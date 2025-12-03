import{j as e,l}from"./iframe-CKFV4t_1.js";import{S as t}from"./Skeleton-D9swpXgR.js";import{T as d}from"./TextField-BApnCmMb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-xpQqY1Cf.js";import"./utils-DI9iWWNt.js";import"./TextField-DctKp6CV.js";import"./FieldError-CfIn2uhl.js";import"./Text-DzSDPQzh.js";import"./useFocusRing-BZ_PqxVl.js";import"./index-BW6JxsHj.js";import"./index-BqBdriJQ.js";import"./Text-Dv3jZ_aV.js";import"./RSPContexts-BzweYrWZ.js";import"./Form-D0HW_j4G.js";import"./useFormValidation-B6Fe8WXE.js";import"./Group-zHd8lyXU.js";import"./Input-CRg4xvg6.js";import"./Hidden-DihczV1P.js";import"./Button-DI-ffzDX.js";import"./useLabels-C6LUrwjA.js";import"./useButton-CShiPmlY.js";import"./useTextField-Dv4ibsMe.js";import"./useControlledState-BDpF19zF.js";import"./useField-BS1r04HM.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-XKoSEVsC.js";import"./Dialog-BQ_mqNXy.js";import"./OverlayArrow-gZMjfUNs.js";import"./useResizeObserver-HMX32PgH.js";import"./Collection-DZeW03SE.js";import"./index-vTCi_tu9.js";import"./Separator-hYZTGZos.js";import"./SelectionManager-Dv3dFLkJ.js";import"./useEvent-CAPMhfOK.js";import"./scrollIntoView-s5FNUvm8.js";import"./SelectionIndicator-CblqZDMx.js";import"./useDescription-XRc2AN6L.js";import"./ListKeyboardDelegate-tcadBjjn.js";import"./PressResponder-CuU5Vb0J.js";import"./useLocalizedStringFormatter-CKBqLoBy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DClmF7Sb.js";import"./VisuallyHidden-POfTLuvh.js";import"./Button-CX41FOI9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIR_98tQ.js";import"./createLucideIcon-sgDlsuts.js";import"./x-tZVRH0aO.js";import"./Heading-B6vunHA3.js";import"./info-67DKVwtn.js";import"./Popover-i2s2TNUi.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

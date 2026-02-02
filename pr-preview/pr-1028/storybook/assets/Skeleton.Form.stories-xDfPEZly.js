import{j as e,l}from"./iframe-BhBYd-yz.js";import{S as t}from"./Skeleton-DyLxenMM.js";import{T as p}from"./TextField-4yQgFXAQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-c5QfbcG8.js";import"./utils-dKiMTOip.js";import"./TextField-DCPwzDo6.js";import"./FieldError-6GseZL7F.js";import"./Text-Cnf9RaEJ.js";import"./useFocusRing-CTfHsPPf.js";import"./index-Bb1CvUWk.js";import"./index-4IMT8kge.js";import"./Text-DPMgLSbx.js";import"./RSPContexts-Bop_NSvS.js";import"./Form-B7gnyP5J.js";import"./useFormValidation-B4ppQ1b7.js";import"./Group-waXQVcG1.js";import"./Input-DWAI1jPw.js";import"./Hidden-rBTlH4Hd.js";import"./Button-BahhSbHm.js";import"./useLabels-WxFJLHTa.js";import"./useButton-CPG29_41.js";import"./useTextField-DJyMp3Ou.js";import"./useControlledState-BoIGYg0G.js";import"./useField-CGcAJZ4v.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BoxF1uCt.js";import"./Dialog-NyWuhiGL.js";import"./OverlayArrow-kiakQklW.js";import"./useResizeObserver-D7VTZ66o.js";import"./Collection-BOgrKMsb.js";import"./index--BoD9glt.js";import"./Separator-CX1_cYEp.js";import"./SelectionManager-CwhmGt3D.js";import"./useEvent-B-Flje4X.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DwJ1FrM5.js";import"./useDescription-DJAzLegN.js";import"./ListKeyboardDelegate-Bw4fFRxE.js";import"./PressResponder-B43dxFmW.js";import"./useLocalizedStringFormatter-FWWM_265.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lIFkLz2v.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C_umXD1b.js";import"./Button-CltQ2OUe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxUWb3BW.js";import"./createLucideIcon-C3sGvf5y.js";import"./x-CK6S_-0Q.js";import"./Heading-ByYP2DRA.js";import"./info-ZJ0Hq9Us.js";import"./Popover-Cr6u0eyl.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

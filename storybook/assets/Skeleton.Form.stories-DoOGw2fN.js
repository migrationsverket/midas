import{j as e,l}from"./iframe-DUaQtwZ4.js";import{S as t}from"./Skeleton-BA1gBqhB.js";import{T as p}from"./TextField-CYIV7pyB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CEpN7Aea.js";import"./utils-BxoSgS2M.js";import"./TextField-2ADw57wO.js";import"./FieldError-CgUL0M8n.js";import"./Text-DKXG1-n8.js";import"./useFocusRing-rVgXHLOR.js";import"./index-DO5-fwSU.js";import"./index-BXP-Ly31.js";import"./Text-DnwjRhY6.js";import"./RSPContexts-cx-hrirP.js";import"./Form-jPX6pm2E.js";import"./useFormValidation-Bt9ME4iF.js";import"./Group-MLk6EDK0.js";import"./Input-Dn30RwZ7.js";import"./Hidden-DsXdzH0m.js";import"./Button-i4oaDduy.js";import"./useLabels-BjsrSgf-.js";import"./useButton-D2Ahp_5H.js";import"./useTextField-CDyrOvSf.js";import"./useControlledState-44ZtI1aY.js";import"./useField-hX13VR-a.js";import"./TextField.module-1fNSVGjT.js";import"./Label-wakP0reg.js";import"./Dialog-D7msUOuK.js";import"./OverlayArrow-Cgx_lTMC.js";import"./useResizeObserver-BTEZv49F.js";import"./Collection-BMkQ_CeU.js";import"./index-CnROtLDA.js";import"./Separator-BLe0h5uq.js";import"./SelectionManager-pH20I5CF.js";import"./useEvent-CQ4rq9N1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CBJjSzW9.js";import"./useDescription-BvCGrAk0.js";import"./ListKeyboardDelegate-C1B-0Vfv.js";import"./PressResponder-DZmm_Vzc.js";import"./useLocalizedStringFormatter-Db2anq4e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D1oOPcGc.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dc19GMYo.js";import"./Button-DWqhmGVb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIWwlROZ.js";import"./createLucideIcon-DySqv-QW.js";import"./x-D82uET-y.js";import"./Heading-EcPDRrsl.js";import"./info-CoP9QDrH.js";import"./Popover-WT0kta4A.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

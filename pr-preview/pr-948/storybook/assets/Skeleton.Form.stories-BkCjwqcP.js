import{j as e,l}from"./iframe-DZnzPlIp.js";import{S as t}from"./Skeleton-DwVaN8Ds.js";import{T as d}from"./TextField-CO_n9pRz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DU3dBVam.js";import"./utils-CNFHwh-q.js";import"./TextField-CSO7Moor.js";import"./FieldError-DOwOzQa8.js";import"./Text-D4f0kWpn.js";import"./useFocusRing-Nu8QV6qN.js";import"./index-08boVIM8.js";import"./index-BK2sDAog.js";import"./Text-B1aKKyjJ.js";import"./RSPContexts-iwyWCt_c.js";import"./Form-Fx6UW9Qo.js";import"./useFormValidation-CdpB-86Q.js";import"./Group-DK1VyZos.js";import"./Input-BE82EkDk.js";import"./Hidden-BHBA8I1E.js";import"./Button-Dtht3JLw.js";import"./useLabels-Bn0lABK-.js";import"./useButton-CARWH--T.js";import"./useTextField-B355gUNA.js";import"./useControlledState-CrkPfz38.js";import"./useField-BXP1GnjY.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DgJoek35.js";import"./Dialog-CkgzdDIo.js";import"./OverlayArrow-B9zMfTsY.js";import"./useResizeObserver-D_U72n22.js";import"./Collection-6eU8VEUR.js";import"./index-DpWj-1TC.js";import"./Separator-C0uNNuwr.js";import"./SelectionManager-BHjS2xQl.js";import"./useEvent-ChHWq_03.js";import"./scrollIntoView-X-mFgLrZ.js";import"./SelectionIndicator-0CXjV7zh.js";import"./useDescription-CATiUuAQ.js";import"./ListKeyboardDelegate-qlktSOjg.js";import"./PressResponder-BEKAxGBZ.js";import"./useLocalizedStringFormatter-BQqTysii.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ba2DoF1m.js";import"./VisuallyHidden-DEEJ503M.js";import"./Button-Q8NbkpbT.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B9kfZZmT.js";import"./createLucideIcon-D1ffg5uX.js";import"./x-CCN9s2Tf.js";import"./Heading-BMs_vKOP.js";import"./info-DdgUB37-.js";import"./Popover-DKEhs-aD.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

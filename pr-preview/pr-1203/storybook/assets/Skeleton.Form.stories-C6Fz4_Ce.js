import{j as e,l}from"./iframe-hABApRlT.js";import{S as t}from"./Skeleton-4vYzzDTn.js";import{T as p}from"./TextField-B16v7uHp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-1EOuVTix.js";import"./utils-BkABga95.js";import"./FieldError-DKFm7MzG.js";import"./Text-Cb1qObZS.js";import"./useFocusRing-BP25i5uK.js";import"./index-77qwmgqY.js";import"./index-BVfSwpPB.js";import"./Text-DztaIr_D.js";import"./RSPContexts-BLO7xP9m.js";import"./Form-C8O9btlQ.js";import"./Group-BWi7evdX.js";import"./Input-BJ65okwJ.js";import"./Hidden-B-K0lNZo.js";import"./Button-BzGvPTBW.js";import"./useLabel-qHqMeu2r.js";import"./useLabels-BIKxEJiN.js";import"./useButton-BuyQblWp.js";import"./useTextField-Z25TGOZo.js";import"./useControlledState-vYw9-Cid.js";import"./useField-DSfD8PGx.js";import"./TextField.module-DdivwlC8.js";import"./Label-KKbhMX69.js";import"./Dialog-mxFJLg1-.js";import"./OverlayArrow-DtlATN_N.js";import"./useResizeObserver-CX6InukU.js";import"./Collection-ClwFbHb_.js";import"./index-BTAgFzs6.js";import"./Separator-wG9MaQYe.js";import"./SelectionManager-mYXwMkoh.js";import"./useEvent-C0BDDOqz.js";import"./scrollIntoView-CT_O_81j.js";import"./SelectionIndicator-C0va8j7y.js";import"./useDescription-SP7YFPBn.js";import"./ListKeyboardDelegate-Tqfl4kl6.js";import"./PressResponder-BGbIn2sT.js";import"./useLocalizedStringFormatter-Cl3bAFJS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQVMG8z-.js";import"./getScrollParent-dFLOazss.js";import"./VisuallyHidden-DvfbpkLp.js";import"./x-viUQDrjv.js";import"./createLucideIcon-jn3NctNW.js";import"./useLocalizedStringFormatter-Cc9pC_do.js";import"./Heading-UK42x3As.js";import"./Button-D27stedr.js";import"./Button.module-BB7N-cLd.js";import"./info-CMfT7Fne.js";import"./Popover-CUuQBQR_.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};

import{j as e,l}from"./iframe-BkVzc2jf.js";import{S as t}from"./Skeleton-CCqRQAtp.js";import{T as d}from"./TextField-oxfDdRNK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bd1wi7Jt.js";import"./utils-BygJjxp_.js";import"./FieldError-BwPk1h0q.js";import"./Text-Cl9gTfqF.js";import"./useFocusRing-Aiyx2UXL.js";import"./index-DCHZ6NdQ.js";import"./index-CRBDyq3W.js";import"./Text-B79zESTX.js";import"./RSPContexts-LbRQIp3l.js";import"./Form-DyPSg3uh.js";import"./Group-BBINmdWw.js";import"./Input-BxA217iM.js";import"./Hidden-R6jv-Zbn.js";import"./Button-DC3ZjroM.js";import"./useLabels-r2kWzK6Q.js";import"./useButton-B1UvRsW1.js";import"./useTextField-Nv1QTVpM.js";import"./useControlledState-LZdmvusm.js";import"./useField-C412GoGD.js";import"./TextField.module-DdivwlC8.js";import"./Label-C1pMcWrQ.js";import"./Dialog-B11UlQIO.js";import"./OverlayArrow-B9D8DwA5.js";import"./useResizeObserver-CJBdYodv.js";import"./Collection-CFuYVz80.js";import"./index-CqLT7pz4.js";import"./Separator-CvqaBUS5.js";import"./SelectionManager-HKzWsq0f.js";import"./useEvent-D9_iLH0i.js";import"./scrollIntoView-Yjo_y5ur.js";import"./SelectionIndicator-CMspJvvR.js";import"./useDescription-CYDZbRK4.js";import"./ListKeyboardDelegate-CRHKUCzm.js";import"./PressResponder-X-v42Ff3.js";import"./useLocalizedStringFormatter-DAoOwKNh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BuKlwr_J.js";import"./getScrollParent-CTmctxBz.js";import"./VisuallyHidden-BWjyWmb6.js";import"./x-BsyZ_dlH.js";import"./createLucideIcon-BjNI9TSY.js";import"./useLocalizedStringFormatter-BzPZ_rQR.js";import"./Heading-DO0prvhr.js";import"./Button-ZTyLTH5E.js";import"./Button.module-BB7N-cLd.js";import"./info-DKnOLspn.js";import"./Popover-D0a-Z8Kn.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};

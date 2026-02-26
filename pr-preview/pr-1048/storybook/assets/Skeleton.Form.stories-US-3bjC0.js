import{j as e,l}from"./iframe-ClhcDk6-.js";import{S as t}from"./Skeleton-C5IQPH6T.js";import{T as p}from"./TextField--SZ9NMs1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-69jHSOzK.js";import"./utils-DkVwfCPY.js";import"./useObjectRef-LpWD1ACK.js";import"./FieldError-tXlATWOG.js";import"./Text-CCnFhlAG.js";import"./useFocusRing-DgsQxXQS.js";import"./useFocusable-15vinN74.js";import"./index-BlJ-rMVG.js";import"./index-CRZ7OKWo.js";import"./Text-EzA_ilFd.js";import"./RSPContexts-BA8Udrsv.js";import"./Form-BINvuMk6.js";import"./useFormValidation-B19vM6x-.js";import"./Group-Ct_Ti3xi.js";import"./Input-CC6dVyXh.js";import"./Hidden-B4bEnCsb.js";import"./Button-BSlJ97mj.js";import"./useLabels-OGE8ZqLn.js";import"./useButton-BRHcPL6M.js";import"./useTextField-DOuVabl5.js";import"./useControlledState-DRXmCCw_.js";import"./useField-CkQZEAr3.js";import"./TextField.module-DdivwlC8.js";import"./Label-LYBhceLb.js";import"./Dialog-CdWec6Ze.js";import"./OverlayArrow-DSLc6eNv.js";import"./useResizeObserver-CICXzZtJ.js";import"./Collection--ZMTHkZa.js";import"./CollectionBuilder-CAo2ledx.js";import"./index-6lcNpfds.js";import"./Separator-CHFBhSKr.js";import"./SelectionManager-C04g7PAk.js";import"./useEvent-C5dcsaza.js";import"./scrollIntoView-D07VY2Nc.js";import"./SelectionIndicator-1HtvkFRD.js";import"./useDescription-By0r32b_.js";import"./ListKeyboardDelegate-Cc2KEOw7.js";import"./PressResponder-Btj3QZmG.js";import"./useLocalizedStringFormatter-B2NYe0Eu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CjYQIpYR.js";import"./getScrollParent-FapgZLQg.js";import"./VisuallyHidden-1ppoZ9c6.js";import"./Button-Cmr495Vm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cd9bTuDt.js";import"./createLucideIcon-DOkxF0Fr.js";import"./x-B2X0pLHA.js";import"./Heading-DUgnXrAX.js";import"./info-DOAR22B2.js";import"./Popover-8e-hmpHh.js";const ue={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const xe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,xe as __namedExportsOrder,ue as default};

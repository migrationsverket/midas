import{j as e,l}from"./iframe-_Hk9HBhX.js";import{S as t}from"./Skeleton-Jmnxegpa.js";import{T as p}from"./TextField-iJoJs1gF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-6Ma4Jhxc.js";import"./utils-Tr1wzETD.js";import"./FieldError-BnqaSw3Q.js";import"./Text-CFXOaGuN.js";import"./useFocusRing-CUpBT6GV.js";import"./index-fEZrWfc8.js";import"./index-Cjzv3PRo.js";import"./Text-4AExYRWh.js";import"./RSPContexts-BkY4NJgN.js";import"./Form-CJTM5oJs.js";import"./Group-DhBe_ig_.js";import"./Input-BnOd_loK.js";import"./Hidden-vPthIoGd.js";import"./Button-BcVwX6wB.js";import"./useLabel-CG8Xm4bD.js";import"./useLabels-XRHHudnr.js";import"./useButton-CZkGYXOZ.js";import"./useTextField-D8pq1Yhc.js";import"./useControlledState-CXVEjKuF.js";import"./useField-JEZIk8ke.js";import"./TextField.module-DdivwlC8.js";import"./Label-CPIJO4oY.js";import"./Dialog-gbJqnVCn.js";import"./OverlayArrow-C8dc221V.js";import"./useResizeObserver-Dob1-ek4.js";import"./Collection-38fQTHAm.js";import"./index-D0DH_Og7.js";import"./Separator-mZ0uLOGM.js";import"./SelectionManager-CHKeKSA7.js";import"./useEvent-BoXIj02p.js";import"./scrollIntoView-DeSIzk3n.js";import"./SelectionIndicator-BOwLDBzR.js";import"./useDescription-Br1cNKJN.js";import"./ListKeyboardDelegate-CTPIAQRz.js";import"./PressResponder-DSjXrWnb.js";import"./useLocalizedStringFormatter-xIKmWIeo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BrdO1Epl.js";import"./getScrollParent-arYGATXV.js";import"./VisuallyHidden-CE55BuvM.js";import"./ModalOverlay-C_u5Ore6.js";import"./x-3memj5xE.js";import"./createLucideIcon-qIP4byR5.js";import"./useLocalizedStringFormatter-DUwGsNzO.js";import"./Heading-CVFjfB5H.js";import"./Button-BPI35lWH.js";import"./Button.module-BB7N-cLd.js";import"./info-CxjPhrtp.js";import"./Popover-BFw3zMr4.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

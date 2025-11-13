import{j as e,l}from"./iframe-CbbBAmzj.js";import{S as t}from"./Skeleton-Bohi7eRC.js";import{T as p}from"./TextField-C9PSSV-y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B9jHg094.js";import"./utils-BhRPGHPf.js";import"./TextField-CKB4zDXT.js";import"./FieldError-DbUlAqb9.js";import"./Text-CsK72l07.js";import"./useFocusRing-0mAROpRM.js";import"./index-DHUIB7sV.js";import"./index-D-NGygsf.js";import"./Text-n09TZFQz.js";import"./RSPContexts-BPA00K2J.js";import"./Form-BSOfWwjY.js";import"./useFormValidation-CQFjrY1c.js";import"./Group-ZB5i4StR.js";import"./Input-DB4xg9bE.js";import"./Hidden-c3MDr7Jx.js";import"./Button-QZ9MaBJ0.js";import"./useLabels-Cazyn2uu.js";import"./useButton-D2eklsDg.js";import"./useTextField-Qnse-Sqt.js";import"./useControlledState-BiEt7xRU.js";import"./useField-DrRy_FAN.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BIYSPuZD.js";import"./Dialog-xgk7Quy_.js";import"./OverlayArrow-BIwFTVIx.js";import"./useResizeObserver-jhLK4rky.js";import"./Collection-DDh4M0ar.js";import"./index-DHKyPGSh.js";import"./Separator-CCXlXQ8s.js";import"./SelectionManager-BTz-o__f.js";import"./useEvent-CCkUFzKP.js";import"./scrollIntoView-CR5VKzw8.js";import"./SelectionIndicator-DaI3oYsN.js";import"./useDescription-B-ccyjfI.js";import"./ListKeyboardDelegate-C40ne4YI.js";import"./PressResponder-DRSxt3i7.js";import"./useLocalizedStringFormatter-BdrD0Kyz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-_ZlqpQjL.js";import"./VisuallyHidden-ClvY-xxs.js";import"./useLocalizedStringFormatter-Cgyg9bBm.js";import"./Button-xJdt2F7s.js";import"./Button.module-CtQ1deO8.js";import"./x-Bb0Jqa61.js";import"./createLucideIcon-CroHsTCf.js";import"./Heading-DvBuq4JF.js";import"./info-Cr4xwn4u.js";import"./Popover-DETG9_yb.js";import"./Input-DQG2Ec4A.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

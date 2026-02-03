import{j as e,l}from"./iframe-LxsxPn7f.js";import{S as t}from"./Skeleton-BjdNY0ew.js";import{T as p}from"./TextField-Bl0FukZv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-h10XpQkR.js";import"./utils-DncIGQMF.js";import"./TextField-D16HJ2gM.js";import"./FieldError-CgEYF0Jb.js";import"./Text-PejApv0F.js";import"./useFocusRing-B93HZZsG.js";import"./index-CKuG6hKg.js";import"./index-kVjvdCiN.js";import"./Text-olPUrwWm.js";import"./RSPContexts-DIHhpxyH.js";import"./Form-DdmoYPXP.js";import"./useFormValidation-CHttf5zF.js";import"./Group--HbVZnxR.js";import"./Input-9JRvIiXT.js";import"./Hidden-B-JeMypd.js";import"./Button-ghTKDsBY.js";import"./useLabels-CVG2mcXN.js";import"./useButton-BtIaMTZK.js";import"./useTextField-D0Rs9JFg.js";import"./useControlledState-nLdn7Lta.js";import"./useField-Ymsb_LQZ.js";import"./TextField.module-DpzeWGpt.js";import"./Label-C2aDpaN2.js";import"./Dialog-BppKYXin.js";import"./OverlayArrow-BFJugWgU.js";import"./useResizeObserver-Vc9HsbR6.js";import"./Collection-ncjdmfvR.js";import"./index-BcaQ0XzI.js";import"./Separator-Dk4aY52J.js";import"./SelectionManager-s3BepUef.js";import"./useEvent-Rt9gRg-L.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bmwsxbdo.js";import"./useDescription-DziSmAEk.js";import"./ListKeyboardDelegate-BHqe-oE5.js";import"./PressResponder-BJKCA1Oy.js";import"./useLocalizedStringFormatter-ot1i9Cu6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DIOlR59x.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-qYkk6-oE.js";import"./Button-CEFhP8SH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ImfIeIeT.js";import"./createLucideIcon-BNlGPqho.js";import"./x-D7SDEcH0.js";import"./Heading-BAsi9nxn.js";import"./info-DZXNqpe5.js";import"./Popover-CWWUza69.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

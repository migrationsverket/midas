import{j as e,l}from"./iframe-FULtcQ5y.js";import{S as t}from"./Skeleton-CKaQvSzM.js";import{T as p}from"./TextField-BogCeHAH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D5tvvj3J.js";import"./utils-BZWW7WJA.js";import"./TextField-B7h8MzBs.js";import"./FieldError-C797vA19.js";import"./Text-DnzX-OyP.js";import"./useFocusRing-Cf9gdL2X.js";import"./index-DZLJKQEi.js";import"./index-DEQebrT3.js";import"./Text-Ccs4qaSZ.js";import"./RSPContexts-DakiloPX.js";import"./Form-D8Z9-zNv.js";import"./useFormValidation-C9QOJ6L1.js";import"./Group-BnxCVhO1.js";import"./Input-AcXThbYp.js";import"./Hidden-DwNxrma0.js";import"./Button-D0gHO-KH.js";import"./useLabels-0cbaIQ_Y.js";import"./useButton-Okn-2P08.js";import"./useTextField-BIp1oEBQ.js";import"./useControlledState-b-x_Bn66.js";import"./useField-N9zIyGWG.js";import"./TextField.module-1fNSVGjT.js";import"./Label-BTNIT-XO.js";import"./Dialog-ChnS1c7i.js";import"./OverlayArrow-B4xHAU9K.js";import"./useResizeObserver-DzkMWGBj.js";import"./Collection-DhJEN3cp.js";import"./index-RRdF-DV5.js";import"./Separator-DCgd4plg.js";import"./SelectionManager-fkm3gmUA.js";import"./useEvent-zOk05Ty3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5fKujRu.js";import"./useDescription-B6nXjKiy.js";import"./ListKeyboardDelegate-BgoZQiFu.js";import"./PressResponder-DIxYZTyT.js";import"./useLocalizedStringFormatter-CzRjru41.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zs0ohSnu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BAXKzm-M.js";import"./Button-C3cOR8o0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DRhb472R.js";import"./createLucideIcon-rSkXk1i2.js";import"./x-Dw0QuZBZ.js";import"./Heading-BC8nbTcr.js";import"./info-cP1CelqL.js";import"./Popover-CwZ7GKO1.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

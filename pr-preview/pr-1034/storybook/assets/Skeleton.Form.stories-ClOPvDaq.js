import{j as e,l}from"./iframe-C_RGnjGF.js";import{S as t}from"./Skeleton-D3v36J9m.js";import{T as p}from"./TextField-rEK2nW61.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CkX746wU.js";import"./utils-CizOIJwG.js";import"./TextField-D74Rx8CF.js";import"./FieldError-ChB1xIDl.js";import"./Text-CHUsilgm.js";import"./useFocusRing-BF7aoqv-.js";import"./index-tt1S6LDy.js";import"./index-CO49tAAQ.js";import"./Text-BVmb7BBG.js";import"./RSPContexts-DrxxWwfc.js";import"./Form-Dbvvi4Py.js";import"./useFormValidation-Cl2Fp_bL.js";import"./Group-CDcrvD7F.js";import"./Input-L4quRwAa.js";import"./Hidden-BRwSW5Hr.js";import"./Button-DuBv3q_5.js";import"./useLabels-BfoE21n1.js";import"./useButton-CLPY3zOp.js";import"./useTextField-DXloCJTo.js";import"./useControlledState-DtWpqbpS.js";import"./useField-BQq33uh0.js";import"./TextField.module-DpzeWGpt.js";import"./Label-D21vUW33.js";import"./Dialog-CobrSnm9.js";import"./OverlayArrow-BjnI-sx1.js";import"./useResizeObserver-C7rFsAkF.js";import"./Collection-D1LloZ8c.js";import"./index-DJrS3l3t.js";import"./Separator-DIPpjpb7.js";import"./SelectionManager-BmgWiN_j.js";import"./useEvent-Dx80kgdU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_F0b1L_.js";import"./useDescription-BxKH-cOf.js";import"./ListKeyboardDelegate-DqDk3m8N.js";import"./PressResponder-W6vIxysL.js";import"./useLocalizedStringFormatter-Bnrb7dzs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfwvXaXi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DR_ZosVl.js";import"./Button-zzC5AJk8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEWE3auq.js";import"./createLucideIcon-Dw11k2K7.js";import"./x-BD8VkNC2.js";import"./Heading-pb6Nclft.js";import"./info-Cfis4Ezo.js";import"./Popover-SOrSwN44.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-D6sKX6II.js";import{S as t}from"./Skeleton-DdOYv9FB.js";import{T as p}from"./TextField-BYjDzEiM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DEyPItQ8.js";import"./utils-C4RQL2_3.js";import"./FieldError-Bvl7FuR6.js";import"./Text-BrckZ8Xv.js";import"./useFocusRing-CSkB88rB.js";import"./index-DKBJrd3a.js";import"./index-DDUPyWG3.js";import"./Text-jsf--eUF.js";import"./RSPContexts-DvpaVa_O.js";import"./Form-C2GRFxHm.js";import"./useFormValidation-Bj3o2lyS.js";import"./Group-LKMayg1L.js";import"./Input-_82U7G9G.js";import"./Hidden-DGXb4i6s.js";import"./Button-BaCPfcFA.js";import"./useLabels-Eanys-W7.js";import"./useButton-QkYGdCiT.js";import"./useTextField-DiqMn53V.js";import"./useControlledState-lIXa58Dk.js";import"./useField-2xmZNmwq.js";import"./TextField.module-DBQiRr7K.js";import"./Label-D-sWFEsc.js";import"./Dialog-CABw0W6S.js";import"./OverlayArrow-V9Eb3cRx.js";import"./useResizeObserver-pDOO4CWr.js";import"./Collection-D2vS0JJK.js";import"./index-UPahk6AO.js";import"./Separator-BrNCWKzO.js";import"./SelectionManager-Bng19qqy.js";import"./useEvent-DGV7xSYV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BuDLJhSH.js";import"./useDescription-kimTwMt1.js";import"./ListKeyboardDelegate-Cx41C5kb.js";import"./PressResponder-C6vxJpG9.js";import"./useLocalizedStringFormatter-CWLwTKjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-uOUtYkvb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D9YxITQY.js";import"./Button-DCKGBAMV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CajHjEjY.js";import"./createLucideIcon-sDHC6FPE.js";import"./x-2XwCJpa2.js";import"./Heading-DbyuvViy.js";import"./info-CiAq7Cly.js";import"./Popover-gkXA_BBE.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-D3pU9J33.js";import{S as t}from"./Skeleton-o9QzJauJ.js";import{T as p}from"./TextField-DRBqLCiT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BWDI8Ll-.js";import"./utils-TJDpQ4Ya.js";import"./TextField-CckRY_Uy.js";import"./FieldError-BoX6D44Y.js";import"./Text-CW2J10CL.js";import"./useFocusRing-D3KULZdT.js";import"./index-D0C8bgGL.js";import"./index-C0kKjsp6.js";import"./Text-EyICqv-c.js";import"./RSPContexts-B0Vm-_mQ.js";import"./Form-C4tHUXOw.js";import"./useFormValidation-D68htTuX.js";import"./Group-Ch5tPXoG.js";import"./Input-BkFG4AQj.js";import"./Hidden-B5r8AT61.js";import"./Button-mA5ilicP.js";import"./useLabels-81u_mr-e.js";import"./useButton-BKl2qCbd.js";import"./useTextField--ypsBr65.js";import"./useControlledState-DXSUtMNg.js";import"./useField-ClO7YVtb.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DJNAO41P.js";import"./Dialog-Cw_Aogn0.js";import"./OverlayArrow-k1izJusm.js";import"./useResizeObserver-DkewCwki.js";import"./Collection-Dr-PfJtb.js";import"./index-Ks6K2x-z.js";import"./Separator-WRSu5FJ7.js";import"./SelectionManager-DCg8VcOj.js";import"./useEvent-CPP8qCw1.js";import"./scrollIntoView-DOPuCf89.js";import"./SelectionIndicator-CB48uxTI.js";import"./useDescription-CbjSHKut.js";import"./ListKeyboardDelegate-CA4SlhlR.js";import"./PressResponder-Bjf6CAlA.js";import"./useLocalizedStringFormatter-CjBBj2AJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BvGDYglO.js";import"./VisuallyHidden-DCygpEtP.js";import"./Button-6HrJxnEa.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-bETZumPy.js";import"./createLucideIcon-DxLCNxll.js";import"./x-CgyT9-29.js";import"./Heading-p_5o3t_l.js";import"./info-CqxgyPE4.js";import"./Popover-CzJxSUG3.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

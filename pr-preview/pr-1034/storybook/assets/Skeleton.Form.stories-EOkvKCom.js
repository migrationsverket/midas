import{j as e,l}from"./iframe-Bghha776.js";import{S as t}from"./Skeleton-CP-nlhnJ.js";import{T as p}from"./TextField-CYGZDTPt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BP97VtTi.js";import"./utils-CKwB2h75.js";import"./TextField-hVGriltW.js";import"./FieldError-9H5y-Lx7.js";import"./Text-BLYY5elp.js";import"./useFocusRing-dHOAdoS9.js";import"./index-Ct8cyA18.js";import"./index-B_EeXN7u.js";import"./Text-Dwv0_3Nj.js";import"./RSPContexts-CGn2RDsi.js";import"./Form-hmbg8ZOW.js";import"./useFormValidation-CZv_sneF.js";import"./Group-CW3SgjnW.js";import"./Input-D-Ig9AWQ.js";import"./Hidden-DkuxBDe3.js";import"./Button-CTIdFoEB.js";import"./useLabels-CD1l8WQW.js";import"./useButton-Bo_828zl.js";import"./useTextField-6PGVa32G.js";import"./useControlledState-brBh_6bZ.js";import"./useField-BNabUhO6.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BnC5IPqR.js";import"./Dialog-WwilMS-z.js";import"./OverlayArrow-CnKM_bCg.js";import"./useResizeObserver-BuMIH8Cw.js";import"./Collection-tfVMgqky.js";import"./index-o9rNCB5G.js";import"./Separator-rZF7BwT6.js";import"./SelectionManager-DyHkQ2Rb.js";import"./useEvent-DvjFxw-T.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-1IcTZGQj.js";import"./useDescription-x32OOjmK.js";import"./ListKeyboardDelegate-C0dIApAx.js";import"./PressResponder-CjFDJQAA.js";import"./useLocalizedStringFormatter-BJIXw8SS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvAn1Lgd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CjLtMi-P.js";import"./Button-CZ61ZB9b.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-YOCDJcZs.js";import"./createLucideIcon-DZRbkVj-.js";import"./x-D3hyDxqQ.js";import"./Heading-BPloDmyB.js";import"./info-Dp-vQ1yg.js";import"./Popover-jV7ivyXa.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

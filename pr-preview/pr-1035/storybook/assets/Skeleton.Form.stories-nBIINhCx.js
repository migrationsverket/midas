import{j as e,l}from"./iframe-jXOFY8ly.js";import{S as t}from"./Skeleton-CRNhB5Xg.js";import{T as p}from"./TextField-BvJuuygk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B_sUIijU.js";import"./utils-DMRbnQmp.js";import"./TextField-B_cBUwuk.js";import"./FieldError-DpwWyisz.js";import"./Text-NASTJ5SQ.js";import"./useFocusRing-D6lwjUZF.js";import"./index-DDRSGRcW.js";import"./index-BFn5LmJz.js";import"./Text-DBF8n_Yj.js";import"./RSPContexts-uCM8UasA.js";import"./Form-Td99cGHp.js";import"./useFormValidation-Q4VomWZv.js";import"./Group-DKFJ1i1O.js";import"./Input-CEZoYdM_.js";import"./Hidden-C1RMCDHa.js";import"./Button-_V1yAu90.js";import"./useLabels-BUsfJ8Q5.js";import"./useButton-Br-Tw6Wj.js";import"./useTextField-uxEsjRQI.js";import"./useControlledState-B_hf4unm.js";import"./useField-d3f_aUfY.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DVP45lyQ.js";import"./Dialog-BrEfRH6h.js";import"./OverlayArrow-BJctWX9e.js";import"./useResizeObserver-CrFKK_i-.js";import"./Collection-BVIzqqsG.js";import"./index-LDBGwil4.js";import"./Separator-D4LjqWD4.js";import"./SelectionManager-ygzmuEbh.js";import"./useEvent-Dx7k8S5m.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dy3GAmbU.js";import"./useDescription-DuiYQhpC.js";import"./ListKeyboardDelegate-DXqM7Z8I.js";import"./PressResponder-CBabZcxm.js";import"./useLocalizedStringFormatter-CKvY-tar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DEZnhysQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B9izHnXN.js";import"./Button-BJ-Glf4b.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dr7Dpfz9.js";import"./createLucideIcon-CZVrkezG.js";import"./x-CoKzMXDs.js";import"./Heading-CtLvrIy9.js";import"./info-BiRxp_ck.js";import"./Popover-ySfzcF21.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

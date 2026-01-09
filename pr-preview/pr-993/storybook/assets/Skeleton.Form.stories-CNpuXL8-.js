import{j as e,l}from"./iframe-DSZ2fKvK.js";import{S as t}from"./Skeleton-CfBAHZDB.js";import{T as p}from"./TextField-CnsmRsvK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BH8GYgwT.js";import"./TextField-y2-QQLDL.js";import"./utils-Cfkrut6D.js";import"./FieldError-BMni7XFl.js";import"./Text-CgCYlfoO.js";import"./useFocusRing-DXadVZPZ.js";import"./index-DoXffT-S.js";import"./index-DWmwxavY.js";import"./Text-w9kcErxq.js";import"./RSPContexts-Dor0eJbl.js";import"./Form-DiZ-C_ny.js";import"./useFormValidation-CqeQwe6N.js";import"./Group-4mchAbS6.js";import"./Input-Bs_AfZCm.js";import"./Hidden-ChZPyTdJ.js";import"./Button-DA0aKT5l.js";import"./useLabels-CBr_pV_K.js";import"./useButton-BoGmqoO9.js";import"./useTextField-JkOTThfh.js";import"./useControlledState-KoCGTRr1.js";import"./useField-CClsPm5e.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DpLOnecY.js";import"./Dialog-76dV7wm5.js";import"./OverlayArrow-D0jjKAlM.js";import"./useResizeObserver-Bf_O2Yeh.js";import"./Collection-ChAdkSBy.js";import"./index--CzgAou0.js";import"./Separator-C5DpsQ8u.js";import"./SelectionManager-05692ccu.js";import"./useEvent-DbBN9uYZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cl5pLQxb.js";import"./useDescription-CWxL4hNe.js";import"./ListKeyboardDelegate-E7ClQiAa.js";import"./PressResponder-DeC2vrS8.js";import"./useLocalizedStringFormatter-BJCLTOit.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRlXv4xO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-9r-CcUTk.js";import"./Button-wYRzLtLo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fLqKeFmr.js";import"./createLucideIcon-BZEE360n.js";import"./x-DPL0DItu.js";import"./Heading-CTO5IYsM.js";import"./info-C3zZX9Gl.js";import"./Popover-BAa_y_Lz.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

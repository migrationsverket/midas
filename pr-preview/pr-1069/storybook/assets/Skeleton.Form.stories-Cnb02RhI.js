import{j as e,l}from"./iframe-NgsVAIE_.js";import{S as t}from"./Skeleton-D_uXVWIW.js";import{T as p}from"./TextField-DaU-9oXP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CVAU5wp4.js";import"./utils-BMRDwiWU.js";import"./FieldError-BYJgixQA.js";import"./Text-nv-IhAMW.js";import"./useFocusRing-B3_Fq29Y.js";import"./index-DYQAdzyg.js";import"./index-DXaepPOW.js";import"./Text-CLMs0khC.js";import"./RSPContexts-DHoIcnKb.js";import"./Form-B0wb-2L5.js";import"./useFormValidation-C3jZc8Ny.js";import"./Group-dEU4njap.js";import"./Input-CBsXNBTK.js";import"./Hidden-CQtKkbQ1.js";import"./Button-DTzo6E9X.js";import"./useLabels-DCVajOwk.js";import"./useButton-Br4NZV8a.js";import"./useTextField-EB-x8h0m.js";import"./useControlledState-C2hVvUOR.js";import"./useField-C4md05ju.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-CI3AgLhv.js";import"./Dialog-BvlF9nTc.js";import"./OverlayArrow-Bw8IApUR.js";import"./useResizeObserver-D356BpUm.js";import"./Collection-aQtQkema.js";import"./index-BWLTw_OP.js";import"./Separator-Dcmf0abl.js";import"./SelectionManager-3sJFQUFt.js";import"./useEvent-DX4MF0J2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cerm8eE2.js";import"./useDescription-CtpSjBNK.js";import"./ListKeyboardDelegate-DVMZRk3M.js";import"./PressResponder-xLJ_I-Dd.js";import"./useLocalizedStringFormatter-CJOjjMB1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-iTAQqecx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CrY5FCAN.js";import"./Button-CsUdCrvJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_7PwgqK.js";import"./createLucideIcon-DNjUyKXr.js";import"./x-DXvbv7Kd.js";import"./Heading-BBzGGpCy.js";import"./info-nEFu3Z4D.js";import"./Popover-XdEz2vSS.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-C97-KldL.js";import{S as t}from"./Skeleton-BnG2DV2e.js";import{T as p}from"./TextField-CfVuI_Bn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-iNZeTVmk.js";import"./utils-CT49lX3Q.js";import"./FieldError-CzHY_m0E.js";import"./Text-BWtrJhgb.js";import"./useFocusRing-BaDVQaIN.js";import"./index-C9-aWDE9.js";import"./index-DcQl-zHv.js";import"./Text-kfKvhgrO.js";import"./RSPContexts-CVaQzuT2.js";import"./Form-Dg1us4eS.js";import"./useFormValidation-CPmiIrH4.js";import"./Group-BkZ1G5Eu.js";import"./Input-D--SSIiA.js";import"./Hidden-Cns8g0IT.js";import"./Button-By32KbkP.js";import"./useLabels-DbdYa4IU.js";import"./useButton-C3jqDXTt.js";import"./useTextField-BQuT8hc1.js";import"./useControlledState-BASohq_6.js";import"./useField-VNtVV8X6.js";import"./TextField.module-Dhscz2t0.js";import"./Label-DgxvWV7H.js";import"./Dialog-DD8Nc2dh.js";import"./OverlayArrow-BD4eRlxk.js";import"./useResizeObserver-C9RsjVbx.js";import"./Collection-HncGmFQp.js";import"./index-QjpHXcWP.js";import"./Separator-6HTi-cQh.js";import"./SelectionManager-CW0pq1_s.js";import"./useEvent-CjzdKbLS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeibBvL7.js";import"./useDescription-B32pZrdJ.js";import"./ListKeyboardDelegate-DOWibJoJ.js";import"./PressResponder-BbrzfePp.js";import"./useLocalizedStringFormatter-CDO2zV2D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D8bZ8BQ0.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-cBRDBRce.js";import"./Button-TcfJGFPW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CWWYhU2v.js";import"./createLucideIcon-DyW2bSMY.js";import"./x-Cjd9f1_p.js";import"./Heading-CekMixw3.js";import"./info-Btx1Cq6B.js";import"./Popover-BqoLnGke.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

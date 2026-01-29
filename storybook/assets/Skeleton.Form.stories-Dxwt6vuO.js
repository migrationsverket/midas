import{j as e,l}from"./iframe-_gH3GU_Z.js";import{S as t}from"./Skeleton-BfqnU6Xe.js";import{T as p}from"./TextField-DLCfEsQA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BBAe3u_D.js";import"./utils-CfJDu102.js";import"./TextField-Blx-Sch_.js";import"./FieldError-DpcLG2Fx.js";import"./Text-BRHHCRG8.js";import"./useFocusRing-BXEJ-Tr4.js";import"./index-DKn8ERok.js";import"./index-CVg2kWWp.js";import"./Text-DjGT25-P.js";import"./RSPContexts-FS6mevKY.js";import"./Form-BOENKVbc.js";import"./useFormValidation-oTP1bryq.js";import"./Group-CAJ1002a.js";import"./Input-dBy5dk4r.js";import"./Hidden-D04Pc1_R.js";import"./Button-B0GHbiBt.js";import"./useLabels-WQAK4zlE.js";import"./useButton-D8o09r3N.js";import"./useTextField--d7LR7vK.js";import"./useControlledState-D8rfmS1g.js";import"./useField-ByUbZnyG.js";import"./TextField.module-1fNSVGjT.js";import"./Label-8HLPMpvk.js";import"./Dialog-BtuTLPLx.js";import"./OverlayArrow-BEIjUFBk.js";import"./useResizeObserver-BDJqeTBY.js";import"./Collection-CiCTCt3v.js";import"./index-CTMRyEef.js";import"./Separator-OXKMMQ8u.js";import"./SelectionManager-94IQVh0z.js";import"./useEvent-DDt3427d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ata1nNeT.js";import"./useDescription-DCw1B2k2.js";import"./ListKeyboardDelegate-BbjP68Pi.js";import"./PressResponder-D2R8re7P.js";import"./useLocalizedStringFormatter-BtyaZgHU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNQkECp5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C6ArGHnI.js";import"./Button-DXF4_9k-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CwzfDNfE.js";import"./createLucideIcon-CfuZJf8D.js";import"./x-BwSPrVqf.js";import"./Heading-BWcf_paK.js";import"./info-DxFAs9sc.js";import"./Popover-t_dPh4fH.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-pRNC08Mv.js";import{S as t}from"./Skeleton-BdjpNl22.js";import{T as p}from"./TextField-B9tEf6U7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CwFTnTNz.js";import"./utils-DRYUmso-.js";import"./TextField-B7EDl9pU.js";import"./FieldError-RDINXYGh.js";import"./Text-BEH_DbAf.js";import"./useFocusRing-Bjmrddhc.js";import"./index-BlGFDQle.js";import"./index-D5Pm5N6C.js";import"./Text-Bm0bWJiD.js";import"./RSPContexts-BMZfSrMw.js";import"./Form-BIFDjctB.js";import"./useFormValidation-DDkwvMKg.js";import"./Group-DvH7IcFq.js";import"./Input-DUaAcgSw.js";import"./Hidden-BKem9kXH.js";import"./Button-CNTckaGC.js";import"./useLabels-BEx_Ux0v.js";import"./useButton-CNCxBdco.js";import"./useTextField-CbZm2bj8.js";import"./useControlledState-BGR8S5qz.js";import"./useField-s9cI_556.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Ca54J5-4.js";import"./Dialog-D6__rpD-.js";import"./OverlayArrow-hG1-p7o3.js";import"./useResizeObserver-LepMKJP1.js";import"./Collection-BzXaiYzk.js";import"./index-DtUhDu_0.js";import"./Separator-D7HS4OjN.js";import"./SelectionManager-DY5HUksX.js";import"./useEvent-C7lBE6BD.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DrheJoW2.js";import"./useDescription-CGxbLJcS.js";import"./ListKeyboardDelegate-U8YzZlWX.js";import"./PressResponder-Dj8awjPa.js";import"./useLocalizedStringFormatter-D4_cU62N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BHS4BH4z.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DQpyket6.js";import"./Button-G7WsQ-Sd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CzWjGcyN.js";import"./createLucideIcon-ALsTbPK_.js";import"./x-BJEGTxBd.js";import"./Heading-BUJgb2zv.js";import"./info-BISRqc0l.js";import"./Popover-D_FSyx7C.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

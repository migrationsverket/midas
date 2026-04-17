import{j as e,l}from"./iframe-gvsmTfDv.js";import{S as t}from"./Skeleton-DlI4BC_G.js";import{T as p}from"./TextField-C0-NjxR_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DRyIDf-l.js";import"./utils-BKVt9q3t.js";import"./FieldError-Dt4wOzlE.js";import"./Text-D_-E26JC.js";import"./useFocusRing-Bw2Eo1es.js";import"./index-zZ-VMYSr.js";import"./index-Dl6j7ESc.js";import"./Text-B8IC8KHg.js";import"./RSPContexts-1qykiObf.js";import"./Form-C4RmitN-.js";import"./Group-DPO8_6bB.js";import"./Input-BqJAoGg0.js";import"./Hidden-BYsAXt4K.js";import"./Button-DfV_2-Zn.js";import"./useLabel-CAO0uGJ4.js";import"./useLabels-DHOPg_u-.js";import"./useButton-EAKdzl-u.js";import"./useTextField-BKYFLcT2.js";import"./useControlledState-CccMhTKY.js";import"./useField-BeWVgjPW.js";import"./TextField.module-DdivwlC8.js";import"./Label-vEZkTmY_.js";import"./Dialog-BwoJahL-.js";import"./OverlayArrow-CPi0cQiR.js";import"./useResizeObserver-CJ9wgOBQ.js";import"./Collection-PiWahHei.js";import"./index-BrJ8eitn.js";import"./Separator-0tRk9Owj.js";import"./SelectionManager-zO6M4NXS.js";import"./useEvent-Czf9E218.js";import"./scrollIntoView-Efz8I6x4.js";import"./SelectionIndicator-MQmVERzT.js";import"./useDescription-CfmSReeE.js";import"./ListKeyboardDelegate-C9A46U3C.js";import"./PressResponder-HEuCoUfe.js";import"./useLocalizedStringFormatter-CvPo1xmV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-KxCQH7RI.js";import"./getScrollParent-DP26HErR.js";import"./VisuallyHidden-M9fmIsYk.js";import"./ModalOverlay-Dcdzcbnb.js";import"./x-Dvy_Fxlw.js";import"./createLucideIcon-DCceu8CA.js";import"./useLocalizedStringFormatter-BwDUVQYw.js";import"./Heading-DQQdczVQ.js";import"./Button-B27aviMr.js";import"./Button.module-BB7N-cLd.js";import"./info-DZtckajM.js";import"./Popover-BX62KlGf.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

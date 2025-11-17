import{j as e,l}from"./iframe-BGJKVmf3.js";import{S as t}from"./Skeleton-CKuSyeYw.js";import{T as d}from"./TextField-Gw4cK1w5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-kjdUuLdR.js";import"./utils-CdECfOvA.js";import"./TextField-D76GYiLD.js";import"./FieldError-Cw7h0kNs.js";import"./Text-r6BcnIdd.js";import"./useFocusRing-DbrozJ_r.js";import"./index-pedBBgRE.js";import"./index-DRo8smSM.js";import"./Text-Bp3BbsoJ.js";import"./RSPContexts-B4x9M34g.js";import"./Form-GVS1P4LC.js";import"./useFormValidation-Dnh4rJxq.js";import"./Group-C0VflcHe.js";import"./Input-DFAnnGOU.js";import"./Hidden-HQtC_o9a.js";import"./Button-BnLvJykT.js";import"./useLabels-DjNPyrwJ.js";import"./useButton-H76zVe9p.js";import"./useTextField-zh_BSZRZ.js";import"./useControlledState-CKSdrHFO.js";import"./useField-CwvTQ404.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-WTBSOLOM.js";import"./Dialog-BkzjdUPZ.js";import"./OverlayArrow-CEhGYxVs.js";import"./useResizeObserver-U2HW7D5b.js";import"./Collection-BLiFri7p.js";import"./index-CXAwwT1a.js";import"./Separator-DJ3CyE4J.js";import"./SelectionManager-DLKSBW41.js";import"./useEvent-USaeSmTd.js";import"./scrollIntoView-Da0pxFKj.js";import"./SelectionIndicator-Dv9tLt5C.js";import"./useDescription-DXkPEcT2.js";import"./ListKeyboardDelegate-D0u_GLeO.js";import"./PressResponder--ZsFu1sS.js";import"./useLocalizedStringFormatter-DpbFwMiK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DfHGa-5w.js";import"./VisuallyHidden-G7JBO7ul.js";import"./Button-BoJn9f0V.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DljgyLYu.js";import"./createLucideIcon-Bvs4zFUu.js";import"./x-CgSSs-72.js";import"./Heading-DFG0pOTb.js";import"./info-Bsp46QLb.js";import"./Popover-BiIV6MRI.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};

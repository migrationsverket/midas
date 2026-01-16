import{j as e,l}from"./iframe-CDna8jjE.js";import{S as t}from"./Skeleton-D8LGyqN7.js";import{T as p}from"./TextField-CalUGMI0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CTBWCJ9M.js";import"./utils-DLwzmocV.js";import"./TextField-D-MQTzgl.js";import"./FieldError-Bwk-kYY7.js";import"./Text-DFouRg6c.js";import"./useFocusRing-Cui58P_W.js";import"./index-CqO8KTpm.js";import"./index-C1kBw2K3.js";import"./Text-CTMNSfQo.js";import"./RSPContexts-BA89GZqc.js";import"./Form-CoBzq9b-.js";import"./useFormValidation-CLHtYi4A.js";import"./Group-DL5kNHQg.js";import"./Input-BeQf39yX.js";import"./Hidden-CL_R-LHP.js";import"./Button-CasiqzJU.js";import"./useLabels-DJeip4q-.js";import"./useButton-DgzyzFaT.js";import"./useTextField-CXYIEHUd.js";import"./useControlledState-ZH1c28y-.js";import"./useField-Clo25zs2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D07Jb6Vk.js";import"./Dialog-ovFgl49I.js";import"./OverlayArrow-B2RREcmi.js";import"./useResizeObserver-BQELvLCX.js";import"./Collection-di033Ejc.js";import"./index-DNb6Ybde.js";import"./Separator-BcBMNXce.js";import"./SelectionManager-AXLlcPMo.js";import"./useEvent-DNIo1dKq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cycbd7PC.js";import"./useDescription-qt3ADn-9.js";import"./ListKeyboardDelegate-BRRLhSx7.js";import"./PressResponder-B361EnvG.js";import"./useLocalizedStringFormatter-Ce-PtoG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvVo2JDq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BxQZRWoC.js";import"./Button-BzWf_0Ce.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-T78m4mfD.js";import"./createLucideIcon-DXyy-duf.js";import"./x-DtvLvZQZ.js";import"./Heading-Dphh5hYW.js";import"./info-BrXqDH4v.js";import"./Popover-DzgQSo6r.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

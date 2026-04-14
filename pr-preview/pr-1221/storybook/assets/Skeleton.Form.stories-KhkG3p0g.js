import{j as e,l}from"./iframe-D1Yo_ASl.js";import{S as t}from"./Skeleton-CCUCU7F_.js";import{T as p}from"./TextField-CBVCBVeM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-F7AxtkMJ.js";import"./utils-CtPCKdFP.js";import"./FieldError-BrTiJca0.js";import"./Text-CC_-JfUc.js";import"./useFocusRing-B1B12oVM.js";import"./index-C22-80z0.js";import"./index-DHyWBhXo.js";import"./Text-Cm1JxqTj.js";import"./RSPContexts-TtF35Naa.js";import"./Form-BTzQwVTd.js";import"./Group-CAMsnLF6.js";import"./Input-bSTNyt_1.js";import"./Hidden-BeKvJ1wg.js";import"./Button-M2F6_Qz4.js";import"./useLabel-yNR7PxFA.js";import"./useLabels-ETtHkWia.js";import"./useButton-BA9v4nYB.js";import"./useTextField-BXYFaxrk.js";import"./useControlledState-DI2wiQtX.js";import"./useField--yXn37df.js";import"./TextField.module-DdivwlC8.js";import"./Label-CzSxrwtj.js";import"./Dialog-CT-IvoQF.js";import"./OverlayArrow-C08_D7Db.js";import"./useResizeObserver-CjU5NYfI.js";import"./Collection-BHwdqdom.js";import"./index-BgxIfYNz.js";import"./Separator-DkUo04Vc.js";import"./SelectionManager-Cl2qeWIC.js";import"./useEvent-CR9RVJbO.js";import"./scrollIntoView-BpMLfVQa.js";import"./SelectionIndicator-BkCDLdi0.js";import"./useDescription-DFWHaatp.js";import"./ListKeyboardDelegate-C-tPikMB.js";import"./PressResponder-DPFebpjq.js";import"./useLocalizedStringFormatter-vgTNRLY_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BLsBHLpF.js";import"./getScrollParent-CqYMlGok.js";import"./VisuallyHidden-BaAY3BDc.js";import"./Modal-BxS1hXlz.js";import"./x-Dx4ggZKu.js";import"./createLucideIcon-B2W31-43.js";import"./useLocalizedStringFormatter-CdrMB43o.js";import"./Heading-D21J0EHb.js";import"./Button-DcFviok1.js";import"./Button.module-BB7N-cLd.js";import"./info-Cam4-x-Q.js";import"./Popover-DEkZ7Lnp.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

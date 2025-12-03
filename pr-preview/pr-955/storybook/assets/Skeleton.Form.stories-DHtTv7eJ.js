import{j as e,l}from"./iframe-DKD8Hhkt.js";import{S as t}from"./Skeleton-CWQRaDEn.js";import{T as d}from"./TextField-CEd9r6yp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bvz--YBS.js";import"./utils-MI8bpwWe.js";import"./TextField-r36l_IKX.js";import"./FieldError-bIrBWj8O.js";import"./Text-CAhqk-DI.js";import"./useFocusRing-DaRRNwj-.js";import"./index-BBc3oC3v.js";import"./index-CbSysqEM.js";import"./Text-CEobg6V0.js";import"./RSPContexts-BquRMNxt.js";import"./Form-BD5mMvG6.js";import"./useFormValidation-Btmt3NPi.js";import"./Group-0W6ih4sE.js";import"./Input-CqCfIIx6.js";import"./Hidden-DPLxNawq.js";import"./Button-BwBVmhGW.js";import"./useLabels-C8mFIlFg.js";import"./useButton-sutBB3el.js";import"./useTextField-BzAO9kcf.js";import"./useControlledState-CoGFVVHL.js";import"./useField-C9ctWP7M.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-XPeWtnKp.js";import"./Dialog-QBizddFr.js";import"./OverlayArrow-B2zB_EQ_.js";import"./useResizeObserver-BrhITzv6.js";import"./Collection-BcbboX9l.js";import"./index-DLK80OlA.js";import"./Separator-D8MGuuYM.js";import"./SelectionManager-DY8wLbQ9.js";import"./useEvent-GK6_gpuW.js";import"./scrollIntoView-BMVD6Opw.js";import"./SelectionIndicator-CuIiPtTA.js";import"./useDescription-qUz9Rnax.js";import"./ListKeyboardDelegate-TUi4wdGD.js";import"./PressResponder-BHocIs0H.js";import"./useLocalizedStringFormatter-tIc5njIq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DYmInOV2.js";import"./VisuallyHidden-9B-wHDrP.js";import"./Button-CPOu634C.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DNj3ahoN.js";import"./createLucideIcon-BawZSGby.js";import"./x-BpPOBZFj.js";import"./Heading-BC4KM-ZJ.js";import"./info-VgSOpyKM.js";import"./Popover-h68upjjX.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

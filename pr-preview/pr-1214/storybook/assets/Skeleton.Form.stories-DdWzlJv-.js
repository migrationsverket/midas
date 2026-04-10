import{j as e,l}from"./iframe--DNH3aGV.js";import{S as t}from"./Skeleton-DtfWD0am.js";import{T as p}from"./TextField-6XOrCOT-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CqTNWv9N.js";import"./utils-0GaImV3w.js";import"./FieldError-WqsNiK7P.js";import"./Text-BBvcfJf4.js";import"./useFocusRing-COgihC8f.js";import"./index-BdkFEYWR.js";import"./index-DalW6cey.js";import"./Text-c4OCYkd3.js";import"./RSPContexts-D_qB4YUz.js";import"./Form-DPDs5zEL.js";import"./Group-CRL_tLBo.js";import"./Input-C3-sIc-5.js";import"./Hidden-DGctFygB.js";import"./Button-BsANfNMy.js";import"./useLabel-CkI0hnox.js";import"./useLabels-C8J0Cx0Y.js";import"./useButton-Cnfu5-B9.js";import"./useTextField-C1_wCBkw.js";import"./useControlledState-D7Iw9EWv.js";import"./useField-CEYiaukY.js";import"./TextField.module-DdivwlC8.js";import"./Label-BUFtwjtj.js";import"./Dialog-BuI7mqzP.js";import"./OverlayArrow-DEHvFxEE.js";import"./useResizeObserver-0xIpAXxn.js";import"./Collection-c75W7817.js";import"./index-B8zmV9cI.js";import"./Separator-CAHxO_QM.js";import"./SelectionManager-DX4q2rcR.js";import"./useEvent-CIz9Num3.js";import"./scrollIntoView-B9vl4vKk.js";import"./SelectionIndicator-xlkanYoJ.js";import"./useDescription-DPccdWs0.js";import"./ListKeyboardDelegate-Bz-YKD5w.js";import"./PressResponder-CtHeK3zV.js";import"./useLocalizedStringFormatter-BrEpEIAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B-xh-KTH.js";import"./getScrollParent-DKElYBV4.js";import"./VisuallyHidden-CF-eQG1L.js";import"./Modal-C9BskyQI.js";import"./x-DQhZrA3s.js";import"./createLucideIcon-GK2uHeXX.js";import"./useLocalizedStringFormatter-DOUyl0Wg.js";import"./Heading-OJ--_RD7.js";import"./Button-k3ORVpm3.js";import"./Button.module-BB7N-cLd.js";import"./info-Dhpjt_KU.js";import"./Popover-DVi_-EjZ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

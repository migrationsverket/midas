import{j as e,l}from"./iframe-BmoSYdAA.js";import{S as t}from"./Skeleton-Cqszb6fV.js";import{T as p}from"./TextField-1Wj0XN5W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-iLKttvgZ.js";import"./utils-C-CBKXNz.js";import"./TextField-CI00nTAr.js";import"./FieldError-BD5okbww.js";import"./Text-DaUdSSAr.js";import"./useFocusRing-DvskDHXD.js";import"./index-BdUd5uZZ.js";import"./index-0cr7ctwJ.js";import"./Text-tl12LCyE.js";import"./RSPContexts-D_jCzI74.js";import"./Form-8jdVhm3z.js";import"./useFormValidation-UTtv_AD5.js";import"./Group-BoPqXReS.js";import"./Input-B0N3Hc1g.js";import"./Hidden-2CP7YcQc.js";import"./Button-BKQTUCQ9.js";import"./useLabels-CxCxcB2N.js";import"./useButton-Z7anNymb.js";import"./useTextField-BwbTKMX2.js";import"./useControlledState-Dzoa7zU0.js";import"./useField-BpAP4iAL.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-XeIu9q9V.js";import"./Dialog-DWb-ECes.js";import"./OverlayArrow-CDwZqS2q.js";import"./useResizeObserver-ORfsR1W_.js";import"./Collection-DlymQ8vt.js";import"./index-FM1lrI3L.js";import"./Separator-Bso1CzNS.js";import"./SelectionManager-B0cVCThB.js";import"./useEvent-DrpJQgWB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Vt9L8OqV.js";import"./useDescription-CyzvknZ3.js";import"./ListKeyboardDelegate-Brmnx0qe.js";import"./PressResponder-1rkbxvho.js";import"./useLocalizedStringFormatter-DBGXY-0J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C937BOdE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-sKibH-Cd.js";import"./Button-Br3AxFcp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bc48yrq4.js";import"./createLucideIcon-B0lPyAXK.js";import"./x-B-e_Lia6.js";import"./Heading-Da3dL7Es.js";import"./info-DaiBcEhh.js";import"./Popover-Dtx8nB1p.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

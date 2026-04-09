import{j as e,l}from"./iframe-CKFMuO9m.js";import{S as t}from"./Skeleton-BHJi3_Lg.js";import{T as p}from"./TextField-D-xn8tw-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cvmdoet5.js";import"./utils-D5GKgKLw.js";import"./FieldError-BxVlGG_h.js";import"./Text-D6Srqbyc.js";import"./useFocusRing-yfimCeup.js";import"./index-6i8ZJQUe.js";import"./index-DDqKr8WO.js";import"./Text-CA1blZ7p.js";import"./RSPContexts-DhqrhFMI.js";import"./Form-CIVuJeWD.js";import"./Group-BmEjfMGD.js";import"./Input-D_Vce_3G.js";import"./Hidden-Dy9FDq_i.js";import"./Button-r5FEcXKA.js";import"./useLabel-Biy0vo30.js";import"./useLabels-D1n_UWc_.js";import"./useButton-CBEFeFxS.js";import"./useTextField-AV2_XkOS.js";import"./useControlledState-BexPn5vQ.js";import"./useField-Do1u8hN3.js";import"./TextField.module-DdivwlC8.js";import"./Label-Djib92Ef.js";import"./Dialog-Dd7oJhma.js";import"./OverlayArrow-DOSEjS3e.js";import"./useResizeObserver-lGR9_MiC.js";import"./Collection-ufR-ynN_.js";import"./index-2H2h2DF8.js";import"./Separator-g6rmnRqd.js";import"./SelectionManager-DFf4iKUm.js";import"./useEvent-DtZHTgkv.js";import"./scrollIntoView-DixLNrnP.js";import"./SelectionIndicator-BFcBA69R.js";import"./useDescription-Df78gmXN.js";import"./ListKeyboardDelegate-uWRRNnxO.js";import"./PressResponder-BNGsEO2H.js";import"./useLocalizedStringFormatter-BF0ENpbS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_EkHvhyP.js";import"./getScrollParent-CRWGRsX_.js";import"./VisuallyHidden-DCQS44v1.js";import"./Dialog-CV1Xdzk8.js";import"./x-BvWk0FrP.js";import"./createLucideIcon-C2PX8F3A.js";import"./useLocalizedStringFormatter-BlqBGSSd.js";import"./Heading-CUHS5E_c.js";import"./Button-DCc3RCFi.js";import"./Button.module-BB7N-cLd.js";import"./info-CfBz-e-5.js";import"./Popover-Aem2Mu46.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

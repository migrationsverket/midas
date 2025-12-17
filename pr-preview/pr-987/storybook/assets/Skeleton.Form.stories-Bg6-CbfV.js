import{j as e,l}from"./iframe-BCu1NNFI.js";import{S as t}from"./Skeleton-DpXrunmy.js";import{T as p}from"./TextField-Dyv-eBxO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CzZcdcxh.js";import"./utils-fj1shBHC.js";import"./TextField-RAAB0HYD.js";import"./FieldError-D_bX0XbT.js";import"./Text-CSC27xRH.js";import"./useFocusRing-Bi2l9BeF.js";import"./index-BORhhh-V.js";import"./index-pb47Dny1.js";import"./Text-DIEFoepW.js";import"./RSPContexts-DJXEp2S5.js";import"./Form-Dzub4ZCL.js";import"./useFormValidation-BEqNihOK.js";import"./Group-BcFfFs4F.js";import"./Input-Bpp6YJWC.js";import"./Hidden-CM3Yk7lA.js";import"./Button-vp3BXzyW.js";import"./useLabels-Ck0jGj4V.js";import"./useButton-tpmepzyq.js";import"./useTextField-CZxZ8w_2.js";import"./useControlledState-Dejsun2t.js";import"./useField-DIMoLOh1.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Di-e5hF1.js";import"./Dialog-D6q0lrqi.js";import"./OverlayArrow-odf6ZOFz.js";import"./useResizeObserver-DGcL359J.js";import"./Collection-DrnD_mb9.js";import"./index-A6fGDA3Y.js";import"./Separator-CVPTInOe.js";import"./SelectionManager-NLv3mXy-.js";import"./useEvent-CklH_3Xl.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgLJ-CM6.js";import"./useDescription-BP344jV7.js";import"./ListKeyboardDelegate-CL7x_221.js";import"./PressResponder-DOQmugY8.js";import"./useLocalizedStringFormatter-BQINCQnu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BJ2pAY63.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BUlrvxyt.js";import"./Button-D-exP_iM.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-DO5bmpoD.js";import"./createLucideIcon-B5Es93Ur.js";import"./x-C6-boS8J.js";import"./Heading-CHeMvKF_.js";import"./info-CDa19jTp.js";import"./Popover-8Cinnvn1.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

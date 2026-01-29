import{j as e,l}from"./iframe-BvxrP4H_.js";import{S as t}from"./Skeleton-DgXqspuJ.js";import{T as p}from"./TextField-BqvPVAw4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-mKCjkZ7T.js";import"./utils-DRwSYmkY.js";import"./TextField-CERuDnI1.js";import"./FieldError-D1Yw6ERp.js";import"./Text-BJUv6RK-.js";import"./useFocusRing-CJdHKEcp.js";import"./index-DZ-u2hu8.js";import"./index-D44wzwBB.js";import"./Text-DeMAVr2b.js";import"./RSPContexts-DEykMfDO.js";import"./Form-CWCyzf8u.js";import"./useFormValidation-DHvoEVhR.js";import"./Group-DA7-pBdr.js";import"./Input-C57YTRQw.js";import"./Hidden-D4jsxrLb.js";import"./Button-BEiciYfb.js";import"./useLabels-BMmbJ9_b.js";import"./useButton-uALjNSWo.js";import"./useTextField-CaBalM21.js";import"./useControlledState-D2EAi2j4.js";import"./useField-BpVbfcEn.js";import"./TextField.module-1fNSVGjT.js";import"./Label-kaeiWxa8.js";import"./Dialog-BntEtIwp.js";import"./OverlayArrow-DUojjDUB.js";import"./useResizeObserver-BdXrzxcT.js";import"./Collection-BnA9gHIE.js";import"./index-DMqlofMa.js";import"./Separator-e71TDoZM.js";import"./SelectionManager-BH5HcElr.js";import"./useEvent-CgFksn0F.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-pSPS3JIv.js";import"./useDescription-CWz-Nrf1.js";import"./ListKeyboardDelegate-DbICXpzW.js";import"./PressResponder-D8B4OF2M.js";import"./useLocalizedStringFormatter-D4pCyGYe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQJawZVf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BJsqer9T.js";import"./Button-A9AEz-p5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_Mu1zyu.js";import"./createLucideIcon-B5KIjSHM.js";import"./x-DSnh6kAd.js";import"./Heading-Gcv-n3NK.js";import"./info-C7XqbetH.js";import"./Popover-CXyOYptn.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

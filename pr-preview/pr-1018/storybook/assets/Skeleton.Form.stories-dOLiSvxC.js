import{j as e,l}from"./iframe-CdnIBaQS.js";import{S as t}from"./Skeleton-DYOX7nHp.js";import{T as p}from"./TextField-BRNTeOMh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-21Khe_R7.js";import"./utils-BGCpfP4A.js";import"./TextField-CnipkgO0.js";import"./FieldError-BBRMXocd.js";import"./Text-63jd4RMf.js";import"./useFocusRing-B26JkukS.js";import"./index-Bwdat55Z.js";import"./index-CjlGMBtV.js";import"./Text-C8pnIfab.js";import"./RSPContexts-BMRzhgaP.js";import"./Form-B1aKtSg3.js";import"./useFormValidation-CiZggeAv.js";import"./Group-BIGFYESJ.js";import"./Input-BFIk-OJw.js";import"./Hidden-CJwsmdM9.js";import"./Button-BDoCnzr3.js";import"./useLabels-DTSKd8To.js";import"./useButton-Cggmn0OU.js";import"./useTextField-c3TrDSBf.js";import"./useControlledState-BEJy-MfI.js";import"./useField-B4Vh62Mt.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CythG5IS.js";import"./Dialog-m1tY80DB.js";import"./OverlayArrow-Cgr1kfwB.js";import"./useResizeObserver-G2Ku3nSv.js";import"./Collection-DoWuqJ9n.js";import"./index-m2mBe-xg.js";import"./Separator-C-WC961N.js";import"./SelectionManager--54cfGjY.js";import"./useEvent-BaBw_pLs.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BZfVsEb-.js";import"./useDescription-DeseOWEz.js";import"./ListKeyboardDelegate-DfcwVj2G.js";import"./PressResponder-D05sv4-3.js";import"./useLocalizedStringFormatter-Cr8jltsa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTM8Mo62.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D-XS7clw.js";import"./Button-DHAriHpj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CVE7y_HC.js";import"./createLucideIcon-KCWMli3b.js";import"./x-DD461jHE.js";import"./Heading-CiOBs6Yz.js";import"./info-DzD3qv-_.js";import"./Popover-S04rwLpq.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

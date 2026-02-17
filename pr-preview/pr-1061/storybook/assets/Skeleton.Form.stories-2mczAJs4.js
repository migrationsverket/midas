import{j as e,l}from"./iframe-eQfj5TyR.js";import{S as t}from"./Skeleton-n3xjkjxM.js";import{T as p}from"./TextField-DDuAAnGf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-9t4z0OYe.js";import"./utils-B1fyRi3f.js";import"./FieldError-Banutwb4.js";import"./Text-Adt_UDUW.js";import"./useFocusRing-FgnAwrg-.js";import"./index-BXO00OuG.js";import"./index-CIA7hP3J.js";import"./Text-D1gBRjyS.js";import"./RSPContexts-Ds5n5rrC.js";import"./Form-DlhcELXP.js";import"./useFormValidation-Ccm2Lj-G.js";import"./Group-Dwq_juAS.js";import"./Input-CyWcTvKo.js";import"./Hidden-DKvQ0UCo.js";import"./Button-Bl9G2J9w.js";import"./useLabels-D68jkqrd.js";import"./useButton-Bt3yaOy2.js";import"./useTextField-hp_xXHUv.js";import"./useControlledState-BQkMHVAJ.js";import"./useField-CfpZE-ZJ.js";import"./TextField.module-Cm6797Xw.js";import"./Label-DnLKZArJ.js";import"./Dialog-BdOZRepl.js";import"./OverlayArrow-AQ1O_GLb.js";import"./useResizeObserver-CL5hCH-U.js";import"./Collection-C_EJZkl4.js";import"./index-B9-vxnY5.js";import"./Separator-B13PBXpT.js";import"./SelectionManager-BSPVAL4T.js";import"./useEvent-gQ4dcrYq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTrHW9Yg.js";import"./useDescription-BaMN0osh.js";import"./ListKeyboardDelegate-HsGsFezV.js";import"./PressResponder-B-WzlAfD.js";import"./useLocalizedStringFormatter-CGYFFa5T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DOTj5QaS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-wNpkr7eA.js";import"./Button-D4E-mWNd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-V6SfCR6T.js";import"./createLucideIcon-BnydqwKc.js";import"./x-CCJfjDcD.js";import"./Heading-BZN5YGPJ.js";import"./info-V1oAvwTF.js";import"./Popover-XnePCbGS.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};

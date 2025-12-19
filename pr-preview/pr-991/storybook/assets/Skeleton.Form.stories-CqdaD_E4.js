import{j as e,l}from"./iframe-y3RQudkV.js";import{S as t}from"./Skeleton-Ds8_ubtW.js";import{T as p}from"./TextField-DGILOv5t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D0klzrhl.js";import"./utils-CLUQEgK0.js";import"./TextField-COUCBOGE.js";import"./FieldError-DbTKGFTi.js";import"./Text-Blof-eBx.js";import"./useFocusRing-D6jKEede.js";import"./index-Btmjqavz.js";import"./index-C_jNHA4R.js";import"./Text-BJza01K7.js";import"./RSPContexts-CQGJwvaW.js";import"./Form-dHvJf-tT.js";import"./useFormValidation-CZmsk4ZH.js";import"./Group-B7ke1c5b.js";import"./Input-xrl2HnGU.js";import"./Hidden-X5-u2uqU.js";import"./Button-CIEvAO1z.js";import"./useLabels-C6A1w6dP.js";import"./useButton-DvV-S-Re.js";import"./useTextField-JGXsKiI_.js";import"./useControlledState-BlejUV3u.js";import"./useField-hggg6uU5.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CEFq0DJl.js";import"./Dialog-VGUqn1LF.js";import"./OverlayArrow-QmqVuTqB.js";import"./useResizeObserver-DLCfIb8d.js";import"./Collection-mBq74uji.js";import"./index-DVxUphre.js";import"./Separator-BDJXd-hv.js";import"./SelectionManager-BbR-yjHl.js";import"./useEvent-BspRHKlr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CHISNaEV.js";import"./useDescription-pAch1eL8.js";import"./ListKeyboardDelegate-BC7dvwtv.js";import"./PressResponder-B002mKCy.js";import"./useLocalizedStringFormatter-02llwVfA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DabMCYse.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CodUiT0u.js";import"./Button-C6bCh7AW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CNW12ox4.js";import"./createLucideIcon-DRJFQYBk.js";import"./x-DAS3UPTm.js";import"./Heading-DviOwGmS.js";import"./info-D5rdsSr_.js";import"./Popover-BvcQrqZ5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

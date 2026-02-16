import{j as e,l}from"./iframe-CjsN2Sbl.js";import{S as t}from"./Skeleton-BO_9NlHx.js";import{T as p}from"./TextField-WFwr_4ul.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BcVSnZL2.js";import"./utils-COI7mk-Z.js";import"./TextField-tAY5WO05.js";import"./FieldError-CrPR-bnN.js";import"./Text-BQK0eZgF.js";import"./useFocusRing-DiEIFPwp.js";import"./index-CKo9uiwm.js";import"./index-B8NePwnw.js";import"./Text-CSqjNMss.js";import"./RSPContexts-DwL8agvn.js";import"./Form-ZhegcCUs.js";import"./useFormValidation-CraaeZ4V.js";import"./Group-DeYpntjE.js";import"./Input-Bq4Vqqpd.js";import"./Hidden-B_kzivom.js";import"./Button-CJVqDdWG.js";import"./useLabels-CwB4JwE6.js";import"./useButton-qnOMufHE.js";import"./useTextField-NUC4aX3Z.js";import"./useControlledState-pLjBfoN3.js";import"./useField-B0YexPGJ.js";import"./TextField.module-DPkQCx_c.js";import"./Label-B5jVEWx5.js";import"./Dialog-4ubmlTtR.js";import"./OverlayArrow-wTzyx3Y4.js";import"./useResizeObserver-DD03rVkz.js";import"./Collection-kM4C1fOf.js";import"./index-eAOazQnS.js";import"./Separator-BwxmNEHY.js";import"./SelectionManager-kGv9cFEb.js";import"./useEvent-BAcO_i_L.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dtxpd41E.js";import"./useDescription-1l4I4YYw.js";import"./ListKeyboardDelegate-BcdPtsBu.js";import"./PressResponder-DrkEnSpk.js";import"./useLocalizedStringFormatter-BbQDdHsq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DfFuG-Eb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CfSP2Ia7.js";import"./Button-BvGYLpp9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BnIikKMu.js";import"./createLucideIcon-CiVnvI1n.js";import"./x-DkVq0ORE.js";import"./Heading-2FBT4Xcv.js";import"./info-D1FV45cc.js";import"./Popover-D_bZvvuO.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

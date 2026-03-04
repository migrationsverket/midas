import{j as e,l}from"./iframe-UFnE_WWZ.js";import{S as t}from"./Skeleton-BqBOBEYw.js";import{T as p}from"./TextField-COo3ce8e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-1SuYudko.js";import"./utils-Boro9Fs8.js";import"./FieldError-DIDzRcSm.js";import"./Text-VMpyaGIc.js";import"./useFocusRing-CagMB1EX.js";import"./index-DuAER-0b.js";import"./index-B_Tx1Q9m.js";import"./Text-DMrMZJ_c.js";import"./RSPContexts-Df9uULAB.js";import"./Form-CuJ-wqIn.js";import"./useFormValidation-CLKVdQyp.js";import"./Group-uMMRMckz.js";import"./Input-CKaKHLxY.js";import"./Hidden-Cq2GYd5C.js";import"./Button-BlMAHKed.js";import"./useLabels-DemKNQhF.js";import"./useButton-C4720CM1.js";import"./useTextField-D0DVQZmI.js";import"./useControlledState-DkL4wxsI.js";import"./useField-BocjWxIh.js";import"./TextField.module-DdivwlC8.js";import"./Label-7TovLwEm.js";import"./Dialog-GRkdi3oq.js";import"./OverlayArrow-Bny0V_wj.js";import"./useResizeObserver-DVL2m7Js.js";import"./Collection-DA9lBYIa.js";import"./index-dfewEFsO.js";import"./Separator-BXj6Lzjs.js";import"./SelectionManager-BlhYVVEw.js";import"./useEvent-B3g2B29-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ijx4JXFT.js";import"./useDescription-aOBh8foQ.js";import"./ListKeyboardDelegate-BB-99mkr.js";import"./PressResponder-DOQiBirk.js";import"./useLocalizedStringFormatter-W8pD0Zdb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGsWE_sO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CqngOA9c.js";import"./Button-Bqr_oLK4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BfDZhfHQ.js";import"./createLucideIcon-DWAOhH2n.js";import"./x-PQVQjURZ.js";import"./Heading-dk_tkQJi.js";import"./info-CugC2Q6d.js";import"./Popover-DKGRURsL.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

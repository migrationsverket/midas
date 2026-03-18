import{j as e,l}from"./iframe-C7t9iVAP.js";import{S as t}from"./Skeleton-BHZZLHZ-.js";import{T as p}from"./TextField-Dr-YDCdw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DxnyzWWJ.js";import"./utils-DHL4vNoB.js";import"./FieldError-D02kFtkC.js";import"./Text-DHSnms-3.js";import"./useFocusRing-BBkvSuUI.js";import"./index-D_TWd0tg.js";import"./index-C8AjsPH3.js";import"./Text-DLwF4mI3.js";import"./RSPContexts-CMbSZKKN.js";import"./Form-BzvUvODL.js";import"./useFormValidation-DY--XCK0.js";import"./Group-B5Ege5NN.js";import"./Input-Ccr9h2jE.js";import"./Hidden-DFB5LB9u.js";import"./Button-DR73eWoN.js";import"./useLabels-DBb3W9ZQ.js";import"./useButton-CqHRV2Gu.js";import"./useTextField-C3oOI1qI.js";import"./useControlledState-yNJAK2-f.js";import"./useField-_wTvKlys.js";import"./TextField.module-DdivwlC8.js";import"./Label-CHpT_Yip.js";import"./Dialog-DYaKrU3e.js";import"./OverlayArrow-BR0NntZm.js";import"./useResizeObserver-B6trb6hQ.js";import"./Collection-BHety989.js";import"./index-BCuOjvAT.js";import"./Separator-4FC5CAWE.js";import"./SelectionManager-Dz4ocvIO.js";import"./useEvent-DKYdhuF3.js";import"./scrollIntoView-CXA6LuS7.js";import"./SelectionIndicator-BUBEQaAn.js";import"./useDescription-CcHmFyqs.js";import"./ListKeyboardDelegate-DdrIfvWn.js";import"./PressResponder-BbhTJQ72.js";import"./useLocalizedStringFormatter-CVtX0aD4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DDaYTRoZ.js";import"./getScrollParent-DLQAjZDh.js";import"./VisuallyHidden-DGjmnIGg.js";import"./x-PvqyWiho.js";import"./createLucideIcon-CJwkvU5U.js";import"./useLocalizedStringFormatter-CR-t_tu1.js";import"./Heading-b7FJGH1A.js";import"./Button-DtM-QtSV.js";import"./Button.module-BB7N-cLd.js";import"./info-DkwQ1_T2.js";import"./Popover-DZDS7sIy.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

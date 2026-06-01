import{j as e,l}from"./iframe-gbJBpoDx.js";import{S as t}from"./Skeleton-Bni8msGZ.js";import{T as p}from"./TextField-AfjJJti8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C8EqSojF.js";import"./utils-DUgHs6FT.js";import"./FieldError-KeTSBYc8.js";import"./Text-CE4EKtCP.js";import"./useFocusRing-CdGrrviA.js";import"./index-DGfeUZWJ.js";import"./index-h8QHE_zG.js";import"./Text-zmsiiY3G.js";import"./RSPContexts-DiLb2jsV.js";import"./Form-DzUfN3tc.js";import"./Group-Bl8S9UBo.js";import"./Input-CQCvpima.js";import"./Hidden-CvjG_1RQ.js";import"./Button-C3tdjGV6.js";import"./useLabel-DBWjU4Cx.js";import"./useLabels-CGcCPDWZ.js";import"./useButton-BmNiDIvC.js";import"./useTextField-Ibv8X9u5.js";import"./useControlledState-CVd5Xqz2.js";import"./useField-D1VuoHuM.js";import"./TextField.module-DdivwlC8.js";import"./Label-BW8iCUOr.js";import"./Dialog-AHauR5Fo.js";import"./OverlayArrow-BI4pGjQC.js";import"./useResizeObserver-DIAWS4tV.js";import"./Collection-CM-3lYwE.js";import"./index-BdX53cNt.js";import"./Separator-Bc-mZsv-.js";import"./SelectionManager-C0D1h0Vh.js";import"./useEvent-waE1JgxF.js";import"./scrollIntoView-DIgHhdMC.js";import"./SelectionIndicator-Ce5zkH-2.js";import"./useDescription-6CJm5bcg.js";import"./ListKeyboardDelegate-la3RUrG9.js";import"./PressResponder-CdMFoX3r.js";import"./useLocalizedStringFormatter--yN4gUH3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BadfckAr.js";import"./getScrollParent-CXwwiqPr.js";import"./VisuallyHidden-Ck3fIWPQ.js";import"./ModalOverlay-DViim-cU.js";import"./x-B_GjQ7rz.js";import"./createLucideIcon-C3IEX8hu.js";import"./useLocalizedStringFormatter-BrXpMl3k.js";import"./Heading-dnaurqAS.js";import"./Button-Dpg56qc6.js";import"./Button.module-BB7N-cLd.js";import"./info-M8_erZew.js";import"./Popover-CJJAPMKr.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

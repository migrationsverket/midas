import{j as e,l}from"./iframe-Dl4LNfFt.js";import{S as t}from"./Skeleton-BsQDXN-i.js";import{T as p}from"./TextField-BB9IG_PT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DQj-O_2L.js";import"./utils-zoe11Nhs.js";import"./FieldError-D8UkVWbY.js";import"./Text-P-m_usmt.js";import"./useFocusRing-DBInQ3ih.js";import"./index-B4dlJKhH.js";import"./index-DfhqQ-fy.js";import"./Text-htVbAu9h.js";import"./RSPContexts-4lSoz9P-.js";import"./Form-BW3kbuFu.js";import"./Group-Dbz0NB1G.js";import"./Input-DBRGGN3r.js";import"./Hidden-qMhe2ll1.js";import"./Button-1ORHN5ed.js";import"./useLabel-BMyaEN82.js";import"./useLabels-D1nLqhyh.js";import"./useButton-B3ilWFtn.js";import"./useTextField-ByuWxfp6.js";import"./useControlledState-CyH9azIX.js";import"./useField-Bt07QuwG.js";import"./TextField.module-DdivwlC8.js";import"./Label-CZ0JfQMw.js";import"./Dialog-DPGx9omw.js";import"./OverlayArrow-DLh9Tp41.js";import"./useResizeObserver-CvCvp2Tt.js";import"./Collection-Bo8GIdVi.js";import"./index-CDp8Li4l.js";import"./Separator--rhMpA_n.js";import"./SelectionManager-Dd8kFD9H.js";import"./useEvent-BlUZThVq.js";import"./scrollIntoView-B7KTALk8.js";import"./SelectionIndicator-BOl6pKjd.js";import"./useDescription-ccYB2Tbm.js";import"./ListKeyboardDelegate-BwRHOVKV.js";import"./PressResponder-4D9BL6pn.js";import"./useLocalizedStringFormatter-BfzJ7Wkp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-InBdBZ0D.js";import"./getScrollParent-CRvNPk_3.js";import"./VisuallyHidden-CI441pyr.js";import"./ModalOverlay-DW1iRgTe.js";import"./x-BosK2Sg6.js";import"./createLucideIcon-1sQySh6M.js";import"./useLocalizedStringFormatter-BHmmo-Zt.js";import"./Heading-DMV6k00x.js";import"./Button-CE6ptzle.js";import"./Button.module-BB7N-cLd.js";import"./info-CCg9E48S.js";import"./Popover-CjC4abvw.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

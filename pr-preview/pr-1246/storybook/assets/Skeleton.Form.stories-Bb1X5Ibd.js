import{j as e,l}from"./iframe-D9EwWE8M.js";import{S as t}from"./Skeleton-EbSx1a2F.js";import{T as p}from"./TextField-BW2x7jhB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CSFrxcOX.js";import"./utils-VDmJlITu.js";import"./FieldError-BbtBJcYl.js";import"./Text-DTRaBlNQ.js";import"./useFocusRing-BivnDFw5.js";import"./index-DAH1O1Iu.js";import"./index-BR2as-GY.js";import"./Text-D4q9EFLH.js";import"./RSPContexts-BNUf7IyR.js";import"./Form-R2R1TL4A.js";import"./Group-DY5AWnbs.js";import"./Input-CuTxManu.js";import"./Hidden-BsKNJICf.js";import"./Button-T_q17eYt.js";import"./useLabel-Bss4QgXi.js";import"./useLabels-C5o1EFbo.js";import"./useButton-BXxscPHn.js";import"./useTextField-oEloXr52.js";import"./useControlledState-D4c56bPB.js";import"./useField-AuOq5rL1.js";import"./TextField.module-DdivwlC8.js";import"./Label-DAMpAuSq.js";import"./Dialog-CkopoPRc.js";import"./OverlayArrow-CWRcvIlw.js";import"./useResizeObserver-C86hNgGZ.js";import"./Collection-DkbGTE8G.js";import"./index-BZtrve2X.js";import"./Separator-BchZp9hK.js";import"./SelectionManager-BEbr8vYA.js";import"./useEvent-DbELLyrS.js";import"./scrollIntoView-COj35Dws.js";import"./SelectionIndicator-BCxJECYe.js";import"./useDescription-C0gXCY7I.js";import"./ListKeyboardDelegate-DswhUtaR.js";import"./PressResponder-CmvIhPV4.js";import"./useLocalizedStringFormatter-Bshgwq-R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tnsGfgn2.js";import"./getScrollParent-Bc3C6zu_.js";import"./VisuallyHidden-D48zSaf7.js";import"./ModalOverlay-dKprTcu_.js";import"./x-Cx3dk2Wl.js";import"./createLucideIcon-DiPE6Ful.js";import"./useLocalizedStringFormatter-C2YbnlKW.js";import"./Heading-Cc7e5DA7.js";import"./Button-EDaj_92B.js";import"./Button.module-BB7N-cLd.js";import"./info-D5eQAm0J.js";import"./Popover-Cv4frh6G.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

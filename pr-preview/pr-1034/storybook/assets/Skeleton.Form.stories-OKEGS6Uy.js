import{j as e,l}from"./iframe-KIBzDUfV.js";import{S as t}from"./Skeleton-eCsflFHf.js";import{T as p}from"./TextField-Cuypn8q6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CW_H8NqU.js";import"./utils-B3s11CxX.js";import"./TextField-D4jNg4Oq.js";import"./FieldError-CQia8U4U.js";import"./Text-BcfqcDG4.js";import"./useFocusRing-DIi5rye2.js";import"./index-B7quJzXG.js";import"./index-CZhNCbuO.js";import"./Text-D2dj_Y_G.js";import"./RSPContexts-BKpto4kw.js";import"./Form-DwKNPYWJ.js";import"./useFormValidation-2ZDFF5_3.js";import"./Group-lnf1-D8B.js";import"./Input-CDsDVhQo.js";import"./Hidden-_s5Kzwns.js";import"./Button-B74IQIIY.js";import"./useLabels-CsvdAiYC.js";import"./useButton-CQ4Hdmts.js";import"./useTextField-Zlf3Ks9e.js";import"./useControlledState-gvhGp19W.js";import"./useField-ttnFMQCX.js";import"./TextField.module-DpzeWGpt.js";import"./Label-C8zDX718.js";import"./Dialog-w_4ICCSl.js";import"./OverlayArrow-BKZa25OL.js";import"./useResizeObserver-Cno1zDdz.js";import"./Collection-DoIqkMu3.js";import"./index-Bm9XISKF.js";import"./Separator-X9dAFN0X.js";import"./SelectionManager-BOhA1hAm.js";import"./useEvent-DlPvFlnY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D-2tbCkj.js";import"./useDescription-Cc1bnlw8.js";import"./ListKeyboardDelegate-uR_8vA3x.js";import"./PressResponder-DBvYC6yD.js";import"./useLocalizedStringFormatter-BDrDCZSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZGwHcL3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BM7AOnhj.js";import"./Button-D_6pE22y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpqnENkr.js";import"./createLucideIcon-DYfbqy8w.js";import"./x-CdrWRsxx.js";import"./Heading-DAzo48yH.js";import"./info-D9i0MW6u.js";import"./Popover-CtEjwxEi.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

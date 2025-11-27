import{j as e,l}from"./iframe-ckMlOdqt.js";import{S as t}from"./Skeleton-rsUWmoJp.js";import{T as d}from"./TextField-DyqbLrGH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bc-udH7B.js";import"./utils-BEkamF-T.js";import"./TextField-B1nbZQOh.js";import"./FieldError-dYiQ5ceD.js";import"./Text-AOi115Er.js";import"./useFocusRing-tPLOxKMi.js";import"./index-D88C6xys.js";import"./index-CnAoOEpY.js";import"./Text-CEwfXAsA.js";import"./RSPContexts-5oeO9ebT.js";import"./Form-B2iA-KIz.js";import"./useFormValidation-Cn1CWmnI.js";import"./Group-DT3w_hSG.js";import"./Input-CP84xrNx.js";import"./Hidden-ByhuVBjJ.js";import"./Button-Dx6eyFNo.js";import"./useLabels-BZnB0y21.js";import"./useButton-DcNY2x9q.js";import"./useTextField-BZ2l5bbs.js";import"./useControlledState-B3FFsQAI.js";import"./useField-CbtVBRto.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DsETeMM0.js";import"./Dialog-DsEwUyqt.js";import"./OverlayArrow-BTsdjwYC.js";import"./useResizeObserver-yMsAuGaR.js";import"./Collection-D-OEq5Qi.js";import"./index-CnKdNEqF.js";import"./Separator-XyLBrGeL.js";import"./SelectionManager-lE_zLbHm.js";import"./useEvent-Bf69eK7o.js";import"./scrollIntoView-D-fTihUR.js";import"./SelectionIndicator-CaOa50L4.js";import"./useDescription-7A577X0U.js";import"./ListKeyboardDelegate-9K7elfes.js";import"./PressResponder-DlmWHrwE.js";import"./useLocalizedStringFormatter-v7dlyhTP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CpbzBao7.js";import"./VisuallyHidden-PSC2lnf9.js";import"./Button-Bu43okhr.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-taz3lryJ.js";import"./createLucideIcon-BKonS68S.js";import"./x-BOSQYS8s.js";import"./Heading-FfM7aRYe.js";import"./info-Bar-uwLW.js";import"./Popover-C24WQauw.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};

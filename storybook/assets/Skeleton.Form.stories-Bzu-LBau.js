import{j as e,l}from"./iframe-goP8imCK.js";import{S as t}from"./Skeleton-4T6Qj_Ue.js";import{T as p}from"./TextField-DheqrNr-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BzydQNgx.js";import"./utils-D97N4ORW.js";import"./TextField-B-uzxpua.js";import"./FieldError-DvD6etUO.js";import"./Text-Bl2otZFr.js";import"./useFocusRing-D7HTnxbj.js";import"./index-UqNR_IG4.js";import"./index-CvvtcQxC.js";import"./Text-DqafpL3h.js";import"./RSPContexts-BWY-CEwa.js";import"./Form-CVDyocQS.js";import"./useFormValidation-R1RtiSXs.js";import"./Group-CQXamCCp.js";import"./Input-Cg6l1f1i.js";import"./Hidden-x8iT2j8D.js";import"./Button-CnchVFFe.js";import"./useLabels-KHl-vYzN.js";import"./useButton-UIJcfSO0.js";import"./useTextField-2mAEEhej.js";import"./useControlledState-CK6_hlZX.js";import"./useField-MY_dj48I.js";import"./TextField.module-DpzeWGpt.js";import"./Label-ruUYSCjR.js";import"./Dialog-D9zG68I5.js";import"./OverlayArrow-jPRFrMAS.js";import"./useResizeObserver-Bwbhch5H.js";import"./Collection-2p1YYWZC.js";import"./index-DzhSEPgE.js";import"./Separator-BQJngKrY.js";import"./SelectionManager-COI7Qxov.js";import"./useEvent-DFlAQp2Z.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CC9Kh-G_.js";import"./useDescription-CwsM3XiG.js";import"./ListKeyboardDelegate-Dk7nWPad.js";import"./PressResponder-D9dmomuc.js";import"./useLocalizedStringFormatter-5g3MeGHg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bn5JVWGP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bk8wprlF.js";import"./Button-Bamq_8Qe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fhyQcR-T.js";import"./createLucideIcon-Bja-RJnq.js";import"./x-b-ZywUqK.js";import"./Heading-DbBXOFxh.js";import"./info-B4mfTgKe.js";import"./Popover-CYtTm_VD.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

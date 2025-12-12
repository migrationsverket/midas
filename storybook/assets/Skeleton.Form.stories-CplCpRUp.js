import{j as e,l}from"./iframe-Cu5hLgBG.js";import{S as t}from"./Skeleton-BO63BNPJ.js";import{T as p}from"./TextField-CegtnEjT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-E5GytAwB.js";import"./utils-CW9D4Lv5.js";import"./TextField-CHrdF_2n.js";import"./FieldError-D5AbsiAI.js";import"./Text-DP2X-ccp.js";import"./useFocusRing-bpKh6ibc.js";import"./index-DUcOwDca.js";import"./index-DvgRwaKu.js";import"./Text-xlVuuP9J.js";import"./RSPContexts-C3rBS2VC.js";import"./Form-BkbI1GNi.js";import"./useFormValidation-DJKo3yYL.js";import"./Group-Dt9q-vyb.js";import"./Input-D2eFzx-W.js";import"./Hidden-B24fzWWq.js";import"./Button-DhXAJjoH.js";import"./useLabels-3yOZ9Ivw.js";import"./useButton-DbviMFTP.js";import"./useTextField-Czeh-z5Q.js";import"./useControlledState-C7_3uWc9.js";import"./useField-COQITc8t.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cah3aE3e.js";import"./Dialog-C9xxRjNC.js";import"./OverlayArrow-C3xVDF-P.js";import"./useResizeObserver-DvJVvnmG.js";import"./Collection-cThH_D4l.js";import"./index-BmH71ASy.js";import"./Separator-B-lL_CDQ.js";import"./SelectionManager-jncmGFRN.js";import"./useEvent-Ddh_cSBe.js";import"./scrollIntoView-BLwcbaDf.js";import"./SelectionIndicator-n_gsSn3K.js";import"./useDescription-C3gitIed.js";import"./ListKeyboardDelegate-CudDCdpR.js";import"./PressResponder-BbBgMSpr.js";import"./useLocalizedStringFormatter-CqfjLmNe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DFn_IfTI.js";import"./VisuallyHidden-Cj9dIF3c.js";import"./Button-BOIdh-Wh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B204hAxd.js";import"./createLucideIcon-CASls7dt.js";import"./x-fM7wQSz2.js";import"./Heading-CaGiJy-7.js";import"./info-BqLtrF51.js";import"./Popover-BvUUcE21.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

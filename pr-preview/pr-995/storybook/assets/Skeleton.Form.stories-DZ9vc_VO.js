import{j as e,l}from"./iframe-CiD__Hyy.js";import{S as t}from"./Skeleton-DcDBnnBh.js";import{T as p}from"./TextField-BDFa_xHN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DPaKP_TK.js";import"./TextField-Bmy87Lel.js";import"./utils-Q1z5OATQ.js";import"./FieldError-Dm1ekGMw.js";import"./Text-DeJgjfoW.js";import"./useFocusRing-BySSjodA.js";import"./index-BT7nfzmR.js";import"./index-CV7cu1dt.js";import"./Text-BQRoNCWw.js";import"./RSPContexts-D7xeFMEU.js";import"./Form-CTNtdEqU.js";import"./useFormValidation-Ccsqp47f.js";import"./Group-uvCIo-cz.js";import"./Input-BFUk7xIH.js";import"./Hidden-BE6gFQQR.js";import"./Button-B2sA97lD.js";import"./useLabels-CX9hgZKe.js";import"./useButton-X_4XH9RQ.js";import"./useTextField-Bz-0psYq.js";import"./useControlledState-B8jVS4zb.js";import"./useField-BJf9s_op.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CTzQhgPn.js";import"./Dialog-XK2tbbyX.js";import"./OverlayArrow-quJYtZJD.js";import"./useResizeObserver-DJeJdTvO.js";import"./Collection-DqSIwb3e.js";import"./index-D2IFlk2J.js";import"./Separator-C76xaioL.js";import"./SelectionManager-D-z9OdLk.js";import"./useEvent-CdJ8U0oy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D4dp0ZQd.js";import"./useDescription-iasQP9PS.js";import"./ListKeyboardDelegate-BJs1W7dk.js";import"./PressResponder-DsyqempF.js";import"./useLocalizedStringFormatter-GCebu6ZU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CP1kT0Bu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BXpQqt24.js";import"./Button-D24FKJ_j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-EaUWWv-J.js";import"./createLucideIcon-BkxrGWvy.js";import"./x-BkZTMQtm.js";import"./Heading-DwR6zONe.js";import"./info-XB7eNwtX.js";import"./Popover-Cnn_KCNJ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-drf9EhAh.js";import{S as t}from"./Skeleton-BlBRxdkN.js";import{T as p}from"./TextField-DYAhdRUm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DKVGivGK.js";import"./utils-DcVi9P2n.js";import"./FieldError-Csn4LdNH.js";import"./Text-4jcbiO_v.js";import"./useFocusRing-CFnRXdWt.js";import"./index-DYwtvWTx.js";import"./index-C8RswtkR.js";import"./Text-BGu5cWKN.js";import"./RSPContexts-CdnNEEoB.js";import"./Form-D1u5ze6A.js";import"./Group-DBxIGOXS.js";import"./Input-CkrGyO13.js";import"./Hidden-DCsyu9It.js";import"./Button-uX5YcsyE.js";import"./useLabel-Nvs3avqK.js";import"./useLabels-CghwtOHR.js";import"./useButton-BPOukTAc.js";import"./useTextField-iOBnPuVv.js";import"./useControlledState-PtQwVjVx.js";import"./useField-BeF2QHdx.js";import"./TextField.module-DdivwlC8.js";import"./Label-B4tCS9Bi.js";import"./Dialog-BecWSRZT.js";import"./OverlayArrow-C5cLVELl.js";import"./useResizeObserver-D54OGLsw.js";import"./Collection-Bsu-J4zk.js";import"./index-BZAuS4Xz.js";import"./Separator-C-y7AnE8.js";import"./SelectionManager-Cw-cvhTc.js";import"./useEvent-DDZO5sYT.js";import"./scrollIntoView-DPcz4qGT.js";import"./SelectionIndicator-CGpdz0B5.js";import"./useDescription-DoT_EJq_.js";import"./ListKeyboardDelegate-Cu9VUk_s.js";import"./PressResponder-JoTRNLaF.js";import"./useLocalizedStringFormatter-B8W8LNuc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-NoejLbZr.js";import"./getScrollParent-C25lSkvK.js";import"./VisuallyHidden-S3B-3ASH.js";import"./ModalOverlay-Bw3fg6dQ.js";import"./x-BhSuHU0t.js";import"./createLucideIcon-ZHG_RQ_P.js";import"./useLocalizedStringFormatter-IFaLmUck.js";import"./Heading-BUSolncq.js";import"./Button-CKcwfDVm.js";import"./Button.module-BB7N-cLd.js";import"./info-CQOOIdcR.js";import"./Popover-DmAk6xa2.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

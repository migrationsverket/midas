import{j as e,l}from"./iframe-C2f3UQ4Q.js";import{S as t}from"./Skeleton-Qwe0hIv-.js";import{T as p}from"./TextField-lX4TxzcW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CEjJyImC.js";import"./utils-CLD-we63.js";import"./FieldError-BA_pXY2h.js";import"./Text-CFY7ThNC.js";import"./useFocusRing-DVjvJ21q.js";import"./index-l0Ekt22g.js";import"./index-CjqMqS35.js";import"./Text-BR3njYC5.js";import"./RSPContexts-Bp3NLRK2.js";import"./Form-CgrJV7ns.js";import"./Group-oML09Sjz.js";import"./Input-DAHgA2q_.js";import"./Hidden-BHtTPiMo.js";import"./Button-CzARpBSV.js";import"./useLabel-DqyzBRvV.js";import"./useLabels-DcONnofe.js";import"./useButton-CJnW-LDE.js";import"./useTextField-DpnzASRr.js";import"./useControlledState-BkR5yEcJ.js";import"./useField-0g5R6fiS.js";import"./TextField.module-DdivwlC8.js";import"./Label-Ca1BE5-1.js";import"./Dialog-DIomJqtq.js";import"./OverlayArrow-BunP0fua.js";import"./useResizeObserver-CtCc1gMc.js";import"./Collection-D-JS7TLq.js";import"./index-CoMFBIZN.js";import"./Separator-BNQyI1hy.js";import"./SelectionManager-Dawn3y1S.js";import"./useEvent-CN0f60Tw.js";import"./scrollIntoView-Bp6pSfX4.js";import"./SelectionIndicator-D6k5vYNx.js";import"./useDescription-Majc7XiZ.js";import"./ListKeyboardDelegate-B4-w-E8p.js";import"./PressResponder-PicVGm3l.js";import"./useLocalizedStringFormatter-BB6QmVJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2Tp_pi8.js";import"./getScrollParent-Cb8Zmktw.js";import"./VisuallyHidden-Cug_bQSe.js";import"./ModalOverlay-BFjQR49T.js";import"./x-CEzz9POE.js";import"./createLucideIcon-B0GS721z.js";import"./useLocalizedStringFormatter-DxAPCXcs.js";import"./Heading-CZXc5KA3.js";import"./Button-Cubx1h0F.js";import"./Button.module-BB7N-cLd.js";import"./info-9Nz0ofXd.js";import"./Popover-DGCgmkqO.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

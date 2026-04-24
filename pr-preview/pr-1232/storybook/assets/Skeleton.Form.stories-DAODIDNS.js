import{j as e,l}from"./iframe-IJuqoOmk.js";import{S as t}from"./Skeleton-CLhgEB2s.js";import{T as p}from"./TextField-BG32DNIq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-csDj7HpE.js";import"./utils-B1FkGHW3.js";import"./FieldError-BFehnrZy.js";import"./Text-B8nSOSOw.js";import"./useFocusRing-CkLNsvno.js";import"./index-CBGauQ3U.js";import"./index-DtmQ20tD.js";import"./Text-Dbv6zmdw.js";import"./RSPContexts-BaJeT4Si.js";import"./Form-D4TqUibt.js";import"./Group-Dh2KQ9lo.js";import"./Input-C9csjcmV.js";import"./Hidden-DzRh-64e.js";import"./Button-E9T7cgY3.js";import"./useLabel-BDetoK4o.js";import"./useLabels-W32AwYY6.js";import"./useButton-Ckvqp9dV.js";import"./useTextField-C2-ei7Yz.js";import"./useControlledState-DL7f2Wr3.js";import"./useField-C73EInUm.js";import"./TextField.module-DdivwlC8.js";import"./Label-HhRYMSA5.js";import"./Dialog-D2Gdenpy.js";import"./OverlayArrow-B05urvva.js";import"./useResizeObserver-B_Aj4v-9.js";import"./Collection-Dbvuv6fS.js";import"./index-_UICZ5rp.js";import"./Separator-ButKc24M.js";import"./SelectionManager-DPPUnvtT.js";import"./useEvent-tP2LEsJ9.js";import"./scrollIntoView-Cek-eHKE.js";import"./SelectionIndicator-BxSO78Cy.js";import"./useDescription--7_MWUV8.js";import"./ListKeyboardDelegate-OIAI4zXm.js";import"./PressResponder-C0Ft6gtK.js";import"./useLocalizedStringFormatter-BdCq-opg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DFB-t0y7.js";import"./getScrollParent-CQ3nADdi.js";import"./VisuallyHidden-Bdyvpnxr.js";import"./ModalOverlay-CuG1KHeC.js";import"./x-BhOMJrhI.js";import"./createLucideIcon-9OQLRRNP.js";import"./useLocalizedStringFormatter-Vjm4sErI.js";import"./Heading-Crc-KCwN.js";import"./Button-DQFlWi2u.js";import"./Button.module-BB7N-cLd.js";import"./info-CW6QV4tx.js";import"./Popover-4MHobK71.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

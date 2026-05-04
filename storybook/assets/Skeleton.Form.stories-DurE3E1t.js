import{j as e,l}from"./iframe-CHfAArqL.js";import{S as t}from"./Skeleton-Cp0xgyrH.js";import{T as p}from"./TextField-GmQXU_v4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BqmKCg9m.js";import"./utils-B9qYaPsL.js";import"./FieldError-DThBEncI.js";import"./Text-9hAgyQPX.js";import"./useFocusRing-BLqX-8xD.js";import"./index-DD_A6Sdz.js";import"./index-BO2C6bAK.js";import"./Text-C_6I0x6_.js";import"./RSPContexts-CdZqI30k.js";import"./Form-CBT2Kr6Z.js";import"./Group-CPEXitlT.js";import"./Input-B_9-fJ2Q.js";import"./Hidden-BOX53JQz.js";import"./Button-Kjhz10Fb.js";import"./useLabel-BoRZ5h0h.js";import"./useLabels-8brOlTZV.js";import"./useButton-CXuQG5Fo.js";import"./useTextField-BhUdXcAj.js";import"./useControlledState-By7B3ojn.js";import"./useField-CG5Odj4p.js";import"./TextField.module-DdivwlC8.js";import"./Label-P5A-OK5O.js";import"./Dialog-1rk1nwhV.js";import"./OverlayArrow-Bwvt3YxS.js";import"./useResizeObserver-BdFYLAox.js";import"./Collection-YstYuLwH.js";import"./index-Dr28t-aO.js";import"./Separator-Bu6zTg-i.js";import"./SelectionManager-zN7EIGI4.js";import"./useEvent-g8MOXAII.js";import"./scrollIntoView-DiMlvdiv.js";import"./SelectionIndicator-Blsn9PZp.js";import"./useDescription-DeNQGmHX.js";import"./ListKeyboardDelegate-Dvro-OxG.js";import"./PressResponder-D3_ecemp.js";import"./useLocalizedStringFormatter-aQ9hIT3Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-OoL9LBbg.js";import"./getScrollParent-DFfRG1WF.js";import"./VisuallyHidden-QI36eTUn.js";import"./ModalOverlay-Dcp2QOPO.js";import"./x-DIO0llkK.js";import"./createLucideIcon-Cv2FgIad.js";import"./useLocalizedStringFormatter-B-k-1dED.js";import"./Heading-B3eVwh_1.js";import"./Button-Cmx0GvV9.js";import"./Button.module-BB7N-cLd.js";import"./info-FFLP7lf-.js";import"./Popover-DbjKufjU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

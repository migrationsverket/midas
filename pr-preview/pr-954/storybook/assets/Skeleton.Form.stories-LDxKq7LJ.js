import{j as e,l}from"./iframe-BOu6r4-L.js";import{S as t}from"./Skeleton-oI5Vm0Ol.js";import{T as d}from"./TextField-M7FQNwxo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Ccim4EHS.js";import"./utils-Of-4zx3T.js";import"./TextField-BQcAPkBh.js";import"./FieldError-D7y_D_tp.js";import"./Text-zopR0-zB.js";import"./useFocusRing-CFbRrjJi.js";import"./index-DqaHjeC4.js";import"./index-CMXhJPlL.js";import"./Text-BqeEVLWH.js";import"./RSPContexts-D6jwhaRj.js";import"./Form-CJoTusSy.js";import"./useFormValidation-BvCWzLf5.js";import"./Group-D-61JDXN.js";import"./Input-uPtQgUZM.js";import"./Hidden-2Cq_win6.js";import"./Button-B0Z6PH11.js";import"./useLabels-BrgyP2gh.js";import"./useButton-BT4cJEqS.js";import"./useTextField-BHG6MITi.js";import"./useControlledState--hsMgjoo.js";import"./useField-WPA3bolz.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-pg1HfSN-.js";import"./Dialog-B-xupTzu.js";import"./OverlayArrow-C0VI_-Sm.js";import"./useResizeObserver-DcktYRWG.js";import"./Collection-B3EFxjLo.js";import"./index-7nKSgttP.js";import"./Separator-PubfREDO.js";import"./SelectionManager-BaNakBcO.js";import"./useEvent-CoQgBDF8.js";import"./scrollIntoView-7tZxxRg-.js";import"./SelectionIndicator-DvVwYFjT.js";import"./useDescription-DJ-wqbC6.js";import"./ListKeyboardDelegate-umKl9bK6.js";import"./PressResponder-DOsDTSNB.js";import"./useLocalizedStringFormatter-BW64KWwC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BlFk2VvU.js";import"./VisuallyHidden-Dj8ZJDI7.js";import"./Button-ndCSfgaE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTxkkben.js";import"./createLucideIcon-D3MExOcj.js";import"./x-DLkIoQKB.js";import"./Heading-BD9bvnEY.js";import"./info-DJVf1DvT.js";import"./Popover-BDAXrfJJ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

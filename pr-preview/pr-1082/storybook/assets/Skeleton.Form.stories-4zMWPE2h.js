import{j as e,l}from"./iframe-DZnWAGNq.js";import{S as t}from"./Skeleton-BMK0eTpY.js";import{T as p}from"./TextField-BkRI6UK3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Zw7wfow_.js";import"./utils-Btsh_mej.js";import"./FieldError-BtctqwaV.js";import"./Text-8pdzY51Q.js";import"./useFocusRing-BZzOLfX3.js";import"./index--cp8vNXJ.js";import"./index-DH1eMf2P.js";import"./Text-Db4n8kvt.js";import"./RSPContexts-CXYZROJa.js";import"./Form-CG9hywiv.js";import"./Group-BT1uP5Tz.js";import"./Input-BBO63mR7.js";import"./Hidden-Dc0Ha1vW.js";import"./Button-BTPuoZ6n.js";import"./useLabel-iphFOCA9.js";import"./useLabels-bUzroRw2.js";import"./useButton-DqeMFL8_.js";import"./useTextField-DQnkPp5b.js";import"./useControlledState-6kQgBtxG.js";import"./useField-CizEGine.js";import"./TextField.module-DdivwlC8.js";import"./Label-DZGli3B2.js";import"./Dialog-DqDYti0o.js";import"./OverlayArrow-BVJeE4kz.js";import"./useResizeObserver-BkJg5wU7.js";import"./Collection-C5d1-j9T.js";import"./index-CEga0pt2.js";import"./Separator-BXSYDV5i.js";import"./SelectionManager-BxFJ5IQA.js";import"./useEvent-BKkN6iVY.js";import"./scrollIntoView-BEWtuar9.js";import"./SelectionIndicator-W5u8necK.js";import"./useDescription-BbNu-u1f.js";import"./ListKeyboardDelegate-CWkiXoVF.js";import"./PressResponder-CEJI167T.js";import"./useLocalizedStringFormatter-BNHvIU-7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CcV7oYXW.js";import"./getScrollParent-5LQJ6MUd.js";import"./VisuallyHidden-BIds43GM.js";import"./x-B3FTSjlW.js";import"./createLucideIcon-DnUFLHhp.js";import"./useLocalizedStringFormatter-GZqDfzDD.js";import"./Heading-D57DtYH1.js";import"./Button-DcP_UxfK.js";import"./Button.module-BFenTVPP.js";import"./info-Cn6tw5WX.js";import"./Popover-D0vFyNDw.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

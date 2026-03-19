import{j as e,l}from"./iframe-CTc60VTv.js";import{S as t}from"./Skeleton-f6fA1TOY.js";import{T as d}from"./TextField-Cpy1_wgr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BXg__wrz.js";import"./utils-CX_MyPJp.js";import"./FieldError-DLICbn0F.js";import"./Text-BWm8EFxq.js";import"./useFocusRing-DGMfhUR8.js";import"./index-CopPqlir.js";import"./index-B5EHLrG2.js";import"./Text-U4cmy44W.js";import"./RSPContexts-DfNYkHSv.js";import"./Form-D62ZHhda.js";import"./Group-Cxt1AVrf.js";import"./Input-DsNWiE5X.js";import"./Hidden-Bn2RbpW0.js";import"./Button-pB47d38A.js";import"./useLabels-DSU9QQ05.js";import"./useButton-BcQwxG2_.js";import"./useTextField-ccJ8AYql.js";import"./useControlledState-D-bgWf48.js";import"./useField-DhnrRXLH.js";import"./TextField.module-DdivwlC8.js";import"./Label-CqCGomG1.js";import"./Dialog-D8MoIiNv.js";import"./OverlayArrow-9kYQsc9o.js";import"./useResizeObserver-BgHl2AUh.js";import"./Collection-DAGgpsDY.js";import"./index-B5bk7jfZ.js";import"./Separator-DoBcy2Xs.js";import"./SelectionManager-nnkpkyRI.js";import"./useEvent-rHHxS9Wo.js";import"./scrollIntoView-FnEgfIWQ.js";import"./SelectionIndicator-CAHQmEAu.js";import"./useDescription-DgVzXBhb.js";import"./ListKeyboardDelegate-DByJPBwI.js";import"./PressResponder-DDCmS_Vy.js";import"./useLocalizedStringFormatter-B9U1Drd-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CxFbrl_4.js";import"./getScrollParent-DlGzH9JS.js";import"./VisuallyHidden-SblkdzTe.js";import"./x-B_Vqy6_g.js";import"./createLucideIcon-C63opgfS.js";import"./useLocalizedStringFormatter-Ci3kGB7o.js";import"./Heading-CtvMQJYy.js";import"./Button-BjBl_qxz.js";import"./Button.module-BB7N-cLd.js";import"./info-nmSg-2Cx.js";import"./Popover-DXlCp9OK.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};

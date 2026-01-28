import{j as e,l}from"./iframe-B4Bxc31-.js";import{S as t}from"./Skeleton-CeWnKb-g.js";import{T as p}from"./TextField-B_fY7_k3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D59PB7Bi.js";import"./utils-CeZcgYm6.js";import"./TextField-GLAFCFhg.js";import"./FieldError-CihcasJE.js";import"./Text-r5dJNPiY.js";import"./useFocusRing-BfKHzdgs.js";import"./index-C4J05Lc5.js";import"./index-DgJUXc_n.js";import"./Text-JHx8n9q1.js";import"./RSPContexts-D2qBqFC6.js";import"./Form-Ds8b_gZJ.js";import"./useFormValidation-BQSgNpFd.js";import"./Group-DrFgJ0ZN.js";import"./Input-BTbEku2X.js";import"./Hidden-C62-4jmO.js";import"./Button-CDG3o-tS.js";import"./useLabels-wF9e--1W.js";import"./useButton-CcZzD6iW.js";import"./useTextField-D1gI0ZEN.js";import"./useControlledState-Cg9KEN5b.js";import"./useField-CUKRhRws.js";import"./TextField.module-1fNSVGjT.js";import"./Label-5cptDu9k.js";import"./Dialog-BeqQGcVr.js";import"./OverlayArrow-CoRXoM7X.js";import"./useResizeObserver-CiGakr_c.js";import"./Collection-B9xM4Pal.js";import"./index-mbFFKS_D.js";import"./Separator-CMsTmUbN.js";import"./SelectionManager-L_Duk7qi.js";import"./useEvent-D5R27whq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CEVTJOdn.js";import"./useDescription-CSCKMn8T.js";import"./ListKeyboardDelegate-D96mliyZ.js";import"./PressResponder-RGGxpaN4.js";import"./useLocalizedStringFormatter-D5WpXGBK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPpUi3cs.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DlEhGwXr.js";import"./Button-CN8pseCj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFzkaQ8-.js";import"./createLucideIcon-DGUSaHO7.js";import"./x-CCZLGaNC.js";import"./Heading-BI4qkTim.js";import"./info-C5tm93Rd.js";import"./Popover-DAn-SSfJ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

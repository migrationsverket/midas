import{j as e,l}from"./iframe-BjXy11IP.js";import{S as t}from"./Skeleton-CRc34yzd.js";import{T as p}from"./TextField-Csk5nV8E.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CL4LxfW4.js";import"./utils-Dj8sQgIn.js";import"./FieldError-Bj299096.js";import"./Text-DM8Ihy_8.js";import"./useFocusRing-D20u5I3y.js";import"./index-BXFUTcBh.js";import"./index-BLEH-ht0.js";import"./Text-CXAF5biH.js";import"./RSPContexts-Dc6ISs8u.js";import"./Form-DuPSWePz.js";import"./Group-BOFuX5F4.js";import"./Input-CFw_curM.js";import"./Hidden-B_bNI1dK.js";import"./Button-CwQmoSQG.js";import"./useLabel-1ZP1GF7v.js";import"./useLabels-ipnyo4k3.js";import"./useButton-CDDhm8mD.js";import"./useTextField-oCc11dAG.js";import"./useControlledState-BFdO-Aas.js";import"./useField-C2clUNbs.js";import"./TextField.module-DdivwlC8.js";import"./Label-3Owq8FvS.js";import"./Dialog-B6fuA9-4.js";import"./OverlayArrow-Bo6JBAss.js";import"./useResizeObserver-nRmR3_D9.js";import"./Collection-Bmvuh_aD.js";import"./index-svh7ED_h.js";import"./Separator-CbpAxHaB.js";import"./SelectionManager-MUVk0-Jq.js";import"./useEvent-BvN2BQGn.js";import"./scrollIntoView-e8j4Q6hS.js";import"./SelectionIndicator-DnJhxFrg.js";import"./useDescription-BaUF5NM6.js";import"./ListKeyboardDelegate-Dlc0U7io.js";import"./PressResponder-DoU1gB1A.js";import"./useLocalizedStringFormatter-2-idTql7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-wH-jenxE.js";import"./getScrollParent-Cwho8gKu.js";import"./VisuallyHidden-B8YjGTUD.js";import"./ModalOverlay-ki2j3uM5.js";import"./x-CBMTJOuE.js";import"./createLucideIcon-BrUYswYS.js";import"./useLocalizedStringFormatter-DylN3B8r.js";import"./Heading-BDcENu1i.js";import"./Button-CaR7So5F.js";import"./Button.module-BB7N-cLd.js";import"./info-CVrM1csg.js";import"./Popover-BeI0kvvq.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

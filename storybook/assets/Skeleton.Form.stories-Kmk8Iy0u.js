import{j as e,l}from"./iframe-DwI68eck.js";import{S as t}from"./Skeleton-BEV-DAv6.js";import{T as p}from"./TextField-BuKb6Srt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-xdJxl_fE.js";import"./utils-Dw1S_uWj.js";import"./TextField-Dg8tgoz7.js";import"./FieldError-CtXLLrVt.js";import"./Text-llkKnBOG.js";import"./useFocusRing-DB0Vn7oI.js";import"./index-DyjIQlNW.js";import"./index-DBi3ohRe.js";import"./Text-CkP7VZx0.js";import"./RSPContexts-CBTI3P45.js";import"./Form-B97yB_J0.js";import"./useFormValidation-C8z9LNZS.js";import"./Group-BcYaaqi1.js";import"./Input-ClTjxLAD.js";import"./Hidden-DPNZSM4r.js";import"./Button-Dq8sGMaF.js";import"./useLabels-DRJ0S-DI.js";import"./useButton-C5XtJKU4.js";import"./useTextField-BqGWXZj6.js";import"./useControlledState-B4AMrZHZ.js";import"./useField-CmRL5QBJ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dj_J8W1G.js";import"./Dialog-DBgR96yC.js";import"./OverlayArrow-hpFbAA22.js";import"./useResizeObserver-NyppaQoy.js";import"./Collection-DRikJRb9.js";import"./index-aa6DVWL6.js";import"./Separator-DHHHnuYV.js";import"./SelectionManager--Ldx6ANV.js";import"./useEvent-De40iJ4U.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CKXp1bx9.js";import"./useDescription-B56we0Bc.js";import"./ListKeyboardDelegate-eGB28Zrm.js";import"./PressResponder-B9gPpccx.js";import"./useLocalizedStringFormatter-C-X_uo4l.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BlYtIW2E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DzFRqZJO.js";import"./Button-CTJhina1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-K9SYCEaj.js";import"./createLucideIcon-DGN0UqC4.js";import"./x-mpCuSzBg.js";import"./Heading-iMcIu53o.js";import"./info-BEwUiiBp.js";import"./Popover-DwF0j103.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

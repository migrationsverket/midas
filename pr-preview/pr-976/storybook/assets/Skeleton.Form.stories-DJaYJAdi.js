import{j as e,l}from"./iframe-vt6_0wvc.js";import{S as t}from"./Skeleton-CiXQ5zW0.js";import{T as p}from"./TextField-DpHrHcYa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-75gmqsWY.js";import"./utils-C50KWGJn.js";import"./TextField-evud3117.js";import"./FieldError-rI95JyM5.js";import"./Text-vUv8LtJg.js";import"./useFocusRing-u1CE1zmZ.js";import"./index-DrKf0VEH.js";import"./index-BowZacW-.js";import"./Text-0bO177qh.js";import"./RSPContexts-DzFGh60v.js";import"./Form-BXHoTWxL.js";import"./useFormValidation-tBiv9jXM.js";import"./Group--hgAVnQ0.js";import"./Input-87zsAeNg.js";import"./Hidden-DeIa8qWF.js";import"./Button-BHz5qLC4.js";import"./useLabels-CrmuBcKe.js";import"./useButton-BIS2iV2Y.js";import"./useTextField-Df4lvF89.js";import"./useControlledState-CoGrqUr-.js";import"./useField-BxJjlG8P.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-hlcokpnw.js";import"./Dialog-CRL0gmQm.js";import"./OverlayArrow-Bqkfg2_K.js";import"./useResizeObserver-BBHzdZPi.js";import"./Collection-hg3bKVZ3.js";import"./index-DgzbGFH4.js";import"./Separator-Ds2k70rn.js";import"./SelectionManager-Bn46v6r6.js";import"./useEvent-DOuIdZBU.js";import"./scrollIntoView-CyHSHxm5.js";import"./SelectionIndicator-QXnJIiGl.js";import"./useDescription-DBldu5Od.js";import"./ListKeyboardDelegate-CyFOtZm3.js";import"./PressResponder-BaAB9t9S.js";import"./useLocalizedStringFormatter-B9noaZZg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-6cxbsgtt.js";import"./VisuallyHidden-BJCH1Yk0.js";import"./Button-BYpM6_0E.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-BykdjwWy.js";import"./createLucideIcon-CYjeYtY6.js";import"./x-2Ugz14oC.js";import"./Heading-ZFdyPK5S.js";import"./info-BefLRhVH.js";import"./Popover-BXszS6zB.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

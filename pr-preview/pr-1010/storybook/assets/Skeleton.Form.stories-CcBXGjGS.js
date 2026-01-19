import{j as e,l}from"./iframe-B63rKYqU.js";import{S as t}from"./Skeleton-efSVpNG7.js";import{T as p}from"./TextField-RtuTHvwy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2rRUc1x.js";import"./utils-B8PawZ4p.js";import"./TextField-4N9it18c.js";import"./FieldError-D2ragNVA.js";import"./Text-Bq093QF5.js";import"./useFocusRing-DmPhrr6X.js";import"./index-BYawnw9P.js";import"./index-uItY6MEj.js";import"./Text-BAZ032Hu.js";import"./RSPContexts--nuT990L.js";import"./Form-G2zsCk4o.js";import"./useFormValidation-Bsz9sBLD.js";import"./Group-5VzZnMEU.js";import"./Input-DPke8Hdy.js";import"./Hidden-BYyNs38Y.js";import"./Button-C9TkbvA1.js";import"./useLabels-Vvrocbqw.js";import"./useButton-BJDVqpSD.js";import"./useTextField-BcH3O51m.js";import"./useControlledState-D2SrYs4q.js";import"./useField-qBosTa6s.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CNTpYo0b.js";import"./Dialog-D83Cds8z.js";import"./OverlayArrow-L791iWYJ.js";import"./useResizeObserver-mVBAO9cG.js";import"./Collection-CY2MdGwK.js";import"./index-B8cjTzbQ.js";import"./Separator-DvfsOdRN.js";import"./SelectionManager-DzCv25Xr.js";import"./useEvent-BtzPI4lT.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B9usOHSg.js";import"./useDescription-kCZJFcL9.js";import"./ListKeyboardDelegate-CM7zLjwQ.js";import"./PressResponder-CehoTQ2a.js";import"./useLocalizedStringFormatter-KGBF3wy6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5ezL5Ud.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D1fJoZKk.js";import"./Button-CpkwJ8HO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bjx4e2b1.js";import"./createLucideIcon-Cv9mqkPS.js";import"./x-CqJOIyZm.js";import"./Heading-CZ9K5txu.js";import"./info-CcxI7oxh.js";import"./Popover-DTwx4U23.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

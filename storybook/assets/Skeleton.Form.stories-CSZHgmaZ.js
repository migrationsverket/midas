import{j as e,l}from"./iframe-BhyhdtXP.js";import{S as t}from"./Skeleton-BEczWKY4.js";import{T as p}from"./TextField-Cr2ssccr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-iedFNQT4.js";import"./utils-CGWlpFgY.js";import"./TextField-DqIkEmeY.js";import"./FieldError-DCeVhp7S.js";import"./Text-B-Mbjzpq.js";import"./useFocusRing-CLgq8lqG.js";import"./index-B89a7HzS.js";import"./index-BOsuVa2L.js";import"./Text-jDKA3oAD.js";import"./RSPContexts-pAilTGuB.js";import"./Form-it9E688f.js";import"./useFormValidation-DmOBSjg0.js";import"./Group-DkJQMO8S.js";import"./Input-DAjBkyD1.js";import"./Hidden-BdJ24Yzp.js";import"./Button-C9H7bBoo.js";import"./useLabels-5ZaQnqMS.js";import"./useButton-BdEoA23r.js";import"./useTextField-0yybQNTL.js";import"./useControlledState-Dx8jPu5Z.js";import"./useField-CaiZwujr.js";import"./TextField.module-1fNSVGjT.js";import"./Label-BqI3nq1y.js";import"./Dialog-CV6iNIfu.js";import"./OverlayArrow-CMwHKIIc.js";import"./useResizeObserver-DuZstJT9.js";import"./Collection-etEs1dki.js";import"./index-BWr0QrxI.js";import"./Separator-B-IRNIGq.js";import"./SelectionManager-cqG52ld-.js";import"./useEvent-lYhLdKrQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQlPeLkE.js";import"./useDescription-Dr1wl7PX.js";import"./ListKeyboardDelegate-BuCzJAIh.js";import"./PressResponder-TXqZCWpy.js";import"./useLocalizedStringFormatter-DfMqiQIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUEPhhmF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C-jWiPOY.js";import"./Button-RHoYggw3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D44WV7Rd.js";import"./createLucideIcon-Cz3c_aCr.js";import"./x-D8pCTRyw.js";import"./Heading-aEQ5rkp1.js";import"./info-C3XlKCQB.js";import"./Popover-iQGdPM8P.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

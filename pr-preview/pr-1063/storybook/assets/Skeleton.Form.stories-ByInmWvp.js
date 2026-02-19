import{j as e,l}from"./iframe-DFBAwU5t.js";import{S as t}from"./Skeleton-B_7JvhET.js";import{T as p}from"./TextField-nNR-f7fd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-KzuhWFZ3.js";import"./utils-08_GEW0N.js";import"./FieldError-Co7gTVHK.js";import"./Text-CDXpFHUP.js";import"./useFocusRing-B1-pNOdJ.js";import"./index-BvmdiSuy.js";import"./index-B5Eep4lh.js";import"./Text-D767DiYA.js";import"./RSPContexts-BfZYNY1M.js";import"./Form-Dtd0XerJ.js";import"./useFormValidation-DjiW17M6.js";import"./Group-BhnY6AwQ.js";import"./Input-0nUV_KlL.js";import"./Hidden-CtJEIX9A.js";import"./Button-DwaTUIba.js";import"./useLabels-VOQ-WGC9.js";import"./useButton-BgWyJ-L0.js";import"./useTextField-K9OcgO_z.js";import"./useControlledState-C4smYPng.js";import"./useField-Bnf9URlm.js";import"./TextField.module-DBQiRr7K.js";import"./Label-DrV9Uzc3.js";import"./Dialog-CWkzv1z4.js";import"./OverlayArrow-BhilblKY.js";import"./useResizeObserver-Cq_3yOCl.js";import"./Collection-BPWUTHaO.js";import"./index-BBR8yyad.js";import"./Separator-_IwDzgMu.js";import"./SelectionManager-CmDoH34r.js";import"./useEvent-BmQdww5x.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CS6ud7d2.js";import"./useDescription-BGbqDhE9.js";import"./ListKeyboardDelegate-WDjH8gpp.js";import"./PressResponder-CkJ7-c7a.js";import"./useLocalizedStringFormatter-D1JI22qo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5XSDqDE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BEFipPde.js";import"./Button-BcXH9DHh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CG5pfhDM.js";import"./createLucideIcon-8UkP-gNy.js";import"./x-sbx_BOPL.js";import"./Heading-Bnfd32zh.js";import"./info-KHYAo607.js";import"./Popover-BDhkC3rf.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

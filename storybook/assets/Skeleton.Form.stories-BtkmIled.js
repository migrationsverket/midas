import{j as e,l}from"./iframe-BjXHvzLV.js";import{S as t}from"./Skeleton-CCQUueVU.js";import{T as p}from"./TextField-BcS7TSZS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CzRqKaAE.js";import"./utils-C7TofeRY.js";import"./FieldError-BRuLTmCO.js";import"./Text-G6RzhBRh.js";import"./useFocusRing-ChtlY4t2.js";import"./index-c1mE3GS_.js";import"./index-fRYLtIJx.js";import"./Text-B60LJh84.js";import"./RSPContexts-By0c3k33.js";import"./Form-DkVw-cHI.js";import"./useFormValidation-Y1s-UN3t.js";import"./Group-CqvsfWrJ.js";import"./Input-DnY5yrz_.js";import"./Hidden-CwrmmuBw.js";import"./Button-D655U3jT.js";import"./useLabels-CBgCNECm.js";import"./useButton-DTsHOwZn.js";import"./useTextField-Blk9AjE8.js";import"./useControlledState-5N7ivM8O.js";import"./useField-D1LWWz2e.js";import"./TextField.module-DdivwlC8.js";import"./Label-C5hySkMJ.js";import"./Dialog-DTI6aEob.js";import"./OverlayArrow-mevRuBe1.js";import"./useResizeObserver-BJ2shdez.js";import"./Collection-eZGfFs1q.js";import"./index-Dd1fS_zB.js";import"./Separator-C1_9vz8Y.js";import"./SelectionManager-_yI7h9H0.js";import"./useEvent-bA9CQz3i.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BpO8vjo0.js";import"./useDescription-69qIWb5l.js";import"./ListKeyboardDelegate-Cr_75rG2.js";import"./PressResponder-B0oaoAR6.js";import"./useLocalizedStringFormatter-B09DX6oS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpslxbCs.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DEnBWTBz.js";import"./Button-Ck6rrEvj.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DGt-YCd6.js";import"./createLucideIcon-BMYiFBuo.js";import"./x-B15mToM9.js";import"./Heading-tCV9TyHz.js";import"./info-CBRy23Sl.js";import"./Popover-BAeWkly-.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

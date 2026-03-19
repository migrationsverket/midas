import{j as e,l}from"./iframe-BIHPCSD7.js";import{S as t}from"./Skeleton-qPqpeUXP.js";import{T as d}from"./TextField-Bny8CGj0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BXkn1XP1.js";import"./utils-DD1AhTmn.js";import"./FieldError-Kju1pqM0.js";import"./Text-41JxePIO.js";import"./useFocusRing-BMHnjiK5.js";import"./index-D8pKX7IM.js";import"./index-fodDxchC.js";import"./Text-BxyjZI9K.js";import"./RSPContexts-DjrbWcHb.js";import"./Form-DnedwBlt.js";import"./Group-B8O0quDR.js";import"./Input-BAiHHtIW.js";import"./Hidden-BPDZ6gCs.js";import"./Button-CSz7Ih4-.js";import"./useLabels-j4j3caFA.js";import"./useButton-COi1XBPP.js";import"./useTextField-C4-3csAp.js";import"./useControlledState-7StlLOGr.js";import"./useField-N_ZHho5V.js";import"./TextField.module-DdivwlC8.js";import"./Label-U2zTA6gA.js";import"./Dialog-9-tMf1FG.js";import"./OverlayArrow-H65onxC4.js";import"./useResizeObserver-CIdBe9yq.js";import"./Collection-DuHg5sOR.js";import"./index-Bb61Zy6b.js";import"./Separator-BdKPCcph.js";import"./SelectionManager-DyuAahU5.js";import"./useEvent-DwulRvFz.js";import"./scrollIntoView-Cjdp4BaG.js";import"./SelectionIndicator-C8dljys4.js";import"./useDescription-B6Gpa9qj.js";import"./ListKeyboardDelegate-Df15MKn_.js";import"./PressResponder-CEgbzEyF.js";import"./useLocalizedStringFormatter-ruJF4A_C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DgrWIzZC.js";import"./getScrollParent-C7NYmB80.js";import"./VisuallyHidden-CQeIgFd3.js";import"./x-BjMfPpOk.js";import"./createLucideIcon-CEpUHvVi.js";import"./useLocalizedStringFormatter-DgK4llAe.js";import"./Heading-De18PXua.js";import"./Button-B-WLyZXQ.js";import"./Button.module-BB7N-cLd.js";import"./info-hRabbH20.js";import"./Popover-h0KZta9r.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

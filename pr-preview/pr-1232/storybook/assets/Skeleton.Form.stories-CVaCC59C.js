import{j as e,l}from"./iframe-CiZlFozv.js";import{S as t}from"./Skeleton-C6SGsPop.js";import{T as p}from"./TextField-w28grQeP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BttC7EcL.js";import"./utils-CtoKVfJq.js";import"./FieldError-BFjjyPg1.js";import"./Text-Dp6H8GRU.js";import"./useFocusRing-C8iINmO1.js";import"./index-C8NJLHuH.js";import"./index-B_UHrRhL.js";import"./Text-CXoRcQkQ.js";import"./RSPContexts-fJFJPzCo.js";import"./Form-CPfOE8lK.js";import"./Group-DRiAJmX2.js";import"./Input-B76nlUBd.js";import"./Hidden-CBUgc4Bq.js";import"./Button-CxmVBxVQ.js";import"./useLabel-BKmML2fi.js";import"./useLabels-I5-LcgNP.js";import"./useButton-C0UTJWwd.js";import"./useTextField-BMXOK1F5.js";import"./useControlledState-k5LcuuXZ.js";import"./useField-Bx-SoAUQ.js";import"./TextField.module-DdivwlC8.js";import"./Label-D2By97-8.js";import"./Dialog-4xeHXqVs.js";import"./OverlayArrow-U4qyFhu7.js";import"./useResizeObserver-DgIV1Bdx.js";import"./Collection-Dmi7A3go.js";import"./index-CGOcwJAX.js";import"./Separator-As17z0QB.js";import"./SelectionManager-4hK9Esex.js";import"./useEvent-CUD5UUml.js";import"./scrollIntoView-De6oNUSa.js";import"./SelectionIndicator-OL0J49H_.js";import"./useDescription-6-pChhm_.js";import"./ListKeyboardDelegate-B1l65HEm.js";import"./PressResponder-B7ETLP0V.js";import"./useLocalizedStringFormatter-BdUUKMic.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BObUKTOo.js";import"./getScrollParent-BTcAThv_.js";import"./VisuallyHidden-D6ktoCNF.js";import"./ModalOverlay-B4ShAOHT.js";import"./x-DBo1ex8S.js";import"./createLucideIcon-DFSC9aW4.js";import"./useLocalizedStringFormatter-BpsAI3rB.js";import"./Heading-D2XIdd63.js";import"./Button-BS9Q-Own.js";import"./Button.module-BB7N-cLd.js";import"./info-BpnxZVgw.js";import"./Popover-BG0a_Iou.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

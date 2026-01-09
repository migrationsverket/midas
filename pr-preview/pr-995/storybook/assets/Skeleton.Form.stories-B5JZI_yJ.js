import{j as e,l}from"./iframe-DSpa0ZJj.js";import{S as t}from"./Skeleton-C-RxuxYC.js";import{T as p}from"./TextField-BOYQrEdC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B7J1Mm2C.js";import"./TextField-8b76IOT-.js";import"./utils-W7NKEzNd.js";import"./FieldError-D4Zul2ht.js";import"./Text-B4__o0ew.js";import"./useFocusRing-CHFIxq0S.js";import"./index-Bm634ACX.js";import"./index-JwgIIJLt.js";import"./Text-CuC4lmi7.js";import"./RSPContexts-2cznPi_5.js";import"./Form-Dv_gbss9.js";import"./useFormValidation-CjcOfkDV.js";import"./Group-BYnvDdUg.js";import"./Input-DE2XmOKq.js";import"./Hidden-Bn_hIWKG.js";import"./Button-Cz-z0Ko6.js";import"./useLabels-CCN5xeFd.js";import"./useButton-Cu2rmCSH.js";import"./useTextField-D7518Y8T.js";import"./useControlledState-BWGhdnzP.js";import"./useField-9lqyMP1q.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CLdqKwxR.js";import"./Dialog-CMq55Z-e.js";import"./OverlayArrow-CLQA0CkX.js";import"./useResizeObserver-DgjxG9y-.js";import"./Collection-CEfcI50-.js";import"./index-NlZ_eQUJ.js";import"./Separator-Bnm9Uc2X.js";import"./SelectionManager-BYs5lwPs.js";import"./useEvent-DSFx2P8Q.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DuprrKW2.js";import"./useDescription-Q359T3QE.js";import"./ListKeyboardDelegate-Bo5tVIdv.js";import"./PressResponder-MvkeKqfc.js";import"./useLocalizedStringFormatter-20jVmx8j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRkukhdB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-8eYS4FK5.js";import"./Button-Cdop71cL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPq-0JGc.js";import"./createLucideIcon-DKtiU0kB.js";import"./x-CuWMoefh.js";import"./Heading-PeB1jTB-.js";import"./info-DbyNtn0b.js";import"./Popover-D_e9Y71-.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

import{j as e,l}from"./iframe-DT61WbGn.js";import{S as t}from"./Skeleton-W4lgDomV.js";import{T as p}from"./TextField-Do4Qgj0A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-2cI-5Y-D.js";import"./utils-BNrItRfy.js";import"./FieldError-BPllYc2R.js";import"./Text-BiokIEeM.js";import"./useFocusRing-DYTAd8_U.js";import"./index-BOjhewCw.js";import"./index-B6JELXQq.js";import"./Text-BlgJzzP7.js";import"./RSPContexts-BKYkq1wo.js";import"./Form-IlYQTl6M.js";import"./useFormValidation-DceVtZUU.js";import"./Group-O4XXocAc.js";import"./Input-Ppml95ET.js";import"./Hidden-DkIy8QtB.js";import"./Button-9A3cEUNU.js";import"./useLabels-BLjzORvQ.js";import"./useButton-DBUAos9E.js";import"./useTextField-CQ_khQtE.js";import"./useControlledState-BE2wyFhJ.js";import"./useField-Br0fbhq2.js";import"./TextField.module-Cm6797Xw.js";import"./Label-CjMRK86x.js";import"./Dialog-047CLw3h.js";import"./OverlayArrow-D8tgQj4I.js";import"./useResizeObserver-tqtHE4-C.js";import"./Collection-Cmjs1m8V.js";import"./index-CLRq1jWZ.js";import"./Separator-BNyl3ygb.js";import"./SelectionManager-BklfJdWU.js";import"./useEvent-BKGBdaZ_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-2o4OglFe.js";import"./useDescription-oZ2Jk6d8.js";import"./ListKeyboardDelegate-CMnkCmi9.js";import"./PressResponder-CQiRKe2Y.js";import"./useLocalizedStringFormatter-B7AhjKe6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-EQ3nDp_E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CidbwADT.js";import"./Button-B3A8mU5i.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfwtoEKk.js";import"./createLucideIcon-BxpBX-dW.js";import"./x-9GyaX2Up.js";import"./Heading-MXMhB4o8.js";import"./info-BxG91l2W.js";import"./Popover-BwVKS-DE.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

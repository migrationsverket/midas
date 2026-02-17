import{j as e,l}from"./iframe-E1AQR6fx.js";import{S as t}from"./Skeleton-dGIflYhd.js";import{T as p}from"./TextField-CpR1Ww4E.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B6t8VlIU.js";import"./utils-C9k_Z1-L.js";import"./FieldError-EwGM1OTM.js";import"./Text-Dbmjj9FJ.js";import"./useFocusRing-ClTdqGvY.js";import"./index-BY2IQZHk.js";import"./index-LL_riRvH.js";import"./Text-CEr6kfZB.js";import"./RSPContexts-JAi78m_a.js";import"./Form-B-5JEGEy.js";import"./useFormValidation-rmf8_tul.js";import"./Group-C_6zvM6e.js";import"./Input-DBtUYRSJ.js";import"./Hidden-9DB17Ws8.js";import"./Button-Dcl0k1ed.js";import"./number-DfkVkf0F.js";import"./useLabels-BBvY9IMA.js";import"./useButton-CI0sJCD2.js";import"./useTextField-CiQLJwP_.js";import"./useControlledState-DzUy243X.js";import"./useField-DWsbBHmV.js";import"./TextField.module-Cm6797Xw.js";import"./Label-CiNpVGFO.js";import"./Dialog-Bwwd36rS.js";import"./OverlayArrow-c8jI_WJL.js";import"./useResizeObserver-4_OVHbc_.js";import"./Collection-CReVKHXj.js";import"./index-ZiZl57TD.js";import"./Separator-BeTDEIWg.js";import"./SelectionManager-JLfCQcPz.js";import"./useEvent-DhJ_snWh.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CDXq8XPz.js";import"./useDescription-BmqQ3yEq.js";import"./ListKeyboardDelegate-ecpZjwil.js";import"./PressResponder-Cxq4ierj.js";import"./useLocalizedStringFormatter-Cs1nU2fr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D96kronK.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bpe1pimA.js";import"./Modal-Cj831iis.js";import"./Button-IKHtJ1-M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dtq-c4fz.js";import"./createLucideIcon-D8ApGr_r.js";import"./x-CmXiTMgS.js";import"./Heading-at50eEei.js";import"./info-Bk0nJ5nz.js";import"./Popover-Ds9Hc7rx.js";const ge={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ue=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ue as __namedExportsOrder,ge as default};

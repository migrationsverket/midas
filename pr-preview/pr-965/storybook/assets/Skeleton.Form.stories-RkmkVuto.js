import{j as e,l}from"./iframe-B1XQ_l8d.js";import{S as t}from"./Skeleton-04OpEdp3.js";import{T as d}from"./TextField-D39_bmyk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cx6haw_y.js";import"./utils-DPtwDUAf.js";import"./TextField-BzTqPypE.js";import"./FieldError-COBE7U4N.js";import"./Text-D_Txx_2-.js";import"./useFocusRing-DgKSykKC.js";import"./index-BZkYwFdY.js";import"./index-DmzzjCRS.js";import"./Text-BFkBeHhq.js";import"./RSPContexts-DGbPHIgI.js";import"./Form-BUqvWtF7.js";import"./useFormValidation-D5VMdpzK.js";import"./Group-D9pKpahD.js";import"./Input-IHyObhzr.js";import"./Hidden-BU4k3NAN.js";import"./Button-6O4twiKj.js";import"./useLabels-BAmMi-sg.js";import"./useButton-BsGmSg5A.js";import"./useTextField-BQo4M90j.js";import"./useControlledState-B22hZPAG.js";import"./useField-CeLgK-LB.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DAYQDGGE.js";import"./Dialog-Da60mu5A.js";import"./OverlayArrow-B6LsV4qs.js";import"./useResizeObserver-BsXYq4Lo.js";import"./Collection-DBgBwqbG.js";import"./index-CSbxgmJq.js";import"./Separator-B061JG6P.js";import"./SelectionManager-z2imyYhP.js";import"./useEvent-DY4S-wnp.js";import"./scrollIntoView-2fhJfOJs.js";import"./SelectionIndicator-BiqBgdF5.js";import"./useDescription-C_YDLdIX.js";import"./ListKeyboardDelegate-DNKS-2eF.js";import"./PressResponder-CcZU1l8G.js";import"./useLocalizedStringFormatter-DI9f3P1n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dx3G8DHG.js";import"./VisuallyHidden-C1ErRwO4.js";import"./Button-CRoKTtLi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-0R5Nhb.js";import"./createLucideIcon-DWbs9rHd.js";import"./x-Bd3RY7iS.js";import"./Heading-DCd0e_XD.js";import"./info-B5SwJYbV.js";import"./Popover-eUSo6RUY.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};

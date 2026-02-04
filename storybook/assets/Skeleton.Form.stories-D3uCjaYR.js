import{j as e,l}from"./iframe-DQ8MWDzl.js";import{S as t}from"./Skeleton-DtKLvUYC.js";import{T as p}from"./TextField-eczF2ivg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Db_TiAjD.js";import"./utils-MUondYLm.js";import"./TextField-nC0ierlg.js";import"./FieldError-BbsiMUDV.js";import"./Text-B7FL6X4L.js";import"./useFocusRing-OnsEPzNC.js";import"./index-CWjVL5dm.js";import"./index-pN5S6Ptu.js";import"./Text-DZRYbZpm.js";import"./RSPContexts-DuvxmCvc.js";import"./Form-CbJ9UDZ3.js";import"./useFormValidation-DoUO8THk.js";import"./Group-mb2-Cd9n.js";import"./Input-pooT7Y8K.js";import"./Hidden-BFm8JVh5.js";import"./Button-C6oyl_qC.js";import"./useLabels-v8Ev80De.js";import"./useButton-DHWmFvz2.js";import"./useTextField-B054hSp-.js";import"./useControlledState-DLe-crj8.js";import"./useField--phBsH06.js";import"./TextField.module-DpzeWGpt.js";import"./Label-Buj55ddc.js";import"./Dialog-Cmu4GjVU.js";import"./OverlayArrow-Cidfy_ws.js";import"./useResizeObserver-CUs-YIhO.js";import"./Collection-CHWjj3pz.js";import"./index-BiiJUMlY.js";import"./Separator-lkR-B1Y9.js";import"./SelectionManager--WVYRdwt.js";import"./useEvent-LiCRS7cz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-I5GQXWq9.js";import"./useDescription-DlClEnzw.js";import"./ListKeyboardDelegate-JeH3KL6j.js";import"./PressResponder-CnBBkPfP.js";import"./useLocalizedStringFormatter-CfUu-qj4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-JNJHjPum.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CYOdgqsq.js";import"./Button-lMIcCMmO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DopWcpGf.js";import"./createLucideIcon-BgRpLVeX.js";import"./x-B_gkLLTD.js";import"./Heading-BWnhyVKJ.js";import"./info-B1V3XFmD.js";import"./Popover-CdqC2Mtl.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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

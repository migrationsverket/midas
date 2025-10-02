import{j as a}from"./iframe-Da6DUXRh.js";import{T as o,a as i,s as D}from"./Tag-DILmX3sW.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B9SQ6X6c.js";import"./utils-D-lQNReg.js";import"./clsx-B-dksMZM.js";import"./Hidden-DFHmlmxt.js";import"./useFocusRing-CGtnYcCj.js";import"./index-UyTSHRN0.js";import"./index-BYAw_TCx.js";import"./useLabels-rWXKssOx.js";import"./useButton-BPwRX0CZ.js";import"./Collection-BN640DY9.js";import"./index-DWCdGP8w.js";import"./ListBox-zKwO9jfh.js";import"./DragAndDrop-DeDJIFwT.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-NqzA9yga.js";import"./SelectionManager-D9eYv4oG.js";import"./useEvent-Cn0_E92y.js";import"./FocusScope-BH4La97T.js";import"./useDescription-Bd3HcbxY.js";import"./useControlledState-DfHpaVzX.js";import"./context-Ccz25rEO.js";import"./Text-AZFMGApI.js";import"./inertValue--WgH9iCH.js";import"./useListState-CnvIxD4B.js";import"./useHighlightSelectionDescription-CClW1lOb.js";import"./useUpdateEffect-Cgtxl0rB.js";import"./useLocalizedStringFormatter-BL3gojPs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-UTRcwMIV.js";import"./useField-DasELLzg.js";import"./clsx-Ciqy0D92.js";import"./Button-Cry7NoPI.js";import"./Button.module-DRhvPh0f.js";import"./x-D-6dacNa.js";import"./createLucideIcon-B3M0kPUz.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};

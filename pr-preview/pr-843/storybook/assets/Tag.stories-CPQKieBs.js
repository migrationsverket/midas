import{j as a}from"./iframe-D-5s2CQ-.js";import{T as o,a as i,s as D}from"./Tag-Yvi7IYEy.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DGBml5uP.js";import"./utils-C-QDo6ht.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dt8roYch.js";import"./useFocusRing-DXLac4Vz.js";import"./index-DDv84uaM.js";import"./index-C3tLKllm.js";import"./useLabels-BJyUv1gn.js";import"./useButton-K9YubvFE.js";import"./Collection-DI_OiYNG.js";import"./index-bV0qLqYB.js";import"./ListBox-qOG2q7D8.js";import"./DragAndDrop-SMt0FjB4.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DD6pwbAv.js";import"./SelectionManager-DGKviMoR.js";import"./useEvent-nZJX3WKp.js";import"./FocusScope-BrqFLppz.js";import"./useDescription-sqbxt0O5.js";import"./useControlledState-BHmtkJuO.js";import"./context-DFP1wFWm.js";import"./Text-DCB8gNga.js";import"./inertValue-DNEy4WQL.js";import"./useListState-B0gfECRl.js";import"./useHighlightSelectionDescription-CWK232ub.js";import"./useUpdateEffect-Dp8I-2td.js";import"./useLocalizedStringFormatter-cV620eVT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DsqrNlnV.js";import"./useField-HJijnwIC.js";import"./Button-Brc5DYj-.js";import"./Button.module-DRhvPh0f.js";import"./x-49c3vQy8.js";import"./createLucideIcon-X8GxMf4o.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};

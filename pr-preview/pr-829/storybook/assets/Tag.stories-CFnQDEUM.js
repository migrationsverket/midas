import{j as a}from"./iframe-CoT2joOm.js";import{T as o,a as i,s as D}from"./Tag-C8ttnVec.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-GDh9gL0p.js";import"./utils-DTm5v2pk.js";import"./clsx-B-dksMZM.js";import"./Hidden-B_1YwYaL.js";import"./useFocusRing-CG3Gigr3.js";import"./index-DMPTW7uV.js";import"./index-DJkDJSTk.js";import"./useLabels-D3ZJDUj6.js";import"./useButton-BGu-Oz_E.js";import"./Collection-42BPyQ13.js";import"./index-DJyLlumo.js";import"./ListBox-BJt4iTd0.js";import"./DragAndDrop-AF0onfYk.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DzK2mUqR.js";import"./SelectionManager-B9qHXara.js";import"./useEvent-DsKDxWtQ.js";import"./FocusScope-DBWI5jpF.js";import"./useDescription-DK98PmbK.js";import"./useControlledState-NYSQlhCg.js";import"./ListKeyboardDelegate-pLT42UAq.js";import"./Text-BAej5hJ1.js";import"./inertValue-CTbBzk6q.js";import"./useListState-CP1l_ats.js";import"./useHighlightSelectionDescription-Xy3QNTyT.js";import"./useUpdateEffect-BitD5dwf.js";import"./useLocalizedStringFormatter-gUzWleFI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DdASszH8.js";import"./useField-DivOlXDr.js";import"./Button-m6Ok0Vdw.js";import"./Button.module-DRhvPh0f.js";import"./x-CT3ZxzBu.js";import"./createLucideIcon-7-rtweXn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

import{j as a}from"./iframe-C1OjVKLQ.js";import{T as o,a as i,s as D}from"./Tag-5O_2wMWT.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CO1ceYUP.js";import"./utils-BqJ8lzMo.js";import"./clsx-B-dksMZM.js";import"./Hidden-CO3ECb5p.js";import"./useFocusRing-DDPJ_J0E.js";import"./index-rMroQDpJ.js";import"./index-B_7_j7oG.js";import"./useLabels-Chpo7CqR.js";import"./useButton-D6Ng0KWn.js";import"./Collection-By3anzc3.js";import"./index-CVE9sDrJ.js";import"./ListBox-C3M76IDp.js";import"./DragAndDrop-Cko-WPQN.js";import"./getScrollParent-rrZUu6o-.js";import"./scrollIntoView-6xtkIAFo.js";import"./Separator-Cz7-xowW.js";import"./SelectionManager-Cm9flOPl.js";import"./useEvent-7kK98PpR.js";import"./SelectionIndicator-CeZk7xbr.js";import"./useDescription-ZCYdd1bR.js";import"./useControlledState-DymAS9IR.js";import"./ListKeyboardDelegate-nF1H7dZ6.js";import"./RSPContexts-Dqv4fxN1.js";import"./Text-BWMw7upc.js";import"./inertValue-CCRuABxb.js";import"./useListState-BBMhCNAn.js";import"./useHighlightSelectionDescription-D_pV1J3M.js";import"./useUpdateEffect-ByK9Jn23.js";import"./useLocalizedStringFormatter-BWJx7Up_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-_Tt4rT5L.js";import"./useField-odABTSdM.js";import"./clsx-Ciqy0D92.js";import"./Button-DhWY514l.js";import"./Button.module-CcWMkJAG.js";import"./x-BcNJmH4R.js";import"./createLucideIcon-B5uMbs8Z.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};

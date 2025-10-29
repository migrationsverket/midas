import{j as a}from"./iframe-BDiSMsTI.js";import{T as o,a as i,s as D}from"./Tag-B_ZwJEjL.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BnBJ1orI.js";import"./utils-C8n_Q7r8.js";import"./clsx-B-dksMZM.js";import"./Hidden-CCqgsUO3.js";import"./useFocusRing-X5sCBmD4.js";import"./index-5KiZTdHP.js";import"./index-R0rerBj7.js";import"./useLabels-QEKg73Zp.js";import"./useButton-DMy1fk9y.js";import"./Collection-D2tELf5L.js";import"./index-DEFEYkW4.js";import"./ListBox-DXT0lkE2.js";import"./DragAndDrop-DbExByEv.js";import"./getScrollParent-BJajulFb.js";import"./scrollIntoView-BSL2flFd.js";import"./Separator-BYq5bJI3.js";import"./SelectionManager-svk4MHKI.js";import"./useEvent-CnfDKWQH.js";import"./SelectionIndicator-BWkRG7Re.js";import"./useDescription-BxeB77rL.js";import"./useControlledState-CFQO0dU1.js";import"./ListKeyboardDelegate-CnXpZ4fv.js";import"./RSPContexts-aMzZ7hDi.js";import"./Text-GaEGUR2K.js";import"./inertValue-CPstBlTt.js";import"./useListState-CFHiokJX.js";import"./useHighlightSelectionDescription-Bp4uDruI.js";import"./useUpdateEffect-DTRvUTdv.js";import"./useLocalizedStringFormatter-BVUSZQ8Z.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-0OKQivPg.js";import"./useField-CjxHj52H.js";import"./clsx-Ciqy0D92.js";import"./Button-CUlkxEfG.js";import"./Button.module-CcWMkJAG.js";import"./x-bpXbpXWQ.js";import"./createLucideIcon-DnCgVW-z.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

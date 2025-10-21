import{j as a}from"./iframe-CkK6ta2K.js";import{T as o,a as i,s as D}from"./Tag-GdyGohif.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D3iZZAMq.js";import"./utils-BH3lcQMk.js";import"./clsx-B-dksMZM.js";import"./Hidden-C5ZZ4VaZ.js";import"./useFocusRing-T06rac6t.js";import"./index-CUtqnPIU.js";import"./index-D7D-U_uI.js";import"./useLabels-CRUOvwRs.js";import"./useButton-WFd2STGe.js";import"./Collection-BT13kBPv.js";import"./index-C26Oweua.js";import"./ListBox-pctMFKbN.js";import"./DragAndDrop-CcEMjtbH.js";import"./getScrollParent-Dm7e6Awq.js";import"./scrollIntoView-BBuSZYlE.js";import"./Separator-Cd3C-fWs.js";import"./SelectionManager-DUF06rLK.js";import"./useEvent-DZ8p_aYw.js";import"./SelectionIndicator-B38V3vjg.js";import"./useDescription-ClDb31Mm.js";import"./useControlledState-BsJx9A-Z.js";import"./ListKeyboardDelegate-lzWyaK0s.js";import"./RSPContexts-BuKh5yTI.js";import"./Text-Bx8zPwaM.js";import"./inertValue-uoq93x4I.js";import"./useListState-DIrPrKz6.js";import"./useHighlightSelectionDescription-Brs4f76u.js";import"./useUpdateEffect-DogvlrD-.js";import"./useLocalizedStringFormatter-Bvs7rVFB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BkwsP0dc.js";import"./useField-CPQg7i9g.js";import"./clsx-Ciqy0D92.js";import"./Button-kUeFOv4E.js";import"./Button.module-CcWMkJAG.js";import"./x-BfjjiftR.js";import"./createLucideIcon-C2EPTzfC.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

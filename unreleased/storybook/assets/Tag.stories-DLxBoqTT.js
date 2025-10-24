import{j as a}from"./iframe-BXTe3Zg0.js";import{T as o,a as i,s as D}from"./Tag-_9iKAjUd.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BFEzgytZ.js";import"./utils-BD31SCNF.js";import"./clsx-B-dksMZM.js";import"./Hidden-CYSBDJA_.js";import"./useFocusRing-Bg0rS-BQ.js";import"./index-CNlAVBGn.js";import"./index-BsIffJZW.js";import"./useLabels-6XcUN8xP.js";import"./useButton-w931F4Qt.js";import"./Collection-DyEcaawK.js";import"./index-QjNroyxL.js";import"./ListBox-Ds-4FRRe.js";import"./DragAndDrop-D0Skt1Ff.js";import"./getScrollParent-DlveKBjR.js";import"./scrollIntoView-ltjp8cwm.js";import"./Separator-D9ZxwZS1.js";import"./SelectionManager-DjMxeZpl.js";import"./useEvent-P9lvpZa7.js";import"./SelectionIndicator-BXjK6c-E.js";import"./useDescription-DysjMYeu.js";import"./useControlledState-Dvv65CSc.js";import"./ListKeyboardDelegate-CxwaVrok.js";import"./RSPContexts-Cf0oA50X.js";import"./Text-Do7lb4h0.js";import"./inertValue-BSwqyTPC.js";import"./useListState-CRbnPNqA.js";import"./useHighlightSelectionDescription-OnywcUCx.js";import"./useUpdateEffect-CM59Aw3n.js";import"./useLocalizedStringFormatter-BX2FFs2c.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CKG9oLDm.js";import"./useField-C0CJsOxw.js";import"./clsx-Ciqy0D92.js";import"./Button-BZbP1swU.js";import"./Button.module-CcWMkJAG.js";import"./x-BEAtpcQE.js";import"./createLucideIcon-Ck1gYkxM.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

import{j as a}from"./iframe-zFRLA6aV.js";import{T as o,a as i,s as D}from"./Tag-DcE7dsfr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CIevOuRL.js";import"./utils-B_Rn3fnl.js";import"./clsx-B-dksMZM.js";import"./Hidden--HASdPzz.js";import"./useFocusRing-Dats4xUD.js";import"./index-Bcq3d_DF.js";import"./index-DnAWUZAH.js";import"./useLabels-BkbVqeGj.js";import"./useButton-DQ6JFlOw.js";import"./Collection-D0INLQ5z.js";import"./index-DBjQOV_H.js";import"./ListBox-BgKg2bch.js";import"./DragAndDrop-DfFtDjvF.js";import"./getScrollParent-DmMrvmY9.js";import"./scrollIntoView-BXZLa52c.js";import"./Separator-BmOqq_46.js";import"./SelectionManager-B2OctB7j.js";import"./useEvent-C2uMPWEW.js";import"./SelectionIndicator-D1-DnR4O.js";import"./useDescription-CMHt6Xp-.js";import"./useControlledState-DUMq-IZR.js";import"./ListKeyboardDelegate-Bwlwy9KW.js";import"./RSPContexts-BOc6yx6i.js";import"./Text-DpCOVRfm.js";import"./inertValue-Cmcnrtxy.js";import"./useListState-Bb6fdVc2.js";import"./useHighlightSelectionDescription-ycS09TLd.js";import"./useUpdateEffect-DqVji5ar.js";import"./useLocalizedStringFormatter-BQAQSS9X.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BC9PiEDx.js";import"./useField-2OBGTxrD.js";import"./clsx-Ciqy0D92.js";import"./Button-CEod7MpC.js";import"./Button.module-CcWMkJAG.js";import"./x-CJWxlUGI.js";import"./createLucideIcon-CA_tmvLW.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

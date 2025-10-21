import{j as a}from"./iframe-D-N7Ui17.js";import{T as o,a as i,s as D}from"./Tag-B8x743OC.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BArkA-Rt.js";import"./utils-dvkiLOTa.js";import"./clsx-B-dksMZM.js";import"./Hidden-BDzkT0o1.js";import"./useFocusRing-brrlMxBh.js";import"./index-DoW5xfD-.js";import"./index-CM1zSze_.js";import"./useLabels-BlZMB13Q.js";import"./useButton-WsOUO14H.js";import"./Collection-BdZnIVMK.js";import"./index-Cop3NpJG.js";import"./ListBox-FYDE_meq.js";import"./DragAndDrop-DRaJKccf.js";import"./getScrollParent-BblEelMj.js";import"./scrollIntoView-nO8vtFUD.js";import"./Separator-DdSIOXKj.js";import"./SelectionManager-Dx05oU0B.js";import"./useEvent-Bbvf9CcZ.js";import"./SelectionIndicator-0ZUllF18.js";import"./useDescription-DNvkZWIo.js";import"./useControlledState-QjRZaw_8.js";import"./ListKeyboardDelegate-o8td4nOv.js";import"./RSPContexts-DOCmYkUt.js";import"./Text-DJ4v2uGC.js";import"./inertValue-BXJMDAKK.js";import"./useListState-DmijCrD3.js";import"./useHighlightSelectionDescription-Be6eP91a.js";import"./useUpdateEffect-zIq14_yo.js";import"./useLocalizedStringFormatter-Dqp0okfg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ByS8Nm8i.js";import"./useField-Cg6cVwKH.js";import"./clsx-Ciqy0D92.js";import"./Button-BovEJxQ-.js";import"./Button.module-CcWMkJAG.js";import"./x-BdycwIv7.js";import"./createLucideIcon-OhzvPXq3.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

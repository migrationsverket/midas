import{j as a}from"./iframe-DM9uGbbB.js";import{T as o,a as i,s as D}from"./Tag-B8TPONsk.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DVzS06KT.js";import"./utils-DG3ZCWHN.js";import"./clsx-B-dksMZM.js";import"./Hidden-95zpvBSH.js";import"./useFocusRing-D1sucDT4.js";import"./index-4RmtsECB.js";import"./index-Bx7Dh6gT.js";import"./useLabels-8MtL7eX8.js";import"./useButton-BWBkfaPO.js";import"./Collection-CMc_T2--.js";import"./index-wce6DnR5.js";import"./ListBox-hOUDVIQa.js";import"./DragAndDrop-CK3-8iF4.js";import"./getScrollParent-CcoIW0sC.js";import"./scrollIntoView-DSun3BHT.js";import"./Separator-j97lSfpQ.js";import"./SelectionManager-ByDu6Rlc.js";import"./useEvent-OeDS2mmF.js";import"./SelectionIndicator-Cy5wO-iP.js";import"./useDescription-D4HPT6fe.js";import"./useControlledState-DEPu0wVg.js";import"./ListKeyboardDelegate-wqXHqo76.js";import"./RSPContexts-BwxjrvnQ.js";import"./Text-BFfKfZXz.js";import"./inertValue-BYBcwe0T.js";import"./useListState-BRnj7okr.js";import"./useHighlightSelectionDescription-BiC7ajOY.js";import"./useUpdateEffect-C3BLhJRq.js";import"./useLocalizedStringFormatter-B-fsOSLp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DzLHwuBQ.js";import"./useField-08xpVv1s.js";import"./clsx-Ciqy0D92.js";import"./Button-BuNqjwlt.js";import"./Button.module-CcWMkJAG.js";import"./x-7VSZhcXh.js";import"./createLucideIcon-DmO7-0GB.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

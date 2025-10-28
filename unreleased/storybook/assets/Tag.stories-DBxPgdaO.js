import{j as a}from"./iframe-COt1ekzx.js";import{T as o,a as i,s as D}from"./Tag-Bjvkifnx.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CfsQF6dl.js";import"./utils-Cn2b5P-q.js";import"./clsx-B-dksMZM.js";import"./Hidden-CZjvOcHb.js";import"./useFocusRing-_SErBi5w.js";import"./index-DRODNoLC.js";import"./index-BVJdYrhl.js";import"./useLabels-DE0Q-j8Z.js";import"./useButton-CDyt2pb_.js";import"./Collection-BwO1GPmj.js";import"./index-BGjD5yFx.js";import"./ListBox-C6OYgZ0o.js";import"./DragAndDrop-B-8fboej.js";import"./getScrollParent-BP8grX7u.js";import"./scrollIntoView-TzbW8zGj.js";import"./Separator-R33kWOI_.js";import"./SelectionManager-CL9qJSX4.js";import"./useEvent-CPUosnhf.js";import"./SelectionIndicator-DMBTTml-.js";import"./useDescription-DD4w4pWS.js";import"./useControlledState-D6W7Lfkr.js";import"./ListKeyboardDelegate-CxAzbIgm.js";import"./RSPContexts-CQqH11QN.js";import"./Text-CCbRM0JC.js";import"./inertValue-BixFdidk.js";import"./useListState-Dzkvr5NO.js";import"./useHighlightSelectionDescription-DmXS6TdW.js";import"./useUpdateEffect-C1hJfWff.js";import"./useLocalizedStringFormatter-DPpXPQXZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DOo3ASfh.js";import"./useField-5BVQ5A3v.js";import"./clsx-Ciqy0D92.js";import"./Button-BiSMSq4s.js";import"./Button.module-CcWMkJAG.js";import"./x-BYeSkF0c.js";import"./createLucideIcon-CW63wXLn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

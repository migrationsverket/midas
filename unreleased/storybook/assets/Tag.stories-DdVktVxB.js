import{j as a}from"./iframe-DrsgbWcS.js";import{T as o,a as i,s as D}from"./Tag-BS--w0rA.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-WjHpVlWr.js";import"./utils-CvT7tRmv.js";import"./clsx-B-dksMZM.js";import"./Hidden-D6j5TZOc.js";import"./useFocusRing-D0Tiqu35.js";import"./index-BSsrWq09.js";import"./index-CeYxDNf4.js";import"./useLabels-DlAUCJIN.js";import"./useButton-Cz4p1km8.js";import"./Collection-C89L-o95.js";import"./index-CDp3ifDh.js";import"./ListBox-zk0r5HP9.js";import"./DragAndDrop-Diwhx1z6.js";import"./getScrollParent-l-4aH0Ws.js";import"./scrollIntoView-D1zBwAWT.js";import"./Separator-CtNL6W8K.js";import"./SelectionManager-CmrP4LD6.js";import"./useEvent-BR5etH4q.js";import"./SelectionIndicator-BbfjKu3u.js";import"./useDescription-BIDnrOJx.js";import"./useControlledState-DFNM4Pqx.js";import"./ListKeyboardDelegate-CP_sBiXS.js";import"./RSPContexts-C8ISmEo_.js";import"./Text-BdyOrMpR.js";import"./inertValue-CLy2EqI_.js";import"./useListState-C9FZRSK2.js";import"./useHighlightSelectionDescription-DiDB1wY7.js";import"./useUpdateEffect-CsOoEnse.js";import"./useLocalizedStringFormatter-B8msf5E9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B_9ZIwqK.js";import"./useField-DEYyB9EP.js";import"./clsx-Ciqy0D92.js";import"./Button-6JaavlVR.js";import"./Button.module-CcWMkJAG.js";import"./x-Cw8J5Aa5.js";import"./createLucideIcon-gtijxSOP.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

import{j as a}from"./iframe-D5pndUyn.js";import{T as o,a as i,s as D}from"./Tag-DrzTbYyD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B2Lr2E4B.js";import"./utils-BI5ZQ-4U.js";import"./clsx-B-dksMZM.js";import"./Hidden-R4u7BiPA.js";import"./useFocusRing-BZ0jrP08.js";import"./index-FHmw4oEG.js";import"./index-CWPDjEsT.js";import"./useLabels-CX1_eD0s.js";import"./useButton-DWOjp9am.js";import"./Collection-BuczHZeG.js";import"./index-BUaloCqa.js";import"./ListBox-BEKEVb0W.js";import"./DragAndDrop-glGr6yV6.js";import"./getScrollParent-DQaKhkrO.js";import"./scrollIntoView-DM-drkgN.js";import"./Separator-UCsYKvEw.js";import"./SelectionManager-D7Mue2Gt.js";import"./useEvent-CAiAsPd-.js";import"./SelectionIndicator-DYV-tJ5F.js";import"./useDescription-CbpbgZpl.js";import"./useControlledState-ClRHpt7B.js";import"./ListKeyboardDelegate-DXYbGQb8.js";import"./RSPContexts-CoOGAiEL.js";import"./Text-D_TC8SUa.js";import"./inertValue-_l8_Y4bO.js";import"./useListState-DtZOLIKW.js";import"./useHighlightSelectionDescription-rLbNYYnR.js";import"./useUpdateEffect-aQoGn6D6.js";import"./useLocalizedStringFormatter-DYrlcjyQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-KjHb41MV.js";import"./useField-CQYkxF-b.js";import"./clsx-Ciqy0D92.js";import"./Button-CnXZFnzI.js";import"./Button.module-CcWMkJAG.js";import"./x-Bp-MKQY3.js";import"./createLucideIcon-C6FsdGc5.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

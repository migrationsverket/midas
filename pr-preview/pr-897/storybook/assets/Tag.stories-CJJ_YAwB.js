import{j as a}from"./iframe-BxuofwO3.js";import{T as o,a as i,s as D}from"./Tag-ERnYB5yO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-F63V9o4E.js";import"./utils-9ppjfNzJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-CnVVhazM.js";import"./useFocusRing-CsoO-_sk.js";import"./index-CTNjPpiQ.js";import"./index-CY3NUDYq.js";import"./useLabels-D3Tf_CT8.js";import"./useButton-B8RUMPwK.js";import"./Collection-iEeIGaFK.js";import"./index-DhSOvx5l.js";import"./ListBox-C-KXpcX5.js";import"./DragAndDrop-y-oiCnRP.js";import"./getScrollParent-COTPKfO5.js";import"./scrollIntoView-0HlqI7yf.js";import"./Separator-DV0gQKWK.js";import"./SelectionManager-LqCEJt8e.js";import"./useEvent-6ybSSKer.js";import"./SelectionIndicator-DvCQJ6B6.js";import"./useDescription-Cg7Z0_Z6.js";import"./useControlledState-XQaeVPOu.js";import"./ListKeyboardDelegate-D4VceDoS.js";import"./RSPContexts-MvpO0loh.js";import"./Text-BiinJHtZ.js";import"./inertValue-BrfgCuzC.js";import"./useListState-BfHu516E.js";import"./useHighlightSelectionDescription-q0z4lq99.js";import"./useUpdateEffect-D3WAiYpq.js";import"./useLocalizedStringFormatter-ZlLhKZqq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CYhswgFE.js";import"./useField-BhC99aK7.js";import"./clsx-Ciqy0D92.js";import"./Button-Cp6KlNnH.js";import"./Button.module-CcWMkJAG.js";import"./x-DDbWsPs1.js";import"./createLucideIcon-D2QRpcJE.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

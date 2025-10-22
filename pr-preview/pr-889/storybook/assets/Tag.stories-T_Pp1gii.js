import{j as a}from"./iframe-D-vM0KJV.js";import{T as o,a as i,s as D}from"./Tag-C7cHVPsp.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DgIjK-s6.js";import"./utils-jHN4O93F.js";import"./clsx-B-dksMZM.js";import"./Hidden-DeY6xaVX.js";import"./useFocusRing-B1D0OxaB.js";import"./index-Dpp169zk.js";import"./index-DAhhoemU.js";import"./useLabels-B5h-M-s5.js";import"./useButton-CU8F_nzl.js";import"./Collection-D8PqjRbb.js";import"./index-jiIFkMRL.js";import"./ListBox-DHaAkATx.js";import"./DragAndDrop-B77C-59X.js";import"./getScrollParent-BZCBf9ov.js";import"./scrollIntoView-Dl8yldBY.js";import"./Separator-g03LdUhH.js";import"./SelectionManager-Bkl5SaKe.js";import"./useEvent-D5XeGmay.js";import"./SelectionIndicator-Btb5hppW.js";import"./useDescription-BKtVbsWV.js";import"./useControlledState-DSX_OzeD.js";import"./ListKeyboardDelegate-Bew9Z8E1.js";import"./RSPContexts-C18CKUa5.js";import"./Text-Dvhu__Nd.js";import"./inertValue-COupEjI3.js";import"./useListState-Kj31SYzV.js";import"./useHighlightSelectionDescription-D8Fd0y0G.js";import"./useUpdateEffect-Bv-Sm376.js";import"./useLocalizedStringFormatter-B7SESn4w.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bj5-kSYo.js";import"./useField-ChN-w1hz.js";import"./clsx-Ciqy0D92.js";import"./Button-CSzky6JE.js";import"./Button.module-CcWMkJAG.js";import"./x-D_l5qUJY.js";import"./createLucideIcon-DQmU_5xe.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

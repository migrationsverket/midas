import{j as a}from"./iframe-BymvUqKP.js";import{T as o,a as i,s as _}from"./Tag-CKOBkZQD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Lk52rT94.js";import"./utils-rb4YB5As.js";import"./clsx-B-dksMZM.js";import"./Hidden-BabHfU_U.js";import"./useFocusRing-B5a0BACV.js";import"./index-BdO3h5j6.js";import"./index-BtIfnAZu.js";import"./useLabels-CdhBAFPk.js";import"./useButton-DvmEgx7n.js";import"./Collection-CSUK2zFy.js";import"./index-yQWX9Jza.js";import"./ListBox-BgIh-Yum.js";import"./DragAndDrop-Bv8vJR7i.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BwaIfIA9.js";import"./SelectionManager-BRJAQGfB.js";import"./useEvent-Cu2hEZWS.js";import"./FocusScope-BAAApUg0.js";import"./useDescription-LYSFu1bo.js";import"./useControlledState-CKQ2uq-a.js";import"./ListKeyboardDelegate-y4b5BvJC.js";import"./Text-CGU0VBwl.js";import"./inertValue-Bk6iT-3C.js";import"./useListState-BklQzqoy.js";import"./useField-BApIxokn.js";import"./useHighlightSelectionDescription-BFhX-LZQ.js";import"./useUpdateEffect-C873sotd.js";import"./useLocalizedStringFormatter-v-dTtMpq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ByNuW0Nq.js";import"./Button-BQSdHMPn.js";import"./Button.module-CF2bVDCq.js";import"./x-CSkz_7qk.js";import"./createLucideIcon-D7dPbQ88.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};

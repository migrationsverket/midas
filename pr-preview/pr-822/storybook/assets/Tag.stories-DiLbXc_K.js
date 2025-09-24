import{j as a}from"./iframe-BzNq6PgK.js";import{T as o,a as i,s as D}from"./Tag-Bo9jjhHY.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-1r36CvTl.js";import"./utils-B4uNU3lA.js";import"./clsx-B-dksMZM.js";import"./Hidden-D12Dzj1n.js";import"./useFocusRing-FYUE_9jy.js";import"./index-4-14HHhy.js";import"./index-D2iQKmqj.js";import"./useLabels-CJiOxZLg.js";import"./useButton-DrOk25Fy.js";import"./Collection-DkWzoZhs.js";import"./index-CrBqpGk7.js";import"./ListBox-BRA7naco.js";import"./DragAndDrop-B7h1cKjX.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CM73NukE.js";import"./SelectionManager-B98v13Vx.js";import"./useEvent-D9XV5a8Y.js";import"./FocusScope-CCaT1iSl.js";import"./useDescription-y4-vhmpm.js";import"./useControlledState-DxHOMKsm.js";import"./ListKeyboardDelegate-BVDkuHIl.js";import"./Text-De_6NTlF.js";import"./inertValue-CHA3lUDn.js";import"./useListState-4AYnROaC.js";import"./useHighlightSelectionDescription-SB1OD7Ye.js";import"./useUpdateEffect-C1BxyjQ7.js";import"./useLocalizedStringFormatter-xrTX6JS-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CkxQLqwb.js";import"./useField-ds_Q9UCX.js";import"./Button-LrpX4MZq.js";import"./Button.module-DRhvPh0f.js";import"./x-C4-mWXLA.js";import"./createLucideIcon-CYwLjvLl.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};

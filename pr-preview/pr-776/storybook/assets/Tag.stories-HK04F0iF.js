import{j as a}from"./iframe-ChCQmNBF.js";import{T as o,a as i,s as D}from"./Tag-BE697ptX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-tfBeC3AL.js";import"./utils-ByU4BYui.js";import"./clsx-B-dksMZM.js";import"./Hidden-CthOeGBp.js";import"./useFocusRing-H_pQgntn.js";import"./index-BPms665e.js";import"./index-DtCR5Fkz.js";import"./useLabels-D_zZDSz7.js";import"./useButton-DWSISmjd.js";import"./Collection-CHxfAZss.js";import"./index-Dpmc7HYB.js";import"./ListBox-zaP9DpIe.js";import"./DragAndDrop-BKb05Jf3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-27wdvmvG.js";import"./SelectionManager-BnjxOs0K.js";import"./useEvent-BpoqnHr9.js";import"./FocusScope-CoCJr3R-.js";import"./useDescription-DN7g7ZVI.js";import"./useControlledState-C93X6kj-.js";import"./ListKeyboardDelegate-DRHXcqgK.js";import"./Text-rHbNf24l.js";import"./inertValue-DMqfGeAy.js";import"./useListState-BUx2So6j.js";import"./useHighlightSelectionDescription-FpCCrqDy.js";import"./useUpdateEffect-Zb5QYo2M.js";import"./useLocalizedStringFormatter-Cx8YpxIu.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Sgz7USKZ.js";import"./useField-BiTw7nwt.js";import"./Button-DNKTHKFx.js";import"./Button.module-DgYkWG2o.js";import"./x-BNteJ1LE.js";import"./createLucideIcon-5zSNQhkM.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

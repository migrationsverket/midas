import{j as a}from"./iframe-mg8-Hzjw.js";import{T as o,a as i,s as D}from"./Tag-DhQNk0I_.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-COlUY9Rk.js";import"./utils-CmaLvxHS.js";import"./clsx-B-dksMZM.js";import"./Hidden-BIWKVpur.js";import"./useFocusRing-CR5WsQEw.js";import"./index-dPpiuiWt.js";import"./index-DLEoLmgj.js";import"./useLabels-B2D0cjln.js";import"./useButton-DJLwMOCt.js";import"./Collection-BbCeeHk1.js";import"./index-CZ97CXyf.js";import"./ListBox-BRnbmdaP.js";import"./DragAndDrop-uVoE6BsF.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-n8zB81dh.js";import"./SelectionManager-CHhh0Njk.js";import"./useEvent-CtV20uNS.js";import"./FocusScope-B0Zwk0uN.js";import"./useDescription-DZJUz5n5.js";import"./useControlledState-CarTvn9r.js";import"./ListKeyboardDelegate-C0Z9J7dq.js";import"./Text-DhRChmW-.js";import"./inertValue-ByQ4DvLp.js";import"./useListState-lbL7dnjO.js";import"./useHighlightSelectionDescription-D9g4a3VY.js";import"./useUpdateEffect-C3QwHRbE.js";import"./useLocalizedStringFormatter-Cv43hU8d.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DEYJHLG2.js";import"./useField-6i7RMsSg.js";import"./Button-E76zVLN2.js";import"./Button.module-DRhvPh0f.js";import"./x-Cb6jhycT.js";import"./createLucideIcon-CQ_IUTsC.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

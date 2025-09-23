import{j as a}from"./iframe-BoQHEJFd.js";import{T as o,a as i,s as D}from"./Tag-CTzH9Ygb.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DKlUG9aD.js";import"./utils-CDzw9y-N.js";import"./clsx-B-dksMZM.js";import"./Hidden-D4FsIKuZ.js";import"./useFocusRing-CPtromIk.js";import"./index-C7hF7DQY.js";import"./index-BLixDHeK.js";import"./useLabels-BFFlbtNM.js";import"./useButton-B1Jd16sa.js";import"./Collection-DNvaGDhn.js";import"./index-EDjVG1uq.js";import"./ListBox-BamgftUE.js";import"./DragAndDrop-Dh6Q-vaX.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BcmJmRj8.js";import"./SelectionManager-D-ixPfEX.js";import"./useEvent-DSM0-Pxy.js";import"./FocusScope-mwoz3amS.js";import"./useDescription-C0sMfKSf.js";import"./useControlledState-DZtb1aR_.js";import"./ListKeyboardDelegate-B7ZzGUc6.js";import"./Text-NLLbfNAo.js";import"./inertValue-1oJjTtik.js";import"./useListState-BvAXwnUM.js";import"./useHighlightSelectionDescription-_5PgSc8k.js";import"./useUpdateEffect-BiQdfjrj.js";import"./useLocalizedStringFormatter-NsH96ygN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cfa_A2hL.js";import"./useField-Dwq4sRAx.js";import"./Button-C_DH_ap-.js";import"./Button.module-DRhvPh0f.js";import"./x-DbxIqCtt.js";import"./createLucideIcon-BhU_Zukh.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

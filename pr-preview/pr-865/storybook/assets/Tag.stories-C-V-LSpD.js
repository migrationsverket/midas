import{j as a}from"./iframe-DY3W9-4k.js";import{T as o,a as i,s as D}from"./Tag-DCb5_HwB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DajGAGMw.js";import"./utils-CN7YgZDi.js";import"./clsx-B-dksMZM.js";import"./Hidden-BhkQcQHo.js";import"./useFocusRing-BBvc3WXJ.js";import"./index-Cafmr_pW.js";import"./index-z0r1qXj4.js";import"./useLabels-Dwz1BhZX.js";import"./useButton-BnAVo3IY.js";import"./Collection-Df8wzxeX.js";import"./index-H2skvqZ_.js";import"./ListBox-c-C7VLl9.js";import"./DragAndDrop-DlfbW_B9.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CvrMHLR3.js";import"./SelectionManager-D3cM8gfj.js";import"./useEvent-BvdulHNt.js";import"./FocusScope-Jdv2BzCP.js";import"./useDescription-jkInBDBC.js";import"./useControlledState-B9_vF_1k.js";import"./context-ts5ngKlm.js";import"./Text-BUPImm4F.js";import"./inertValue-CmXwjcUt.js";import"./useListState-m3gTKsTx.js";import"./useHighlightSelectionDescription-FF9jfZRa.js";import"./useUpdateEffect-2xLjJPBx.js";import"./useLocalizedStringFormatter-CHKFufXP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BAmque53.js";import"./useField-Q-RsKbyN.js";import"./clsx-Ciqy0D92.js";import"./Button-CI-9yI1V.js";import"./Button.module-CcWMkJAG.js";import"./x-BP0nxPwt.js";import"./createLucideIcon-C2ITGAe8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};

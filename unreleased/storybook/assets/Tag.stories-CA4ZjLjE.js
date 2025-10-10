import{j as a}from"./iframe-DHNk_-G3.js";import{T as o,a as i,s as D}from"./Tag-_rfWew7b.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D-Wbs5Uc.js";import"./utils-Qgf29fsl.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cw5z6pYa.js";import"./useFocusRing-BlW36gO3.js";import"./index-Dkntyk6e.js";import"./index-hPigBH0S.js";import"./useLabels-BioydItO.js";import"./useButton-DljoM4Tx.js";import"./Collection-Dg6XW8fy.js";import"./index-DWZZhJbL.js";import"./ListBox-B3oer1Z1.js";import"./DragAndDrop-xmKDdQFI.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-K84gtIw6.js";import"./SelectionManager-B0FXBjsW.js";import"./useEvent-DWCOdyxu.js";import"./FocusScope-3NUrsXWj.js";import"./useDescription-DQYuOqyt.js";import"./useControlledState-B7Muc_6f.js";import"./context-BwS8a9Q9.js";import"./Text-BtbTIEYM.js";import"./inertValue-cAfOGErh.js";import"./useListState-DZInwuSU.js";import"./useHighlightSelectionDescription-BoB11bdB.js";import"./useUpdateEffect-BNIWkNkO.js";import"./useLocalizedStringFormatter-NXmDARNt.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DAS3dKF3.js";import"./useField-BSEriGeX.js";import"./clsx-Ciqy0D92.js";import"./Button-DICq5nBm.js";import"./Button.module-CcWMkJAG.js";import"./x-D0HyeXaw.js";import"./createLucideIcon-DoZbUtov.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

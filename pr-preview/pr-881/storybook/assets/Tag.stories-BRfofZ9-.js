import{j as a}from"./iframe-BxWK1oDy.js";import{T as o,a as i,s as D}from"./Tag-GEK3rqDr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CP5b1jX2.js";import"./utils-DEX85EPU.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-4Y_J9m.js";import"./useFocusRing-Wp9TW9ZG.js";import"./index-Ddgl1g9c.js";import"./index-CR8VvwZJ.js";import"./useLabels-Dr7rREME.js";import"./useButton-C7_1Jbh9.js";import"./Collection-BIX-ui-y.js";import"./index-DNovdE3O.js";import"./ListBox-BkJeLv-g.js";import"./DragAndDrop-VGgGQYJd.js";import"./getScrollParent-BD4bj6hc.js";import"./scrollIntoView-Dt91R99J.js";import"./Separator-HjFF5L9_.js";import"./SelectionManager-CHfe1G9J.js";import"./useEvent-DwvbPWVi.js";import"./SelectionIndicator-B8dVTgan.js";import"./useDescription-Bg8R3aV7.js";import"./useControlledState-VCKsSYhl.js";import"./ListKeyboardDelegate-CbwwgxXE.js";import"./RSPContexts-uVZhiFbn.js";import"./Text-B2q65MLi.js";import"./inertValue-C8KL22e5.js";import"./useListState-DDVG8hpA.js";import"./useHighlightSelectionDescription-t9XMQ18V.js";import"./useUpdateEffect-DoLAdXr4.js";import"./useLocalizedStringFormatter-DJncF-Ya.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-AtgvM-dB.js";import"./useField-RkpLpfQx.js";import"./clsx-Ciqy0D92.js";import"./Button-zIDUONlx.js";import"./Button.module-CcWMkJAG.js";import"./x-CV9VCc4M.js";import"./createLucideIcon-B6tSgLJX.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

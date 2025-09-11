import{j as a}from"./iframe-BqcgbIvs.js";import{T as o,a as i,s as D}from"./Tag-CJ-TilnV.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BcQ50CrH.js";import"./utils-vw47TUNX.js";import"./clsx-B-dksMZM.js";import"./Hidden-C0Kle59M.js";import"./useFocusRing-BZFSn7UO.js";import"./index-CzK4n1_i.js";import"./index-DZeGozp2.js";import"./useLabels-CtKe8lfJ.js";import"./useButton-CZC8IsCh.js";import"./Collection-Bqe26fsF.js";import"./index-BnCDojBr.js";import"./ListBox-DQJK5ZbQ.js";import"./DragAndDrop-B-VpL10c.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CDZ3VcTX.js";import"./SelectionManager-Bx_hzpd6.js";import"./useEvent-BeaONmI-.js";import"./FocusScope-CjmrBQEK.js";import"./useDescription-C91GXwD7.js";import"./useControlledState-GhyNYFjO.js";import"./ListKeyboardDelegate-Bb75HkNQ.js";import"./Text-CFtmWCsH.js";import"./inertValue-BAMH9FwE.js";import"./useListState-DJsdswce.js";import"./useHighlightSelectionDescription-BajC7adn.js";import"./useUpdateEffect-CYoW8LwN.js";import"./useLocalizedStringFormatter-BNX8Le_D.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CAw8AVR7.js";import"./useField-DAI73ViP.js";import"./Button-CJOwL5by.js";import"./Button.module-DRhvPh0f.js";import"./x-B6gRsUCv.js";import"./createLucideIcon-BWp2hIXa.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

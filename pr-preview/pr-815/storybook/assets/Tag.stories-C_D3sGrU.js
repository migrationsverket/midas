import{j as a}from"./iframe-B_W5kMGw.js";import{T as o,a as i,s as D}from"./Tag-h1lb9cMY.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CABz4Jbh.js";import"./utils-Cn9j8JmA.js";import"./clsx-B-dksMZM.js";import"./Hidden-DJZ1Anym.js";import"./useFocusRing-Bnip5ATP.js";import"./index-D3c2Ywgc.js";import"./index-2aZvaLgF.js";import"./useLabels-CG9I0gnN.js";import"./useButton-B38y_pVy.js";import"./Collection-Cjd6s1QP.js";import"./index-DUoAFvgE.js";import"./ListBox-Cd6UVpPj.js";import"./DragAndDrop-BjbPXtFF.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D-ZDPOJ8.js";import"./SelectionManager-B2ALNvvP.js";import"./useEvent-2_Lu2V-P.js";import"./FocusScope-Biatg1Ba.js";import"./useDescription-YuGaV1Wn.js";import"./useControlledState-Cw6cK2MV.js";import"./ListKeyboardDelegate-CCrxWa9N.js";import"./Text-CwouQH9W.js";import"./inertValue-4b5qtbr9.js";import"./useListState-ByKnvQ_v.js";import"./useHighlightSelectionDescription-BfvjYgju.js";import"./useUpdateEffect-Biq3tUub.js";import"./useLocalizedStringFormatter-CLhnohc5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CrFT4SpM.js";import"./useField-BUavhs5-.js";import"./Button-Cgn6Lsro.js";import"./Button.module-DRhvPh0f.js";import"./x-Kz82mhL-.js";import"./createLucideIcon-DV8g2muD.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

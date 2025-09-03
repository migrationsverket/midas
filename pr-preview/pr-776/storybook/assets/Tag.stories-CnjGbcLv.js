import{j as a}from"./iframe-BtHAbfQi.js";import{T as o,a as i,s as D}from"./Tag-BkLAdfMt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D0nH7SId.js";import"./utils-CI5guydw.js";import"./clsx-B-dksMZM.js";import"./Hidden-p56AY048.js";import"./useFocusRing-jJNkjwNI.js";import"./index-DFSGV4KU.js";import"./index-BdY0_Drk.js";import"./useLabels-zQrxNUcg.js";import"./useButton-CiWWNuEx.js";import"./Collection-DGbZqiYR.js";import"./index-D3kd15N4.js";import"./ListBox-B3DOiZaK.js";import"./DragAndDrop-BdDsxiS2.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CnGPWReQ.js";import"./SelectionManager-BpZkQJRp.js";import"./useEvent-BpKUv2gF.js";import"./FocusScope-C1Zbpea5.js";import"./useDescription-Bjs9dqG9.js";import"./useControlledState-DD54qExZ.js";import"./ListKeyboardDelegate-DHKgAdQ7.js";import"./Text-Bm462RwY.js";import"./inertValue-nvEkpT0H.js";import"./useListState-CSUm39HB.js";import"./useHighlightSelectionDescription-BKiBzbgT.js";import"./useUpdateEffect-DIUW6sl6.js";import"./useLocalizedStringFormatter-BH8ilO4d.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C2qP6sFJ.js";import"./useField-DfcCQcwp.js";import"./Button-DTqGAWIE.js";import"./Button.module-DWkXlqFG.js";import"./x-BoW_yzrz.js";import"./createLucideIcon-CdFhLFE8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

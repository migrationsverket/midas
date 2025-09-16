import{j as a}from"./iframe-D6_Gbrx5.js";import{T as o,a as i,s as D}from"./Tag-CZ22_zfW.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dx3PaW5V.js";import"./utils-C8CzlONL.js";import"./clsx-B-dksMZM.js";import"./Hidden-52VfUVAH.js";import"./useFocusRing-DVATcvnw.js";import"./index-ZDT7Sr_g.js";import"./index-Fq4Ou1x2.js";import"./useLabels-BdEZlG40.js";import"./useButton-BThRQuv3.js";import"./Collection-CBwA5LYL.js";import"./index-CZGdd1df.js";import"./ListBox-2wkpwmQM.js";import"./DragAndDrop-NaDpCuFV.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CCxmmYi-.js";import"./SelectionManager-D7T64D-o.js";import"./useEvent-Bvt22bIc.js";import"./FocusScope-CPs__pQ-.js";import"./useDescription-CqZwta02.js";import"./useControlledState-DWtWyNye.js";import"./ListKeyboardDelegate-ARInoun3.js";import"./Text-ogRMf88F.js";import"./inertValue-BwUSt5Yv.js";import"./useListState-CmHfWj5B.js";import"./useHighlightSelectionDescription-BBY2zFk2.js";import"./useUpdateEffect-BAfVYKpI.js";import"./useLocalizedStringFormatter-CC2h6y7o.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BJdLPc5a.js";import"./useField-BekmEGYY.js";import"./Button-CZg-SCOr.js";import"./Button.module-DRhvPh0f.js";import"./x-CjLmNamp.js";import"./createLucideIcon-D1YlQFWm.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

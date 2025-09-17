import{j as a}from"./iframe-DtZPnfcw.js";import{T as o,a as i,s as D}from"./Tag-Blu9IvDf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DdbU51gc.js";import"./utils-HQ9oZss9.js";import"./clsx-B-dksMZM.js";import"./Hidden-V1oih-01.js";import"./useFocusRing-BUQi9rHN.js";import"./index-BHEQLcV1.js";import"./index-DcfJgi_S.js";import"./useLabels-DnQ9W7k0.js";import"./useButton-CW5tawqg.js";import"./Collection-CTTIfV6F.js";import"./index-DrCfyd75.js";import"./ListBox-PB34DYuA.js";import"./DragAndDrop-C118kYHh.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B6K-khqd.js";import"./SelectionManager-B47pbniD.js";import"./useEvent-DiN2JxJK.js";import"./FocusScope-BHxYADUv.js";import"./useDescription-QqQF2xVx.js";import"./useControlledState-BRfbSd7x.js";import"./ListKeyboardDelegate-Z68QpHO-.js";import"./Text-85_SK8fl.js";import"./inertValue-QXzNA_sg.js";import"./useListState-CyHh-Ep0.js";import"./useHighlightSelectionDescription-Bf1h9lqw.js";import"./useUpdateEffect-BuPxDxDU.js";import"./useLocalizedStringFormatter-taluwpQJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DCY8K7O5.js";import"./useField-Lp6Ut80Z.js";import"./Button-BLhynGie.js";import"./Button.module-DRhvPh0f.js";import"./x-C1orP_dT.js";import"./createLucideIcon-b0Hjh3jj.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

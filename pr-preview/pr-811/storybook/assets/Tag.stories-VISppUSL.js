import{j as a}from"./iframe-kX_Y_ddO.js";import{T as o,a as i,s as D}from"./Tag-BTZfPGAA.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-JKq77Mu4.js";import"./utils-DMqEA_0z.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cw8Z01b-.js";import"./useFocusRing-BuUM8Tgh.js";import"./index-2fTpmrZd.js";import"./index-DqGl8E5Q.js";import"./useLabels-BvJts_Af.js";import"./useButton-BV_rVB9Q.js";import"./Collection-CgXLwxsl.js";import"./index-PUQUtsiQ.js";import"./ListBox-CnFQyUyR.js";import"./DragAndDrop-k1RciNWL.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C6fL_Wnv.js";import"./SelectionManager-BjLachJA.js";import"./useEvent-F6BcS6F1.js";import"./FocusScope-BudfzHKx.js";import"./useDescription-BtTnaGmk.js";import"./useControlledState-BNBoaflk.js";import"./ListKeyboardDelegate-COCsGJnu.js";import"./Text-z-83bf_m.js";import"./inertValue-iQ5QkuqA.js";import"./useListState-JnEzfhGJ.js";import"./useHighlightSelectionDescription-B3rbxulx.js";import"./useUpdateEffect-DFi2ciis.js";import"./useLocalizedStringFormatter-LIgw9Mn7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DaWbGWWb.js";import"./useField-D29G6FGN.js";import"./Button-Ddod_M5Y.js";import"./Button.module-DRhvPh0f.js";import"./x-CXZ77Wkw.js";import"./createLucideIcon-CyreawQq.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

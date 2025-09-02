import{j as a}from"./iframe-CnW43MuE.js";import{T as o,a as i,s as D}from"./Tag-nSiPXXpm.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DgtwRZj5.js";import"./utils-CDh3IXPm.js";import"./clsx-B-dksMZM.js";import"./Hidden-D571qcEi.js";import"./useFocusRing-DfZqOB5T.js";import"./index-RpIXIjNA.js";import"./index-rI6S0pbX.js";import"./useLabels-DjoFP8Ym.js";import"./useButton-CclF28HT.js";import"./Collection-Clv5PWhx.js";import"./index-Me61rRYx.js";import"./ListBox-COANLiou.js";import"./DragAndDrop-DJlx3CMH.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B0zbKz74.js";import"./SelectionManager-Hh6E3HGF.js";import"./useEvent-pY76Fhao.js";import"./FocusScope-BptRAY9C.js";import"./useDescription-D3cJgtwi.js";import"./useControlledState-BjBzTgX4.js";import"./ListKeyboardDelegate-ClUEzykS.js";import"./Text-DhCR7THI.js";import"./inertValue-CAY8XZVn.js";import"./useListState-Bsahpwm9.js";import"./useHighlightSelectionDescription-BEdYswQk.js";import"./useUpdateEffect-CfoWn3Rv.js";import"./useLocalizedStringFormatter-DAweVc8h.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CKErdykl.js";import"./useField-C6XC1TFv.js";import"./Button-4AZfAJSA.js";import"./Button.module-CF2bVDCq.js";import"./x-DekgyfUe.js";import"./createLucideIcon-BDt8mWCF.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

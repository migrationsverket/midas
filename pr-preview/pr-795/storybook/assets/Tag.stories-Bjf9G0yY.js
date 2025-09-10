import{j as a}from"./iframe-Bk2KsNJA.js";import{T as o,a as i,s as D}from"./Tag-B_I2qv3_.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CY9IL6lG.js";import"./utils-xJsY6GUO.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cmn59mke.js";import"./useFocusRing-25bChEWZ.js";import"./index-XbiuNMuw.js";import"./index-Crgbuwrk.js";import"./useLabels-BvS5hw5h.js";import"./useButton-D1CAdWAV.js";import"./Collection-CVpRSqCL.js";import"./index-BnwW_tJ6.js";import"./ListBox-Cu52-V-6.js";import"./DragAndDrop-Di2w72ed.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DKLy9N42.js";import"./SelectionManager-DTPdOIV3.js";import"./useEvent-Db5tIthB.js";import"./FocusScope-B9VwDmAi.js";import"./useDescription-D5GJhh_f.js";import"./useControlledState-B5b95nhu.js";import"./ListKeyboardDelegate-CaFCawBX.js";import"./Text-DF9zw4S0.js";import"./inertValue-DVguEXTK.js";import"./useListState-BqrOR259.js";import"./useHighlightSelectionDescription-Dyf9mQ8S.js";import"./useUpdateEffect-BcuwJAG0.js";import"./useLocalizedStringFormatter-DLUkfREQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-FOie0FtR.js";import"./useField-B7UQsy3v.js";import"./Button-D1HA4SSE.js";import"./Button.module-GuOSDIYz.js";import"./x-DsuzLeru.js";import"./createLucideIcon-uNpC4-lz.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

import{j as a}from"./iframe-DzRGiYwh.js";import{T as o,a as i,s as D}from"./Tag-C_N2FHbN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BdclKdU3.js";import"./utils-BoszonbI.js";import"./clsx-B-dksMZM.js";import"./Hidden-CyZdoK4A.js";import"./useFocusRing-BXHgUT5x.js";import"./index-Bxxmf93q.js";import"./index-hYgi_nZV.js";import"./useLabels-BvL44jWN.js";import"./useButton-DlcalUAr.js";import"./Collection-CMpe5Vo7.js";import"./index-zyReQVmZ.js";import"./ListBox-vOOaNCV7.js";import"./DragAndDrop-CZsMFs0I.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DQIBsXBy.js";import"./SelectionManager-BJV7dQsT.js";import"./useEvent-D3Uo_Owh.js";import"./FocusScope-C3RSq1pX.js";import"./useDescription-DEs11etW.js";import"./useControlledState-DAaO2jRz.js";import"./ListKeyboardDelegate-BOMBf6BL.js";import"./Text-B_c29Aeh.js";import"./inertValue-Lgp_CZRS.js";import"./useListState-anZ71NDX.js";import"./useHighlightSelectionDescription-CUkBQDjT.js";import"./useUpdateEffect-DWVdiiSB.js";import"./useLocalizedStringFormatter-CjbqMvwd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DrkW6Zuf.js";import"./useField-KAMxzkqs.js";import"./Button-C5crNesT.js";import"./Button.module-CF2bVDCq.js";import"./x--BvlBQWA.js";import"./createLucideIcon-GWlTYkiG.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

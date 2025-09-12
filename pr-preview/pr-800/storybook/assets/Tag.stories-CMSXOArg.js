import{j as a}from"./iframe-Beo3DEGW.js";import{T as o,a as i,s as D}from"./Tag-B4pNrDOS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B0kdDqkZ.js";import"./utils-y3GokkU-.js";import"./clsx-B-dksMZM.js";import"./Hidden-apxTC7Y7.js";import"./useFocusRing-DI0fDdPK.js";import"./index-CWuIrcFk.js";import"./index-DrFm9B1S.js";import"./useLabels-D6QhrC7o.js";import"./useButton-D_WxqeR1.js";import"./Collection-CYruxBX6.js";import"./index-CJ58EdVB.js";import"./ListBox-CsCM53Bp.js";import"./DragAndDrop-Sjdh1mZI.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BdCA06Ry.js";import"./SelectionManager-1XKzML3x.js";import"./useEvent-DLOiNmfX.js";import"./FocusScope-CPHUrZwu.js";import"./useDescription-DyvDh4J9.js";import"./useControlledState-g7qB6nyb.js";import"./ListKeyboardDelegate-Bp4rImWz.js";import"./Text-ZmzQ_BeM.js";import"./inertValue-B9C6c4ru.js";import"./useListState-BIpJBh-6.js";import"./useHighlightSelectionDescription-DJ80ACto.js";import"./useUpdateEffect-Du-i9hfz.js";import"./useLocalizedStringFormatter-BRGAfnIK.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Csc_5k_y.js";import"./useField-DCGjV3Pz.js";import"./Button-CQkry0QJ.js";import"./Button.module-DRhvPh0f.js";import"./x-DIV-xFs7.js";import"./createLucideIcon-CRvfDbXn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

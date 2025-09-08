import{j as a}from"./iframe-Dpysv7zU.js";import{T as o,a as i,s as D}from"./Tag-B_c444H1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BLHsRTSn.js";import"./utils-BA4Y8MsR.js";import"./clsx-B-dksMZM.js";import"./Hidden-CD8l8fCV.js";import"./useFocusRing-DvhAZrYJ.js";import"./index-nlWof-mv.js";import"./index-x-TDUpv8.js";import"./useLabels-Ct51tc1V.js";import"./useButton-qpRSVaqA.js";import"./Collection-DXv9diBy.js";import"./index-D8l3Rlnm.js";import"./ListBox-Ddn5maMu.js";import"./DragAndDrop--Zvosfj4.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bz0gTZvq.js";import"./SelectionManager-TgCzq92U.js";import"./useEvent-Btya3dwt.js";import"./FocusScope-CSFG_V_8.js";import"./useDescription-BLCxsATh.js";import"./useControlledState-Dxn4OSEe.js";import"./ListKeyboardDelegate-CDBrYe3F.js";import"./Text-DkOT-iM2.js";import"./inertValue-BNvTjws1.js";import"./useListState-DNop7la8.js";import"./useHighlightSelectionDescription-D46xcg8h.js";import"./useUpdateEffect-1VEsarD8.js";import"./useLocalizedStringFormatter-DiW83o7m.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-H_ZkdCRI.js";import"./useField-I9NSWaMQ.js";import"./Button-BB_u7uMr.js";import"./Button.module-DgYkWG2o.js";import"./x-CUWp03vs.js";import"./createLucideIcon-DIDOhsTn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

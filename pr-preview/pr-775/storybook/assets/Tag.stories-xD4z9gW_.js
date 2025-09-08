import{j as a}from"./iframe-BuuzivPD.js";import{T as o,a as i,s as D}from"./Tag-CeDs8a4z.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BLzugamf.js";import"./utils-hycOnux0.js";import"./clsx-B-dksMZM.js";import"./Hidden-CA3-2mPj.js";import"./useFocusRing-B_u43ni6.js";import"./index-qxMjxIfS.js";import"./index-CcYXJYFU.js";import"./useLabels-eMTTipNB.js";import"./useButton-d_KPv1_n.js";import"./Collection-guvIfO7g.js";import"./index-C0sreDag.js";import"./ListBox-Dh0jhj9B.js";import"./DragAndDrop-Ca_hJVmv.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CRlfJuUu.js";import"./SelectionManager-BNsafjvj.js";import"./useEvent-Br7I4Miq.js";import"./FocusScope-BdW-rT2f.js";import"./useDescription-BwlUlsZO.js";import"./useControlledState-9_Cgl0SW.js";import"./ListKeyboardDelegate-BvHAGO8g.js";import"./Text-DHeyHroi.js";import"./inertValue-DDVPwlRS.js";import"./useListState-CLk8V4Wz.js";import"./useHighlightSelectionDescription-BhIB3nGe.js";import"./useUpdateEffect-Bf_qRIs5.js";import"./useLocalizedStringFormatter-D1WlWV3r.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BX03DXSG.js";import"./useField-DcawaBet.js";import"./Button-BVewm-mH.js";import"./Button.module-DgYkWG2o.js";import"./x-_7ViEfT6.js";import"./createLucideIcon-CTvdTfg4.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

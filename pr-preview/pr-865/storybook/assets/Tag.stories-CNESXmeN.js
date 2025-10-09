import{j as a}from"./iframe-aoUN_ZS6.js";import{T as o,a as i,s as D}from"./Tag-C75-65Xw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DgnbkVNf.js";import"./utils-Cxw_Fpjf.js";import"./clsx-B-dksMZM.js";import"./Hidden-BNohK9iJ.js";import"./useFocusRing-BiEZY6Rg.js";import"./index-Drnx97sC.js";import"./index-SMeimzWn.js";import"./useLabels-ICgtNXuY.js";import"./useButton-BdslO2aw.js";import"./Collection-CCPNJsOM.js";import"./index-CWvV_BLG.js";import"./ListBox-BMAgPagP.js";import"./DragAndDrop-B-xtAohc.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BaZQV95P.js";import"./SelectionManager-DeKHXbGZ.js";import"./useEvent-kKB3p8fE.js";import"./FocusScope-DtchidDY.js";import"./useDescription-BebVRtyG.js";import"./useControlledState-F3BWzbhh.js";import"./context-BBheGs1V.js";import"./Text-Bffd_qVg.js";import"./inertValue-BQebdFnL.js";import"./useListState-Bcrc3WFP.js";import"./useHighlightSelectionDescription-CCfqL8LO.js";import"./useUpdateEffect-BDIeX6JD.js";import"./useLocalizedStringFormatter-B6t2uvFo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CeTpN_bL.js";import"./useField-Cf9g7lRs.js";import"./clsx-Ciqy0D92.js";import"./Button-q3bCf5hR.js";import"./Button.module-CcWMkJAG.js";import"./x-Cwufl4H6.js";import"./createLucideIcon-D6hkGmRt.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};

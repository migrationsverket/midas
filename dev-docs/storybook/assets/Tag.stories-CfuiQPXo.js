import{j as a}from"./iframe-DfzsYqdZ.js";import{T as o,a as i,s as D}from"./Tag-B-R-GtUc.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DEFyXm_G.js";import"./utils-DvARLG_j.js";import"./clsx-B-dksMZM.js";import"./Hidden-C1v_67zD.js";import"./useFocusRing-BZ7dpsay.js";import"./index-BTtL7hIZ.js";import"./index-C4hEoCFG.js";import"./useLabels-DlqJEKFG.js";import"./useButton-Dm5hU4dO.js";import"./Collection-Buqt6CwX.js";import"./index-BIrih4Nt.js";import"./ListBox-1LF1VCBP.js";import"./DragAndDrop-DPn7wVoH.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-qrKSY6n9.js";import"./SelectionManager-BNHjomeq.js";import"./useEvent-CnNhGaz8.js";import"./FocusScope-Bj7ivExa.js";import"./useDescription-NJ_0QdNF.js";import"./useControlledState-BM5Mrg58.js";import"./ListKeyboardDelegate-BbGyNxHO.js";import"./Text-BXiSEvkp.js";import"./inertValue-C7yQUphK.js";import"./useListState-BB7mz_oF.js";import"./useHighlightSelectionDescription-DjvB6i30.js";import"./useUpdateEffect-D-G5zj5q.js";import"./useLocalizedStringFormatter-I_rkOEkV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CSZ5Y-vv.js";import"./useField-DaFYKaqK.js";import"./Button-augT6Kyy.js";import"./Button.module-CF2bVDCq.js";import"./x-CDG4ghot.js";import"./createLucideIcon-CDfhpREI.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

import{j as a}from"./iframe-sbb8jMFH.js";import{T as o,a as i,s as D}from"./Tag-sqWlrP1g.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-r54LQ77v.js";import"./utils-xZxVhtdW.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dz97npP4.js";import"./useFocusRing-QGhwBIBS.js";import"./index-DuADEEvN.js";import"./index-8ZAESGt3.js";import"./useLabels-Bkrk2iaY.js";import"./useButton-CMU79mAg.js";import"./Collection-CGumNRux.js";import"./index-BZ3hkTBn.js";import"./ListBox-B6WQa4OT.js";import"./DragAndDrop-DztNBtFF.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-HHyfXe15.js";import"./SelectionManager-Cw93WIzU.js";import"./useEvent-DiJd7ElP.js";import"./FocusScope-DjVTIU-N.js";import"./useDescription-DUPVrWDI.js";import"./useControlledState-BviHn_NG.js";import"./ListKeyboardDelegate-fL69V1ax.js";import"./Text-dl0ALke-.js";import"./inertValue-CgIez1Or.js";import"./useListState-BRKKxMBu.js";import"./useHighlightSelectionDescription-BBSUyzGD.js";import"./useUpdateEffect-CL5tKg6t.js";import"./useLocalizedStringFormatter-Cf5v2z35.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-zA5-29RN.js";import"./useField-BpVz3neb.js";import"./Button-CR-IlvML.js";import"./Button.module-DRhvPh0f.js";import"./x-DEiIQh9f.js";import"./createLucideIcon-Cn4Kv8Gp.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

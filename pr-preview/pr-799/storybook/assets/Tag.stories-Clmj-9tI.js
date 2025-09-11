import{j as a}from"./iframe-DlQXzWkT.js";import{T as o,a as i,s as D}from"./Tag-BFOX0tCm.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-sGFx9a4E.js";import"./utils-D2cZxT6P.js";import"./clsx-B-dksMZM.js";import"./Hidden-BIaOyXkO.js";import"./useFocusRing-KUjsNCH5.js";import"./index-Cj-XreSW.js";import"./index-2dhXodWQ.js";import"./useLabels-DQKL7dPf.js";import"./useButton-CWMPT-9M.js";import"./Collection-C5r7pk5m.js";import"./index-YNufsx12.js";import"./ListBox-DZIlWLO2.js";import"./DragAndDrop-8m1Q4Svy.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CPXu4J5T.js";import"./SelectionManager-BhGHeeBe.js";import"./useEvent-BI3RD68J.js";import"./FocusScope-wtimiP2y.js";import"./useDescription-Ccn3hs5D.js";import"./useControlledState-EWb47Rz2.js";import"./ListKeyboardDelegate-By_gKHxf.js";import"./Text-zkVl9663.js";import"./inertValue-Cn9EtWzU.js";import"./useListState-stcERE6m.js";import"./useHighlightSelectionDescription-DS5ofVX7.js";import"./useUpdateEffect-DPDSFyyt.js";import"./useLocalizedStringFormatter-CnknNQRY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DBFgIno3.js";import"./useField-DUVx2xE0.js";import"./Button-C2-H5Yp3.js";import"./Button.module-DRhvPh0f.js";import"./x-Dr3MeEFU.js";import"./createLucideIcon-CULqAiZE.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

import{j as a}from"./iframe-BhNAt-Le.js";import{T as o,a as i,s as D}from"./Tag-C_Ckcst2.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DT3z-dCp.js";import"./utils-DwE_0i4h.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bz3c6YmL.js";import"./useFocusRing-ch4nQheK.js";import"./index-BXKBE_Ak.js";import"./index-DtO_u-Kh.js";import"./useLabels-BjZ5VuLP.js";import"./useButton-DaMa6Rli.js";import"./Collection-Cq3LKqsO.js";import"./index-D10gcS5R.js";import"./ListBox-CYOjiD3R.js";import"./DragAndDrop-DiJTx580.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-5JL3iKI3.js";import"./SelectionManager-CR-7_B0d.js";import"./useEvent-9a8iXA9j.js";import"./FocusScope-CP-f51dw.js";import"./useDescription-CX5zCIlR.js";import"./useControlledState-BpyXObHm.js";import"./context-CBvAntcS.js";import"./Text-DUr5rJp6.js";import"./inertValue-TOghF4HR.js";import"./useListState-DBjbyOJz.js";import"./useHighlightSelectionDescription-6hlAPqG6.js";import"./useUpdateEffect-CwzZ2OXi.js";import"./useLocalizedStringFormatter-DGvoab4q.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DGbiOVcN.js";import"./useField-CeNNoGcD.js";import"./Button-DXoknU2-.js";import"./Button.module-DRhvPh0f.js";import"./x-ngiYoKl4.js";import"./createLucideIcon-BLdM3YkS.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

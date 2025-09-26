import{j as a}from"./iframe-DmIkQMg2.js";import{T as o,a as i,s as D}from"./Tag-CMUDFipA.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-zpzLeijz.js";import"./utils-DPHb3LPj.js";import"./clsx-B-dksMZM.js";import"./Hidden-CiYkUJXb.js";import"./useFocusRing--HjdqhtR.js";import"./index-B4Txr5WD.js";import"./index-DaEGKzp2.js";import"./useLabels-DKkGmXqW.js";import"./useButton-D3iLX81H.js";import"./Collection-DjM-t3bX.js";import"./index-C46DGu8o.js";import"./ListBox-Vm3KFUFB.js";import"./DragAndDrop-h3QTPYlW.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C91xUfXz.js";import"./SelectionManager-C0q92RhR.js";import"./useEvent-DFqx9YDb.js";import"./FocusScope-BHoe419L.js";import"./useDescription-BDhqGO1I.js";import"./useControlledState-BSBSSTK0.js";import"./ListKeyboardDelegate-DkNb8Tl4.js";import"./Text-C_Sjh9pG.js";import"./inertValue-QXb04IE2.js";import"./useListState-CYfjXHNO.js";import"./useHighlightSelectionDescription-B2BEC234.js";import"./useUpdateEffect-CUhCCLOt.js";import"./useLocalizedStringFormatter-fF8dm2ub.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ZBr8bTtt.js";import"./useField-BA-jRi-4.js";import"./Button-Co3AVfHF.js";import"./Button.module-DRhvPh0f.js";import"./x-Bri3vRZk.js";import"./createLucideIcon-DsLEhCJc.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

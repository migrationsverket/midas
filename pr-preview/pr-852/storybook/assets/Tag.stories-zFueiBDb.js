import{j as a}from"./iframe-BEjKSeJF.js";import{T as o,a as i,s as D}from"./Tag-BB6MOZGO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-X2gClN_c.js";import"./utils-CB52Z3km.js";import"./clsx-B-dksMZM.js";import"./Hidden-DDqbwcos.js";import"./useFocusRing-C7Kz9uAm.js";import"./index-D4OLSYjb.js";import"./index-BCb1Xvf7.js";import"./useLabels-CokTg17U.js";import"./useButton-CA2mjOsp.js";import"./Collection-DbmvYFxi.js";import"./index-DuNi4aWt.js";import"./ListBox-eSu8EmEW.js";import"./DragAndDrop-D0s87eyc.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CI35ZXvr.js";import"./SelectionManager-DPW3nW5t.js";import"./useEvent-B5EJPMmI.js";import"./FocusScope-CRGyWmfh.js";import"./useDescription-CdUytCb7.js";import"./useControlledState-NzjAaPaI.js";import"./context-YHrC8uez.js";import"./Text-C8n2ElEg.js";import"./inertValue-B9Qe0UEF.js";import"./useListState-DohNusml.js";import"./useHighlightSelectionDescription-DcDhwfED.js";import"./useUpdateEffect-4Jhsp0AP.js";import"./useLocalizedStringFormatter-DlgE_ODY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cw5mc4OY.js";import"./useField-DtPpRl2k.js";import"./Button-Cu1voy75.js";import"./Button.module-DRhvPh0f.js";import"./x-DISbJv9O.js";import"./createLucideIcon-BXUvi_GM.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

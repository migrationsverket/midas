import{j as a}from"./iframe-B1lvOxX1.js";import{T as o,a as i,s as D}from"./Tag-YNvnXkgq.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Mj_eDvTo.js";import"./utils-z_r7fcwV.js";import"./clsx-B-dksMZM.js";import"./Hidden-C35oNc3L.js";import"./useFocusRing-DXk37t0a.js";import"./index-tbZqbgaQ.js";import"./index-C1e1SWCw.js";import"./useLabels-Cmg0wvDO.js";import"./useButton-DdZxV86M.js";import"./Collection-BdokA4jQ.js";import"./index-DPxkPoun.js";import"./ListBox-Cl7ahvLw.js";import"./DragAndDrop-D0gFcQpi.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DmPNhsou.js";import"./SelectionManager-CEWWmFVV.js";import"./useEvent-Wqprcczi.js";import"./FocusScope-UYt8mone.js";import"./useDescription-B-kShsCV.js";import"./useControlledState-CG9-lb0l.js";import"./ListKeyboardDelegate-CC0f9Wmv.js";import"./Text-sZcQZdom.js";import"./inertValue-C3Xrl6Fm.js";import"./useListState-CTlmIwKb.js";import"./useHighlightSelectionDescription-WGUw16Px.js";import"./useUpdateEffect-C6QMzD1k.js";import"./useLocalizedStringFormatter-C9NGP74T.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D9dL513F.js";import"./useField-uVllYp9J.js";import"./Button-CEPzk3-8.js";import"./Button.module-DRhvPh0f.js";import"./x-CR14hot0.js";import"./createLucideIcon-iechpHkF.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

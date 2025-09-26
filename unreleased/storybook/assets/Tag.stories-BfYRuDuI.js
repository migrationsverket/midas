import{j as a}from"./iframe-zWigmtFB.js";import{T as o,a as i,s as D}from"./Tag-FVKlB6Yr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BbMWiBN3.js";import"./utils-BsxkMpxe.js";import"./clsx-B-dksMZM.js";import"./Hidden-FATdxLWW.js";import"./useFocusRing-BMMSP3-Z.js";import"./index-B7CPDKOG.js";import"./index-Ddaez_49.js";import"./useLabels-BGeUF98g.js";import"./useButton-BXbNFX8R.js";import"./Collection-COPFEjNP.js";import"./index-BroFlfqd.js";import"./ListBox-D3ApAiyU.js";import"./DragAndDrop-Byx1QHQm.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Drtvbzsn.js";import"./SelectionManager-2vqQHZOS.js";import"./useEvent-B6U1SIzB.js";import"./FocusScope-D6Iom0DX.js";import"./useDescription-B8FqEPJN.js";import"./useControlledState-Qayqlgpb.js";import"./context-aydN7z4F.js";import"./Text-DI8aNg9Y.js";import"./inertValue-ywW1Bg59.js";import"./useListState-Dh92tzeP.js";import"./useHighlightSelectionDescription-DiNiM9Ps.js";import"./useUpdateEffect-CDyzNyIq.js";import"./useLocalizedStringFormatter-Do-bTiUs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BGfb07w0.js";import"./useField-BvLlJ7zv.js";import"./Button-CyIAlysD.js";import"./Button.module-DRhvPh0f.js";import"./x-C6Q9eAkr.js";import"./createLucideIcon-D7kIpWrG.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

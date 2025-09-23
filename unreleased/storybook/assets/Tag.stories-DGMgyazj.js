import{j as a}from"./iframe-B95YgYqS.js";import{T as o,a as i,s as D}from"./Tag-DmJ169Fl.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C-HOFYLh.js";import"./utils-CFKj-CZv.js";import"./clsx-B-dksMZM.js";import"./Hidden-KCfBsNQS.js";import"./useFocusRing-rYn47u7R.js";import"./index-CVwqVd-Y.js";import"./index-Ch1to-qP.js";import"./useLabels-DGubBf7v.js";import"./useButton-C-5_hAqX.js";import"./Collection-Cxa8w3L0.js";import"./index-DLCx5rUU.js";import"./ListBox-C2SV2EpO.js";import"./DragAndDrop-sTkOyMoy.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DyxizJGH.js";import"./SelectionManager-BI-EdAhM.js";import"./useEvent-BH2Zmj4z.js";import"./FocusScope-DM23LCth.js";import"./useDescription-_Xpo3cbJ.js";import"./useControlledState-DVFUz4VG.js";import"./ListKeyboardDelegate-CXNbMWd-.js";import"./Text-5rSTbP-F.js";import"./inertValue-C7Uua_Zi.js";import"./useListState-CXlrEzc1.js";import"./useHighlightSelectionDescription-B0VD9dAO.js";import"./useUpdateEffect-CWDbNAGu.js";import"./useLocalizedStringFormatter-CXInIYyo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BHQgmdBb.js";import"./useField-BKtruYlQ.js";import"./Button-CzMsxXIb.js";import"./Button.module-DRhvPh0f.js";import"./x-BOirrD2e.js";import"./createLucideIcon-BXKLfkpC.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

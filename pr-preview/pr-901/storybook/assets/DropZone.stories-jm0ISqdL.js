import{j as e,e as u}from"./iframe-DvLwB3Ds.js";import{D as h,F}from"./FileUpload-C7MM9l-f.js";import{B as y}from"./Button-DfQ5uVTz.js";import{T as x}from"./Text-B3O68ylS.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DJG2Wzkv.js";import"./clsx-B-dksMZM.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D-rIeeQE.js";import"./useFocusRing-NGNq_XHe.js";import"./index-BbChoBT3.js";import"./index-Cm_qyH8s.js";import"./useLabels-v0e-sopg.js";import"./useDescription-CqtRjcnc.js";import"./useLocalizedStringFormatter-DjlIKsJm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useButton-DY8Vwjfs.js";import"./VisuallyHidden-LfsMrYlM.js";import"./Input-CnzIW-id.js";import"./Hidden-K7mYEibi.js";import"./PressResponder-C68GwHbd.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CcWMkJAG.js";import"./Button-DMApcMb3.js";const{expect:d,fn:T,userEvent:w,within:S,fireEvent:E,waitFor:m}=__STORYBOOK_MODULE_TEST__,j=i=>{const[r,s]=u.useState([]),n=o=>{if(o){const t=Array.from(o);s(a=>[...a,...t]),i.onSelect(t)}},c=async o=>{const t=o.items.filter(l=>l.kind==="file"),a=await Promise.all(t.map(l=>l.getFile()));s(l=>[...l,...a]),i.onSelect(a)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(F,{onSelect:n,"data-testid":"file-trigger",children:e.jsx(y,{children:"Select files"})}),e.jsx(h,{...i,onDrop:c,"data-testid":"drop-zone",children:e.jsx(x,{children:"Drop files here"})}),r.length>0&&e.jsxs("div",{children:[e.jsx("h4",{children:"Selected files:"}),e.jsx("ul",{children:r.map((o,t)=>e.jsx("li",{children:o.name},t))})]})]})},Q={component:h,title:"Components/DropZone",tags:["!dev","!autodocs"],render:i=>e.jsx(j,{...i}),args:{onSelect:T()}},p={play:async({canvasElement:i,args:r})=>{const s=S(i),n=new File(["hello"],"hello.png",{type:"image/png"}),c=s.getByTestId("file-trigger");await w.upload(c,n),await m(()=>{d(r.onSelect).toHaveBeenCalledWith([n])});const o=s.getByTestId("drop-zone"),t=new Event("drop",{bubbles:!0});Object.defineProperty(t,"dataTransfer",{value:{files:[n],items:[{kind:"file",type:n.type,getAsFile:()=>n}],types:["Files"]}}),await E(o,t),await m(()=>{d(r.onSelect).toHaveBeenCalledTimes(2),d(r.onSelect).toHaveBeenLastCalledWith([n])})}};var g,f,v;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const testFile = new File(['hello'], 'hello.png', {
      type: 'image/png'
    });

    // Test 1: FileTrigger button click
    const fileTrigger = canvas.getByTestId('file-trigger');
    await userEvent.upload(fileTrigger, testFile);
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith([testFile]);
    });

    // Test 2: DropZone drop
    const dropZone = canvas.getByTestId('drop-zone');
    const dropEvent = new Event('drop', {
      bubbles: true
    });
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [testFile],
        items: [{
          kind: 'file',
          type: testFile.type,
          getAsFile: () => testFile
        }],
        types: ['Files']
      }
    });
    await fireEvent(dropZone, dropEvent);
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledTimes(2);
      expect(args.onSelect).toHaveBeenLastCalledWith([testFile]);
    });
  }
}`,...(v=(f=p.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const V=["Default"];export{p as Default,V as __namedExportsOrder,Q as default};

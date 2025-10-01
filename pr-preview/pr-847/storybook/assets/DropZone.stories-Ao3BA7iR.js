import{j as e,e as u}from"./iframe-tg55KViq.js";import{D as h,F}from"./FileUpload-DYatcWfC.js";import{B as y}from"./Button-CbjeGp8I.js";import{T as x}from"./Text-72cmMtdP.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CW23PGLJ.js";import"./clsx-B-dksMZM.js";import"./Text-BsSqP69q.js";import"./useFocusRing-DAVsqA2_.js";import"./index-RaVpyZeL.js";import"./index-DEkcVeXa.js";import"./useLabels-CMBzL3Yz.js";import"./useDescription-CDWPKTRT.js";import"./useLocalizedStringFormatter-CMsoCMeI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useButton-BTqK5PhC.js";import"./VisuallyHidden-D5bmzG3l.js";import"./Input-CRFw8fGy.js";import"./Hidden-t_I5kgNB.js";import"./PressResponder-D3YdBrqI.js";import"./clsx-Ciqy0D92.js";import"./Button.module-DRhvPh0f.js";import"./Button-C8wh5iYF.js";const{expect:d,fn:T,userEvent:w,within:S,fireEvent:E,waitFor:m}=__STORYBOOK_MODULE_TEST__,j=i=>{const[r,s]=u.useState([]),n=o=>{if(o){const t=Array.from(o);s(a=>[...a,...t]),i.onSelect(t)}},c=async o=>{const t=o.items.filter(l=>l.kind==="file"),a=await Promise.all(t.map(l=>l.getFile()));s(l=>[...l,...a]),i.onSelect(a)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(F,{onSelect:n,"data-testid":"file-trigger",children:e.jsx(y,{children:"Select files"})}),e.jsx(h,{...i,onDrop:c,"data-testid":"drop-zone",children:e.jsx(x,{children:"Drop files here"})}),r.length>0&&e.jsxs("div",{children:[e.jsx("h4",{children:"Selected files:"}),e.jsx("ul",{children:r.map((o,t)=>e.jsx("li",{children:o.name},t))})]})]})},N={component:h,title:"Components/DropZone",tags:["!dev","!autodocs"],render:i=>e.jsx(j,{...i}),args:{onSelect:T()}},p={play:async({canvasElement:i,args:r})=>{const s=S(i),n=new File(["hello"],"hello.png",{type:"image/png"}),c=s.getByTestId("file-trigger");await w.upload(c,n),await m(()=>{d(r.onSelect).toHaveBeenCalledWith([n])});const o=s.getByTestId("drop-zone"),t=new Event("drop",{bubbles:!0});Object.defineProperty(t,"dataTransfer",{value:{files:[n],items:[{kind:"file",type:n.type,getAsFile:()=>n}],types:["Files"]}}),await E(o,t),await m(()=>{d(r.onSelect).toHaveBeenCalledTimes(2),d(r.onSelect).toHaveBeenLastCalledWith([n])})}};var g,f,v;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=p.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Q=["Default"];export{p as Default,Q as __namedExportsOrder,N as default};

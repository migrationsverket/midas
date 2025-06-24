import{j as t}from"./jsx-runtime-BYYWji4R.js";import{d as G,e as X,f as J,g as Q,h as L,i as Y,j as Z,k as ee,l as g}from"./Dialog-AjuNQtAO.js";import{l as P,c as T,$ as ie,f as V,o as te,a as B,k as oe}from"./utils-oc6myKvD.js";import{$ as H}from"./filterDOMProps-CeZl_uWj.js";import{r as n,R as c}from"./index-ClcD9ViR.js";import{$ as ae,a as E,b as z}from"./OverlayArrow-qK8NxBS9.js";import{a as re}from"./FocusScope-Dq_oVuiP.js";import{B as q}from"./Button-BjVYXvP1.js";import{X as se}from"./x-BaIpobvV.js";import{H as ne}from"./Heading-DDSg48dG.js";import{o as le}from"./storybook-DLHntVpb.js";import{S as de}from"./Select-DXfeMimW.js";import{T as f}from"./Text-Dpx6Gex-.js";import"./Button-BD6hc4wl.js";import"./ProgressBar-CQGqtZ9B.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./useLabel-Blgy_cRF.js";import"./context-BSqJJvai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./useFocusRing-DUrskli4.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-tJD4A6lu.js";import"./RSPContexts-HQcWPJyv.js";import"./Collection-BHHe22Am.js";import"./index-NDK0uC61.js";import"./Separator-DiWRQEoC.js";import"./SelectionManager-BGs3xiJx.js";import"./useEvent-DVigVKKB.js";import"./scrollIntoView-Dsrcj58z.js";import"./useDescription-Bdyn64K0.js";import"./useControlledState-H1tiOFpU.js";import"./ListKeyboardDelegate-EWbBYqg2.js";import"./useCollator-B-UPZ4SJ.js";import"./Text-C8tPE3tt.js";import"./PressResponder-DqE_a81G.js";import"./useLocalizedStringFormatter-DqnULi-B.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-uwYO98VR.js";import"./clsx-B-dksMZM.js";import"./Button.module-AG3JZ-l4.js";import"./createLucideIcon-DQK9Z80p.js";import"./CalendarDate-Lfx2W0H2.js";import"./Tag-UXJe0Vzs.js";import"./ListBox-O25dkUY9.js";import"./DragAndDrop-lZrB2UzM.js";import"./inertValue-C_mH9YkE.js";import"./useListState-CAy-Xhih.js";import"./useField-aNJ8ypzk.js";import"./useHighlightSelectionDescription-EcAuZEkO.js";import"./useUpdateEffect-BzF61qSB.js";import"./useHasTabbableChild-CdX5JQwf.js";import"./TextField-DHkjYeex.js";import"./FieldError-C31dJ6Xr.js";import"./Form-CXoNEyM_.js";import"./useFormValidation-Cv-fFL6t.js";import"./Input-mxO2G9Hh.js";import"./useTextField-CPl6LdnF.js";import"./Checkbox-C2_O4S39.js";import"./useToggleState-DcHMzLVj.js";import"./check-Dn7CvcrD.js";import"./ListBoxSection-Bi7tA9-6.js";import"./useObserveElement-BP4zVUS4.js";import"./chevron-down-CVNiYbvV.js";import"./Label-C8mJCmL2.js";let l=typeof document<"u"&&window.visualViewport;function me(){let i=P(),[e,o]=n.useState(()=>i?{width:0,height:0}:M());return n.useEffect(()=>{let a=()=>{o(r=>{let s=M();return s.width===r.width&&s.height===r.height?r:s})};return l?l.addEventListener("resize",a):window.addEventListener("resize",a),()=>{l?l.removeEventListener("resize",a):window.removeEventListener("resize",a)}},[]),e}function M(){return{width:l&&(l==null?void 0:l.width)||window.innerWidth,height:l&&(l==null?void 0:l.height)||window.innerHeight}}function ue(i,e,o){let{overlayProps:a,underlayProps:r}=G({...i,isOpen:e.isOpen,onClose:e.close},o);return X({isDisabled:!e.isOpen}),J(),n.useEffect(()=>{if(e.isOpen&&o.current)return Q([o.current])},[e.isOpen,o]),{modalProps:T(a),underlayProps:r}}const ce=n.createContext(null),D=n.createContext(null),pe=n.forwardRef(function(e,o){if(n.useContext(D))return c.createElement(R,{...e,modalRef:o},e.children);let{isDismissable:r,isKeyboardDismissDisabled:s,isOpen:m,defaultOpen:d,onOpenChange:p,children:u,isEntering:y,isExiting:A,UNSTABLE_portalContainer:K,shouldCloseOnInteractOutside:U,...k}=e;return c.createElement(W,{isDismissable:r,isKeyboardDismissDisabled:s,isOpen:m,defaultOpen:d,onOpenChange:p,isEntering:y,isExiting:A,UNSTABLE_portalContainer:K,shouldCloseOnInteractOutside:U},c.createElement(R,{...k,modalRef:o},u))});function fe(i,e){[i,e]=ie(i,e,ce);let o=n.useContext(L),a=ae(i),r=i.isOpen!=null||i.defaultOpen!=null||!o?a:o,s=V(e),m=n.useRef(null),d=E(s,r.isOpen),p=E(m,r.isOpen),u=d||p||i.isExiting||!1,y=P();return!r.isOpen&&!u||y?null:c.createElement(ge,{...i,state:r,isExiting:u,overlayRef:s,modalRef:m})}const W=n.forwardRef(fe);function ge({UNSTABLE_portalContainer:i,...e}){let o=e.modalRef,{state:a}=e,{modalProps:r,underlayProps:s}=ue(e,a,o),m=z(e.overlayRef)||e.isEntering||!1,d=B({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:m,isExiting:e.isExiting,state:a}}),p=me(),u={...d.style,"--visual-viewport-height":p.height+"px"};return c.createElement(Z,{isExiting:e.isExiting,portalContainer:i},c.createElement("div",{...T(H(e),s),...d,style:u,ref:e.overlayRef,"data-entering":m||void 0,"data-exiting":e.isExiting||void 0},c.createElement(oe,{values:[[D,{modalProps:r,modalRef:o,isExiting:e.isExiting,isDismissable:e.isDismissable}],[L,a]]},d.children)))}function R(i){let{modalProps:e,modalRef:o,isExiting:a,isDismissable:r}=n.useContext(D),s=n.useContext(L),m=n.useMemo(()=>te(i.modalRef,o),[i.modalRef,o]),d=V(m),p=z(d),u=B({...i,defaultClassName:"react-aria-Modal",values:{isEntering:p,isExiting:a,state:s}});return c.createElement("div",{...T(H(i),e),...u,ref:d,"data-entering":p||void 0,"data-exiting":a||void 0},r&&c.createElement(Y,{onDismiss:s.close}),u.children)}const qe="_modal_1b2lr_4",be="_overlay_1b2lr_26",xe="_modalHeader_1b2lr_47",ve="_modalBody_1b2lr_56",x={modal:qe,overlay:be,modalHeader:xe,modalBody:ve},b=({children:i,title:e,...o})=>t.jsx(ee,{...o,children:t.jsx(W,{...o,className:x.overlay,children:t.jsx(re,{contain:!0,autoFocus:!0,restoreFocus:!0,children:t.jsxs(pe,{...o,className:x.modal,children:[t.jsx("div",{className:x.modalHeader,children:t.jsx(q,{slot:"close",variant:"tertiary",icon:se,iconPlacement:"right",children:"Stäng"})}),t.jsxs("div",{className:x.modalBody,tabIndex:-1,children:[e&&t.jsx(ne,{level:2,children:e}),i]})]})})})});try{g.displayName="DialogTrigger",g.__docgenInfo={description:"A DialogTrigger opens a dialog when a trigger element is pressed.",displayName:"DialogTrigger",props:{isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}}}}}catch{}try{b.displayName="Modal",b.__docgenInfo={description:"",displayName:"Modal",props:{isDismissable:{defaultValue:{value:"false"},description:"Whether to close the modal when the user interacts outside it.",name:"isDismissable",required:!1,type:{name:"boolean"}},isKeyboardDismissDisabled:{defaultValue:{value:"false"},description:"Whether pressing the escape key to close the modal should be disabled.",name:"isKeyboardDismissDisabled",required:!1,type:{name:"boolean"}},shouldCloseOnInteractOutside:{defaultValue:null,description:`When user interacts with the argument element outside of the overlay ref,
return true if onClose should be called.  This gives you a chance to filter
out interaction with elements that should not dismiss the overlay.
By default, onClose will always be called on interaction outside the overlay ref.`,name:"shouldCloseOnInteractOutside",required:!1,type:{name:"(element: Element) => boolean"}},title:{defaultValue:null,description:"An optional title for the dialog. If omitted, please provide an aria-label for accessibility.",name:"title",required:!1,type:{name:"ReactNode"}},role:{defaultValue:{value:"'dialog'"},description:"The accessibility role for the dialog.",name:"role",required:!1,type:{name:"enum",value:[{value:'"alertdialog"'},{value:'"dialog"'}]}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}}}}}catch{}const Fi={component:b,subcomponents:{DialogTrigger:g},title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"},render:i=>t.jsxs(g,{children:[t.jsx(q,{children:"Öppna"}),t.jsxs(b,{title:"Enter your name",...i,children:[t.jsx(de,{autoFocus:!0,placeholder:"Select...",defaultSelectedKeys:["kiwi"],label:"Select fruits",selectionMode:"multiple",options:le,isClearable:!0,isSelectableAll:!1}),t.jsx(q,{slot:"close",children:"Submit"})]})]})},v={args:{isDismissable:!0}},h={},$={render:i=>t.jsxs(g,{children:[t.jsx(q,{children:"Öppna"}),t.jsxs(b,{title:"Read all the text",...i,children:[t.jsx(f,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque."}),t.jsx(f,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque."}),t.jsx(f,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque."}),t.jsx(f,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque."}),t.jsx(f,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque."}),t.jsx(f,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque."}),t.jsx(q,{slot:"close",children:"Submit"})]})]})};var O,_,w;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isDismissable: true
  }
}`,...(w=(_=v.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var N,S,C;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(C=(S=h.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,I,F;$.parameters={...$.parameters,docs:{...(j=$.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <DialogTrigger>
      <Button>Öppna</Button>
      <Modal title='Read all the text' {...args}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam
          vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error
          reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Itaque, dolores eligendi rerum
          distinctio dignissimos repellat magni est veniam, ratione, totam quo
          eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
          laborum praesentium deserunt incidunt minima doloremque eligendi odio
          iure officia sunt, delectus rem quam soluta dolores modi, illo
          expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt
          dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor
          saepe nam fugit provident asperiores voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Button slot='close'>Submit</Button>
      </Modal>
    </DialogTrigger>
}`,...(F=(I=$.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const Pi=["Default","NotDismissable","Scrollable"];export{v as Default,h as NotDismissable,$ as Scrollable,Pi as __namedExportsOrder,Fi as default};

import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as v}from"./clsx-B-dksMZM.js";import{c as y}from"./createLucideIcon-8wDOqnHv.js";import{B as C}from"./Button-BZSRI6fu.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=y("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),S='"../theme/tokens.css"',x="_container_32v8g_4",O="_spinner_32v8g_8",j="_rotating_32v8g_1",b="_dark_32v8g_18",B="_vsHidden_32v8g_22",a={tokens:S,"--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-on-color":"light-dark(#ffffff, #ffffff)",container:x,spinner:O,rotating:j,dark:b,vsHidden:B},t=({small:r,isOnColor:_,dark:k})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(h,{className:v(a.spinner,(_||k)&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"For use on dark background\n@deprecated please use `isOnColor` instead",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const T={component:t,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},o={args:{}},s={args:{small:!0}},n={args:{small:!0,isOnColor:!0},render:({...r})=>e.jsxs(C,{children:[e.jsx(t,{isOnColor:r.isOnColor,small:r.small}),"Laddar"]})};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: ({
    ...args
  }) => {
    return <Button>
        <Spinner isOnColor={args.isOnColor} small={args.small} />
        Laddar
      </Button>;
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const U=["Primary","Small","InButton"];export{n as InButton,o as Primary,s as Small,U as __namedExportsOrder,T as default};

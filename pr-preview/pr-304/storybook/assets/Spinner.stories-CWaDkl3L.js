import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{c as v}from"./clsx-B-dksMZM.js";import{c as x}from"./createLucideIcon-8wDOqnHv.js";import{B as j}from"./Button-BRtRVFqG.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DWcm3eun.js";import"./useFocusRing-CzvYi63w.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-Cwv2mliU.js";import"./index-cpIEhwLo.js";import"./useFocusable-BFetNXOg.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=x("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),B='"../theme/tokens.css"',L="_container_13gan_4",D="_spinner_13gan_8",N="_rotating_13gan_1",H="_dark_13gan_18",I="_vsHidden_13gan_22",e={tokens:B,"--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-inverse":"light-dark(#ffffff, #000000)",container:L,spinner:D,rotating:N,dark:H,vsHidden:I},d=({small:r,dark:h})=>a.jsxs("div",{className:e.container,role:"status",children:[a.jsx(b,{className:v(e.spinner,h&&e.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),a.jsx("span",{className:e.vsHidden,children:"Laddar, vänligen vänta."})]});try{d.displayName="Spinner",d.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller when set to true",name:"small",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"For use on dark background",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const A={component:d,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},n={args:{small:!0}},t={parameters:{backgrounds:{default:"Dark"}},args:{dark:!0}},o={args:{small:!0,dark:!0},render:({...r})=>a.jsxs(j,{children:[a.jsx(d,{dark:r.dark,small:r.small}),"Laddar"]})};var c,i,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,k,_;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  args: {
    dark: true
  }
}`,...(_=(k=t.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var f,y,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    small: true,
    dark: true
  },
  render: ({
    ...args
  }) => {
    return <Button>
        <Spinner dark={args.dark} small={args.small} />
        Laddar
      </Button>;
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const G=["Primary","Small","Dark","InButton"];export{t as Dark,o as InButton,s as Primary,n as Small,G as __namedExportsOrder,A as default};

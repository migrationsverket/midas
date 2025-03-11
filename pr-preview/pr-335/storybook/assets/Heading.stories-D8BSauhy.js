import{j as l}from"./jsx-runtime-DtgEGaVE.js";import{c as W}from"./clsx-B-dksMZM.js";import{e as t}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const X='"../theme/tokens.css"',Y="#000000",Z='"Inter", sans-serif',$="_h1_ozm69_5",ee="_h1External_ozm69_6",ne="_h2_ozm69_8",ae="_h2External_ozm69_9",te="_h3_ozm69_11",re="_h3External_ozm69_12",se="_h4_ozm69_14",le="_h4External_ozm69_15",oe="_h5_ozm69_17",ie="_h5External_ozm69_18",a={tokens:X,black:Y,display:Z,h1:$,h1External:ee,h2:ne,h2External:ae,h3:te,h3External:re,h4:se,h4External:le,h5:oe,h5External:ie},r=({element:e,component:n,variant:f})=>n===e||!n&&f===e,E=({children:e,...n})=>l.jsx(he,{...n,children:e}),he=({component:e,children:n,className:f,variant:s="h3",isExternal:o=!1,...i})=>{const Q={h1:o?a.h1External:a.h1,h2:o?a.h2External:a.h2,h3:o?a.h3External:a.h3,h4:o?a.h4External:a.h4,h5:o?a.h5External:a.h5},h=W(Q[s],f);return r({component:e,variant:s,element:"h1"})?l.jsx("h1",{className:h,...i,children:n}):r({component:e,variant:s,element:"h2"})?l.jsx("h2",{className:h,...i,children:n}):r({component:e,variant:s,element:"h3"})?l.jsx("h3",{className:h,...i,children:n}):r({component:e,variant:s,element:"h4"})?l.jsx("h4",{className:h,...i,children:n}):r({component:e,variant:s,element:"h5"})?l.jsx("h5",{className:h,...i,children:n}):null};try{r.displayName="isSemanticElement",r.__docgenInfo={description:"",displayName:"isSemanticElement",props:{variant:{defaultValue:{value:"h3"},description:"The heading element to render",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},component:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the variant property",name:"component",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}}}}}catch{}try{E.displayName="Heading",E.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"h3"},description:"The heading element to render",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},component:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the variant property",name:"component",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},isExternal:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const me={component:E,title:"Components/Heading",tags:["autodocs"],args:{isExternal:!1}},c={args:{variant:"h1",children:"Sapindales"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},g={args:{...c.args,isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"44px","font-weight":400})}},p={args:{variant:"h2",children:"Rutaceae"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},d={args:{...p.args,isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"36px","font-weight":500})}},u={args:{variant:"h3",children:"Citrus"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},m={args:{variant:"h3",children:"Citrus",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"24px","line-height":"32px","font-weight":600})}},x={args:{variant:"h4",children:"C. reticulata",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},y={args:{variant:"h5",children:"Clementin",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"24px","font-weight":600})}},v={args:{variant:"h3",component:"h1",children:"A h1 that looks just like a h3"},play:async({canvas:e,args:{isExternal:n}})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":n?"24px":"16px","line-height":n?"32px":"24px","font-weight":600})}};var _,H,S;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'Sapindales'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '32px',
      'font-weight': 400
    });
  }
}`,...(S=(H=c.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var z,R,w;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...InternalHeading1.args,
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '36px',
      'line-height': '44px',
      'font-weight': 400
    });
  }
}`,...(w=(R=g.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var B,k,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'Rutaceae'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 400
    });
  }
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var I,j,N;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...InternalHeading2.args,
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '36px',
      'font-weight': 500
    });
  }
}`,...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var q,V,b;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Citrus'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(b=(V=u.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var O,A,T;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Citrus',
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '24px',
      'line-height': '32px',
      'font-weight': 600
    });
  }
}`,...(T=(A=m.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var U,D,F;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'h4',
    children: 'C. reticulata',
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 600
    });
  }
}`,...(F=(D=x.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'h5',
    children: 'Clementin',
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '18px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,P;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    component: 'h1',
    children: 'A h1 that looks just like a h3'
  },
  play: async ({
    canvas,
    args: {
      isExternal
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': isExternal ? '24px' : '16px',
      'line-height': isExternal ? '32px' : '24px',
      'font-weight': 600
    });
  }
}`,...(P=(M=v.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const xe=["InternalHeading1","ExternalHeading1","InternalHeading2","ExternalHeading2","InternalHeading3","ExternalHeading3","ExternalHeading4","ExternalHeading5","ChangeSemanticElement"];export{v as ChangeSemanticElement,g as ExternalHeading1,d as ExternalHeading2,m as ExternalHeading3,x as ExternalHeading4,y as ExternalHeading5,c as InternalHeading1,p as InternalHeading2,u as InternalHeading3,xe as __namedExportsOrder,me as default};

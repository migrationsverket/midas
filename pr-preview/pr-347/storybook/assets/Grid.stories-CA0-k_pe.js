import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as m}from"./clsx-B-dksMZM.js";import{C as n}from"./Card-CgHmwz-v.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Link-C4SFJeKO.js";import"./Link-C5oG_EtD.js";import"./utils-BhWkjeqE.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFocusRing-BFo6eXxS.js";import"./useFocusable-CsLSqN_1.js";import"./createLucideIcon-8wDOqnHv.js";const f='"../theme/tokens.css"',p="(min-width: 768px)",k="(min-width: 1200px)",x="(min-width: 1440px)",h="_container_1aupx_4",v="_grid_1aupx_16",g="_fluid_1aupx_45",G="_col_1aupx_52",l={tokens:f,mdBreakpoint:p,lgBreakpoint:k,xlBreakpoint:x,container:h,grid:v,fluid:g,col:G,"col-1":"_col-1_1aupx_58","col-2":"_col-2_1aupx_62","col-3":"_col-3_1aupx_66","col-4":"_col-4_1aupx_70","col-5":"_col-5_1aupx_74","col-6":"_col-6_1aupx_78","col-7":"_col-7_1aupx_82","col-8":"_col-8_1aupx_86","col-9":"_col-9_1aupx_90","col-10":"_col-10_1aupx_94","col-11":"_col-11_1aupx_98","col-12":"_col-12_1aupx_102","offset-1":"_offset-1_1aupx_106","offset-2":"_offset-2_1aupx_110","offset-3":"_offset-3_1aupx_114","offset-4":"_offset-4_1aupx_118","offset-5":"_offset-5_1aupx_122","offset-6":"_offset-6_1aupx_126","offset-7":"_offset-7_1aupx_130","offset-8":"_offset-8_1aupx_134","offset-9":"_offset-9_1aupx_138","offset-10":"_offset-10_1aupx_142","offset-11":"_offset-11_1aupx_146"},c=({children:r,fluid:a=!1,...o})=>e.jsx("div",{className:m(l.container,a&&l.fluid,o.className),...o,children:e.jsx("div",{className:l.grid,children:r})});try{c.displayName="Grid",c.__docgenInfo={description:`Grid based on display: grid;
Calculates breakpoints and distributes columns according to MV specifications

### Children
Use GridItem to manage each column.
GridItem accepts values of 1 through 12 and auto.`,displayName:"Grid",props:{fluid:{defaultValue:{value:"false"},description:"Removes outer margins for nested use. First Flex on a page should have outer margins.",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const t=({children:r,col:a,...o})=>{const _=a?`col-${a}`:"";return e.jsx("div",{className:m(l.col,l[_],o.className),...o,children:r})};try{t.displayName="GridItem",t.__docgenInfo={description:"",displayName:"GridItem",props:{col:{defaultValue:null,description:"Column size and behaviour",name:"col",required:!1,type:{name:"enum",value:[{value:"12"},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"}]}}}}}catch{}const q={component:c,title:"Components/Grid",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{fluid:{control:{type:"boolean"}}}},i={args:{},render:({...r})=>e.jsxs(c,{fluid:r.fluid,children:[e.jsx(t,{col:3,children:e.jsx(n,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:3,children:e.jsx(n,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:6,children:e.jsx(n,{title:"Ett kort",content:"Som är i sex kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:4,children:e.jsx(n,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:4,children:e.jsx(n,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:4,children:e.jsx(n,{title:"Ett kort",content:"Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:10,children:e.jsx(n,{title:"Ett kort",content:"Som är utan kolumner",link:{children:"Länk",href:"#"}})})]})};var s,d,u;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => <Grid fluid={args.fluid}>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={6}>
        <Card title={'Ett kort'} content={'Som är i sex kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={10}>
        <Card title={'Ett kort'} content={'Som är utan kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
    </Grid>
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const F=["Primary"];export{i as Primary,F as __namedExportsOrder,q as default};

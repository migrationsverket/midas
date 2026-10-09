import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{n}from"./iframe-D33JxKsQ.js";import{i as r,n as i,r as a,t as o}from"./TextFieldBase-CyjKn-QE.js";import{n as s,t as c}from"./clsx-BbIth5Jl.js";import{n as l,t as u}from"./TextField.module-BJKhKuWJ.js";var d,f,p;function m(){return(m=e((()=>{d=t(),i(),r(),s(),l(),f=n(),p=(0,d.forwardRef)(({className:e,cols:t,form:n,rows:r,wrap:i,...s},l)=>(0,f.jsx)(o,{...s,children:(0,f.jsx)(a,{className:c(u.textArea,e),cols:t,form:n,ref:l,rows:r,wrap:i})})),p.displayName=`TextArea`,p.__docgenInfo={description:``,methods:[],displayName:`TextArea`}})))()}var h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{m(),h=n(),g={title:`Components/TextArea`,component:p,args:{label:`Label`,description:`Description`,errorPosition:`top`},argTypes:{size:{table:{disable:!0}}}},_={args:{defaultValue:`Text value`}},v={args:{isInvalid:!0,errorMessage:`Något gick fel`}},y={tags:[`!dev`,`!autodocs`,`!snapshot`],args:{isRequired:!0,errorMessage:`Var god ange en text`},render:e=>(0,h.jsxs)(`form`,{children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(`button`,{type:`submit`,children:`Submit`})]})},b={tags:[`!dev`,`!autodocs`,`!snapshot`],args:{label:`Label`,validate:e=>/^\d+$/.test(e)?!0:`Only numbers are allowed`},render:e=>(0,h.jsxs)(`form`,{children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(`button`,{type:`submit`,children:`Submit`})]})},x={tags:[`!dev`,`!autodocs`,`!snapshot`],args:{maxLength:50}},S={args:{..._.args,isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},C={...S,args:{...S.args,defaultValue:`User input`}},w={args:{isReadOnly:!0,showCounter:!0,value:`User input`,maxLength:100}},T={args:{value:`I love apples`,showCounter:!0}},E={args:{showCounter:!0,maxLength:50}},D=[`Primary`,`Invalid`,`Required`,`CustomValidation`,`MaxLength`,`Disabled`,`DisabledWithDefaultValue`,`ReadOnly`,`ShowCounter`,`MaxLengthAndShowCounter`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    isRequired: true,
    errorMessage: 'Var god ange en text'
  },
  render: args => <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    label: 'Label',
    validate: (value: string) => !/^\\d+$/.test(value) ? 'Only numbers are allowed' : true
  },
  render: args => <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    maxLength: 50
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Disabled,
  args: {
    ...Disabled.args,
    defaultValue: 'User input'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showCounter: true,
    value: 'User input',
    maxLength: 100
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{b as CustomValidation,S as Disabled,C as DisabledWithDefaultValue,v as Invalid,x as MaxLength,E as MaxLengthAndShowCounter,_ as Primary,w as ReadOnly,y as Required,T as ShowCounter,D as __namedExportsOrder,g as default};
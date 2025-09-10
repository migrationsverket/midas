import{j as n}from"./iframe-DqdFVXzy.js";import{$ as j}from"./Form-W1KRTLpm.js";import{G}from"./Grid-De3tnevs.js";import{G as e}from"./GridItem-L_5hWuiy.js";import{T as r}from"./TextField-DzgJ0rZ-.js";import{S as I}from"./Select-Cjq5b2O7.js";import{B as a}from"./Button-B7_q0KkC.js";import{R as g,a as b}from"./Radio-DMsf79xb.js";import{C as h}from"./CheckboxGroup-DGep5JoY.js";import{C as k}from"./Checkbox-Bl-rQ-v-.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BybFEiWG.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DBfLDz3b.js";import"./useFocusRing-CsmZctop.js";import"./index-H8lr350N.js";import"./index-DKNPjsqP.js";import"./TextFieldBase-CggRE6aU.js";import"./TextField-Ct8W2RWI.js";import"./FieldError-Dc-NJaA4.js";import"./Text-BjFdvgcC.js";import"./Text-CPoc1gvg.js";import"./ListKeyboardDelegate-CWe4yC8K.js";import"./SelectionManager-D-i2S3vu.js";import"./useEvent-C0Qmt8gK.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BTU0_y7x.js";import"./useDescription-CLXrmkVa.js";import"./useControlledState-11-dBGiu.js";import"./Group-CU0UhIIL.js";import"./Input-CGLLaRY0.js";import"./Hidden-AsuRat69.js";import"./Button-BQwWwOYc.js";import"./useLabels-DzxSeVa3.js";import"./useButton-Cxd-fkHx.js";import"./useTextField-DGYkuiGt.js";import"./useField-B_vOu40d.js";import"./TextField.module-8oYDuXgF.js";import"./Label-rEKS36iK.js";import"./Dialog-C6aGAH-f.js";import"./RSPContexts-DjLF5bx4.js";import"./OverlayArrow-9zd5NYig.js";import"./useResizeObserver-CJN9wROh.js";import"./Collection-B7BO8yeo.js";import"./index-CK8yzisA.js";import"./Separator-LugSSN8v.js";import"./PressResponder-DCRjizjE.js";import"./useLocalizedStringFormatter-CuRfBicw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CgvsnIWP.js";import"./Dialog-C8MEJDiH.js";import"./useLocalizedStringFormatter-9Ar715IH.js";import"./x-CDKlBMTv.js";import"./createLucideIcon-BFfBiUjw.js";import"./Heading-C4NUm62o.js";import"./info-BpoF1cKl.js";import"./Tag-BFNbc0yZ.js";import"./ListBox-_Xgv2GJx.js";import"./DragAndDrop-DNrecCgY.js";import"./inertValue-DrfPnFaN.js";import"./useListState-zjA1JRgd.js";import"./useHighlightSelectionDescription-NlWpxJ0B.js";import"./useUpdateEffect-jzWgAYkz.js";import"./useHasTabbableChild-CcAj9gfO.js";import"./check-CFBfAWZt.js";import"./ListBoxSection-yetwWOde.js";import"./Virtualizer-oXUJCCF5.js";import"./useObserveElement-kzAu7MNo.js";import"./chevron-down-DA6CLg9J.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-BKoMWn8P.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};

import{j as n}from"./iframe-BWGsaiHR.js";import{$ as j}from"./Form-DXDbkh4c.js";import{G}from"./Grid-DwmA_1Vr.js";import{G as e}from"./GridItem-Bz05apwM.js";import{T as r}from"./TextField-RafFkJsX.js";import{S as I}from"./Select-B-I82iTG.js";import{B as a}from"./Button-Bt9chofq.js";import{R as g,a as b}from"./Radio-_5JRQlr7.js";import{C as h}from"./CheckboxGroup-DKCEK2Hk.js";import{C as k}from"./Checkbox-DuGLx0Ax.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Dn17eObK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DlLJXHup.js";import"./useFocusRing-BgbQT13K.js";import"./index-C6DFDgEn.js";import"./index-BsaL0LMI.js";import"./TextFieldBase-DOM8uYx0.js";import"./TextField-BomYvK1I.js";import"./FieldError-BOm58pfK.js";import"./Text-DwfjNWwn.js";import"./Text-C7yJirq4.js";import"./ListKeyboardDelegate-vgRZSv5D.js";import"./SelectionManager-dAvp-Z-J.js";import"./useEvent-C8yrJzcU.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BIGquqSY.js";import"./useDescription-CRoATbhD.js";import"./useControlledState-B6me8dDu.js";import"./Group-Bc48T2xs.js";import"./Input-BH06Nydr.js";import"./Hidden-MpjXKP0x.js";import"./Button-mDKaISjU.js";import"./useLabels-B17culgM.js";import"./useButton-WQGa6IkK.js";import"./useTextField-BC7PaBEa.js";import"./useField-Ch6JvlAz.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-n2Fcs9mo.js";import"./Dialog-Bvkfvjr0.js";import"./RSPContexts-h88yUi-D.js";import"./OverlayArrow-COHo7nev.js";import"./useResizeObserver-BLlQvM8z.js";import"./Collection-CC9ADk7d.js";import"./index-BRHLToCs.js";import"./Separator-XQo-o5YZ.js";import"./PressResponder-BZwBmCu5.js";import"./useLocalizedStringFormatter-BByISIUT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CGzDDBGR.js";import"./Dialog-BF1tHth4.js";import"./useLocalizedStringFormatter-D3Z-HHFG.js";import"./x-BzVYZYxZ.js";import"./createLucideIcon-CxmKe3N4.js";import"./Heading-B9tgDhak.js";import"./info-DJ4Dne72.js";import"./Tag-CsczGIu3.js";import"./ListBox-BlqNA9Bn.js";import"./DragAndDrop-4mjJOCXL.js";import"./inertValue-Ca75FXy2.js";import"./useListState-DhlHQMys.js";import"./useHighlightSelectionDescription-Cd4WjcYK.js";import"./useUpdateEffect-CBJeoAAE.js";import"./useHasTabbableChild-Bcoezmbz.js";import"./check-B-Vv0xU6.js";import"./ListBoxSection-D3eE0bl3.js";import"./Virtualizer-yMdARm98.js";import"./useObserveElement-0e3o22qa.js";import"./chevron-down-_cghNyXe.js";import"./Button.module-DWkXlqFG.js";import"./useToggleState-DndU-4Ge.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

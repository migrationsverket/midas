import{j as n}from"./iframe-BTwnqCvn.js";import{$ as j}from"./Form-BjLvSon7.js";import{G}from"./Grid-BGtH3w0V.js";import{G as e}from"./GridItem-CgKP6zzN.js";import{T as r}from"./TextField-Bbl5KMbl.js";import{S as I}from"./Select-Jh6gI3LJ.js";import{B as a}from"./Button-Fphya-n-.js";import{R as g,a as b}from"./Radio-BVLi7cH7.js";import{C as h}from"./CheckboxGroup-Bbg5PlnP.js";import{C as k}from"./Checkbox-hXt2jUgJ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-QNeeTrhZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BUkAGJ6a.js";import"./useFocusRing-DCeeqQ4B.js";import"./index-BfO3BEOu.js";import"./index-BT0TVhw7.js";import"./TextFieldBase-C8qhgisj.js";import"./TextField-IlUEVHkO.js";import"./FieldError-C6pNxfkI.js";import"./Text-CJxCMya1.js";import"./Text-BK6ZL0g8.js";import"./ListKeyboardDelegate-CRmBMJ-K.js";import"./SelectionManager-BLdJSbqT.js";import"./useEvent-DF4FEG-V.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-COLrQoUG.js";import"./useDescription-DfU0gQ7F.js";import"./useControlledState-CZ3Rm1TI.js";import"./Group-CGapiPt_.js";import"./Input-CMu4-64-.js";import"./Hidden-DZtEaIh2.js";import"./Button-CShAPAgZ.js";import"./useLabels-CipQzpez.js";import"./useButton-JytO0VUL.js";import"./useTextField-DxQGzsVr.js";import"./useField-A2mC1b8s.js";import"./TextField.module-BrIGiDQC.js";import"./Label-jiA93YJq.js";import"./Dialog-r8-DhY02.js";import"./RSPContexts-CdgKMMIG.js";import"./OverlayArrow-BgTR1XhH.js";import"./useResizeObserver-I9q7FHpL.js";import"./Collection-vULTflIB.js";import"./index-ca2XTDNy.js";import"./Separator-C31kiWTx.js";import"./PressResponder-DAFBgN-U.js";import"./useLocalizedStringFormatter-CrcF-A2_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DeBvQDLe.js";import"./Dialog-CLnwAcOZ.js";import"./useLocalizedStringFormatter-CjipnkLS.js";import"./x-C9U95zDY.js";import"./createLucideIcon-h5uZDkv-.js";import"./Heading-BU5GK0lS.js";import"./info-C5P_pEzt.js";import"./Tag-DbiCr3w_.js";import"./ListBox-CAmCU0cF.js";import"./DragAndDrop-ChoekWiU.js";import"./inertValue-D9VrNG3s.js";import"./useListState-BDzP7Vli.js";import"./useHighlightSelectionDescription-BE3zKrUd.js";import"./useUpdateEffect-CIc4KHjg.js";import"./useHasTabbableChild-BgHoylzv.js";import"./check-CC_1SiNT.js";import"./ListBoxSection-Cq63215d.js";import"./Virtualizer-CN3BwODP.js";import"./useObserveElement-0SiL6zs3.js";import"./chevron-down-CWuHPOdz.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-EWIiPASg.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

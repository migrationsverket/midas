import{j as n}from"./iframe-DGsNrSXT.js";import{$ as j}from"./Form-ogXaSTnz.js";import{G}from"./Grid-D3WY8klT.js";import{G as e}from"./GridItem-CPXfbYIW.js";import{T as r}from"./TextField-DETMCIup.js";import{S as I}from"./Select-BkOO-aC6.js";import{B as a}from"./Button-BNhCK5b0.js";import{R as g,a as b}from"./Radio-Dsfn1KiF.js";import{C as h}from"./CheckboxGroup-B0vRO-o5.js";import{C as k}from"./Checkbox-S3rojXcI.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CeRCI_IU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cv--yiUK.js";import"./useFocusRing-CmKVXNS9.js";import"./index-DA2UlEzH.js";import"./index-BZLvSFXL.js";import"./TextFieldBase-Dnxoqm5X.js";import"./TextField-BKCQSgh7.js";import"./FieldError-MBDSlaH5.js";import"./Text-BOStEqYW.js";import"./Text-BHPp3IS0.js";import"./Input-MgsfTwEK.js";import"./Hidden-DzIzvD-S.js";import"./Button-DFpXN0mf.js";import"./useLabels-xiTNAS69.js";import"./useButton-BEBz-IAp.js";import"./useTextField-BtiQdl8I.js";import"./useControlledState-CohairkO.js";import"./useField-C5LLzG1Z.js";import"./TextField.module-D7za08S7.js";import"./Label-D3GAHEfz.js";import"./Dialog-DSPYJujL.js";import"./RSPContexts-CHWwZwaW.js";import"./OverlayArrow-CgIkzVld.js";import"./useResizeObserver-DJaaYJoD.js";import"./Collection-Ceq25dP2.js";import"./index-DnBsLzJ_.js";import"./Separator-DXQ1p13J.js";import"./SelectionManager-DMr1qLps.js";import"./useEvent-BjI7o1bb.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BXeGL62Q.js";import"./useDescription-tciT-6ur.js";import"./ListKeyboardDelegate-Bdy2Accl.js";import"./PressResponder-Dyh_hMcd.js";import"./useLocalizedStringFormatter-C8H-WqsR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D5bdiVmD.js";import"./Dialog-CLxb3uvL.js";import"./useLocalizedStringFormatter-D1MTD9us.js";import"./x-lejORAJr.js";import"./createLucideIcon-BSjeWOth.js";import"./Heading-kVBDJ4Zp.js";import"./info-Bz-eE50R.js";import"./Tag-pKmnB5dG.js";import"./ListBox-B1HyktSh.js";import"./DragAndDrop-gExW2Tsz.js";import"./inertValue-4G7zcd0Q.js";import"./useListState-BwpVtl8I.js";import"./useHighlightSelectionDescription-DDCabq0z.js";import"./useUpdateEffect-BIf0pe1s.js";import"./useHasTabbableChild-8QSCM35I.js";import"./check-B1bmbr0R.js";import"./ListBoxSection-Bort0ua5.js";import"./Virtualizer-BmlS56Yg.js";import"./useObserveElement-DROW8d_c.js";import"./chevron-down-CbAC9AEF.js";import"./Button.module-DKVuWS4g.js";import"./Group-BHUWgv3P.js";import"./useToggleState-nAqgsKU7.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

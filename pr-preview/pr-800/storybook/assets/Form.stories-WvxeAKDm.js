import{j as n}from"./iframe-Beo3DEGW.js";import{$ as j}from"./Form-DRWSvTFw.js";import{G}from"./Grid-DAbUuhnR.js";import{G as e}from"./GridItem-B22FWyV4.js";import{T as r}from"./TextField-DREtJmSu.js";import{S as I}from"./Select-BQxFG4KA.js";import{B as a}from"./Button-CQkry0QJ.js";import{R as g,a as b}from"./Radio-BR4Xb-v0.js";import{C as h}from"./CheckboxGroup-Cj6fcJPD.js";import{C as k}from"./Checkbox-BUGBvvDR.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-y3GokkU-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DkElA2tI.js";import"./useFocusRing-DI0fDdPK.js";import"./index-CWuIrcFk.js";import"./index-DrFm9B1S.js";import"./TextFieldBase-DgormJVn.js";import"./TextField-CmQyGk-7.js";import"./FieldError-D6YsekaS.js";import"./Text-ZmzQ_BeM.js";import"./Text-QIoU4WzY.js";import"./ListKeyboardDelegate-Bp4rImWz.js";import"./SelectionManager-1XKzML3x.js";import"./useEvent-DLOiNmfX.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CPHUrZwu.js";import"./useDescription-DyvDh4J9.js";import"./useControlledState-g7qB6nyb.js";import"./Group-DLjA0SOZ.js";import"./Input-DF_vrMdo.js";import"./Hidden-apxTC7Y7.js";import"./Button-B0kdDqkZ.js";import"./useLabels-D6QhrC7o.js";import"./useButton-D_WxqeR1.js";import"./useTextField-DsBIE22_.js";import"./useField-DCGjV3Pz.js";import"./TextField.module-DjUItNl5.js";import"./Label-DYMMBIyd.js";import"./Dialog-D1uaNSxf.js";import"./RSPContexts-BlVMW1cL.js";import"./OverlayArrow-Ia21cWc0.js";import"./useResizeObserver-Cz_GVger.js";import"./Collection-CYruxBX6.js";import"./index-CJ58EdVB.js";import"./Separator-BdCA06Ry.js";import"./PressResponder-BgPRdP5m.js";import"./useLocalizedStringFormatter-BRGAfnIK.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-xImJCQRk.js";import"./Dialog-ClkT9jw1.js";import"./useLocalizedStringFormatter-CF-kZNnL.js";import"./x-DIV-xFs7.js";import"./createLucideIcon-CRvfDbXn.js";import"./Heading-CN1zkvSI.js";import"./info-B6PxR4pg.js";import"./Tag-B4pNrDOS.js";import"./ListBox-CsCM53Bp.js";import"./DragAndDrop-Sjdh1mZI.js";import"./inertValue-B9C6c4ru.js";import"./useListState-BIpJBh-6.js";import"./useHighlightSelectionDescription-DJ80ACto.js";import"./useUpdateEffect-Du-i9hfz.js";import"./useHasTabbableChild-Csc_5k_y.js";import"./check-CHrQpTvW.js";import"./ListBoxSection-BUsw63QD.js";import"./Virtualizer-C6s6AZRy.js";import"./useObserveElement-C-RbFJvW.js";import"./chevron-down-9Y9zcu7Z.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CaGVMC8c.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

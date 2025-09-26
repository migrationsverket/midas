import{j as n}from"./iframe-DFe88I25.js";import{$ as j}from"./Form-BZTPzXV-.js";import{G}from"./Grid-Y_dbMkyQ.js";import{G as e}from"./GridItem-BlhucMDY.js";import{T as r}from"./TextField-DDGOMNSN.js";import{S as I}from"./Select-DsNw9WNj.js";import{B as a}from"./Button-aqcHqZJU.js";import{R as g,a as b}from"./Radio-CUPFnIpt.js";import{C as h}from"./CheckboxGroup-BkgZ4Yjb.js";import{C as k}from"./Checkbox-3CXUFN33.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CpmgRmxV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CGBoc16t.js";import"./useFocusRing-DHRaCiAM.js";import"./index-BgW194c0.js";import"./index-BuV-u2pE.js";import"./TextFieldBase-DaGP1XIR.js";import"./TextField-BTNvvvlv.js";import"./FieldError-6GtPmaWc.js";import"./Text-BYzBuy8r.js";import"./Text-BEsk4R7D.js";import"./ListKeyboardDelegate-eX4pa9UU.js";import"./SelectionManager-DZXaVEtr.js";import"./useEvent-DAmJGMS9.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DgP8AObJ.js";import"./useDescription-oo2Lk1t-.js";import"./useControlledState-B79KDH0t.js";import"./Group-kBGr8aO6.js";import"./Input-DaBkS_ho.js";import"./Hidden-CAFIwGEZ.js";import"./Button-Dy3JiKI7.js";import"./useLabels-BAzuw1Nn.js";import"./useButton-BW2GBq1p.js";import"./useTextField-Dp4sQZPN.js";import"./useField-BVDZUlQE.js";import"./TextField.module-DjUItNl5.js";import"./Label-ClULoyFr.js";import"./Dialog-CEDp8_UN.js";import"./RSPContexts-DPtJSuW9.js";import"./OverlayArrow-CtLQ-5k5.js";import"./useResizeObserver-Bc44ujCn.js";import"./Collection-B1rRq0gy.js";import"./index-Mw46Krs6.js";import"./Separator-HXoEe6Ir.js";import"./PressResponder-BozOjAdy.js";import"./useLocalizedStringFormatter-CfPaRvbp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CLzDolQC.js";import"./Dialog-BnH80BXt.js";import"./useLocalizedStringFormatter-D9t2GLP4.js";import"./x-D88fJr9C.js";import"./createLucideIcon-BVWsSi4d.js";import"./Heading-BS0mpcRc.js";import"./info-B_V7eBFL.js";import"./Tag-I3nacRN7.js";import"./ListBox-CpWH4g2J.js";import"./DragAndDrop-BgJ6IUf9.js";import"./inertValue-DGCfKYEo.js";import"./useListState-DdhLTQsk.js";import"./useHighlightSelectionDescription-DPOotATj.js";import"./useUpdateEffect-lPKkAaL7.js";import"./useHasTabbableChild-B-SBCnmj.js";import"./check-DYPoHoh7.js";import"./ListBoxSection-CkE7vxve.js";import"./Virtualizer-B-VfSXp3.js";import"./useObserveElement-CIPEeY81.js";import"./chevron-down-BhZPkXVf.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-ULrztFLq.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

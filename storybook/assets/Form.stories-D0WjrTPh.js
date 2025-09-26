import{j as n}from"./iframe-DmIkQMg2.js";import{$ as j}from"./Form-DHI8SCm5.js";import{G}from"./Grid-Df1pRjS4.js";import{G as e}from"./GridItem-CNc6BqxL.js";import{T as r}from"./TextField-Cb6ZhBXN.js";import{S as I}from"./Select-h7N0nwOg.js";import{B as a}from"./Button-Co3AVfHF.js";import{R as g,a as b}from"./Radio-ChOxQkly.js";import{C as h}from"./CheckboxGroup-DPyjSErd.js";import{C as k}from"./Checkbox-Ba-lj8Tm.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DPHb3LPj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-VnCGduBE.js";import"./useFocusRing--HjdqhtR.js";import"./index-B4Txr5WD.js";import"./index-DaEGKzp2.js";import"./TextFieldBase-BwcVrztY.js";import"./TextField-8zv2DScO.js";import"./FieldError-ByYTufbw.js";import"./Text-C_Sjh9pG.js";import"./Text-EZsCMawF.js";import"./ListKeyboardDelegate-DkNb8Tl4.js";import"./SelectionManager-C0q92RhR.js";import"./useEvent-DFqx9YDb.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BHoe419L.js";import"./useDescription-BDhqGO1I.js";import"./useControlledState-BSBSSTK0.js";import"./Group-Do92JIsb.js";import"./Input-DV5h1eAe.js";import"./Hidden-CiYkUJXb.js";import"./Button-zpzLeijz.js";import"./useLabels-DKkGmXqW.js";import"./useButton-D3iLX81H.js";import"./useTextField-XcA4AQrl.js";import"./useField-BA-jRi-4.js";import"./TextField.module-DjUItNl5.js";import"./Label-CAhlCgEX.js";import"./Dialog-Acj5d_zo.js";import"./RSPContexts-DUgcpqpc.js";import"./OverlayArrow-Ck-nIGSf.js";import"./useResizeObserver-Cvkp7XPd.js";import"./Collection-DjM-t3bX.js";import"./index-C46DGu8o.js";import"./Separator-C91xUfXz.js";import"./PressResponder-DWBpUgFR.js";import"./useLocalizedStringFormatter-fF8dm2ub.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DZme8mw7.js";import"./Dialog-9jm6ftfd.js";import"./useLocalizedStringFormatter-NVHYJ6Ll.js";import"./x-Bri3vRZk.js";import"./createLucideIcon-DsLEhCJc.js";import"./Heading-pL19YIMu.js";import"./info-CW85n0ME.js";import"./Tag-CMUDFipA.js";import"./ListBox-Vm3KFUFB.js";import"./DragAndDrop-h3QTPYlW.js";import"./inertValue-QXb04IE2.js";import"./useListState-CYfjXHNO.js";import"./useHighlightSelectionDescription-B2BEC234.js";import"./useUpdateEffect-CUhCCLOt.js";import"./useHasTabbableChild-ZBr8bTtt.js";import"./check-DvnkB16C.js";import"./ListBoxSection-B0YK1oWc.js";import"./Virtualizer-BZknFXn8.js";import"./useObserveElement--Zor0D18.js";import"./chevron-down-BD0MbLVd.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CxoF4Hic.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

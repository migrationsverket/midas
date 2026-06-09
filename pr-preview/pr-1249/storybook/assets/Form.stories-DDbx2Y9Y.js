import{j as e}from"./iframe-DwYJYgGb.js";import{c}from"./Form-CF6mtsDJ.js";import{G as d}from"./Grid-C2hkrm-k.js";import{G as i}from"./GridItem-gdOhLyuA.js";import{a as x,R as u}from"./Radio-BTNlGMiG.js";import{C as I}from"./CheckboxGroup-D1pAFNUw.js";import{C as G}from"./Checkbox-CDMmWNO7.js";import{T as t}from"./TextField-BE7u7Pwo.js";import{S as l}from"./Select-DQJjd5mp.js";import{L as p}from"./ListBoxItem-JKrrCd5a.js";import{B as a}from"./Button-DpQdXJp1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CXC08Tq5.js";import"./utils-fIJ7LVq8.js";import"./clsx-B-dksMZM.js";import"./index-DfNt6tNa.js";import"./index-CHvQzPdc.js";import"./clsx-Ciqy0D92.js";import"./Group-C2t1rW1T.js";import"./FieldError-8dF8Tbve.js";import"./Text-B4syvpmZ.js";import"./Text-CxhOo0fu.js";import"./Button-Ddo8eX0a.js";import"./Hidden-CwjkXMFO.js";import"./useLabel-BSyxEYuS.js";import"./useLabels-BjAn-6Ht.js";import"./useButton-CGX3_Nnb.js";import"./SelectionIndicator-D5viv05a.js";import"./useField-mcTKDTGz.js";import"./VisuallyHidden-B0sEyNoY.js";import"./useControlledState-CxwoTKvB.js";import"./Label-Q_Om9wzz.js";import"./Dialog-eIQcg82T.js";import"./RSPContexts-DE3QJKMh.js";import"./OverlayArrow-CmYMGfKa.js";import"./useResizeObserver-Cfbnluet.js";import"./Collection-Du3GdM9A.js";import"./index-BXWU9W6R.js";import"./Separator-Ie15OD8n.js";import"./SelectionManager-Bzzdwe4i.js";import"./useEvent-exXZI4Sz.js";import"./scrollIntoView-BsKOETet.js";import"./useDescription-DtI32Oaq.js";import"./ListKeyboardDelegate-Cm-sBpbt.js";import"./PressResponder-CtJMV9fG.js";import"./useLocalizedStringFormatter-LO9Tkb5c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DJwCaNaH.js";import"./getScrollParent-Dee46RGf.js";import"./ModalOverlay-DiFMsDLM.js";import"./x-CX4TJhGN.js";import"./createLucideIcon-CCgdfoT7.js";import"./useLocalizedStringFormatter-CQladlVx.js";import"./Heading-Dhs8v48I.js";import"./info-Dn1DucMW.js";import"./Popover-DWnmGCyZ.js";import"./check-pMJtBoxa.js";import"./useToggleState-UNbpMwQX.js";import"./TextFieldBase-5vG3PqhS.js";import"./Input-_uPRWUXT.js";import"./useTextField-CYPEtwKi.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BeUDm6BJ.js";import"./DragAndDrop-CzhnO9ik.js";import"./inertValue-e1xljGr9.js";import"./useListState-jZeJjMyf.js";import"./TagGroup-DP1I3En-.js";import"./useHighlightSelectionDescription-Cp0m9Ilw.js";import"./useUpdateEffect-BHkSbq6F.js";import"./useHasTabbableChild-DKU0UdBn.js";import"./chevron-down-C5X9Qu1l.js";import"./Virtualizer-CHudW9BH.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};

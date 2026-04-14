import{j as e}from"./iframe-CJ-60Efo.js";import{c}from"./Form-CC7WfIHq.js";import{G as d}from"./Grid-DnvUOpJw.js";import{G as i}from"./GridItem-D4xf_PJt.js";import{a as x,R as u}from"./Radio-DbqMo1fO.js";import{C as I}from"./CheckboxGroup-ciPau-2r.js";import{C as G}from"./Checkbox-qm68wH4Y.js";import{T as t}from"./TextField-R7j5AfOS.js";import{S as l}from"./Select-BBdoHVfN.js";import{L as p}from"./ListBoxItem-BBF9ZKzn.js";import{B as a}from"./Button-DePLT0p9.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CupJGFR5.js";import"./utils-CZH6ruXT.js";import"./clsx-B-dksMZM.js";import"./index-vOXKIAHi.js";import"./index-BwPxUj6U.js";import"./clsx-Ciqy0D92.js";import"./Group-wIK1IaXS.js";import"./FieldError-DwTCOkZc.js";import"./Text-Bn5fWWC4.js";import"./Text-duXz9LRx.js";import"./Button-DEbA7b2J.js";import"./Hidden-DsEAHCyp.js";import"./useLabel-VhNYVAU_.js";import"./useLabels-BF24WIl1.js";import"./useButton-C626U6QZ.js";import"./SelectionIndicator-556dOdx1.js";import"./useField-avb_z8h9.js";import"./VisuallyHidden-DhklY17S.js";import"./useControlledState-xfItMrqO.js";import"./Label-D5dnWAG6.js";import"./Dialog-BuqhW9nz.js";import"./RSPContexts-DWc37NkB.js";import"./OverlayArrow-BGutNkw1.js";import"./useResizeObserver-gGq7gavv.js";import"./Collection-BwmddpCk.js";import"./index-DIQ2MoDm.js";import"./Separator-Cuh0wpt8.js";import"./SelectionManager-CUThgWMG.js";import"./useEvent-D57KiGSv.js";import"./scrollIntoView-B5Nn40hc.js";import"./useDescription-QSvqFumA.js";import"./ListKeyboardDelegate-CBv4K7BP.js";import"./PressResponder-D0JRcaJn.js";import"./useLocalizedStringFormatter-CVaGGIuq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkl1YJvl.js";import"./getScrollParent-iQ5uL2tb.js";import"./Modal-NwGj3306.js";import"./x-CqpjZLya.js";import"./createLucideIcon-n1hD9M9W.js";import"./useLocalizedStringFormatter-CNLs5A0B.js";import"./Heading-CcbElr9K.js";import"./info-DwxNtEuT.js";import"./Popover-D6TSIqYq.js";import"./check-DvTlej2b.js";import"./useToggleState-lJOlRy8F.js";import"./TextFieldBase-MDdnd3jX.js";import"./Input-CP1yInaz.js";import"./useTextField-BLmCLSnX.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DDPH1ad_.js";import"./DragAndDrop-BRKWV4X4.js";import"./inertValue-dcqLOcjf.js";import"./useListState-CFtcLvXJ.js";import"./TagGroup-ByLYNR7s.js";import"./useHighlightSelectionDescription-BErHfl8V.js";import"./useUpdateEffect-BRLR1g_C.js";import"./useHasTabbableChild-Bp5BUS7q.js";import"./chevron-down-DaX19-U8.js";import"./Virtualizer-8TLxCfRf.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

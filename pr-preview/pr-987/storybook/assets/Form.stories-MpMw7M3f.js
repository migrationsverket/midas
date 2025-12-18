import{j as e}from"./iframe-C6_-e7NK.js";import{$ as c}from"./Form-V3kbBiWO.js";import{G as d}from"./Grid-HGfKnNuT.js";import{G as i}from"./GridItem-DO9mStKp.js";import{T as t}from"./TextField-B7xZhFfx.js";import{S as l}from"./Select-ZENAvpbz.js";import{B as a}from"./Button-DxcAJTpN.js";import{R as x,a as u}from"./Radio-xDEgjeK8.js";import{C as I}from"./CheckboxGroup-CHR6bDQ7.js";import{C as G}from"./Checkbox-Cio8-adI.js";import{L as p}from"./ListBoxItem-B0p5hzF_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bbmqvbo3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CMpXllZv.js";import"./useFocusRing-BXSkyUM9.js";import"./index-DPxO6KUo.js";import"./index-Bwwn4N2G.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-1k_zZwRr.js";import"./TextField-OQJHmuSn.js";import"./FieldError-DV33LILC.js";import"./Text-F1WQVY7m.js";import"./Text-DRnoGrtX.js";import"./RSPContexts-Bh1Fxq0q.js";import"./Group-Dox46yMc.js";import"./Input-DB7DdrWq.js";import"./Hidden-BPDqmKbL.js";import"./Button-CdXu0ILf.js";import"./useLabels-JWkxwXER.js";import"./useButton-BMxkS-67.js";import"./useTextField-BcFXVHGn.js";import"./useControlledState--v8NGJnX.js";import"./useField-DP5dlwby.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C_kXs5BT.js";import"./Dialog-BwhCXn8z.js";import"./OverlayArrow-8UZhrLZD.js";import"./useResizeObserver-DBBABA7S.js";import"./Collection-BCEQyPRW.js";import"./index-BOUigGyV.js";import"./Separator-DpbotVHq.js";import"./SelectionManager-CMrFD8ch.js";import"./useEvent-CioOrUcI.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DrCpW3qH.js";import"./useDescription-fi3Mvgag.js";import"./ListKeyboardDelegate-BcVPg-Er.js";import"./PressResponder-BBEZd6RW.js";import"./useLocalizedStringFormatter-D7bjjg4_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-yxJB0HZv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BCTu162M.js";import"./x-KVb9IDQ9.js";import"./createLucideIcon-D6PH1BXQ.js";import"./useLocalizedStringFormatter-FHnrTC9O.js";import"./Heading-B_mxpdS_.js";import"./info-BYbh7dqa.js";import"./Popover-wRopwrAm.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CTm9-pTj.js";import"./DragAndDrop-DRWPPbZ2.js";import"./inertValue-MkG-GGeN.js";import"./useListState-BrosMlLc.js";import"./Tag-B9flyheY.js";import"./useHighlightSelectionDescription-BBNJ24K9.js";import"./useUpdateEffect-twfe_dYH.js";import"./useHasTabbableChild-Dcnm01AU.js";import"./chevron-down-mT3lbePH.js";import"./Button.module-Co5e5YHp.js";import"./check-DHWFXW4f.js";import"./useToggleState-DdUAb6sw.js";import"./Virtualizer-BRSCKoY_.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

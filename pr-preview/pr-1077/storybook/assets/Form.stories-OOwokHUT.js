import{j as e}from"./iframe-B8csx-lQ.js";import{$ as c}from"./Form-C6CeHvqz.js";import{G as d}from"./Grid-BvygC8DI.js";import{G as i}from"./GridItem-BSFc5D67.js";import{a as x,R as u}from"./Radio-TX2Hkq_u.js";import{C as I}from"./CheckboxGroup-BTLFXgJz.js";import{C as G}from"./Checkbox-CE8YBMZS.js";import{T as t}from"./TextField-BFzRRmoS.js";import{S as l}from"./Select-C6pwktL0.js";import{L as p}from"./ListBoxItem-DMC9QD3n.js";import{B as a}from"./Button-CCTCnZfY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CaD1t0h3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CRpLLkPo.js";import"./useFocusRing-CtLa9eaD.js";import"./index-CFvG_i59.js";import"./index-DswvhGAm.js";import"./clsx-Ciqy0D92.js";import"./Group-DtoBJmaO.js";import"./FieldError-qCPIdUr6.js";import"./Text-Nk_W5AjM.js";import"./Text-BdB7kbkm.js";import"./Button-BMaw0M-e.js";import"./Hidden-rw470soy.js";import"./useLabels-BKsEn5mf.js";import"./useButton-BXjDl97D.js";import"./SelectionIndicator-CgvpTl4k.js";import"./useField-DQ83cjwx.js";import"./VisuallyHidden-DLhvU9s0.js";import"./useControlledState-DXIS0caZ.js";import"./Label-BR3ISRbn.js";import"./Dialog-DNnGQ-hP.js";import"./RSPContexts-D1g7Zz4R.js";import"./OverlayArrow-CaIIpklf.js";import"./useResizeObserver-BXQACy-a.js";import"./Collection-zter9-ZZ.js";import"./index-BNvBtkY9.js";import"./Separator-DkOqRr6B.js";import"./SelectionManager-BRaVJSqk.js";import"./useEvent-BfC5JKdk.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DSFLvKUh.js";import"./ListKeyboardDelegate-CKNg6H-q.js";import"./PressResponder-2rGBVuff.js";import"./useLocalizedStringFormatter-D4J2Tzs0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CFZn14D1.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CSxMNTqR.js";import"./createLucideIcon-HRlJw9Ov.js";import"./useLocalizedStringFormatter-CJcJ86Ob.js";import"./Heading-hrmOO8gY.js";import"./info-DdeMKIXY.js";import"./Popover-CuAHLTOr.js";import"./check-yzWMDONN.js";import"./useToggleState-Ds-aLMXH.js";import"./TextFieldBase-OgpIUX-N.js";import"./Input-BpdG6Jrx.js";import"./useTextField-WkTKoR1k.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-vP6p7zne.js";import"./DragAndDrop-9vXMZq1a.js";import"./inertValue-DFohLV0f.js";import"./useListState-CVi1ErKz.js";import"./TagGroup-D2oPFUTi.js";import"./useHighlightSelectionDescription-BiPYXO_b.js";import"./useUpdateEffect-M5WtOyV_.js";import"./useHasTabbableChild-rsESeaFH.js";import"./chevron-down-bdzM03DN.js";import"./Virtualizer-Znj-dlum.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};

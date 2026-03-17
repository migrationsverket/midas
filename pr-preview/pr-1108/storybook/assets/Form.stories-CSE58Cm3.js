import{j as e}from"./iframe-DJvMsPK5.js";import{$ as c}from"./Form-DGMHN9mU.js";import{G as d}from"./Grid-BAxnkLQ4.js";import{G as i}from"./GridItem-BSqO8f1b.js";import{a as x,R as u}from"./Radio-CohyE5Q0.js";import{C as I}from"./CheckboxGroup-Co9nN4Fy.js";import{C as G}from"./Checkbox-C-rbPrjR.js";import{T as t}from"./TextField-D5GFmCh0.js";import{S as l}from"./Select-BQfcjm08.js";import{L as p}from"./ListBoxItem-DAHTzsUT.js";import{B as a}from"./Button-BLuDdZMx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-esTkTgMr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C29k_zHA.js";import"./useFocusRing-D6tEw859.js";import"./index-Ipi0mz-M.js";import"./index-B3xZpXqe.js";import"./clsx-Ciqy0D92.js";import"./Group-Ca_KDzpx.js";import"./FieldError-CQm3X7MS.js";import"./Text-DIS3P1po.js";import"./Text-CLEP5l2l.js";import"./Button-DaEctwPE.js";import"./Hidden-C5_NTDOk.js";import"./useLabels-C9xCPnuW.js";import"./useButton-D9q_HuIm.js";import"./SelectionIndicator-Ng8BHK2r.js";import"./useField-Dg6SxeU5.js";import"./VisuallyHidden-DGcwd28E.js";import"./useControlledState-C3uqw8vh.js";import"./Label-BD-fBwof.js";import"./Dialog-DxSS5m2M.js";import"./RSPContexts-Cx8DPVhb.js";import"./OverlayArrow-CRD8-tKP.js";import"./useResizeObserver-zJJ9H9KV.js";import"./Collection-C7443sXL.js";import"./index-B9Ss_QBk.js";import"./Separator-DIcFI67X.js";import"./SelectionManager-CR42a_fl.js";import"./useEvent-DACQ8JSc.js";import"./scrollIntoView-DGipwkZA.js";import"./useDescription-D8zJCmPO.js";import"./ListKeyboardDelegate-3IneNIxm.js";import"./PressResponder-4MI6JLf3.js";import"./useLocalizedStringFormatter-yOW7xoG5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_E8EkEc.js";import"./getScrollParent-CijgiSwc.js";import"./x-DBtm1AH7.js";import"./createLucideIcon-Cs-gIZHj.js";import"./useLocalizedStringFormatter-C4ywwRp4.js";import"./Heading-B3ayFQkC.js";import"./info-BD5VtfrO.js";import"./Popover-C1d3yOn1.js";import"./check-CrnZq4Xj.js";import"./useToggleState-CUSYtc9i.js";import"./TextFieldBase-DwH4hRkE.js";import"./Input-Cx6O29IG.js";import"./useTextField-Dp4GhZTt.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BFe7-zS6.js";import"./DragAndDrop-GSZoJ6TE.js";import"./inertValue-CgXBHyd8.js";import"./useListState-3j4P2vGx.js";import"./TagGroup-QJReNQa_.js";import"./useHighlightSelectionDescription-DyUhruRZ.js";import"./useUpdateEffect-B4LoADPT.js";import"./useHasTabbableChild-BIva39gm.js";import"./chevron-down-C8WFy3U0.js";import"./Virtualizer-Dzs5WX0A.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

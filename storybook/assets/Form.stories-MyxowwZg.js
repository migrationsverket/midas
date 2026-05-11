import{j as e}from"./iframe-CLvF6Z40.js";import{c}from"./Form-H5Vy5h3q.js";import{G as d}from"./Grid-C1-nM9zG.js";import{G as i}from"./GridItem-BbwEAOyu.js";import{a as x,R as u}from"./Radio-B-ceC2zu.js";import{C as I}from"./CheckboxGroup-JsQf9EeH.js";import{C as G}from"./Checkbox-CuiTZfz4.js";import{T as t}from"./TextField-CwbcYS75.js";import{S as l}from"./Select-DKQV8FEJ.js";import{L as p}from"./ListBoxItem-C6__sssO.js";import{B as a}from"./Button-CVKy4fAF.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DA8pMfhu.js";import"./utils-CJoHmjoo.js";import"./clsx-B-dksMZM.js";import"./index-CaUd4TAW.js";import"./index-BMLC5BDm.js";import"./clsx-Ciqy0D92.js";import"./Group-CF1mdGZd.js";import"./FieldError-VeyWLyeT.js";import"./Text-D9kACuMI.js";import"./Text-DSAnxviu.js";import"./Button-IXlIqRd7.js";import"./Hidden-DDGoYcTF.js";import"./useLabel-BdfOsCqj.js";import"./useLabels-BSmXnSL5.js";import"./useButton-Vz0P8804.js";import"./SelectionIndicator-CaRCxqEQ.js";import"./useField-BiXCEzZa.js";import"./VisuallyHidden-Ckm5OILG.js";import"./useControlledState-aZqY8xT5.js";import"./Label-Dzbpu6C1.js";import"./Dialog-B-uj8xkF.js";import"./RSPContexts-CTL5xx9Q.js";import"./OverlayArrow-C7K_hjxv.js";import"./useResizeObserver-DPj-8Knk.js";import"./Collection-CsSqZXfS.js";import"./index-BFpG02G3.js";import"./Separator-Hn1z5orb.js";import"./SelectionManager-B6jt3tF-.js";import"./useEvent-DVQ3dgzr.js";import"./scrollIntoView-D0r91Cjt.js";import"./useDescription-Ctzm8kKf.js";import"./ListKeyboardDelegate-DkyBJYE4.js";import"./PressResponder-DglPZp8V.js";import"./useLocalizedStringFormatter-CKVgiq-J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-q93KrM-a.js";import"./getScrollParent-CPZW7HPG.js";import"./ModalOverlay-DEQ13mvL.js";import"./x-DROlonvj.js";import"./createLucideIcon-BkSuVCZc.js";import"./useLocalizedStringFormatter-gIilFwjy.js";import"./Heading-QPqQYzxD.js";import"./info-DQ35Koxp.js";import"./Popover-CWwYuwT5.js";import"./check-whg681CN.js";import"./useToggleState-yDEujSJw.js";import"./TextFieldBase-DojV8uL0.js";import"./Input-CW2TDEkD.js";import"./useTextField-D5r6PF3z.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CDt3WwgA.js";import"./DragAndDrop-BHaI81oS.js";import"./inertValue-DicoPSTT.js";import"./useListState-BqxAmoh3.js";import"./TagGroup-Dg6DmBev.js";import"./useHighlightSelectionDescription-DwIJzpWD.js";import"./useUpdateEffect-CuWoIipA.js";import"./useHasTabbableChild-DeFAWjc3.js";import"./chevron-down-Br6y4cpJ.js";import"./Virtualizer-BG5jvT03.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

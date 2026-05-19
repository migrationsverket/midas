import{j as e}from"./iframe-B1G803WZ.js";import{c}from"./Form-B7gF1kuZ.js";import{G as d}from"./Grid-C0T5Evex.js";import{G as i}from"./GridItem-CBxVH_Bm.js";import{a as x,R as u}from"./Radio-CpoHcFGl.js";import{C as I}from"./CheckboxGroup-COar7_QV.js";import{C as G}from"./Checkbox-CPlYulaq.js";import{T as t}from"./TextField-DFUxYTER.js";import{S as l}from"./Select-BDok2hfG.js";import{L as p}from"./ListBoxItem-cTqtShF6.js";import{B as a}from"./Button-DU4dwGZ1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BRG6MU6i.js";import"./utils-ZnrybaQS.js";import"./clsx-B-dksMZM.js";import"./index-QTGoW66r.js";import"./index-DlLvDP-d.js";import"./clsx-Ciqy0D92.js";import"./Group-CyICP2Gz.js";import"./FieldError-BgDbsvpf.js";import"./Text-CAOAbmad.js";import"./Text-B-AGxk9K.js";import"./Button-BLDI2QQO.js";import"./Hidden-DDSSvdX3.js";import"./useLabel-lJyU4eyr.js";import"./useLabels-CNGc6RPU.js";import"./useButton-BMGmM7Rg.js";import"./SelectionIndicator-BsObSX7g.js";import"./useField-BpNxarce.js";import"./VisuallyHidden-B__tRjGj.js";import"./useControlledState-BlM9LERq.js";import"./Label-DXBeXx8q.js";import"./Dialog-Ch1EbeUc.js";import"./RSPContexts-CUgMF8uD.js";import"./OverlayArrow-Cc1DaLcZ.js";import"./useResizeObserver-C-4yQLxN.js";import"./Collection-DabhM5jB.js";import"./index-2DG0SJGy.js";import"./Separator-CO6vWGxM.js";import"./SelectionManager-D1bQmGXg.js";import"./useEvent-AANzrBKs.js";import"./scrollIntoView-D6LN4GJ6.js";import"./useDescription-CwTth-CD.js";import"./ListKeyboardDelegate-CauOf7DY.js";import"./PressResponder-Dy-yCG68.js";import"./useLocalizedStringFormatter-BMaygKaE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C54_hIOs.js";import"./getScrollParent-CigfJhrW.js";import"./ModalOverlay-BO3lRZyj.js";import"./x-C-I1ixf_.js";import"./createLucideIcon-_Uu-7Yuy.js";import"./useLocalizedStringFormatter-D7GfR7l1.js";import"./Heading-D9vzlIYK.js";import"./info-DauHfwG7.js";import"./Popover-DdKXcdAo.js";import"./check-B9s8MbEq.js";import"./useToggleState-DXPbF6uR.js";import"./TextFieldBase-JtgCCSXA.js";import"./Input-CHYIWEI4.js";import"./useTextField-DOyU3cBb.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DXkMR5_t.js";import"./DragAndDrop-DT7XvGGu.js";import"./inertValue-8JKTeGyV.js";import"./useListState-PTLiSd8w.js";import"./TagGroup-DwOyISgI.js";import"./useHighlightSelectionDescription-lW9mM9G_.js";import"./useUpdateEffect-CrxubWsb.js";import"./useHasTabbableChild-CZ-bExs4.js";import"./chevron-down-DXoz3Ych.js";import"./Virtualizer-D3SSP7je.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-Bsq2Gecy.js";import{c}from"./Form-CirE0Ecy.js";import{G as d}from"./Grid-P6ndWIn3.js";import{G as i}from"./GridItem-ClYI3XAO.js";import{a as x,R as u}from"./Radio-BdPXH5Mq.js";import{C as I}from"./CheckboxGroup-C9VJ_5V8.js";import{C as G}from"./Checkbox-DldPrc6Q.js";import{T as t}from"./TextField-BfT0bmK6.js";import{S as l}from"./Select-Bfu8OIA8.js";import{L as p}from"./ListBoxItem-CVSpdJ-3.js";import{B as a}from"./Button-2sJltsSG.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Duh6XNKg.js";import"./utils-BEAPqOk0.js";import"./clsx-B-dksMZM.js";import"./index-Dx8tMrH0.js";import"./index-BRYV9rT7.js";import"./clsx-Ciqy0D92.js";import"./Group-D5jdMy_A.js";import"./FieldError-C-dVYh2X.js";import"./Text-BbliZ5q4.js";import"./Text-CN4UKteu.js";import"./Button-Dgb6FvaO.js";import"./Hidden-BUmnbfmf.js";import"./useLabel-DPyv_VKO.js";import"./useLabels-DBANshh8.js";import"./useButton-B8W9dyb3.js";import"./SelectionIndicator-C-DSpShj.js";import"./useField-ErwE8ZmA.js";import"./VisuallyHidden-Dj8T0Unv.js";import"./useControlledState-BhYy7T42.js";import"./Label-C6Sumu1N.js";import"./Dialog-Dy6OQ_qV.js";import"./RSPContexts-B54NxITZ.js";import"./OverlayArrow-C_jQ3Ebl.js";import"./useResizeObserver-OXYNsxQq.js";import"./Collection-lWVggD0C.js";import"./index-D1TSbjCJ.js";import"./Separator-BSBR5UuG.js";import"./SelectionManager-Ctfsl1Jn.js";import"./useEvent-B8d2Ooe_.js";import"./scrollIntoView-BBGrgUMp.js";import"./useDescription-BzFZmdMU.js";import"./ListKeyboardDelegate-bdj1-D1M.js";import"./PressResponder-TrkJkeFx.js";import"./useLocalizedStringFormatter-CvMlUMFL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsUEYEjn.js";import"./getScrollParent--THwKu2l.js";import"./ModalOverlay-BDERj9-B.js";import"./x-BiXsmrYJ.js";import"./createLucideIcon-CYPfeOBH.js";import"./useLocalizedStringFormatter-mauUPS39.js";import"./Heading-Cig3SoG6.js";import"./info-DsHSuikr.js";import"./Popover-Ccpu4CGe.js";import"./check-85YAxsjN.js";import"./useToggleState-Fg6qbCPY.js";import"./TextFieldBase-BrwV8GUg.js";import"./Input-CVVchZra.js";import"./useTextField-DR-qlDF_.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-XkSx2EkO.js";import"./DragAndDrop-CXzAcB8J.js";import"./inertValue-B7ixd9w1.js";import"./useListState-BIHOaiW0.js";import"./TagGroup-BLTFA5hN.js";import"./useHighlightSelectionDescription-CD_-BnUl.js";import"./useUpdateEffect-BLZXSrnY.js";import"./useHasTabbableChild-CY3er7N8.js";import"./chevron-down-C4TfxkxC.js";import"./Virtualizer-Bf2VJkT0.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

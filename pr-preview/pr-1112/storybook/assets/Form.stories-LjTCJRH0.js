import{j as e}from"./iframe-DS0O0j7b.js";import{$ as c}from"./Form-C58mAzIV.js";import{G as d}from"./Grid-xcvmhfVm.js";import{G as i}from"./GridItem-jMeothS7.js";import{a as x,R as u}from"./Radio-607fKn4K.js";import{C as I}from"./CheckboxGroup-cyLBRnZT.js";import{C as G}from"./Checkbox-DCOL-Elt.js";import{T as t}from"./TextField-BjzVA16Q.js";import{S as l}from"./Select-CZKbfakx.js";import{L as p}from"./ListBoxItem-wXs7rrv4.js";import{B as a}from"./Button-DB7_h4Ph.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C_Y1VJyB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BQZAIrPT.js";import"./useFocusRing-C0d3_IpO.js";import"./index-D3Tr-KQh.js";import"./index-oPvKfDWU.js";import"./clsx-Ciqy0D92.js";import"./Group-DNJHoR3l.js";import"./FieldError-obiFspMo.js";import"./Text-24RRIPeu.js";import"./Text-img0UXBQ.js";import"./Button-Dmgtf1bQ.js";import"./Hidden-kaUfFbEZ.js";import"./useLabels-CDMzy8g3.js";import"./useButton-8RAVO9uW.js";import"./SelectionIndicator-D5gv17Ml.js";import"./useField-BQuOWwRW.js";import"./VisuallyHidden-bAykpqel.js";import"./useControlledState-YiR0L17D.js";import"./Label-Bm3TVIjz.js";import"./Dialog-CDSJtmr9.js";import"./RSPContexts-xBE5IiKT.js";import"./OverlayArrow-JrQrw2d7.js";import"./useResizeObserver-CqGku4Sv.js";import"./Collection-CHi4IpgR.js";import"./index-D5ydEaOw.js";import"./Separator-wJ82o0SV.js";import"./SelectionManager-Ch-PpRgv.js";import"./useEvent-D-WGugyX.js";import"./scrollIntoView-BMpUAOeO.js";import"./useDescription-BRpvpR9v.js";import"./ListKeyboardDelegate-DTV_dm1Z.js";import"./PressResponder-Q0iL0rxl.js";import"./useLocalizedStringFormatter-DgIs-M2f.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Z5KKNti_.js";import"./getScrollParent-DZsWhqqY.js";import"./x-DcON_b5s.js";import"./createLucideIcon-BttQnoLZ.js";import"./useLocalizedStringFormatter-C9AMm5n0.js";import"./Heading-BEVhbzAA.js";import"./info-B8jiwM2B.js";import"./Popover-WAqSoKDJ.js";import"./check-q1SZxOQZ.js";import"./useToggleState-Bl4UD8T5.js";import"./TextFieldBase-BgYyM85A.js";import"./Input-CPe7jG_u.js";import"./useTextField-CfmO-j_f.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B05xhAdj.js";import"./DragAndDrop-B-d23YrX.js";import"./inertValue-BXHjsU7J.js";import"./useListState-DOPTZKBH.js";import"./TagGroup-Bl52q67R.js";import"./useHighlightSelectionDescription-Bn3hVoDd.js";import"./useUpdateEffect-Bx1r3pao.js";import"./useHasTabbableChild-zUK0SYqE.js";import"./chevron-down-DPknZU_t.js";import"./Virtualizer-CO_r4xf1.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-DXV5yNVg.js";import{c}from"./Form-ChJqqoAq.js";import{G as d}from"./Grid-B4w1PRYM.js";import{G as i}from"./GridItem-TZ9XQCdt.js";import{a as x,R as u}from"./Radio-B9tTKTcI.js";import{C as I}from"./CheckboxGroup-BLvEcVu4.js";import{C as G}from"./Checkbox-fTIWIuc7.js";import{T as t}from"./TextField-Bp9I9bUy.js";import{S as l}from"./Select-B1oNwfwz.js";import{L as p}from"./ListBoxItem-4jmi8Dxp.js";import{B as a}from"./Button-BlXLhIpL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-D5WWltRW.js";import"./utils-D2X0V_ch.js";import"./clsx-B-dksMZM.js";import"./index-CzcJdf_a.js";import"./index-Ck0jOAPG.js";import"./clsx-Ciqy0D92.js";import"./Group-2TNpPRTn.js";import"./FieldError-BqMBz98l.js";import"./Text-CKvHTakV.js";import"./Text-CBeHelAL.js";import"./Button-BFHR6RXp.js";import"./Hidden-D1mzcqIQ.js";import"./useLabel-DhHgPc5x.js";import"./useLabels-CnmTVeYq.js";import"./useButton-D2_h4EWT.js";import"./SelectionIndicator-BAznZF8p.js";import"./useField-zA9g1QiW.js";import"./VisuallyHidden-BEiLaXoC.js";import"./useControlledState-gqmUfamI.js";import"./Label-D4bRHScp.js";import"./Dialog-CbPWg4ki.js";import"./RSPContexts-CFPuUxx1.js";import"./OverlayArrow-BFyUX9eS.js";import"./useResizeObserver-B-tmIu7G.js";import"./Collection-BHKWOZuO.js";import"./index-DLzlm1NY.js";import"./Separator-Cnj1iZa1.js";import"./SelectionManager-DOb3wefr.js";import"./useEvent-BKSnxFNZ.js";import"./scrollIntoView-Gtl3EXZL.js";import"./useDescription-Br6-58Tk.js";import"./ListKeyboardDelegate-qY0cUxF-.js";import"./PressResponder-jCanc_1p.js";import"./useLocalizedStringFormatter-DMugWIr_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cln5OJdR.js";import"./getScrollParent-DEOaQKh5.js";import"./ModalOverlay-BP6gum9g.js";import"./x-C8jYBObA.js";import"./createLucideIcon-BzcStSQs.js";import"./useLocalizedStringFormatter-C4UT3jd4.js";import"./Heading-DF9E9mda.js";import"./info-DJyPwCkZ.js";import"./Popover-CvGVI1s-.js";import"./check-BZFGN-Er.js";import"./useToggleState-Bd6ykAuA.js";import"./TextFieldBase-BHbqBWko.js";import"./Input-DkCtsT4u.js";import"./useTextField-BYn9VW6y.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CAMquLJY.js";import"./DragAndDrop-BTqmMWcl.js";import"./inertValue-CUpn1bkg.js";import"./useListState-oi-wZ0jB.js";import"./TagGroup-CDdiR-92.js";import"./useHighlightSelectionDescription-bIXhwq8f.js";import"./useUpdateEffect-BTVXTsXJ.js";import"./useHasTabbableChild-Bj5ZUqYN.js";import"./chevron-down-u8FJoi05.js";import"./Virtualizer-BNntd4iy.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

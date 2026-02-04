import{j as e}from"./iframe-avvwDBBp.js";import{$ as c}from"./Form-Y4ksqzXf.js";import{G as d}from"./Grid-BAfVL0s4.js";import{G as i}from"./GridItem-C5TbtY9q.js";import{a as x,R as u}from"./Radio-B9Cia9CD.js";import{C as I}from"./CheckboxGroup-4Rgsncac.js";import{C as G}from"./Checkbox-CymEixv1.js";import{T as t}from"./TextField-JrxBJSQy.js";import{S as l}from"./Select-YvK_t3b8.js";import{L as p}from"./ListBoxItem-B9ikTzNs.js";import{B as a}from"./Button-Bc5upLYd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C6AdICJ7.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BlOMbcO_.js";import"./useFocusRing-x-yt5vcP.js";import"./index-Cc2TyXf4.js";import"./index-F0yeFPaK.js";import"./clsx-Ciqy0D92.js";import"./Group-B8i9DsPR.js";import"./FieldError-CUJ1nOb_.js";import"./Text-nuNh7stK.js";import"./Text-BuEQRuhi.js";import"./Button-B34KA-9Z.js";import"./Hidden-Ft7ifkXt.js";import"./useLabels-BaAeHDSr.js";import"./useButton-C6RHTzzZ.js";import"./SelectionIndicator-jzK5UQW7.js";import"./useField-X5Ne7bxX.js";import"./VisuallyHidden-Bjg7bFep.js";import"./useControlledState-BQt9Xj6g.js";import"./Label-BNmurno_.js";import"./Dialog-CXi0lKvB.js";import"./RSPContexts-BJmPPlkw.js";import"./OverlayArrow-19GsMW1S.js";import"./useResizeObserver-CDLAZHnJ.js";import"./Collection-nNhJNYKC.js";import"./index-CUhqqiIc.js";import"./Separator-D2SIzjzz.js";import"./SelectionManager-DAyBKSt5.js";import"./useEvent-DK7Zb_XO.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BiPsPzZk.js";import"./ListKeyboardDelegate-CykXfXkf.js";import"./PressResponder-nCvL8pYp.js";import"./useLocalizedStringFormatter-C0xDl-WG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5BK6QLk.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BecIAGDD.js";import"./createLucideIcon-H9RUqqbe.js";import"./useLocalizedStringFormatter-CDByPaCr.js";import"./Heading-CcX-zHd2.js";import"./info-D-GFsriY.js";import"./Popover-CtWJu6lm.js";import"./check-DayjbLRK.js";import"./useToggleState-cjdEQBMg.js";import"./TextFieldBase-DEvHT08j.js";import"./TextField-DTO31SCI.js";import"./Input-Cc51j71D.js";import"./useTextField-CQXoPTmb.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BQ26WAJj.js";import"./DragAndDrop-D44FNqOB.js";import"./inertValue-CADCmRJg.js";import"./useListState-CXH0aNl7.js";import"./Tag-yPKb_rUz.js";import"./useHighlightSelectionDescription-CZ_A7DNi.js";import"./useUpdateEffect-Bun28fGs.js";import"./useHasTabbableChild-bJqzBUh5.js";import"./chevron-down-BRMGE5k3.js";import"./Virtualizer-EvLEGeiS.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

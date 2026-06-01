import{j as e}from"./iframe-gbJBpoDx.js";import{c}from"./Form-DzUfN3tc.js";import{G as d}from"./Grid-D-_zoJQH.js";import{G as i}from"./GridItem-BLZW4aDm.js";import{a as x,R as u}from"./Radio-BR4I4FCf.js";import{C as I}from"./CheckboxGroup-Cs1QiH9J.js";import{C as G}from"./Checkbox-BY1orbLd.js";import{T as t}from"./TextField-AfjJJti8.js";import{S as l}from"./Select-DySZXWkF.js";import{L as p}from"./ListBoxItem-Bdt1Lqih.js";import{B as a}from"./Button-Dpg56qc6.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CdGrrviA.js";import"./utils-DUgHs6FT.js";import"./clsx-B-dksMZM.js";import"./index-DGfeUZWJ.js";import"./index-h8QHE_zG.js";import"./clsx-Ciqy0D92.js";import"./Group-Bl8S9UBo.js";import"./FieldError-KeTSBYc8.js";import"./Text-CE4EKtCP.js";import"./Text-zmsiiY3G.js";import"./Button-C3tdjGV6.js";import"./Hidden-CvjG_1RQ.js";import"./useLabel-DBWjU4Cx.js";import"./useLabels-CGcCPDWZ.js";import"./useButton-BmNiDIvC.js";import"./SelectionIndicator-Ce5zkH-2.js";import"./useField-D1VuoHuM.js";import"./VisuallyHidden-Ck3fIWPQ.js";import"./useControlledState-CVd5Xqz2.js";import"./Label-BW8iCUOr.js";import"./Dialog-AHauR5Fo.js";import"./RSPContexts-DiLb2jsV.js";import"./OverlayArrow-BI4pGjQC.js";import"./useResizeObserver-DIAWS4tV.js";import"./Collection-CM-3lYwE.js";import"./index-BdX53cNt.js";import"./Separator-Bc-mZsv-.js";import"./SelectionManager-C0D1h0Vh.js";import"./useEvent-waE1JgxF.js";import"./scrollIntoView-DIgHhdMC.js";import"./useDescription-6CJm5bcg.js";import"./ListKeyboardDelegate-la3RUrG9.js";import"./PressResponder-CdMFoX3r.js";import"./useLocalizedStringFormatter--yN4gUH3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BadfckAr.js";import"./getScrollParent-CXwwiqPr.js";import"./ModalOverlay-DViim-cU.js";import"./x-B_GjQ7rz.js";import"./createLucideIcon-C3IEX8hu.js";import"./useLocalizedStringFormatter-BrXpMl3k.js";import"./Heading-dnaurqAS.js";import"./info-M8_erZew.js";import"./Popover-CJJAPMKr.js";import"./check-DDdM9Hsb.js";import"./useToggleState-COhdpMVw.js";import"./TextFieldBase-C8EqSojF.js";import"./Input-CQCvpima.js";import"./useTextField-Ibv8X9u5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B0X_F1_w.js";import"./DragAndDrop-CBt946Cs.js";import"./inertValue-DOlo5z-c.js";import"./useListState-B5RlslZY.js";import"./TagGroup-Whfn7nMf.js";import"./useHighlightSelectionDescription-D2EyrXpV.js";import"./useUpdateEffect-COKkianB.js";import"./useHasTabbableChild-DBDxHRKv.js";import"./chevron-down-CeeoDNO7.js";import"./Virtualizer-B9qykK23.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

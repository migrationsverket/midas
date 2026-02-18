import{j as e}from"./iframe-DT61WbGn.js";import{$ as c}from"./Form-IlYQTl6M.js";import{G as d}from"./Grid-CGDalFw-.js";import{G as i}from"./GridItem-DFP-mCHr.js";import{a as x,R as u}from"./Radio-Ck7qP2pP.js";import{C as I}from"./CheckboxGroup-D-HWh4-h.js";import{C as G}from"./Checkbox-tji6o_0-.js";import{T as t}from"./TextField-Do4Qgj0A.js";import{S as l}from"./Select-DZegBOcq.js";import{L as p}from"./ListBoxItem-C58fqdR5.js";import{B as a}from"./Button-B3A8mU5i.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BNrItRfy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DceVtZUU.js";import"./useFocusRing-DYTAd8_U.js";import"./index-BOjhewCw.js";import"./index-B6JELXQq.js";import"./clsx-Ciqy0D92.js";import"./Group-O4XXocAc.js";import"./FieldError-BPllYc2R.js";import"./Text-BiokIEeM.js";import"./Text-BlgJzzP7.js";import"./Button-9A3cEUNU.js";import"./Hidden-DkIy8QtB.js";import"./useLabels-BLjzORvQ.js";import"./useButton-DBUAos9E.js";import"./SelectionIndicator-2o4OglFe.js";import"./useField-Br0fbhq2.js";import"./VisuallyHidden-CidbwADT.js";import"./useControlledState-BE2wyFhJ.js";import"./Label-CjMRK86x.js";import"./Dialog-047CLw3h.js";import"./RSPContexts-BKYkq1wo.js";import"./OverlayArrow-D8tgQj4I.js";import"./useResizeObserver-tqtHE4-C.js";import"./Collection-Cmjs1m8V.js";import"./index-CLRq1jWZ.js";import"./Separator-BNyl3ygb.js";import"./SelectionManager-BklfJdWU.js";import"./useEvent-BKGBdaZ_.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-oZ2Jk6d8.js";import"./ListKeyboardDelegate-CMnkCmi9.js";import"./PressResponder-CQiRKe2Y.js";import"./useLocalizedStringFormatter-B7AhjKe6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-EQ3nDp_E.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-9GyaX2Up.js";import"./createLucideIcon-BxpBX-dW.js";import"./useLocalizedStringFormatter-CfwtoEKk.js";import"./Heading-MXMhB4o8.js";import"./info-BxG91l2W.js";import"./Popover-BwVKS-DE.js";import"./check-DO2n0ClM.js";import"./useToggleState-CUZ1Y75y.js";import"./TextFieldBase-2cI-5Y-D.js";import"./Input-Ppml95ET.js";import"./useTextField-CQ_khQtE.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CixSGZ9C.js";import"./DragAndDrop-DwHmLZiZ.js";import"./inertValue-BtgmqKzK.js";import"./useListState-DMR7A-eh.js";import"./Tag-CdRp9uPH.js";import"./useHighlightSelectionDescription-TGw2sxAE.js";import"./useUpdateEffect-DOMiGJmv.js";import"./useHasTabbableChild-BnHn2rEx.js";import"./chevron-down-0X4TsA8u.js";import"./Virtualizer-BAgsrlD9.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

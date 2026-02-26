import{j as e}from"./iframe-Ca9PeS4b.js";import{$ as c}from"./Form-hfyf2anb.js";import{G as d}from"./Grid-CtC0zuV0.js";import{G as i}from"./GridItem-DH7Vy7qU.js";import{a as x,R as u}from"./Radio-Dbu8U6XW.js";import{C as I}from"./CheckboxGroup-DLE7JNo3.js";import{C as G}from"./Checkbox-7mBji1OD.js";import{T as t}from"./TextField-DQhXpUU1.js";import{S as l}from"./Select-aZgDu2XV.js";import{L as p}from"./ListBoxItem-ENEH1o9r.js";import{B as a}from"./Button-DaI6b5l3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CUoV_pAF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-0CkrV3-A.js";import"./useFocusRing-B56DIc1T.js";import"./index-n_MeXCZI.js";import"./index-CcFOlZnw.js";import"./clsx-Ciqy0D92.js";import"./Group-QBplJH8u.js";import"./FieldError-3WYDLCHb.js";import"./Text-ZWT-9m7v.js";import"./Text-DlcQ59dF.js";import"./Button-DLBOkC9W.js";import"./Hidden-ZKBw_h0J.js";import"./useLabels-5MQe5wH1.js";import"./useButton-jHPk0lvT.js";import"./SelectionIndicator-DLnP5b2N.js";import"./useField-Bs-tUlaz.js";import"./VisuallyHidden-BJAuUKrr.js";import"./useControlledState-55nfPVrT.js";import"./Label-DA-3gvj2.js";import"./Dialog-BODDtTyg.js";import"./RSPContexts-ByQqD1Vo.js";import"./OverlayArrow-DZRZONk7.js";import"./useResizeObserver-CzYlrVCr.js";import"./Collection-JenPJx5t.js";import"./index-DsiYp3bc.js";import"./Separator-C2kBBs6l.js";import"./SelectionManager-BxeXuy6l.js";import"./useEvent-CTqepDA6.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BxWKVtdh.js";import"./ListKeyboardDelegate-QYpzlqB7.js";import"./PressResponder-wYW3y2Eq.js";import"./useLocalizedStringFormatter-CRS5dirU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dh0BKkJ-.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BHPi5tAp.js";import"./createLucideIcon-CT83y0Ua.js";import"./useLocalizedStringFormatter-fmn21mIk.js";import"./Heading-CVqJMxwo.js";import"./info-DAaxha7q.js";import"./Popover-DALRsSIr.js";import"./check-BYrzzCqG.js";import"./useToggleState-ClshfQWe.js";import"./TextFieldBase-COXJs-f_.js";import"./Input-BD5hsiV_.js";import"./useTextField-Bo7lxpx9.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BEO3J7oX.js";import"./DragAndDrop-Co0ixOQg.js";import"./inertValue-2O-pX42I.js";import"./useListState-Cxs4egV3.js";import"./TagGroup-CGhAYiCq.js";import"./useHighlightSelectionDescription-BB7Fk6If.js";import"./useUpdateEffect-Dv2SI9js.js";import"./useHasTabbableChild-nMZceFKp.js";import"./chevron-down-vpFB-KkO.js";import"./Virtualizer-CH9PKzxi.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

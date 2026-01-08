import{j as e}from"./iframe-BmoSYdAA.js";import{$ as c}from"./Form-8jdVhm3z.js";import{G as d}from"./Grid-zdGDjob4.js";import{G as i}from"./GridItem-Cobi2okQ.js";import{T as t}from"./TextField-1Wj0XN5W.js";import{S as l}from"./Select-BjXZuI7c.js";import{B as a}from"./Button-Br3AxFcp.js";import{R as x,a as u}from"./Radio-cJicDCmd.js";import{C as I}from"./CheckboxGroup-qcBc6t3l.js";import{C as G}from"./Checkbox-DMyiMY7u.js";import{L as p}from"./ListBoxItem-BLCOEAq2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C-CBKXNz.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-UTtv_AD5.js";import"./useFocusRing-DvskDHXD.js";import"./index-BdUd5uZZ.js";import"./index-0cr7ctwJ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-iLKttvgZ.js";import"./TextField-CI00nTAr.js";import"./FieldError-BD5okbww.js";import"./Text-DaUdSSAr.js";import"./Text-tl12LCyE.js";import"./RSPContexts-D_jCzI74.js";import"./Group-BoPqXReS.js";import"./Input-B0N3Hc1g.js";import"./Hidden-2CP7YcQc.js";import"./Button-BKQTUCQ9.js";import"./useLabels-CxCxcB2N.js";import"./useButton-Z7anNymb.js";import"./useTextField-BwbTKMX2.js";import"./useControlledState-Dzoa7zU0.js";import"./useField-BpAP4iAL.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-XeIu9q9V.js";import"./Dialog-DWb-ECes.js";import"./OverlayArrow-CDwZqS2q.js";import"./useResizeObserver-ORfsR1W_.js";import"./Collection-DlymQ8vt.js";import"./index-FM1lrI3L.js";import"./Separator-Bso1CzNS.js";import"./SelectionManager-B0cVCThB.js";import"./useEvent-DrpJQgWB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Vt9L8OqV.js";import"./useDescription-CyzvknZ3.js";import"./ListKeyboardDelegate-Brmnx0qe.js";import"./PressResponder-1rkbxvho.js";import"./useLocalizedStringFormatter-DBGXY-0J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C937BOdE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-sKibH-Cd.js";import"./x-B-e_Lia6.js";import"./createLucideIcon-B0lPyAXK.js";import"./useLocalizedStringFormatter-Bc48yrq4.js";import"./Heading-Da3dL7Es.js";import"./info-DaiBcEhh.js";import"./Popover-Dtx8nB1p.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-GWuQN-Dw.js";import"./DragAndDrop-D4OxFDi0.js";import"./inertValue-CQzOwTuG.js";import"./useListState-BoGhukTK.js";import"./Tag-BrKZxNre.js";import"./useHighlightSelectionDescription-4ldV9AzF.js";import"./useUpdateEffect-Ck01zyT4.js";import"./useHasTabbableChild-C7A55Uou.js";import"./chevron-down-BFqlCQz8.js";import"./Button.module-Co5e5YHp.js";import"./check-BABKWCdC.js";import"./useToggleState-CCJ09dOn.js";import"./Virtualizer-BfRQ_eZw.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

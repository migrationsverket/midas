import{j as e}from"./iframe-DZEIteCN.js";import{$ as c}from"./Form-CYimGHgO.js";import{G as d}from"./Grid-BcF_1l5B.js";import{G as i}from"./GridItem-D0QKk7s9.js";import{T as t}from"./TextField-IDTVW6cF.js";import{S as l}from"./Select-GMUO8l5M.js";import{B as a}from"./Button-CX_w9LKp.js";import{R as x,a as u}from"./Radio-CqE4bWW6.js";import{C as I}from"./CheckboxGroup-B_awZtUH.js";import{C as G}from"./Checkbox-Byw02ppb.js";import{L as p}from"./ListBoxItem-CZSdavxd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-eXp6hAHi.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-WsqUix1q.js";import"./useFocusRing-TrwNJxcu.js";import"./index-DKBVfWmd.js";import"./index-hdIbQAxi.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CRatZKSC.js";import"./TextField-D8FjOsAk.js";import"./FieldError-ChK9olYH.js";import"./Text-Cc24C9N6.js";import"./Text-DBxfC0s8.js";import"./RSPContexts-BY213k3w.js";import"./Group-Czx_93hD.js";import"./Input-Bfg0Qrr6.js";import"./Hidden-GV6GWw5Y.js";import"./Button-DNUZR8YI.js";import"./useLabels-jjULFaK5.js";import"./useButton-BciHUgcd.js";import"./useTextField-DFsYXydC.js";import"./useControlledState-BuIMy712.js";import"./useField-VRRBZlgt.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-ClH6DcdC.js";import"./Dialog-C2lqbijt.js";import"./OverlayArrow-B-1TW-rO.js";import"./useResizeObserver-CQg9Zy5h.js";import"./Collection-DX2AptDc.js";import"./index-DttypQS5.js";import"./Separator-CCtYyU8S.js";import"./SelectionManager-BONroPUw.js";import"./useEvent-UJPseaF2.js";import"./scrollIntoView-CNZ7FSWt.js";import"./SelectionIndicator-CIU88Fcj.js";import"./useDescription-sB8LMHwe.js";import"./ListKeyboardDelegate-C7-VKLYg.js";import"./PressResponder-BQ4aD7hz.js";import"./useLocalizedStringFormatter-D6LBwpE0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cr6boEsG.js";import"./VisuallyHidden-CPxzvlXi.js";import"./useLocalizedStringFormatter-CfhNe-rq.js";import"./x-Cku9hc0_.js";import"./createLucideIcon-8k5sNgIw.js";import"./Heading-Cho1JDkX.js";import"./info-CKd3BTFv.js";import"./Popover-DhKC5VXQ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CCWebzWp.js";import"./DragAndDrop-CF_T69NE.js";import"./inertValue-HT8dWL5k.js";import"./useListState-zxyMK5Rv.js";import"./Tag-CO2BV-Cg.js";import"./useHighlightSelectionDescription-D9dA3G_3.js";import"./useUpdateEffect-CT3Ihuka.js";import"./useHasTabbableChild-CmPgH3-v.js";import"./chevron-down-0lY_6-Rh.js";import"./Button.module-CtQ1deO8.js";import"./check-CkcPuQck.js";import"./useToggleState-BFI9IQ7d.js";import"./Virtualizer-CyEs1tnu.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-CfD08JHH.js";import{$ as c}from"./Form-CxynQJgr.js";import{G as d}from"./Grid-B9bAeTeE.js";import{G as i}from"./GridItem-ClC_Dq4F.js";import{a as x,R as u}from"./Radio-Dl6oBvEm.js";import{C as I}from"./CheckboxGroup-CkBm5-r3.js";import{C as G}from"./Checkbox-tEK-BLGt.js";import{T as t}from"./TextField-BLjUIINY.js";import{S as l}from"./Select-BnJ_2mgM.js";import{L as p}from"./ListBoxItem-0jRiv-5J.js";import{B as a}from"./Button-BDhh5PYr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D9GPP0o0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D39AauB2.js";import"./useFocusRing-DbZlBvT3.js";import"./index-CkGKPUJ7.js";import"./index-Bb2OgbnK.js";import"./clsx-Ciqy0D92.js";import"./Group-BNmld_Hb.js";import"./FieldError-BgTli7tr.js";import"./Text-CrZg_N--.js";import"./Text-DobS2R06.js";import"./Button-CxMmpQq_.js";import"./Hidden-_wiLvPg0.js";import"./useLabels-B8yJmO2W.js";import"./useButton-BtewcnCZ.js";import"./SelectionIndicator-DFhcN9II.js";import"./useField-C6N5VUN_.js";import"./VisuallyHidden-CyIL-gS9.js";import"./useControlledState-qZuV6rTK.js";import"./Label-DaHUe__s.js";import"./Dialog-BuZ5e6rP.js";import"./RSPContexts-DzlmE6Vu.js";import"./OverlayArrow-BAY2ltM6.js";import"./useResizeObserver-wbkaKojC.js";import"./Collection-CIMmwsxn.js";import"./index-cRxFTsXn.js";import"./Separator-CFJjpTXb.js";import"./SelectionManager-jZG-N2MR.js";import"./useEvent-CFcLw1G-.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-M-hiH2ur.js";import"./ListKeyboardDelegate-B6JGmauI.js";import"./PressResponder-BhAyL_vF.js";import"./useLocalizedStringFormatter-BtUZDJNi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rvKxZqVA.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BxwHOpJf.js";import"./createLucideIcon-DPrY6SpC.js";import"./useLocalizedStringFormatter-DgtxZ7Zy.js";import"./Heading-COjECUAj.js";import"./info-DhtIJPz_.js";import"./Popover-u78J-cP8.js";import"./check-Mr0_gEbL.js";import"./useToggleState-D6eSFPU-.js";import"./TextFieldBase-D6mqH5hz.js";import"./Input-XoVK4P3y.js";import"./useTextField-pzmZVcRA.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BIEhrnrY.js";import"./DragAndDrop-DdRuKhE4.js";import"./inertValue-B9H5mPwN.js";import"./useListState-CM_jsEes.js";import"./TagGroup-BHC4ZZfR.js";import"./useHighlightSelectionDescription-DMAh3XKg.js";import"./useUpdateEffect-B0vZKv3a.js";import"./useHasTabbableChild-C4bgb0Xy.js";import"./chevron-down-CorxbeiX.js";import"./Virtualizer-O-d_D9cJ.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-Cf0gSBlV.js";import{c}from"./Form-DCo445Pj.js";import{G as d}from"./Grid-Cm3S97Fl.js";import{G as i}from"./GridItem-BsEMje4X.js";import{a as x,R as u}from"./Radio-CQYI4Bgk.js";import{C as I}from"./CheckboxGroup-BBTU-G7y.js";import{C as G}from"./Checkbox-CaqiK0wo.js";import{T as t}from"./TextField-DiGUARQN.js";import{S as l}from"./Select-DjHtfokN.js";import{L as p}from"./ListBoxItem-OWPaA_G4.js";import{B as a}from"./Button-t2ToDX_o.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CU4h4oO2.js";import"./utils-D5wiuCjg.js";import"./clsx-B-dksMZM.js";import"./index-Cq4gtJu1.js";import"./index-BGK7RvPC.js";import"./clsx-Ciqy0D92.js";import"./Group-BCogxFI0.js";import"./FieldError-qRtSRcyk.js";import"./Text-DVsPk7Go.js";import"./Text-BVKObbzr.js";import"./Button-lgeK8kME.js";import"./Hidden-BBPU8yn5.js";import"./useLabel-tj1Q-TRL.js";import"./useLabels-CtzpOF36.js";import"./useButton-BvfyWom1.js";import"./SelectionIndicator-C0NvYuKl.js";import"./useField-BL9qEMGH.js";import"./VisuallyHidden-Qxum1xZt.js";import"./useControlledState-CCD2Jo-X.js";import"./Label--5PRA-NL.js";import"./Dialog-DQ75by7R.js";import"./RSPContexts-hWKFxDS1.js";import"./OverlayArrow-DAGMAflH.js";import"./useResizeObserver-3YecxwtY.js";import"./Collection-B0lLxu9D.js";import"./index-DS3qhvBb.js";import"./Separator-LzjLQQNX.js";import"./SelectionManager-BuxsMIzv.js";import"./useEvent-y-qPMRaI.js";import"./scrollIntoView-C0W73uc3.js";import"./useDescription-M0SxojFs.js";import"./ListKeyboardDelegate-B0W0pQHS.js";import"./PressResponder-jXCX15sr.js";import"./useLocalizedStringFormatter-jI7Oi0kB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CylMbfLW.js";import"./getScrollParent-DJJhTJvR.js";import"./ModalOverlay-RjzuqHWe.js";import"./x-gM8dBxSk.js";import"./createLucideIcon-CuxZToxj.js";import"./useLocalizedStringFormatter-BePTNged.js";import"./Heading-_Rw9Dbn-.js";import"./info-DTU0m-8R.js";import"./Popover-BLukUqq0.js";import"./check-Cv1Osn94.js";import"./useToggleState-BaxRdh6q.js";import"./TextFieldBase-C5J_ee15.js";import"./Input-CUY3jdGx.js";import"./useTextField-Bnv86E77.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bo2l8D7U.js";import"./DragAndDrop-FmbkC9vL.js";import"./inertValue-DGmfXvtW.js";import"./useListState-pa03AQhC.js";import"./TagGroup-CwsE8Jru.js";import"./useHighlightSelectionDescription-CvXeCnYi.js";import"./useUpdateEffect-DTfBysFi.js";import"./useHasTabbableChild-B0FfotYG.js";import"./chevron-down-BVjmJ-p8.js";import"./Virtualizer-nTv_re2j.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

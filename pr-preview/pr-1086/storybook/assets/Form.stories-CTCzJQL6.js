import{j as e}from"./iframe-Cr1emYMW.js";import{$ as c}from"./Form-PPaHTaru.js";import{G as d}from"./Grid-CBKCxH_v.js";import{G as i}from"./GridItem-BFbT5Rcf.js";import{a as x,R as u}from"./Radio-BhnEhEKj.js";import{C as I}from"./CheckboxGroup-Ddqnm60O.js";import{C as G}from"./Checkbox-D0WCaCLY.js";import{T as t}from"./TextField-DVGq1Q_P.js";import{S as l}from"./Select-DEYRloGO.js";import{L as p}from"./ListBoxItem-BWJT3wY5.js";import{B as a}from"./Button-BPrHdrSQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BYhslQdw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Nhhgb2EE.js";import"./useFocusRing-DwGfHlXU.js";import"./index-CiTapa96.js";import"./index-Cl1_f9xd.js";import"./clsx-Ciqy0D92.js";import"./Group-C1vG67IV.js";import"./FieldError-B0n-brmG.js";import"./Text-DDXxWSnO.js";import"./Text-CnKjHHeh.js";import"./Button-CEW_shex.js";import"./Hidden-BsA5K8lw.js";import"./useLabels-Db4gCzxq.js";import"./useButton-p5P1a05m.js";import"./SelectionIndicator-DTV7kd3r.js";import"./useField-BTs-PD6t.js";import"./VisuallyHidden-CrqhJx50.js";import"./useControlledState-B64MCg1r.js";import"./Label-YR-X7IQJ.js";import"./Dialog-UeydkS3L.js";import"./RSPContexts-B-a6Suia.js";import"./OverlayArrow-dMygOw2S.js";import"./useResizeObserver-D9hey7So.js";import"./Collection-CjiqYly9.js";import"./index-Bh9qVIDQ.js";import"./Separator-BnI024oJ.js";import"./SelectionManager-CEP2HlMb.js";import"./useEvent-CQ30ytXp.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CkLwrZ6Q.js";import"./ListKeyboardDelegate-DwqMwEwM.js";import"./PressResponder-UUr-3_GE.js";import"./useLocalizedStringFormatter-D5l-TwjB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-WlxCYmXk.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Bw4oGsQc.js";import"./createLucideIcon-GgkdFjqM.js";import"./useLocalizedStringFormatter-DuJA0Avn.js";import"./Heading-DZXk2wov.js";import"./info-CTHGNhYd.js";import"./Popover-B4kDvICb.js";import"./check-CWS-4W0B.js";import"./useToggleState-eBpL6zIs.js";import"./TextFieldBase-DPADon4O.js";import"./Input-C9osUnDc.js";import"./useTextField-BravI5cu.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BpWFYBto.js";import"./DragAndDrop-CJR4qLxB.js";import"./inertValue-BivDuDBS.js";import"./useListState-DHrMOs-w.js";import"./TagGroup-CGpHT_wk.js";import"./useHighlightSelectionDescription-D0t-MTA-.js";import"./useUpdateEffect-Cz9JwBnr.js";import"./useHasTabbableChild-lknl8aey.js";import"./chevron-down-K9aEL-oF.js";import"./Virtualizer-DkHxObJa.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

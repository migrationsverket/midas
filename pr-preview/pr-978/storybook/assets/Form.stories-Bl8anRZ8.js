import{j as e}from"./iframe-CORtWEK2.js";import{$ as c}from"./Form-9GgLpfP_.js";import{G as d}from"./Grid-mg-e6TFA.js";import{G as i}from"./GridItem-DcFKKi4a.js";import{T as t}from"./TextField-D2LWCDOy.js";import{S as l}from"./Select-_q435wrj.js";import{B as a}from"./Button-By3RYRvn.js";import{R as x,a as u}from"./Radio-bxp2n5P1.js";import{C as I}from"./CheckboxGroup-xvgLw0tw.js";import{C as G}from"./Checkbox-D4r4abNG.js";import{L as p}from"./ListBoxItem-Bj2Ecqmq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CbLqdw8D.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Al7UTscT.js";import"./useFocusRing-DAHXm3rF.js";import"./index-_3IIZhOl.js";import"./index-ghFCsy_t.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DC4qdlKV.js";import"./TextField-BHJB6nM1.js";import"./FieldError-CbdqWLzS.js";import"./Text-D9pn1aDa.js";import"./Text-qtQkisRI.js";import"./RSPContexts-b-sJlq1-.js";import"./Group-1TYyKL1P.js";import"./Input-FKvb-ptk.js";import"./Hidden-DFmh2KXq.js";import"./Button-BOa3LVx9.js";import"./useLabels-CrPPDWzT.js";import"./useButton-C8e2jiOG.js";import"./useTextField-C9xxxFyO.js";import"./useControlledState-CODWqK6W.js";import"./useField-CdCDgYvT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-lGEepuei.js";import"./Dialog-CuXwUcGP.js";import"./OverlayArrow-BZfrClPC.js";import"./useResizeObserver-BGoShnXN.js";import"./Collection-BapyGBue.js";import"./index-D6Yp1oVT.js";import"./Separator-DVOOWIvI.js";import"./SelectionManager-D7Qo189l.js";import"./useEvent-Bof3Tfds.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-S37nVxrw.js";import"./useDescription-CDy7eaqv.js";import"./ListKeyboardDelegate-CGQcVm9U.js";import"./PressResponder-B5CUCkZV.js";import"./useLocalizedStringFormatter-D5B9Cm5e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CBk8eoOm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bgzwemdr.js";import"./x-DYcLBvwH.js";import"./createLucideIcon-BjA-WVv0.js";import"./useLocalizedStringFormatter-1dyltKPK.js";import"./Heading-Cm3PwG0D.js";import"./info-Cm1PqeLv.js";import"./Popover-DNHdhSfu.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BHjPAKU_.js";import"./DragAndDrop-C13ri_VU.js";import"./inertValue-CKkYP7AI.js";import"./useListState-ChlUXRuB.js";import"./Tag-D6Yg3LTl.js";import"./useHighlightSelectionDescription-DKAvZJZt.js";import"./useUpdateEffect-DiWw984o.js";import"./useHasTabbableChild-CWgXVHjk.js";import"./chevron-down-zXrojoYa.js";import"./Button.module-Co5e5YHp.js";import"./check-DvK27O5W.js";import"./useToggleState-DBMWW6q4.js";import"./Virtualizer-BHVt4s3O.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

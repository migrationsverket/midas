import{j as e}from"./iframe-CvgTjsRI.js";import{$ as c}from"./Form-CRsJxvyn.js";import{G as d}from"./Grid-DQUSCUr9.js";import{G as i}from"./GridItem-CEt88jvF.js";import{a as x,R as u}from"./Radio-CCVyObZw.js";import{C as I}from"./CheckboxGroup-CVDljCTp.js";import{C as G}from"./Checkbox-DMEXqFf4.js";import{T as t}from"./TextField-Bv2okQra.js";import{S as l}from"./Select-Ct2CH527.js";import{L as p}from"./ListBoxItem-B2Aq71Wi.js";import{B as a}from"./Button-CIHCm98a.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DsGHCuDD.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DdFzRzUV.js";import"./useFocusRing-Bf69ssZP.js";import"./index-BUwV2pti.js";import"./index-CCCX_Q-4.js";import"./clsx-Ciqy0D92.js";import"./Group-P27c7rnH.js";import"./FieldError-BQ0145L6.js";import"./Text-Bxgne8zr.js";import"./Text-CJZcBszR.js";import"./Button-5hgjL52o.js";import"./Hidden-Bz8_ARKx.js";import"./useLabels-B-EK2xcM.js";import"./useButton-DTqgbWNm.js";import"./SelectionIndicator-Dk_tpTT1.js";import"./useField-CoGIDQmT.js";import"./VisuallyHidden-DnWZa0YB.js";import"./useControlledState-DEiVg5eh.js";import"./Label-kuHl6gIU.js";import"./Dialog-JjSsiJTI.js";import"./RSPContexts-B-4MhJIC.js";import"./OverlayArrow-ckeNUSO8.js";import"./useResizeObserver-Cfj_2WY9.js";import"./Collection-Igz2z9uk.js";import"./index-C1zWBa74.js";import"./Separator-BSuRY4C-.js";import"./SelectionManager-D4VH4Dg8.js";import"./useEvent-ChWISaFS.js";import"./scrollIntoView-DKPA2TnM.js";import"./useDescription-QrPMwBKV.js";import"./ListKeyboardDelegate-BqROKGdH.js";import"./PressResponder-DqQprbw6.js";import"./useLocalizedStringFormatter-CrfJ-HgW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmcOuIM-.js";import"./getScrollParent-3h6gjZ9W.js";import"./x-CVjv4lq5.js";import"./createLucideIcon-Be0qHJux.js";import"./useLocalizedStringFormatter-COXV7AZN.js";import"./Heading-D5PrjMzm.js";import"./info-BfzZRU5S.js";import"./Popover-DzQZFBBD.js";import"./check-CsQeLH5G.js";import"./useToggleState-Bd11w3nk.js";import"./TextFieldBase-DlB7shw9.js";import"./Input-1w4IwmDe.js";import"./useTextField-_v63b735.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DgIyzMlY.js";import"./DragAndDrop-DrmfMM66.js";import"./inertValue-QOYnnCJV.js";import"./useListState-Z3Cil99r.js";import"./TagGroup-BSmA8o1g.js";import"./useHighlightSelectionDescription-zIX2uNNG.js";import"./useUpdateEffect-DWWc9gwe.js";import"./useHasTabbableChild-DJGC6KWo.js";import"./chevron-down-8gDZyHnd.js";import"./Virtualizer-B1a1w1YV.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

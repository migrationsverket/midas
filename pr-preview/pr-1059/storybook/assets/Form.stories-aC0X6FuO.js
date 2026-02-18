import{j as e}from"./iframe-C5a1BioU.js";import{$ as c}from"./Form-D6YdVmID.js";import{G as d}from"./Grid-CqimOXhN.js";import{G as i}from"./GridItem-C17SjUO3.js";import{a as x,R as u}from"./Radio-BmKRd-Xe.js";import{C as I}from"./CheckboxGroup-CifmkBpV.js";import{C as G}from"./Checkbox-8IA93_Sp.js";import{T as t}from"./TextField-B9XX69zF.js";import{S as l}from"./Select-qA6LesLG.js";import{L as p}from"./ListBoxItem-CATN9Tge.js";import{B as a}from"./Button-BmzaM-yt.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BKKhqGgZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-cZ2U5Xpk.js";import"./useFocusRing-CCvBuHoi.js";import"./index-DJjxifz8.js";import"./index-Cd0yh21x.js";import"./clsx-Ciqy0D92.js";import"./Group-CqhSNf3u.js";import"./FieldError-BHjSBbDT.js";import"./Text-Dsf7XnBX.js";import"./Text-CBM72llQ.js";import"./Button-BcpwI67Q.js";import"./Hidden-BkRTM2tY.js";import"./useLabels-aRHkw2YO.js";import"./useButton-DQmD9itb.js";import"./SelectionIndicator-DEZMMIsz.js";import"./useField-CmizDYFo.js";import"./VisuallyHidden-D-CrKNJu.js";import"./useControlledState-Dc-egfuk.js";import"./Label-C7kvwi34.js";import"./Dialog-Cqc9Ac0d.js";import"./RSPContexts-Z4ebeqL_.js";import"./OverlayArrow-KY3NB0gh.js";import"./useResizeObserver-DIa6rcSq.js";import"./Collection-CLv5EMAY.js";import"./index-c6WcVRzH.js";import"./Separator-D9aUuX5_.js";import"./SelectionManager-D_-IELdk.js";import"./useEvent-BljPOtQc.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DdZRWQoe.js";import"./ListKeyboardDelegate-C1xkpV8e.js";import"./PressResponder-E-FKMbJJ.js";import"./useLocalizedStringFormatter-nY2oYBwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CSgJ3-WG.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CgGKRg4Y.js";import"./createLucideIcon-C3B2EhYD.js";import"./useLocalizedStringFormatter--NJZCpI7.js";import"./Heading-BWMBGDm5.js";import"./info-C9AVZRiE.js";import"./Popover-CqN5RK-E.js";import"./check-Bjg92RUd.js";import"./useToggleState-Czq2ljtr.js";import"./TextFieldBase-CWRrKx1M.js";import"./Input-DQciM4o6.js";import"./useTextField-DcbiXo2q.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C1o-MWPc.js";import"./DragAndDrop-g8UMYqLG.js";import"./inertValue-DcSU-Hou.js";import"./useListState-wkD5tZgt.js";import"./TagGroup-CnIaewx-.js";import"./useHighlightSelectionDescription-CkaFfIsD.js";import"./useUpdateEffect-Clqyan0-.js";import"./useHasTabbableChild-DsXrkynf.js";import"./chevron-down-9Ki3mVvg.js";import"./Virtualizer-5fvxVxop.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

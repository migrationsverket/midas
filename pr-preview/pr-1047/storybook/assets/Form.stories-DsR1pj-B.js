import{j as e}from"./iframe-DVQ0lchi.js";import{$ as c}from"./Form-D2lawrpE.js";import{G as d}from"./Grid-BZO4BClf.js";import{G as i}from"./GridItem-DQrSQBD7.js";import{a as x,R as u}from"./Radio-v48BVdRz.js";import{C as I}from"./CheckboxGroup-BVHvbiJB.js";import{C as G}from"./Checkbox-j3INMaTw.js";import{T as t}from"./TextField-CF1Qf1oC.js";import{S as l}from"./Select-DWIJqh_G.js";import{L as p}from"./ListBoxItem-C3FRvwfS.js";import{B as a}from"./Button-UCEzLs7l.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D9gSMjNq.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DsVKrsU7.js";import"./useFocusRing-BK_0R4Cd.js";import"./index-Cj7CZlN3.js";import"./index-BwU4zFag.js";import"./clsx-Ciqy0D92.js";import"./Group-CQqXr4U4.js";import"./FieldError-BZ5WZxgy.js";import"./Text-BT_jL1TS.js";import"./Text-CG8-q4rG.js";import"./Button-wRPSXeW1.js";import"./Hidden-CFa_YiSP.js";import"./useLabels-DHWU2EjP.js";import"./useButton-7QHFLhkI.js";import"./SelectionIndicator-B--YyAaZ.js";import"./useField-CAm7Tj1f.js";import"./VisuallyHidden-D9m3MBoK.js";import"./useControlledState-CVbkXYHz.js";import"./Label-C1nMF9tl.js";import"./Dialog-Dns8O4wX.js";import"./RSPContexts-qfClobBw.js";import"./OverlayArrow-wxDJs7DW.js";import"./useResizeObserver-CNC-T4O9.js";import"./Collection-BeXItj4l.js";import"./index-9ps3Ho_D.js";import"./Separator-Y48f79s-.js";import"./SelectionManager-DlhalhRG.js";import"./useEvent-B4aA5pHy.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BIgViSQ9.js";import"./ListKeyboardDelegate-DgB76bGG.js";import"./PressResponder-Dc_9NIP-.js";import"./useLocalizedStringFormatter-BgI6hB3-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CTzSbRK9.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BawT75ci.js";import"./createLucideIcon-C72qyWqC.js";import"./useLocalizedStringFormatter-DL9CCeFC.js";import"./Heading-F4cTSlGL.js";import"./info-C6bYHcwb.js";import"./Popover-CswrE1Dt.js";import"./check-BbVqbNbV.js";import"./useToggleState-B4M6JbKR.js";import"./TextFieldBase-BtIr73oG.js";import"./TextField-E4BffJMj.js";import"./Input-CttqmATG.js";import"./useTextField-DdEYnQrI.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BQTvHXEt.js";import"./DragAndDrop-5WWgQ_hZ.js";import"./inertValue-CGfmSB67.js";import"./useListState-CI_8rGGL.js";import"./Tag-DAabILuf.js";import"./useHighlightSelectionDescription-BreGgccg.js";import"./useUpdateEffect-Cq3QzAjP.js";import"./useHasTabbableChild-DQpNZYTo.js";import"./chevron-down-RpHni10x.js";import"./Virtualizer-o129FSWP.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
